import { ModeToggle } from "@/components/mode-toggle";
import { DATA } from "@/data/resume";
import Link from "next/link";

export default function TopNavbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-border/70 bg-background/90">
      <nav className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="shrink-0 text-xs font-semibold tracking-wide text-foreground sm:text-sm"
        >
          {DATA.name}
        </Link>
        <div className="flex min-w-0 items-center justify-end gap-1 overflow-x-auto whitespace-nowrap sm:gap-2">
          {DATA.navbar.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-1.5 py-1 text-[10px] font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-slate-600 dark:hover:text-slate-300 sm:px-3 sm:text-xs"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={DATA.contact.social.GitHub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md px-1.5 py-1 text-[10px] font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-slate-600 dark:hover:text-slate-300 sm:px-3 sm:text-xs"
          >
            GitHub
          </Link>
          <ModeToggle className="size-8 rounded-md text-muted-foreground hover:text-slate-600 dark:hover:text-slate-300" />
        </div>
      </nav>
    </header>
  );
}
