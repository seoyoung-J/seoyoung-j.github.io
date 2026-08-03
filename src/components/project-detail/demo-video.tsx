type DemoVideoProps = {
  src?: string;
  poster?: string;
  caption?: string;
};

export function DemoVideo({ src, poster, caption }: DemoVideoProps) {
  if (!src) {
    return null;
  }

  return (
    <figure className="not-prose space-y-3">
      <video
        src={src}
        poster={poster}
        controls
        playsInline
        preload="metadata"
        className="aspect-video w-full rounded-md border border-border bg-black"
      />
      {caption && (
        <figcaption className="text-sm leading-6 text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
