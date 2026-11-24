"use client";
import { Award, Quote, Mail, FileBadge } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Reveal } from "@/components/reveal";
import { profile } from "@/data/portfolio";

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
            <div className="certificate-placeholder">
              <FileBadge size={36} strokeWidth={1} />
              <div>
                <strong>Credentials, coming soon</strong>
                <span>Certificates will be added here.</span>
              </div>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  About this section
                </Button>
              </DialogTrigger>
              <DialogContent>
                <span className="eyebrow">CERTIFICATIONS</span>
                <DialogTitle className="dialog-title">
                  Learning, documented.
                </DialogTitle>
                <DialogDescription className="dialog-description">
                  This section is ready for verified certifications. Each entry
                  will include its title, issuing organization, date,
                  certificate image, and credential link when available.
                </DialogDescription>
              </DialogContent>
            </Dialog>
          </Reveal>
          <Reveal className="credential-panel testimonial-panel" delay={0.08}>
            <div className="panel-icon">
              <Quote size={24} strokeWidth={1.5} />
            </div>
            <span className="eyebrow">GOOD WORK, SHARED</span>
            <h3>Kind words</h3>
            <p>The best part of building is the people you build with.</p>
            <div className="testimonial-placeholder">
              <Quote size={32} strokeWidth={1} />
              <strong>A space for real perspectives.</strong>
              <span>Testimonials from collaborators will appear here.</span>
            </div>
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
