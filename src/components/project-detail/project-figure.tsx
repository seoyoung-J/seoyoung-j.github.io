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
  /**
   * Adds uniform padding around the media inside the frame. The frame bleeds
   * outward by the same amount (negative margin) so the media's own
   * rendered width is unaffected. Opt-in only; omitting this prop keeps the
   * existing edge-to-edge layout unchanged.
   */
  mediaPadding?: "sm";
  /**
   * Set to "none" to render the media without the surrounding border/
   * background/rounded frame — just the image and its caption. Opt-in
   * only; omitting this prop keeps the existing framed layout unchanged.
   */
  frame?: "none";
  /**
   * Crops the media to this CSS aspect-ratio (e.g. "2172 / 392") via
   * object-fit: cover, instead of the natural h-auto sizing. Use only when
   * the source file itself contains excess empty margin that should be
   * visually cropped without touching the source file — cover only removes
   * pixels outside this ratio, it never distorts what remains. Opt-in only;
   * omitting this prop keeps the existing natural-ratio layout unchanged.
   */
  cropAspectRatio?: string;
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
  mediaPadding,
  frame,
  cropAspectRatio,
}: ProjectFigureProps) {
  if (!src) {
    return null;
  }

  const hasFrame = frame !== "none";
  const isCropped = Boolean(cropAspectRatio);

  return (
    <figure className="not-prose space-y-3">
      <div
        className={cn(
          "overflow-hidden",
          hasFrame && "rounded-md border border-border",
          hasFrame &&
            (background === "white" ? "bg-white" : "bg-zinc-50 dark:bg-muted/30"),
          hasFrame && aspectRatio === "video" && "aspect-video",
          hasFrame && topPadding && "pt-3",
          hasFrame && mediaPadding === "sm" && "-mx-4 p-4"
        )}
        style={isCropped ? { aspectRatio: cropAspectRatio } : undefined}
      >
        <img
          src={src}
          alt={alt}
          className={cn(
            aspectRatio === "video" || isCropped ? "h-full w-full" : "h-auto w-full",
            contain && !isCropped ? "object-contain" : "object-cover"
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
