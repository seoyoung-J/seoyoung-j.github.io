import { Fragment } from "react";

type FlowStep = {
  title: string;
  description?: string;
};

export function ProjectFlow({ steps }: { steps?: FlowStep[] }) {
  if (!steps || steps.length === 0) {
    return null;
  }

  return (
    <div className="not-prose mt-6 flex flex-col gap-2 lg:flex-row lg:items-stretch lg:gap-1.5">
      {steps.map((step, index) => (
        <Fragment key={step.title}>
          {index > 0 && (
            <span
              aria-hidden
              className="self-center text-sm leading-none text-muted-foreground"
            >
              <span className="lg:hidden">{"↓"}</span>
              <span className="hidden lg:inline">{"→"}</span>
            </span>
          )}
          <div className="rounded-lg border border-border bg-background px-4 py-3 text-center lg:min-w-0 lg:flex-1 lg:px-2.5">
            <p className="break-keep text-sm font-semibold leading-5 text-foreground">
              {step.title}
            </p>
            {step.description && (
              <p className="mt-1 break-keep text-xs leading-5 text-muted-foreground">
                {step.description}
              </p>
            )}
          </div>
        </Fragment>
      ))}
    </div>
  );
}
