import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Jil Patel — Full Stack Developer",
    template: "%s | Jil Patel",
  },
  description:
    "Full Stack Developer building thoughtful web experiences, SaaS platforms, AI-powered tools, and real-time applications. Explore Jil Patel’s work and experience.",
  openGraph: {
    title: "Jil Patel — Full Stack Developer",
    description:
      "Thoughtful interfaces. Reliable systems. Explore my selected work.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jil Patel — Full Stack Developer",
    description: "Thoughtful interfaces. Reliable systems.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg" },
};
export const viewport: Viewport = {
  themeColor: "#fafbf9",
  colorScheme: "light",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
