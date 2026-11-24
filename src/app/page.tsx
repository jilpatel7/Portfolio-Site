import {
  BriefcaseBusiness,
  Code2,
  Download,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Mouse,
  Sparkles,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { LinkedInIcon } from "@/components/linkedin-icon";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { ProjectCard } from "@/components/project-card";
import { ComingContent } from "@/components/coming-content";
import { journey, profile, projects, skillGroups } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main">
        <section id="home" className="hero container">
          <div className="hero-copy">
            <Reveal>
              <span className="hero-intro">
                <span className="intro-line" /> HELLO, I’M JIL PATEL
              </span>
              <h1>
                Thoughtful code.
                <br />
                Meaningful
                <br />
                <span className="serif-accent">experiences.</span>
              </h1>
              <p className="hero-description">
                A full stack developer connecting beautiful interfaces with
                reliable systems. Building for the people on the other side of
                the screen.
              </p>
              <div className="hero-actions">
                <Button asChild>
                  <a href="#projects">
                    Explore my work <Layers3 size={16} />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={profile.resume} download>
                    <Download size={16} /> Resume
                  </a>
                </Button>
              </div>
              <div className="hero-meta">
                <span>
                  <MapPin size={14} /> Gujarat, India
                </span>
                <span className="meta-divider" />
                <span>Full Stack Developer</span>
              </div>
            </Reveal>
          </div>
          <Reveal className="hero-art" delay={0.15}>
            <div className="art-grid" />
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-label top-label">
              <span className="small-star">✳</span> BUILT WITH INTENTION
            </div>
            <div className="monogram-card">
              <div className="monogram-top">
                <span>DEVELOPER / MAKER</span>
                <Code2 size={18} />
              </div>
              <div className="monogram">
                j<span>p</span>
                <i>.</i>
              </div>
              <div className="monogram-bottom">
                <span>JIL PATEL</span>
                <span>IDEA → INTERFACE → IMPACT</span>
              </div>
            </div>
            <div className="floating-note note-top">
              <span className="note-icon">
                <Layers3 size={18} />
              </span>
              <div>
                <strong>Full-stack thinking</strong>
                <span>From the first pixel to the API.</span>
              </div>
            </div>
            <div className="floating-note note-bottom">
              <span className="note-icon">
                <Sparkles size={18} />
              </span>
              <div>
                <strong>A little curiosity. A lot of care.</strong>
                <span>That’s how I like to build.</span>
              </div>
            </div>
            <div className="art-label bottom-label">
              CRAFTED IN GUJARAT. BUILT FOR THE WEB.
            </div>
          </Reveal>
          <div className="hero-bottom">
            <a href="#about">
              <Mouse size={17} /> A LITTLE SCROLL, A LITTLE DISCOVERY
            </a>
            <span>GOOD THINGS START WITH CURIOSITY</span>
          </div>
        </section>

        <div className="stack-strip">
          <div className="container">
            <span>MY EVERYDAY TOOLKIT</span>
            <div>
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Node.js",
                "PostgreSQL",
                "Python",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>

        <section id="about" className="section about-section">
          <div className="container about-grid">
            <Reveal>
              <span className="eyebrow">THE PERSON BEHIND THE PIXELS</span>
              <h2>
                A builder’s mindset.
                <br />
                <span className="serif-accent">A human perspective.</span>
              </h2>
              <div className="about-signature">
                Jil Patel<span>Software Engineer / eSparkBiz</span>
              </div>
            </Reveal>
            <Reveal delay={0.08} className="about-copy">
              <p className="lead">
                I enjoy turning complex problems into software that feels simple
                to use.
              </p>
              <p>
                I’m a full stack developer at eSparkBiz Technologies in
                Ahmedabad. My work spans AI-powered CRMs, hospitality platforms,
                experience intelligence, and healthcare applications.
              </p>
              <p>
                I work across the whole product: the interface you interact
                with, the APIs that connect it, and the background workflows
                that keep everything moving. Along the way, I care about
                reusable code, responsive design, and the small details that
                make an experience better.
              </p>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                <LinkedInIcon size={16} /> A little more about me on LinkedIn
              </a>
            </Reveal>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="container">
            <Reveal>
              <div className="section-heading">
                <div>
                  <span className="eyebrow">SELECTED WORK</span>
                  <h2>
                    Ideas put{" "}
                    <span className="serif-accent">into practice.</span>
                  </h2>
                </div>
                <p>
                  Different challenges. Thoughtful solutions.
                  <br />
                  Here’s some of what I’ve helped build.
                </p>
              </div>
            </Reveal>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="container">
            <Reveal>
              <div className="section-heading">
                <div>
                  <span className="eyebrow">WHAT I BRING TO THE TABLE</span>
                  <h2>
                    From pixels{" "}
                    <span className="serif-accent">to pipelines.</span>
                  </h2>
                </div>
                <p>
                  A connected toolkit for building
                  <br />
                  across the whole stack.
                </p>
              </div>
            </Reveal>
            <div className="skills-grid">
              {skillGroups.map((group, index) => (
                <Reveal
                  key={group.label}
                  className="skill-group"
                  delay={index * 0.05}
                >
                  <span className="eyebrow">{group.label}</span>
                  <h3>{group.title}</h3>
                  <div className="tag-list">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="journey" className="section journey-section">
          <div className="container journey-grid">
            <Reveal className="journey-intro">
              <span className="eyebrow">EXPERIENCE & EDUCATION</span>
              <h2>
                Always learning.
                <br />
                <span className="serif-accent">Always building.</span>
              </h2>
              <p>
                From computer science fundamentals
                <br />
                to products people use.
              </p>
              <Button variant="outline" asChild>
                <a href={profile.resume} download>
                  <Download size={16} /> Download resume
                </a>
              </Button>
            </Reveal>
            <div className="timeline">
              {journey.map((item, i) => (
                <Reveal
                  key={item.title}
                  className="timeline-item"
                  delay={i * 0.05}
                >
                  <div className={`timeline-icon ${item.kind}`}>
                    {item.kind === "education" ? (
                      <GraduationCap size={19} />
                    ) : item.kind === "training" ? (
                      <Code2 size={18} />
                    ) : (
                      <BriefcaseBusiness size={18} />
                    )}
                  </div>
                  <span className="eyebrow">{item.date}</span>
                  <h3>{item.title}</h3>
                  <h4>{item.organization}</h4>
                  <span className="timeline-detail">{item.detail}</span>
                  <p>{item.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <ComingContent />

        <section id="contact" className="contact-section">
          <div className="container">
            <Reveal>
              <span className="eyebrow">HAVE SOMETHING IN MIND?</span>
              <div className="contact-heading">
                <h2>
                  Let’s make
                  <br />
                  <span className="serif-accent">something matter.</span>
                </h2>
                <a
                  className="contact-circle"
                  href={`mailto:${profile.email}`}
                  aria-label="Email Jil Patel"
                >
                  <Mail size={32} strokeWidth={1.3} />
                </a>
              </div>
              <div className="contact-bottom">
                <p>
                  A project, an opportunity, or just a hello.
                  <br />
                  I’d love to hear from you.
                </p>
                <a className="email-link" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <footer className="footer container">
        <a className="wordmark" href="#home" aria-label="Back to top">
          jil<span>.</span>
        </a>
        <p>© {new Date().getFullYear()} Jil Patel. Crafted with care.</p>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn <LinkedInIcon size={15} />
        </a>
      </footer>
    </>
  );
}
