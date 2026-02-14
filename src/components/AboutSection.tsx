

import TextType from "./TextType"
import { OrbitingCircles } from "./ui/orbiting-circles"
import { useState, useEffect } from "react"


const AboutSection = () => {
  const [orbitRadius, setOrbitRadius] = useState(150);

  useEffect(() => {
    const updateRadius = () => {
      setOrbitRadius(window.innerWidth < 768 ? 90 : 150);
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <section className="w-full text-green-400 font-mono text-xs md:text-sm p-2 pb-20">
      <div className="mb-6">
        <div className="flex gap-2 text-white/50 mb-4">
          <span>Last login: {new Date().toDateString()} on ttys000</span>
        </div>

        <div className="mb-4">
          <span className="text-blue-400">sunag@portfolio</span>
          <span className="text-white">:</span>
          <span className="text-purple-400">~</span>
          <span className="text-white">$ whoami</span>
          <div className="mt-2 text-white/90">
            <h1 className="text-2xl md:text-4xl font-bold text-green-400">
              <TextType
                text={["Sunag Arigala", "Frontend Developer"]}
                typingSpeed={75}
                pauseDuration={450}
                showCursor
                cursorCharacter="_"
                deletingSpeed={35}
                cursorBlinkDuration={0.5}
              />
            </h1>
            <p className="mt-2 max-w-2xl opacity-70">
              Performance-driven Frontend Developer with 3 years of experience building scalable, high-performance web applications using React.js and Next.js.
            </p>
          </div>
        </div>

        <div className="mb-4">
          <span className="text-blue-400">sunag@portfolio</span>
          <span className="text-white">:</span>
          <span className="text-purple-400">~</span>
          <span className="text-white">$ cat stats.json</span>
          <div className="mt-2 text-yellow-300">
            <pre className="overflow-x-auto">{`{
  "SEO Growth": "+40%",
  "Engagement": "+35%",
  "Load Speed": "+35%",
  "Test Coverage": "100%"
}`}</pre>
          </div>
        </div>

        <div className="mb-4">
          <span className="text-blue-400">sunag@portfolio</span>
          <span className="text-white">:</span>
          <span className="text-purple-400">~</span>
          <span className="text-white">$ ls -la skills/</span>
          <div className="mt-8 flex h-[250px] md:h-[350px] w-full items-center justify-center relative overflow-hidden rounded-xl  bg-white/90">
            <OrbitingCircles className="size-[80px] border-none bg-transparent" duration={25} delay={0} radius={orbitRadius}>
              <span className="text-orange-600 font-bold text-xs bg-black/80 px-2 py-1.5 rounded border border-white/10">HTML</span>
              <span className="text-blue-400 font-bold text-xs bg-black/80 px-2 py-1.5 rounded border border-white/10">TailwindCSS</span>
              <span className="text-yellow-400 font-bold text-xs bg-black/80 px-2 py-1.5 rounded border border-white/10">JavaScript</span>
              <span className="text-blue-600 font-bold text-xs bg-black/80 px-2 py-1.5 rounded border border-white/10">TypeScript</span>
              <span className="text-orange-400 font-bold text-xs bg-black/80 px-2 py-1.5 rounded border border-white/10">Github</span>
              <span className="text-white font-bold text-xs bg-black/80 px-2 py-1.5 rounded border border-white/10">Next.js</span>
              <span className="text-purple-500 font-bold text-xs bg-black/80 px-2 py-1.5 rounded border border-white/10">Redux</span>
              <span className="text-blue-400 font-bold text-xs bg-black/80 px-2 py-1.5 rounded border border-white/10">React</span>
            </OrbitingCircles>

            <OrbitingCircles className="size-[65px] border-none bg-transparent" radius={orbitRadius * 0.5 + 5} duration={20} reverse>
              <span className="text-blue-400 font-bold text-xs bg-black/80 px-2 py-1.5 rounded border border-white/10">Jira</span>
              <span className="text-yellow-400 font-bold text-xs bg-black/80 px-2 py-1.5 rounded border border-white/10">Framer Motion</span>
              <span className="text-pink-500 font-bold text-xs bg-black/80 px-2 py-1.5 rounded border border-white/10">Figma</span>
            </OrbitingCircles>
          </div>
        </div>

        <div className="mb-4">
          <span className="text-blue-400">sunag@portfolio</span>
          <span className="text-white">:</span>
          <span className="text-purple-400">~</span>
          <span className="text-white">$ ./show-experience.sh</span>
          <div className="mt-2 ml-2 border-l-2 border-white/20 pl-4">
            <div className="mb-4">
              <div className="text-yellow-400 font-bold">Frontend Developer @ Captelex Software Technologies</div>
              <div className="text-white/50 text-xs">July 2023 – Present</div>
              <ul className="list-disc ml-4 mt-1 text-white/70">
                <li>Built AI Form Builder (OpenAI) -&gt; 50% time reduction</li>
                <li>Built SEO Blog Platform (Next.js SSR) -&gt; +40% SEO</li>
                <li>Optimized Caching -&gt; -35% load time</li>
              </ul>
            </div>
            <div>
              <div className="text-yellow-400 font-bold">Frontend Intern @ Captelex Software Technologies</div>
              <div className="text-white/50 text-xs">Jan 2023 – June 2023</div>
              <ul className="list-disc ml-4 mt-1 text-white/70">
                <li>E-Commerce Platform -&gt; Real-time filtering</li>
                <li>Responsive UI Updates -&gt; +15% mobile conversion</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <span className="text-blue-400">sunag@portfolio</span>
          <span className="text-white">:</span>
          <span className="text-purple-400">~</span>
          <span className="text-white">$ <span className="animate-pulse">_</span></span>
        </div>

      </div>
    </section>
  )
}

export default AboutSection