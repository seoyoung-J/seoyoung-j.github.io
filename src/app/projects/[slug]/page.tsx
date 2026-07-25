import { ProjectHeader } from "@/components/project-detail/project-header";
import { ProjectNavigation } from "@/components/project-detail/project-navigation";
import { mdxComponents } from "@/mdx-components";
import { MDXContent } from "@content-collections/mdx/react";
import { allProjects } from "content-collections";
import { notFound } from "next/navigation";

function getSortedProjects() {
  return [...allProjects].sort((a, b) => a.order - b.order);
}

function getProject(slug: string) {
  return allProjects.find((project) => project.slug === slug);
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
    <main className="mx-auto w-full max-w-[800px] px-5 pb-32 pt-28 sm:px-8">
      <ProjectHeader project={project} />
      <article className="mt-10">
        <MDXContent code={project.mdx} components={mdxComponents} />
      </article>
      <div className="mt-14">
        <ProjectNavigation previous={previous} next={next} />
      </div>
    </main>
  );
}
