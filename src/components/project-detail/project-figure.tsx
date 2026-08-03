/* eslint-disable @next/next/no-img-element */

import { cn } from "@/lib/utils";

type ProjectFigureProps = {
  src?: string;
  alt: string;
  caption?: string;
  contain?: boolean;
};

export function ProjectFigure({
  src,
  alt,
  caption,
  contain = false,
}: ProjectFigureProps) {
  if (!src) {
    return null;
  }

  return (
    <figure className="not-prose space-y-3">
      <div className="overflow-hidden rounded-md border border-border bg-zinc-50 dark:bg-muted/30">
        <img
          src={src}
          alt={alt}
          className={cn(
            "h-auto w-full",
            contain ? "object-contain" : "object-cover"
          )}
        />
      </div>
      {caption && (
        <figcaption className="text-sm leading-6 text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
