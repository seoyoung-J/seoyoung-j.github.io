import type { ProjectDetail } from "@/data/projects";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ProjectNavigation({
  previous,
  next,
}: {
  previous?: ProjectDetail;
  next?: ProjectDetail;
}) {
  return (
    <nav className="border-t border-border pt-6">
      <div className="grid gap-4 sm:grid-cols-2">
        {previous && (
          <Link
            href={`/projects/${previous.slug}`}
            className="flex min-h-24 flex-1 flex-col justify-between rounded-lg border border-border/70 bg-background p-4 text-left transition-colors hover:border-foreground/60"
          >
            <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <ArrowLeft className="size-3.5" aria-hidden />
              Previous
            </span>
            <span className="mt-4 text-sm font-medium leading-6 text-foreground break-words">
              {previous.title}
            </span>
          </Link>
        )}
        {next && (
          <Link
            href={`/projects/${next.slug}`}
            className="flex min-h-24 flex-1 flex-col justify-between rounded-lg border border-border/70 bg-background p-4 text-left transition-colors hover:border-foreground/60 sm:text-right"
          >
            <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground sm:justify-end">
              Next
              <ArrowRight className="size-3.5" aria-hidden />
            </span>
            <span className="mt-4 text-sm font-medium leading-6 text-foreground break-words">
              {next.title}
            </span>
          </Link>
        )}
      </div>
    </nav>
  );
}
