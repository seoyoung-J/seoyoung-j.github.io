import { CaseSection, Paragraphs } from "@/components/project-detail/case-section";
import { DecisionBlock } from "@/components/project-detail/decision-block";
import { ExperimentTable } from "@/components/project-detail/experiment-table";
import { MetricsBlock } from "@/components/project-detail/metrics-block";
import { SimpleArrowList } from "@/components/project-detail/simple-arrow-list";
import type { Project } from "@/data/projects";

export function ProjectCaseStudy({ project }: { project: Project }) {
  const caseStudy = project.caseStudy;

  if (!caseStudy) {
    return null;
  }

  return (
    <div className="space-y-12">
      <CaseSection title="Overview">
        <Paragraphs items={caseStudy.overview} />
      </CaseSection>

      <CaseSection title="Problem">
        <Paragraphs items={caseStudy.problem} />
      </CaseSection>

      <CaseSection title="Constraints">
        <SimpleArrowList items={caseStudy.constraints} />
      </CaseSection>

      <CaseSection title="Approach">
        <Paragraphs items={caseStudy.approach} />
      </CaseSection>

      {caseStudy.decisions && caseStudy.decisions.length > 0 && (
        <CaseSection title="Key Decisions">
          <div className="space-y-4">
            {caseStudy.decisions.slice(0, 3).map((decision) => (
              <DecisionBlock key={decision.title} decision={decision} />
            ))}
          </div>
        </CaseSection>
      )}

      <CaseSection title="System Flow">
        <SimpleArrowList items={caseStudy.systemFlow} />
      </CaseSection>

      <CaseSection title="AI Modeling">
        <div className="space-y-5">
          <Paragraphs items={caseStudy.modeling?.description} />
          <ExperimentTable experiments={caseStudy.modeling?.experiments} />
        </div>
      </CaseSection>

      <CaseSection title="Service Integration">
        <SimpleArrowList items={caseStudy.serviceIntegration} />
      </CaseSection>

      <CaseSection title="Tech Stack">
        <SimpleArrowList items={caseStudy.techStack} columns />
      </CaseSection>

      <CaseSection title="Result & Impact">
        <div className="space-y-5">
          <MetricsBlock metrics={caseStudy.metrics} />
          <Paragraphs items={caseStudy.resultDescription} />
        </div>
      </CaseSection>

      {caseStudy.troubleshooting && caseStudy.troubleshooting.length > 0 && (
        <CaseSection title="Troubleshooting">
          <div className="space-y-8">
            {caseStudy.troubleshooting.map((item) => (
              <div key={item.title} className="space-y-3">
                <h3 className="text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-muted-foreground">
                  <span className="font-semibold text-foreground">Problem</span>{" "}
                  {item.problem}
                </p>
                <p className="text-sm leading-7 text-muted-foreground">
                  <span className="font-semibold text-foreground">Solution</span>{" "}
                  {item.solution}
                </p>
                <p className="text-sm leading-7 text-muted-foreground">
                  <span className="font-semibold text-foreground">Result</span>{" "}
                  {item.result}
                </p>
              </div>
            ))}
          </div>
        </CaseSection>
      )}

      <CaseSection title="Learnings">
        <SimpleArrowList items={caseStudy.learnings} />
      </CaseSection>

      <CaseSection title="Additional Context">
        <Paragraphs items={caseStudy.additionalContext} />
      </CaseSection>
    </div>
  );
}
