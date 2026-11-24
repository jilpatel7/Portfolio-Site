import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Mail } from "lucide-react";
import { projects, profile } from "@/data/portfolio";
import { ProjectVisual } from "@/components/project-visual";
import { Button } from "@/components/ui/button";

export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return {
    title: project?.name ?? "Project",
    description: project?.description,
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <>
      <header className="container detail-nav">
        <Link href="/" className="wordmark" aria-label="Jil Patel home">
          jil<span>.</span>
        </Link>
        <Link href="/#projects" className="text-link">
          All projects
        </Link>
      </header>
      <main id="main" className="container project-detail">
        <div className="detail-heading">
          <span className="eyebrow">{project.category}</span>
          <h1>
            {project.name}
            <span>.</span>
          </h1>
          <p>{project.summary}</p>
        </div>
        <ProjectVisual project={project} large />
        <div className="detail-body">
          <aside>
            <span className="eyebrow">MY ROLE</span>
            <p>Development contributions</p>
            <span className="eyebrow">BUILT WITH</span>
            <div className="tag-list">
              {project.stack.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </aside>
          <div>
            <h2>The project</h2>
            <p>{project.description}</p>
            <h2>What I contributed</h2>
            <ul className="contribution-list">
              {project.contributions.map((item) => (
                <li key={item}>
                  <Check size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="detail-note">
              The visual above is an illustrative concept. Actual project
              screenshots will be added when available.
            </p>
            <Button asChild>
              <a
                href={`mailto:${profile.email}?subject=${encodeURIComponent(`Let's talk about ${project.name}`)}`}
              >
                <Mail size={16} /> Let’s talk about this work
              </a>
            </Button>
          </div>
        </div>
        <Link className="next-project" href={`/projects/${next.slug}`}>
          <span className="eyebrow">EXPLORE ANOTHER PROJECT</span>
          <h2>{next.name}</h2>
          <p>{next.summary}</p>
        </Link>
      </main>
      <footer className="footer container">
        <Link href="/" className="wordmark">
          jil<span>.</span>
        </Link>
        <p>Thoughtful code. Meaningful experiences.</p>
      </footer>
    </>
  );
}
