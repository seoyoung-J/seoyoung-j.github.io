import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { ProjectDetail } from "@/data/projects";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

export function ProjectHeader({ project }: { project: ProjectDetail }) {
  const metadata = [
    project.dates,
    project.projectType,
  ].filter((item): item is string => Boolean(item));

  const links = [
    project.githubUrl
      ? {
          label: "View GitHub",
          href: project.githubUrl,
          isPrimary: true,
        }
      : null,
    project.demoUrl
      ? {
          label: "Demo",
          href: project.demoUrl,
        }
      : null,
    project.presentationUrl
      ? {
          label: "발표 자료",
          href: project.presentationUrl,
        }
      : null,
  ].filter(
    (link): link is { label: string; href: string; isPrimary?: boolean } =>
      Boolean(link)
  );

  return (
    <header className="border-b border-border pb-8">
      <Link
        href="/#projects"
        className="inline-flex h-8 items-center gap-1.5 rounded-md border border-border/60 bg-background px-3 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground/40 hover:bg-background hover:text-foreground"
      >
        <ArrowLeft
          className="size-3.5"
          aria-hidden
        />
        Back to projects
      </Link>
      <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm leading-6 text-muted-foreground">
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
      <h1 className="mt-4 break-keep text-3xl font-semibold leading-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
        {project.title}
      </h1>
      <p className="mt-6 text-pretty text-base leading-8 text-foreground/70 sm:text-lg">
        {project.summary}
      </p>
      {project.technologies.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.technologies.map((technology) => (
            <Badge
              key={technology}
              variant="outline"
              className="rounded-full border-border bg-transparent px-2.5 py-1 text-[13px] font-medium text-muted-foreground"
            >
              {technology}
            </Badge>
          ))}
        </div>
      )}
      {links.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {links.map((link) => (
            <Button
              key={link.href}
              asChild
              variant={link.isPrimary ? "ghost" : "outline"}
              size="sm"
              className={
                link.isPrimary
                  ? "h-11 rounded-full bg-foreground px-6 text-sm font-medium text-background hover:bg-foreground/85 hover:text-background"
                  : undefined
              }
            >
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
                <ArrowUpRight
                  className={link.isPrimary ? "size-4" : "size-3.5"}
                  aria-hidden
                />
              </a>
            </Button>
          ))}
        </div>
      )}
    </header>
  );
}
