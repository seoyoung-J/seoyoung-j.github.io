import type { ReactNode } from "react";

type TroubleshootingStep = {
  title: ReactNode;
  items: ReactNode[];
};

export function TroubleshootingSteps({
  title = "해결 과정",
  steps,
}: {
  title?: string;
  steps?: TroubleshootingStep[];
}) {
  if (!steps || steps.length === 0) {
    return null;
  }

  return (
    <div className="not-prose mt-10 [&_strong]:font-semibold [&_strong]:text-foreground">
      <p className="text-base font-semibold leading-5 text-foreground">{title}</p>
      <ol
        aria-label={title}
        className="relative m-0 mt-6 flex list-none flex-col gap-6 p-0 before:absolute before:bottom-1 before:left-3.5 before:top-1 before:w-px before:bg-border before:content-['']"
      >
        {steps.map((step, index) => (
          <li key={index} className="relative pl-11">
            <span className="absolute left-0 top-0 z-10 flex size-7 items-center justify-center rounded-full border border-border bg-background text-xs font-semibold tabular-nums text-foreground">
              {index + 1}
            </span>
            <p className="pt-0.5 text-base font-semibold leading-5 text-foreground">
              {step.title}
            </p>
            <ul className="mt-5 list-disc space-y-1 pl-[26px]">
              {step.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="break-keep text-base leading-7 text-foreground/70"
                >
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
