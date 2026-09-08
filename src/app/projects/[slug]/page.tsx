import { ProjectHeader } from "@/components/project-detail/project-header";
import { DemoVideo } from "@/components/project-detail/demo-video";
import { ProjectFigure } from "@/components/project-detail/project-figure";
import { ProjectHighlights } from "@/components/project-detail/project-highlights";
import { ProjectNavigation } from "@/components/project-detail/project-navigation";
import { ScrollToTopButton } from "@/components/scroll-to-top-button";
import { portfolioProjects, type ProjectDetail } from "@/data/projects";
import { mdxComponents } from "@/mdx-components";
import { MDXContent } from "@content-collections/mdx/react";
import { allProjects } from "content-collections";
import { notFound } from "next/navigation";

function isPublished(project: { published?: boolean }) {
  return project.published !== false;
}

function getSortedProjects() {
  const projectsBySlug = new Map(
    allProjects
      .filter((project) => isPublished(project))
      .map((project) => [project.slug, project as ProjectDetail])
  );

  return [...portfolioProjects]
    .sort((a, b) => a.order - b.order)
    .map((project) => projectsBySlug.get(project.slug))
    .filter((project): project is ProjectDetail => Boolean(project));
}

function getProject(slug: string) {
  const project = allProjects.find((project) => project.slug === slug) as
    | ProjectDetail
    | undefined;

  return project && isPublished(project) ? project : undefined;
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

const PROJECT_ARTICLE_CLASS =
  "prose project-mdx-content prose-zinc mt-8 max-w-none text-pretty font-sans leading-relaxed text-foreground/70 dark:prose-invert prose-headings:text-foreground prose-headings:tracking-tight prose-h2:mt-12 prose-h2:border-t prose-h2:border-border prose-h2:pt-10 prose-h2:text-xl prose-h2:font-semibold prose-h3:mt-8 prose-h3:text-lg prose-h3:font-semibold prose-h4:mt-5 prose-h4:text-base prose-h4:font-semibold prose-p:leading-7 prose-li:my-1 prose-li:leading-7 prose-strong:text-foreground prose-hr:my-10 prose-hr:border-border [&>h2:first-child]:mt-0 [&>h2:first-child]:border-t-0 [&>h2:first-child]:pt-0";

// Projects opted in to the tightened h3/h4/h5 hierarchy for long case studies.
const REFINED_TYPOGRAPHY_SLUGS = new Set(["pv-insight", "industrial-ai-platform", "car-damage-rag-assistant", "cutting-tool-life-prediction", "google-work-agent", "video-ad-detection-transform"]);

// Projects whose GitHub link should stay in the data but not render as a UI button.
const HIDE_GITHUB_LINK_SLUGS = new Set(["video-ad-detection-transform"]);

// Projects whose "최종 결과" card renders their demoVideo (with autoplay/loop) instead of
// the default result image, keeping the "최종 결과" heading rather than the "시연 영상" one.
const RESULT_VIDEO_CAPTIONS: Record<string, string> = {
  "video-ad-detection-transform":
    "YOLO11s와 SAM2로 광고 영역을 탐지·분할하고 원근 변환과 이미지 블렌딩을 적용한 영상 합성 결과",
};

export function generateStaticParams() {
  // Note: this site uses `output: "export"`, which requires every route to
  // be enumerated here — filtering unpublished slugs out causes a build
  // error ("missing param ... required with output: export"). Unpublished
  // projects are still listed so a static page is emitted for their URL,
  // but getProject() below makes that page render notFound().
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
  const highlights = project.highlights ?? [];
  const usesRefinedTypography = REFINED_TYPOGRAPHY_SLUGS.has(project.slug);
  const hasHighlights = highlights.length > 0;
  const headerProject = HIDE_GITHUB_LINK_SLUGS.has(project.slug)
    ? { ...project, githubUrl: undefined }
    : project;

  return (
    <main className="mx-auto w-full max-w-5xl px-5 pb-32 pt-28 sm:px-8">
      <ProjectHeader project={headerProject} />
      {hasHighlights ? (
        <div className="mt-10 mb-12 grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)]">
          {project.demoVideo && RESULT_VIDEO_CAPTIONS[project.slug] ? (
            <section className="min-w-0">
              <h2 className="text-base font-semibold tracking-tight text-foreground">
                최종 결과
              </h2>
              <div className="mt-4">
                <figure className="not-prose space-y-3">
                  <video
                    src={project.demoVideo}
                    autoPlay
                    muted
                    playsInline
                    controls
                    className="aspect-video w-full rounded-md border border-border bg-black"
                  />
                  <figcaption className="text-sm leading-6 text-muted-foreground">
                    {RESULT_VIDEO_CAPTIONS[project.slug]}
                  </figcaption>
                </figure>
              </div>
            </section>
          ) : project.demoVideo ? (
            <section className="min-w-0">
              <h2 className="text-base font-semibold tracking-tight text-foreground">
                시연 영상
              </h2>
              <div className="mt-4">
                <DemoVideo
                  src={project.demoVideo}
                  poster={project.coverImage || undefined}
                />
              </div>
            </section>
          ) : (
            project.resultImage && (
              <section className="min-w-0">
                <h2 className="text-base font-semibold tracking-tight text-foreground">
                  최종 결과
                </h2>
                <div className="mt-4">
                  <ProjectFigure
                    src={project.resultImage.src}
                    alt={project.resultImage.alt}
                    caption={project.resultImage.caption}
                    contain
                    aspectRatio="video"
                    background="white"
                    topPadding
                    captionAlign="center"
                  />
                </div>
              </section>
            )
          )}
          <section className="min-w-0">
            <h2 className="text-base font-semibold tracking-tight text-foreground">
              핵심 성과
            </h2>
            <div className="mt-4">
              <ProjectHighlights highlights={highlights} />
            </div>
          </section>
        </div>
      ) : (
        project.demoVideo && (
          <div className="mt-8">
            <DemoVideo
              src={project.demoVideo}
              poster={project.coverImage || undefined}
            />
          </div>
        )
      )}
      <article
        className={
          usesRefinedTypography
            ? `${PROJECT_ARTICLE_CLASS} project-mdx-refined`
            : PROJECT_ARTICLE_CLASS
        }
      >
        <MDXContent code={project.mdx} components={mdxComponents} />
      </article>
      <div className="mt-14 space-y-8">
        <ProjectNavigation previous={previous} next={next} />
      </div>
      <ScrollToTopButton />
    </main>
  );
}
