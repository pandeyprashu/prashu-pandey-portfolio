import { SiteHeader } from "@/components/layout/site-header";
import { Hero } from "@/components/sections/hero";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
      </main>
    </>
  );
}
