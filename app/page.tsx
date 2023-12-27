import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/project";


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
        <Intro />
        <About />
        <Projects/>
    </main>
  )
}
