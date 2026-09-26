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

export type UseId =
  | "trailer"
  | "game"
  | "ad"
  | "product"
  | "social"
  | "short"
  | "action"
  | "template";

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
  use?: UseId;
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
export type UseCase = { id: UseId; name: string; blurb: string };

export const folio = db as {
  version: number;
  count: number;
  note: string;
  categories: Category[];
  uses: UseCase[];
  prompts: FolioPrompt[];
};

export const categoryName = Object.fromEntries(
  folio.categories.map((c) => [c.id, c.name]),
) as Record<CategoryId, string>;

export const useName = Object.fromEntries(folio.uses.map((u) => [u.id, u.name])) as Record<UseId, string>;

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
  use: UseId | "all" = "all",
): FolioPrompt[] {
  const scene = medium === "video" ? use : "all";
  const exact = parseNo(query);
  if (exact && query.trim().length > 0 && !query.trim().includes(" ")) {
    const hit = byNo.get(exact);
    if (!hit) return [];
    if (hit.medium !== medium) return [];
    if (category !== "all" && hit.category !== category) return [];
    if (scene !== "all" && hit.use !== scene) return [];
    return [hit];
  }
  const q = query.trim().toLowerCase();
  return folio.prompts.filter((p) => {
    if (p.medium !== medium) return false;
    if (category !== "all" && p.category !== category) return false;
    if (scene !== "all" && p.use !== scene) return false;
    if (!q) return true;
    const hay = [
      p.no,
      p.title,
      p.style,
      p.kicker,
      p.excerpt,
      categoryName[p.category],
      p.use ? useName[p.use] : "",
      p.creator.name,
      p.creator.handle,
      ...p.tags,
    ]
      .join("\n")
      .toLowerCase();
    return hay.includes(q);
  });
}

export function countMedium(
  medium: Medium,
  category: CategoryId | "all" = "all",
  use: UseId | "all" = "all",
): number {
  const scene = medium === "video" ? use : "all";
  return folio.prompts.filter(
    (p) =>
      p.medium === medium &&
      (category === "all" || p.category === category) &&
      (scene === "all" || p.use === scene),
  ).length;
}
