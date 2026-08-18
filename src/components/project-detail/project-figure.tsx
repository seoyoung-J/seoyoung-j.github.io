/* eslint-disable @next/next/no-img-element */

import { cn } from "@/lib/utils";

type ProjectFigureProps = {
  src?: string;
  alt: string;
  caption?: string;
  contain?: boolean;
  aspectRatio?: "video";
  background?: "muted" | "white";
  topPadding?: boolean;
  captionAlign?: "center";
};

export function ProjectFigure({
  src,
  alt,
  caption,
  contain = false,
  aspectRatio,
  background = "muted",
  topPadding = false,
  captionAlign,
}: ProjectFigureProps) {
  if (!src) {
    return null;
  }

  return (
    <figure className="not-prose space-y-3">
      <div
        className={cn(
          "overflow-hidden rounded-md border border-border",
          background === "white" ? "bg-white" : "bg-zinc-50 dark:bg-muted/30",
          aspectRatio === "video" && "aspect-video",
          topPadding && "pt-3"
        )}
      >
        <img
          src={src}
          alt={alt}
          className={cn(
            aspectRatio === "video" ? "h-full w-full" : "h-auto w-full",
            contain ? "object-contain" : "object-cover"
          )}
        />
      </div>
      {caption && (
        <figcaption
          className={cn(
            "text-sm leading-6 text-muted-foreground",
            captionAlign === "center" && "text-center"
          )}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
