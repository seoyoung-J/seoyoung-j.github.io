type ProjectMetric = {
  label: string;
  value: string;
};

export function MetricsBlock({ metrics }: { metrics?: ProjectMetric[] }) {
  if (!metrics || metrics.length === 0) {
    return null;
  }

  return (
    <div className="rounded-md border border-border bg-zinc-50 dark:bg-muted/30">
      {metrics.map((metric, index) => (
        <div
          key={metric.label}
          className={index === 0 ? "p-5" : "border-t border-border p-5"}
        >
          <p className="text-lg font-semibold text-foreground">
            {metric.value}
          </p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            {metric.label}
          </p>
        </div>
      ))}
    </div>
  );
}
