import { ClosingBand } from "@/components/home/closing-band";
import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { PathwayConnector } from "@/components/home/pathway";
import { SiteHeader } from "@/components/home/site-header";
import { WhyLandly } from "@/components/home/why-landly";

// The home page. Each section lives in its own file in src/components/home/,
// and the green pathway connectors link one section to the next.
export default function HomePage() {
  return (
    // "isolate" keeps the blush background shapes behind the content;
    // "overflow-x-clip" stops them from causing sideways scrolling.
    <div className="relative isolate overflow-x-clip">
      <SiteHeader />
      <main>
        <Hero />
        <PathwayConnector />
        <WhyLandly />
        <PathwayConnector flip />
        <HowItWorks />
        <PathwayConnector />
        <ClosingBand />
      </main>
    </div>
  );
}
