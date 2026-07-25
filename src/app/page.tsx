import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { allProjects } from "content-collections";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

function SkillBadge({ skill }: { skill: string }) {
  return (
    <span className="inline-flex h-8 shrink-0 items-center whitespace-nowrap rounded-full border border-border bg-card px-3 text-sm font-medium text-zinc-600 transition-colors hover:border-[#5F73C6]/45 hover:text-zinc-800 dark:bg-card dark:text-zinc-300 dark:hover:border-[#8998D8]/50 dark:hover:text-zinc-100">
      {skill}
    </span>
  );
}

function SectionTitle({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="text-xs font-semibold text-[#5F73C6] dark:text-[#8998D8]">
        {number}
      </span>
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
  );
}

export default function Page() {
  const projects = [...allProjects]
    .filter((project) => project.showOnHome)
    .sort((a, b) => a.order - b.order);

  return (
    <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-5 pb-32 pt-14 sm:gap-20 sm:px-6 lg:gap-24 lg:px-8">
      <section
        id="home"
        className="relative z-10 scroll-mt-24 pt-16 sm:pt-20 md:pt-24 lg:pt-24"
      >
        <div className="max-w-3xl">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <h1 className="max-w-3xl text-balance text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[0.98] tracking-tight text-zinc-900 dark:text-zinc-50">
              SEOYOUNG JO
            </h1>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <h2 className="mt-6 max-w-3xl text-balance text-[clamp(1.35rem,3vw,2.25rem)] font-semibold leading-[1.2] text-zinc-800 dark:text-zinc-100">
              모델을 실험하고 서비스 흐름까지 구현하는
              <br />
              AI 엔지니어 조서영입니다.
            </h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="mt-9 flex flex-wrap items-center gap-3 md:mt-10">
              <Button asChild className="group h-11 rounded-full px-5">
                <Link href="#projects">
                  View Projects
                  <ArrowUpRight
                    className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="group h-11 rounded-full px-5"
              >
                <Link
                  href={DATA.contact.social.GitHub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                  <ArrowUpRight
                    className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </Link>
              </Button>
            </div>
          </BlurFade>
        </div>

        <div
          id="about"
          className="scroll-mt-24 pt-20 sm:pt-24 md:pt-24"
        >
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div>
              <SectionTitle number="01" title="About" />
              <p className="w-full max-w-5xl whitespace-pre-line text-pretty text-sm leading-7 text-muted-foreground sm:text-base sm:leading-7">
                {DATA.about}
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="projects" className="relative z-10 scroll-mt-24">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div className="flex flex-col gap-9">
            <div>
              <SectionTitle number="02" title="Projects" />
              <p className="w-full max-w-none text-pretty text-sm leading-7 text-muted-foreground sm:text-base sm:leading-7">
                문제를 정의하고 제약 조건을 검토한 뒤 모델과 서비스 구조를 선택한 과정을 정리했습니다.
                각 프로젝트에는 실험 과정, 기술적 의사결정, 문제 해결 과정과 결과를 담았습니다.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 min-[520px]:grid-cols-2 min-[960px]:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  title={project.title}
                  period={project.period}
                  summary={project.summary}
                  highlight={project.highlight}
                  techStack={project.techStack}
                  image={project.image}
                  href={project.href}
                  links={[
                    ...(project.githubUrl
                      ? [
                          {
                            icon: <ArrowUpRight className="size-3" />,
                            type: "GitHub",
                            href: project.githubUrl,
                          },
                        ]
                      : []),
                    ...(project.demoUrl
                      ? [
                          {
                            icon: <ArrowUpRight className="size-3" />,
                            type: "Demo",
                            href: project.demoUrl,
                          },
                        ]
                      : []),
                  ]}
                />
              ))}
            </div>
          </div>
        </BlurFade>
      </section>

      <section id="skills" className="relative z-10 scroll-mt-24">
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <div className="max-w-none">
            <SectionTitle number="03" title="Skills" />
            <div className="space-y-5">
              {DATA.skills.map((group) => (
                <div
                  key={group.title}
                  className="grid gap-3 sm:grid-cols-[180px_1fr]"
                >
                  <h3 className="text-sm font-semibold text-foreground">
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 lg:flex-nowrap">
                    {group.skills.map((skill) => (
                      <SkillBadge key={skill} skill={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>
      </section>

      <footer className="relative z-10 flex flex-col items-start justify-between gap-3 border-t border-border py-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
        <p>© 2026 Seoyoung Jo</p>
        <Link
          href={DATA.contact.social.GitHub.url}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-[#5F73C6] dark:hover:text-[#8998D8]"
        >
          GitHub
        </Link>
      </footer>
    </main>
  );
}
