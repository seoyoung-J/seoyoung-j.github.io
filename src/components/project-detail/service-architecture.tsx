import Image from "next/image";

type FlowStep = {
  title: string;
  description: string;
};

const flowSteps: FlowStep[] = [
  {
    title: "업무 요청",
    description: "자연어 업무 요청 입력",
  },
  {
    title: "요청·Context 구성",
    description: "Run 생성 · 상태 관리 · Context 조회",
  },
  {
    title: "Agent 분석·계획",
    description: "업무 분석 · 실행 계획",
  },
  {
    title: "정책·승인",
    description: "실행 가능성 검증 · 사용자 승인",
  },
  {
    title: "Tool 실행",
    description: "MCP 기반 외부 Tool 실행",
  },
  {
    title: "결과 검증",
    description: "외부 상태 재조회 · 결과 반환",
  },
];

export function ServiceArchitecture() {
  return (
    <div className="not-prose mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)]">
      <section className="min-w-0 lg:grid lg:h-full lg:grid-rows-[auto_1fr]">
        <div className="text-base font-semibold tracking-tight text-foreground">
          시스템 아키텍처
        </div>
        <div className="mt-4 overflow-hidden rounded-xl border border-border/70 bg-background p-1">
          <Image
            src="/projects/google-work-agent/system-architecture.png"
            alt="Google Work Agent 시스템 아키텍처"
            width={1718}
            height={916}
            className="block h-auto w-full object-contain"
            sizes="(min-width: 1024px) 59vw, 100vw"
          />
        </div>
      </section>

      <section className="min-w-0 lg:grid lg:h-full lg:grid-rows-[auto_1fr]">
        <div className="text-base font-semibold tracking-tight text-foreground">
          서비스 흐름
        </div>
        <div className="mt-4 flex rounded-xl border border-border/70 bg-background p-4">
          <ol
            aria-label="서비스 처리 단계"
            className="relative m-0 flex w-full list-none flex-col gap-5 p-0 before:absolute before:top-2.5 before:bottom-2.5 before:left-4 before:w-px before:bg-border before:content-[''] lg:h-full lg:justify-between lg:gap-0"
          >
            {flowSteps.map((step, index) => (
              <li
                key={step.title}
                className="relative grid min-w-0 grid-cols-[2rem_minmax(0,1fr)] items-baseline gap-2"
              >
                <span className="relative z-10 flex h-5 w-8 items-center justify-center bg-background font-semibold tabular-nums text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="m-0 flex min-w-0 items-baseline gap-2 leading-4 text-foreground">
                  <span className="shrink-0 whitespace-nowrap break-keep text-sm font-semibold leading-5 text-foreground">
                    {step.title}
                  </span>
                  <span className="min-w-0 break-keep text-xs leading-5 text-muted-foreground">
                    · {step.description}
                  </span>
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

    </div>
  );
}
