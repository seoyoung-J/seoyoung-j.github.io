import { cn } from "@/lib/utils";

type DemoVideoProps = {
  src?: string;
  poster?: string;
  caption?: string;
  autoPlay?: boolean;
  muted?: boolean;
  /**
   * Center-aligns the caption under the video. Opt-in only; omitting this
   * prop keeps the existing left-aligned caption unchanged.
   */
  captionAlign?: "center";
};

export function DemoVideo({
  src,
  poster,
  caption,
  autoPlay = false,
  muted = false,
  captionAlign,
}: DemoVideoProps) {
  if (!src) {
    return null;
  }

  return (
    <figure className="not-prose space-y-3">
      <video
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        muted={muted}
        controls
        playsInline
        preload="metadata"
        className="aspect-video w-full rounded-md border border-border bg-black"
      />
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
