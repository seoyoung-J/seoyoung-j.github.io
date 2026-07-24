import { Paragraphs } from "@/components/project-detail/case-section";
import { ProjectCaseStudy } from "@/components/project-detail/project-case-study";
import { ProjectHeader } from "@/components/project-detail/project-header";
import { ProjectNavigation } from "@/components/project-detail/project-navigation";
import { SimpleArrowList } from "@/components/project-detail/simple-arrow-list";
import { getAdjacentProjects, getProject, projects } from "@/data/projects";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({
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
  const isFullCaseStudy = project.slug === "solar-panel";

  return (
    <main className="mx-auto w-full max-w-[800px] px-5 pb-32 pt-28 sm:px-8">
      <ProjectHeader project={project} />
      <div className="mt-10">
        {isFullCaseStudy ? (
          <ProjectCaseStudy project={project} />
        ) : (
          <BasicProjectDetail project={project} />
        )}
      </div>
      <div className="mt-14">
        <ProjectNavigation previous={previous} next={next} />
      </div>
    </main>
  );
}

function BasicProjectDetail({
  project,
}: {
  project: NonNullable<ReturnType<typeof getProject>>;
}) {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Summary
        </h2>
        <Paragraphs items={[project.summary, project.highlight]} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Tech Stack
        </h2>
        <SimpleArrowList items={project.techStack} columns />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Next
        </h2>
        <p className="text-sm leading-7 text-muted-foreground sm:text-base">
          상세 Case Study는 추후 실제 구현 내용과 성과를 추가할 예정입니다.
        </p>
      </section>
    </div>
  );
}
