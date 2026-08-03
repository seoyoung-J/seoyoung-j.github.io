import { Button } from "@/components/ui/button";
import type { ProjectDetail } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export function ProjectLinks({ project }: { project: ProjectDetail }) {
  const links = [
    project.githubUrl
      ? {
          label: "GitHub",
          href: project.githubUrl,
        }
      : null,
    project.demoUrl
      ? {
          label: "Demo",
          href: project.demoUrl,
        }
      : null,
  ].filter((link): link is { label: string; href: string } => Boolean(link));

  if (links.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-border pt-8">
      <h2 className="text-base font-semibold text-foreground">
        Project Links
      </h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {links.map((link) => (
          <Button key={link.href} asChild variant="outline" size="sm">
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
              <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
          </Button>
        ))}
      </div>
    </section>
  );
}
