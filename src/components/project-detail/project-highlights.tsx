import type { ProjectHighlight } from "@/data/projects";

export function ProjectHighlights({
  highlights,
}: {
  highlights?: ProjectHighlight[];
}) {
  if (!highlights || highlights.length === 0) {
    return null;
  }

  return (
    <div className="space-y-1.5">
      {highlights.map((highlight, index) => (
        <div
          key={highlight.title}
          className="rounded-lg border border-border bg-background px-5 py-3"
        >
          <h3 className="flex gap-2.5 text-base font-semibold leading-6 text-foreground">
            <span className="tabular-nums text-muted-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="break-keep">{highlight.title}</span>
          </h3>
          <ul className="mt-1.5 space-y-1">
            {highlight.items.map((item) => (
              <li
                key={item}
                className="relative break-keep pl-4 text-sm leading-5 text-foreground/70 before:absolute before:left-0 before:top-[0.6em] before:size-1 before:rounded-full before:bg-muted-foreground/60"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
