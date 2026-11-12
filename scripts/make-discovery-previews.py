"""Regenerate small gallery previews; originals and attributed prompts stay untouched.

Requires Pillow: python scripts/make-discovery-previews.py
"""
import json
import re
from pathlib import Path
from PIL import Image, ImageOps

root = Path(__file__).resolve().parent.parent
data = json.loads((root / 'skills/folio-style/data/prompts.json').read_text(encoding='utf-8'))
kits = (root / 'src/lib/style-kits.ts').read_text(encoding='utf-8')
numbers = {'036', '604', *re.findall(r'sources:\s*\["(\d+)"', kits)}
target = root / 'public/discovery-previews'
target.mkdir(parents=True, exist_ok=True)
manifest = {}
for prompt in data['prompts']:
    if prompt['no'] not in numbers:
        continue
    cover = prompt['covers'][0]
    assert cover.startswith('/covers/') and '..' not in cover
    with Image.open(root / 'public' / cover.lstrip('/')) as image:
        image = ImageOps.exif_transpose(image).convert('RGB')
        image.thumbnail((800, 900), Image.Resampling.LANCZOS)
        name = prompt['no'] + '.webp'
        image.save(target / name, 'WEBP', quality=82, method=6)
    manifest[prompt['no']] = {'source': cover, 'preview': '/discovery-previews/' + name}
(root / 'src/data/discovery-previews.json').write_text(json.dumps(manifest, indent=2) + '\n', encoding='utf-8')
print(json.dumps({'previews': len(manifest), 'bytes': sum(p.stat().st_size for p in target.glob('*.webp'))}))
