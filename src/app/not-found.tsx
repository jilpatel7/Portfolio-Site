import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function NotFound() {
  return (
    <main id="main" className="container not-found">
      <span className="eyebrow">PAGE NOT FOUND</span>
      <h1>
        A little off the path<span>.</span>
      </h1>
      <p>Let’s get you back to the work.</p>
      <Button asChild>
        <Link href="/">Back to the portfolio</Link>
      </Button>
    </main>
  );
}
