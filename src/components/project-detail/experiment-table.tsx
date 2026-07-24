import type { ProjectExperiment } from "@/data/projects";

export function ExperimentTable({
  experiments,
}: {
  experiments?: ProjectExperiment[];
}) {
  if (!experiments || experiments.length === 0) {
    return null;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-border bg-zinc-50 text-left dark:bg-muted/30">
            <th className="px-3 py-2 font-semibold">Experiment</th>
            <th className="px-3 py-2 font-semibold">Condition</th>
            <th className="px-3 py-2 text-right font-semibold">
              Mask mAP50-95
            </th>
            <th className="px-3 py-2 font-semibold">Decision</th>
          </tr>
        </thead>
        <tbody>
          {experiments.map((experiment) => (
            <tr key={experiment.name} className="border-b border-border">
              <td className="px-3 py-3 font-medium">{experiment.name}</td>
              <td className="px-3 py-3 text-muted-foreground">
                {experiment.condition}
              </td>
              <td className="px-3 py-3 text-right tabular-nums text-muted-foreground">
                {experiment.result}
              </td>
              <td className="px-3 py-3 text-muted-foreground">
                {experiment.decision}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
