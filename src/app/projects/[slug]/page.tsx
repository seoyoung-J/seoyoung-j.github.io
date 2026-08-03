import { ProjectHeader } from "@/components/project-detail/project-header";
import { DemoVideo } from "@/components/project-detail/demo-video";
import { ProjectNavigation } from "@/components/project-detail/project-navigation";
import { ScrollToTopButton } from "@/components/scroll-to-top-button";
import { portfolioProjects, type ProjectDetail } from "@/data/projects";
import { mdxComponents } from "@/mdx-components";
import { MDXContent } from "@content-collections/mdx/react";
import { allProjects } from "content-collections";
import { notFound } from "next/navigation";

function getSortedProjects() {
  const projectsBySlug = new Map(
    allProjects.map((project) => [project.slug, project as ProjectDetail])
  );

  return [...portfolioProjects]
    .sort((a, b) => a.order - b.order)
    .map((project) => projectsBySlug.get(project.slug))
    .filter((project): project is ProjectDetail => Boolean(project));
}

function getProject(slug: string) {
  return allProjects.find((project) => project.slug === slug) as
    | ProjectDetail
    | undefined;
}

function getAdjacentProjects(slug: string) {
  const projects = getSortedProjects();
  const currentIndex = projects.findIndex((project) => project.slug === slug);

  if (currentIndex < 0) {
    return { previous: undefined, next: undefined };
  }

  const previousIndex = (currentIndex - 1 + projects.length) % projects.length;
  const nextIndex = (currentIndex + 1) % projects.length;

  return {
    previous: projects[previousIndex],
    next: projects[nextIndex],
  };
}

export function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const { previous, next } = getAdjacentProjects(project.slug);

  return (
    <main className="mx-auto w-full max-w-5xl px-5 pb-32 pt-28 sm:px-8">
      <ProjectHeader project={project} />
      {project.demoVideo && (
        <div className="mt-8">
          <DemoVideo
            src={project.demoVideo}
            poster={project.coverImage || undefined}
          />
        </div>
      )}
      <article className="prose project-mdx-content prose-zinc mt-8 max-w-none text-pretty font-sans leading-relaxed text-foreground/70 dark:prose-invert prose-headings:text-foreground prose-headings:tracking-tight prose-h2:mt-12 prose-h2:border-t prose-h2:border-border prose-h2:pt-10 prose-h2:text-xl prose-h2:font-semibold prose-h3:mt-8 prose-h3:text-lg prose-h3:font-semibold prose-h4:mt-5 prose-h4:text-base prose-h4:font-semibold prose-p:leading-7 prose-li:my-1 prose-li:leading-7 prose-strong:text-foreground prose-hr:my-10 prose-hr:border-border [&>h2:first-child]:mt-0 [&>h2:first-child]:border-t-0 [&>h2:first-child]:pt-0">
        <MDXContent code={project.mdx} components={mdxComponents} />
      </article>
      <div className="mt-14 space-y-8">
        <ProjectNavigation previous={previous} next={next} />
      </div>
      <ScrollToTopButton />
    </main>
  );
}
