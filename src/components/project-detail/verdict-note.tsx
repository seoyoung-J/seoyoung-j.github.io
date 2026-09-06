import type { ReactNode } from "react";

export function VerdictNote({
  title,
  children,
  note,
}: {
  title: string;
  children: ReactNode;
  note?: ReactNode;
}) {
  return (
    <div className="not-prose mt-6">
      <div className="rounded-md border border-border bg-zinc-50 p-4 dark:bg-muted/30">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          {title}
        </p>
        <div className="text-sm leading-7 text-foreground/70 sm:text-base">
          {children}
        </div>
      </div>
      {note && (
        <p className="mt-2 text-xs leading-6 text-muted-foreground">{note}</p>
      )}
    </div>
  );
}
