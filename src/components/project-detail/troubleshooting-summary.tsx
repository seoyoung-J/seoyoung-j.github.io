import { CircleCheck, Info } from "lucide-react";
import type { ComponentType, ReactNode } from "react";

function SummaryCard({
  icon: Icon,
  iconClassName,
  label,
  children,
}: {
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  iconClassName: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="min-w-0 rounded-lg border border-border bg-zinc-50 p-4 dark:bg-muted/30">
      <div className="flex items-center gap-2">
        <Icon className={`size-4 shrink-0 ${iconClassName}`} aria-hidden />
        <span className="text-sm font-semibold text-foreground sm:text-base">
          {label}
        </span>
      </div>
      <div className="mt-3 space-y-3 text-sm leading-6 text-foreground/70 sm:text-base sm:leading-7 [&_strong]:font-semibold [&_strong]:text-foreground">
        {children}
      </div>
    </div>
  );
}

export function TroubleshootingSummary({
  problem,
  result,
}: {
  problem: ReactNode;
  result: ReactNode;
}) {
  return (
    <div className="not-prose mt-6 grid items-start gap-4 sm:grid-cols-2">
      <SummaryCard
        icon={Info}
        iconClassName="text-blue-500 dark:text-blue-400"
        label="문제 상황"
      >
        {problem}
      </SummaryCard>
      <SummaryCard
        icon={CircleCheck}
        iconClassName="text-green-600 dark:text-green-400"
        label="결과"
      >
        {result}
      </SummaryCard>
    </div>
  );
}
