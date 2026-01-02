"use client";

import HomeSection1 from "./partials/home/section-1";
import HomeProjects from "./partials/home/projects";

export default function Home() {

  return (
    <div className="min-h-screen relative overflow-hidden">



      <main>
        <HomeSection1 />
        <HomeProjects />
      </main>
    </div>
  );
}

