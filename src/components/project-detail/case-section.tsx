import type { ReactNode } from "react";

type CaseSectionProps = {
  title: string;
  children: ReactNode;
};

export function CaseSection({ title, children }: CaseSectionProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        {title}
      </h2>
      {children}
    </section>
  );
}

export function Paragraphs({ items }: { items?: string[] }) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="space-y-3 text-sm leading-7 text-foreground/70 sm:text-base">
      {items.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}
