import type { Project } from "@/data/projects";
import Link from "next/link";

export function ProjectNavigation({
  previous,
  next,
}: {
  previous?: Project;
  next?: Project;
}) {
  return (
    <nav className="border-t border-border pt-6">
      <div className="flex flex-col justify-between gap-6 sm:flex-row">
        {previous && (
          <Link
            href={`/projects/${previous.slug}`}
            className="group max-w-sm text-left"
          >
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              Previous
            </p>
            <p className="mt-1 text-sm font-medium transition-colors group-hover:text-[#5F73C6] dark:group-hover:text-[#8998D8]">
              {previous.title}
            </p>
          </Link>
        )}
        {next && (
          <Link
            href={`/projects/${next.slug}`}
            className="group max-w-sm text-left sm:text-right"
          >
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              Next
            </p>
            <p className="mt-1 text-sm font-medium transition-colors group-hover:text-[#5F73C6] dark:group-hover:text-[#8998D8]">
              {next.title}
            </p>
          </Link>
        )}
      </div>
    </nav>
  );
}
