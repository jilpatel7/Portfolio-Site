"use client";
import Image from "next/image";
import { Award, Quote, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Reveal } from "@/components/reveal";
import { certification, profile, testimonials } from "@/data/portfolio";

export function ComingContent() {
  return (
    <section id="credentials" className="section credentials-section">
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <div>
              <span className="eyebrow">LEARNING & CONNECTIONS</span>
              <h2>
                More to the story<span>.</span>
              </h2>
            </div>
            <p>
              The learning along the way.
              <br />
              The people behind the work.
            </p>
          </div>
        </Reveal>
        <div className="credentials-grid">
          <Reveal className="credential-panel">
            <div className="panel-icon">
              <Award size={24} strokeWidth={1.5} />
            </div>
            <span className="eyebrow">CONTINUOUS LEARNING</span>
            <h3>Certifications</h3>
            <p>Always making room for the next thing to learn.</p>
            <div className="certificate-summary">
              <Image
                src={certification.badge}
                alt="Databricks Fundamentals accreditation badge"
                width={96}
                height={96}
                className="certificate-badge"
              />
              <div>
                <h4>{certification.title}</h4>
                <p>{certification.issuer}</p>
                <p>
                  Issued{" "}
                  <time dateTime={certification.date}>
                    {certification.displayDate}
                  </time>
                </p>
                <p>Credential ID {certification.credentialId}</p>
              </div>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <button className="certificate-preview" type="button">
                  <Image
                    src={certification.certificate}
                    alt="Preview of Jil Patel’s Databricks Fundamentals certificate"
                    width={1287}
                    height={994}
                  />
                  <span>View certificate</span>
                </button>
              </DialogTrigger>
              <DialogContent className="certificate-dialog">
                <span className="eyebrow">CERTIFICATIONS</span>
                <DialogTitle className="dialog-title">
                  {certification.title}
                </DialogTitle>
                <DialogDescription className="dialog-description">
                  Issued by {certification.issuer} on {certification.displayDate}.
                  {" "}
                  Credential ID {certification.credentialId}.
                </DialogDescription>
                <Image
                  src={certification.certificate}
                  alt="Databricks Academy certificate awarded to Jil Patel for Databricks Fundamentals"
                  width={1287}
                  height={994}
                  className="certificate-full-image"
                />
                <a
                  className="text-link"
                  href={certification.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open full-size certificate <ExternalLink size={15} />
                </a>
              </DialogContent>
            </Dialog>
            <Button variant="outline" size="sm" asChild>
              <a
                href={certification.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Show credential <ExternalLink size={15} />
              </a>
            </Button>
          </Reveal>
          <Reveal className="credential-panel testimonial-panel" delay={0.08}>
            <div className="panel-icon">
              <Quote size={24} strokeWidth={1.5} />
            </div>
            <span className="eyebrow">GOOD WORK, SHARED</span>
            <h3>Kind words</h3>
            <p>The best part of building is the people you build with.</p>
            <div className="testimonial-list">
              {testimonials.map((testimonial) => (
                <figure className="testimonial" key={testimonial.name}>
                  <blockquote>
                    <p>{testimonial.quote}</p>
                  </blockquote>
                  <figcaption className="testimonial-author">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="testimonial-avatar"
                    />
                    <div>
                      <strong>{testimonial.name}</strong>
                      <span>{testimonial.role}</span>
                      <span>
                        <time dateTime={testimonial.date}>
                          {testimonial.displayDate}
                        </time>
                        {" · Managed Jil directly"}
                      </span>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="testimonial-source">
              Recommendations shared on LinkedIn.
            </p>
            <a
              className="text-link"
              href={`mailto:${profile.email}?subject=Portfolio%20testimonial`}
            >
              <Mail size={15} /> Share a testimonial
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
