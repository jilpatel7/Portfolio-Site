import Link from "next/link";
import { Plus } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { ProjectVisual } from "@/components/project-visual";
import { Reveal } from "@/components/reveal";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <Reveal
      delay={(index % 2) * 0.08}
      className={index === 0 ? "project-card featured-project" : "project-card"}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="project-link"
        aria-label={`Explore ${project.name}`}
      >
        <ProjectVisual project={project} />
        <div className="project-info">
          <div>
            <span className="eyebrow">{project.category}</span>
            <h3>{project.name}</h3>
            <p>{project.summary}</p>
          </div>
          <span className="project-open">
            <Plus size={21} />
          </span>
        </div>
        <div className="tag-list">
          {project.stack.slice(0, 4).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </Link>
    </Reveal>
  );
}
