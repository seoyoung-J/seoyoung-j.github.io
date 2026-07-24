/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";
import type React from "react";
import { useState } from "react";

interface Props {
  title: string;
  period?: string;
  summary?: string;
  highlight?: string;
  techStack?: readonly string[];
  image?: string;
  className?: string;
  href?: string;
  link?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  dates?: string;
  description?: string;
  tags?: readonly string[];
}

function ProjectImage({ src, alt }: { src?: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="flex aspect-video w-full items-center justify-center bg-muted text-xs text-muted-foreground">
        Preview pending
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="aspect-video w-full object-cover"
      onError={() => setImageError(true)}
    />
  );
}

export function ProjectCard({
  title,
  period,
  summary,
  highlight,
  techStack,
  image,
  className,
  href,
  video,
  links,
  dates,
  description,
  tags,
}: Props) {
  const displayPeriod = period ?? dates;
  const displaySummary = summary ?? description;
  const displayTechStack = techStack ?? tags ?? [];
  const cardClassName = cn(
    "flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-[#5F73C6]/50 dark:hover:border-[#8998D8]/45",
    href && "cursor-pointer",
    className
  );

  const content = (
    <>
      <div className="relative shrink-0">
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="aspect-video w-full object-cover"
          />
        ) : (
          <ProjectImage src={image} alt={title} />
        )}
        {links && links.length > 0 && (
          <div className="absolute right-2 top-2 flex flex-wrap gap-2">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Badge
                  className="flex items-center gap-1.5 bg-black text-xs text-white hover:bg-black/90"
                  variant="default"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <h3 className="line-clamp-2 min-h-12 text-base font-semibold leading-6">
          {title}
        </h3>
        {displayPeriod && (
          <time className="text-xs text-muted-foreground">{displayPeriod}</time>
        )}
        {displaySummary && (
          <p className="line-clamp-4 text-sm leading-6 text-muted-foreground">
            {displaySummary}
          </p>
        )}
        {highlight && (
          <p className="text-sm font-medium leading-6 text-foreground/85">
            {highlight}
          </p>
        )}
        {displayTechStack.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
            {displayTechStack.slice(0, 7).map((technology) => (
              <Badge
                key={technology}
                className="h-6 rounded-full border-border px-2 text-[11px] font-medium text-muted-foreground"
                variant="outline"
              >
                {technology}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cardClassName}>
        {content}
      </Link>
    );
  }

  return <article className={cardClassName}>{content}</article>;
}
