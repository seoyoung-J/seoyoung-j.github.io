import { CodeBlock } from "@/components/mdx/code-block";
import { MediaContainer } from "@/components/mdx/media-container";
import { CaseSection, Paragraphs } from "@/components/project-detail/case-section";
import { DemoVideo } from "@/components/project-detail/demo-video";
import { ProjectFigure } from "@/components/project-detail/project-figure";
import { ProjectFlow } from "@/components/project-detail/project-flow";
import { SimpleArrowList } from "@/components/project-detail/simple-arrow-list";
import type { ComponentProps } from "react";

type CodeProps = ComponentProps<"code"> & {
  "data-language"?: string;
};

function ProjectBody(props: ComponentProps<"div">) {
  return <div {...props} />;
}

export const mdxComponents = {
  CaseSection,
  DemoVideo,
  MediaContainer,
  Paragraphs,
  ProjectFigure,
  ProjectFlow,
  ProjectBody,
  SimpleArrowList,
  pre: (props: ComponentProps<"pre">) => <CodeBlock {...props} />,
  hr: (props: ComponentProps<"hr">) => (
    <div className="my-10 flex w-full items-center" {...props}>
      <div
        className="flex-1 h-px bg-border"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        }}
      />
    </div>
  ),
  table: (props: ComponentProps<"table">) => (
  <div className="my-6 w-full max-w-4xl overflow-x-auto rounded-xl border border-border">
    <table
      className="m-0! w-full table-auto border-separate border-spacing-0"
      {...props}
    />
  </div>
),
  code: ({ children, ...props }: CodeProps) => {
    if (props["data-language"]) {
      return <code {...props}>{children}</code>;
    }
    return (
      <code
        className="px-1.5 py-0.5 rounded-md bg-muted/60 dark:bg-muted/40 text-sm font-mono text-foreground/90"
        {...props}
      >
        {children}
      </code>
    );
  },
} as const;
