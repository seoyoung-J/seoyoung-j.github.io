import type { Project } from "@/data/projects";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

export function ProjectHeader({ project }: { project: Project }) {
  const metadata = [
    project.role,
    project.period,
    project.teamSize,
    project.projectType,
  ].filter(Boolean);

  return (
    <header className="border-b border-border pb-8">
      <Link
        href="/#projects"
        className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-[#5F73C6] dark:hover:text-[#8998D8]"
      >
        <ArrowLeft
          className="size-4 transition-transform group-hover:-translate-x-0.5"
          aria-hidden
        />
        Back to projects
      </Link>
      <div className="mt-8">
        <span className="rounded-full bg-[#5F73C6]/10 px-3 py-1 text-xs font-medium text-[#5F73C6] dark:bg-[#8998D8]/12 dark:text-[#8998D8]">
          {project.status}
        </span>
      </div>
      <h1 className="mt-5 text-balance text-3xl font-semibold leading-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
        {project.title}
      </h1>
      <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm leading-7 text-zinc-500 dark:text-zinc-400 sm:text-base">
        {metadata.map((item, index) => (
          <Fragment key={`${item}-${index}`}>
            {index > 0 && (
              <span aria-hidden="true" className="text-muted-foreground">
                {"\u00B7"}
              </span>
            )}
            <span>{item}</span>
          </Fragment>
        ))}
      </div>
      <p className="mt-6 text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
        {project.summary}
      </p>
    </header>
  );
}
