import { createFileRoute } from "@tanstack/react-router";
import { CreatorsSection } from "@/components/creators-section";
import { Hero } from "@/components/hero";
import { PromptArchive } from "@/components/prompt-archive";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TooltipProvider } from "@/components/ui/tooltip";

type Search = {
  p?: string;
};

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    p: typeof search.p === "string" ? search.p : undefined,
  }),
  component: Home,
});

function Home() {
  const { p } = Route.useSearch();
  const navigate = Route.useNavigate();

  return (
    <TooltipProvider delayDuration={200}>
      <div id="top" className="min-h-screen">
        <SiteHeader />
        <main>
          <Hero />
          <PromptArchive
            selectedId={p}
            onSelect={(id) => {
              void navigate({
                search: id ? { p: id } : {},
                replace: true,
                resetScroll: false,
              });
            }}
          />
          <CreatorsSection />
        </main>
        <SiteFooter />
      </div>
    </TooltipProvider>
  );
}
