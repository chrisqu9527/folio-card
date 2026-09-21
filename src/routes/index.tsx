import { createFileRoute } from "@tanstack/react-router";
import { FolioFeed } from "@/components/folio-feed";
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
      <FolioFeed
        selectedId={p}
        onSelect={(id) => {
          void navigate({
            search: id ? { p: id } : {},
            replace: true,
            resetScroll: false,
          });
        }}
      />
    </TooltipProvider>
  );
}
