import Founder from "./components/founder";
import Hero from "./components/hero";
import Portfolio from "./components/portfolio";
import ScrollingBanner from "./components/scrolling-banner";
import Team from "./components/team";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black overflow-x-hidden">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center pb-32 bg-white dark:bg-black">
        <Hero/>
        <ScrollingBanner/>
        <Founder/>
        <Portfolio/>
        <Team/>
      </main>
    </div>
  );
}
