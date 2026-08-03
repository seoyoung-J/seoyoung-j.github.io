type ProjectDecision = {
  title: string;
  reasoning: string[];
  alternatives: string[];
};

export function DecisionBlock({ decision }: { decision: ProjectDecision }) {
  return (
    <div className="rounded-md border border-border bg-zinc-50 p-5 dark:bg-muted/30">
      <h3 className="text-base font-semibold text-foreground">
        {decision.title}
      </h3>
      <div className="mt-4 space-y-4 text-sm leading-7 text-foreground/70">
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Reasoning
          </p>
          <div className="space-y-2">
            {decision.reasoning.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Alternatives Considered
          </p>
          <ul className="space-y-1">
            {decision.alternatives.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-[#5F73C6] dark:text-[#8998D8]">
                  -&gt;
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
