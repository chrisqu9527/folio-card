import db from "@/data/prompts.json";

export type CategoryId =
  | "portrait"
  | "poster"
  | "system"
  | "eastern"
  | "cinema"
  | "story"
  | "object"
  | "craft";

export type Medium = "image" | "video";

export type FolioPrompt = {
  no: string;
  id: string;
  title: string;
  kicker: string;
  excerpt: string;
  style: string;
  category: CategoryId;
  tags: string[];
  medium: Medium;
  covers: string[];
  slots: string[];
  creator: { id: string; name: string; handle: string; url: string };
  sourceUrl: string;
  model?: string;
  notes?: string;
  date: string;
  prompt: string;
};

export type Category = { id: CategoryId; name: string; blurb: string };

export const folio = db as {
  version: number;
  count: number;
  note: string;
  categories: Category[];
  prompts: FolioPrompt[];
};

export const categoryName = Object.fromEntries(
  folio.categories.map((c) => [c.id, c.name]),
) as Record<CategoryId, string>;

const byNo = new Map(folio.prompts.map((p) => [p.no, p]));

export function parseNo(raw: string): string | null {
  const m = raw.trim().match(/^(?:#|no\.?|风格|编号)?\s*0*(\d{1,3})\s*号?$/i);
  if (!m) return null;
  const n = Number(m[1]);
  if (n < 1 || n > 999) return null;
  return String(n).padStart(3, "0");
}

export function promptByNo(no: string): FolioPrompt | undefined {
  return byNo.get(no);
}

export function filterPrompts(
  query: string,
  category: CategoryId | "all",
  medium: Medium,
): FolioPrompt[] {
  const exact = parseNo(query);
  if (exact && query.trim().length > 0 && !query.trim().includes(" ")) {
    const hit = byNo.get(exact);
    if (!hit) return [];
    if (hit.medium !== medium) return [];
    if (category !== "all" && hit.category !== category) return [];
    return [hit];
  }
  const q = query.trim().toLowerCase();
  return folio.prompts.filter((p) => {
    if (p.medium !== medium) return false;
    if (category !== "all" && p.category !== category) return false;
    if (!q) return true;
    const hay = [
      p.no,
      p.title,
      p.style,
      p.kicker,
      p.excerpt,
      categoryName[p.category],
      p.creator.name,
      p.creator.handle,
      ...p.tags,
    ]
      .join("\n")
      .toLowerCase();
    return hay.includes(q);
  });
}

export function countMedium(medium: Medium, category: CategoryId | "all" = "all"): number {
  return folio.prompts.filter(
    (p) => p.medium === medium && (category === "all" || p.category === category),
  ).length;
}
