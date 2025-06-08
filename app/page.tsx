import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import FreelanceProject from "@/components/freelanceproject";
import Intro from "@/components/intro";
import Projects from "@/components/project";
import Skills from "@/components/skills";


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
        <Intro />
        <About />
        <Projects/>
        <FreelanceProject/>
        <Skills/>
        <Experience/>
        <Contact/>
    </main>
  )
}
