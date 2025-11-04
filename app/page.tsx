import { navItems } from "@/data";

import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

// Dynamic imports with loading states to reduce initial bundle
// Grid contains Globe (Three.js) - must be lazy loaded!
const Grid = dynamic(() => import("@/components/Grid"), {
  ssr: false,
  loading: () => <div className="py-20 h-screen animate-pulse bg-black-100" />,
});
const Approach = dynamic(() => import("@/components/Approach"), {
  ssr: false,
  loading: () => <div className="py-20 h-screen" />,
});
const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: false,
  loading: () => <div className="py-20 h-screen" />,
});
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), {
  ssr: false,
  loading: () => <div className="py-20 h-screen" />,
});

import { FloatingNav } from "@/components/ui/FloatingNavbar";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        {/* <Clients /> */}
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
