import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export type TweetVideo = {
  url: string;
  poster?: string;
};

const cache = new Map<string, TweetVideo | null>();

export function tweetIdFromUrl(url: string) {
  const match = url.match(/status\/(\d+)/i);
  return match?.[1] ?? null;
}

type FxFormat = {
  url?: string;
  bitrate?: number;
  container?: string;
};

type FxVideo = {
  url?: string;
  thumbnail_url?: string;
  formats?: FxFormat[];
};

function pickMp4(video: FxVideo): string | null {
  const formats = (video.formats ?? []).filter(
    (item) => item.url && (item.container === "mp4" || item.url.includes(".mp4")),
  );
  const ranked = [...formats].sort((a, b) => (a.bitrate ?? 0) - (b.bitrate ?? 0));
  const sweet = ranked.find((item) => (item.bitrate ?? 0) >= 800_000 && (item.bitrate ?? 0) <= 3_200_000);
  return sweet?.url ?? ranked.at(-2)?.url ?? ranked.at(-1)?.url ?? video.url ?? null;
}

export const resolveTweetVideo = createServerFn({ method: "POST" })
  .validator(z.object({ tweetId: z.string().regex(/^\d{5,25}$/) }))
  .handler(async ({ data }): Promise<TweetVideo | null> => {
    if (cache.has(data.tweetId)) return cache.get(data.tweetId) ?? null;
    const endpoint = `https://api.fxtwitter.com/status/${data.tweetId}`;
    const response = await fetch(endpoint, {
      headers: { "user-agent": "FOLIO/1.0 (+https://x.com)" },
      signal: AbortSignal.timeout(12_000),
    });
    if (!response.ok) {
      cache.set(data.tweetId, null);
      return null;
    }
    const payload = (await response.json()) as {
      tweet?: { media?: { videos?: FxVideo[] } };
    };
    const video = payload.tweet?.media?.videos?.[0];
    const url = video ? pickMp4(video) : null;
    const result = url ? { url, poster: video?.thumbnail_url } : null;
    cache.set(data.tweetId, result);
    return result;
  });
