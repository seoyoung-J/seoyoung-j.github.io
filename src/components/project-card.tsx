/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { useState } from "react";

interface Props {
  title: string;
  image?: string;
  className?: string;
  href?: string;
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
      <div className="flex h-44 w-full items-center justify-center bg-muted text-sm text-muted-foreground sm:h-48">
        Preview pending
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="h-44 w-full object-cover sm:h-48"
      onError={() => setImageError(true)}
    />
  );
}

export function ProjectCard({
  title,
  image,
  className,
  href,
  links,
  dates,
  description,
  tags,
}: Props) {
  const displayTechStack = tags ?? [];
  const cardClassName = cn(
    "relative flex h-full flex-col overflow-hidden rounded-xl border border-border/70 bg-background transition-colors hover:border-foreground/60",
    href && "cursor-pointer",
    className
  );

  const content = (
    <>
      <div className="relative shrink-0">
        <ProjectImage src={image} alt={title} />
        {links && links.length > 0 && (
          <div className="absolute right-2 top-2 z-20 flex flex-wrap gap-1.5">
            {links.map((link, idx) => (
              <a
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Badge
                  className="flex h-6 items-center gap-1 border-border/70 bg-background/90 px-2 text-[11px] font-medium text-foreground/80 backdrop-blur hover:bg-background"
                  variant="outline"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </a>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <h3 className="flex-1 text-base font-semibold leading-6 text-foreground">
            {title}
          </h3>
          {href && (
            <ArrowUpRight
              className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground"
              aria-hidden
            />
          )}
        </div>
        {dates && (
          <time className="mt-2 text-sm leading-5 text-muted-foreground">
            {dates}
          </time>
        )}
        {description && (
          <p className="mt-4 text-sm leading-6 text-foreground/70">
            {description}
          </p>
        )}
        {displayTechStack.length > 0 && (
          <div className="mt-auto pt-7">
            <div className="flex min-h-[84px] flex-wrap content-start gap-1.5">
              {displayTechStack.slice(0, 7).map((technology) => (
                <Badge
                  key={technology}
                  className="h-6 w-fit rounded-full border-border/60 bg-background px-2 text-[11px] font-medium text-foreground hover:bg-background"
                  variant="outline"
                >
                  {technology}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <article className={cn("group", cardClassName)}>
        {content}
        <Link
          href={href}
          className="absolute inset-0 z-10"
          aria-label={`${title} project detail`}
        />
      </article>
    );
  }

  return <article className={cardClassName}>{content}</article>;
}
