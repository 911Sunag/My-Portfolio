
import Aurora from "./components/Aurora";
import CurvedLoop from "./components/CurvedLoop";
import Desktop from "./components/Desktop";
import { AuroraText } from "@/components/ui/aurora-text";


function App() {
  return (
    <main className="min-h-screen bg-black">
      <div className="w-full h-96 sm:h-149 relative overflow-hidden ">
        <Aurora
          colorStops={["#7cff67", "#B19EEF", "#5227FF"]}
          blend={0.89}
          amplitude={1.5}
          speed={1.0}
        />

      </div>

      <section className="absolute top-[20%] sm:top-[30%] w-full text-center px-4">

        <h1 className="text-gray-300/50 text-3xl sm:text-6xl font-proo leading-tight">
          Hi, I&apos;m <span className="font-shep text-6xl sm:text-8xl text-white">Sunag</span>{" "}
          <br className="hidden sm:block" />a{" "}
          <AuroraText className="font-bold font-proo">
            Frontend Developer
          </AuroraText>
          .
          Specialized in...
        </h1>

        {/* nevver mind */}

        <CurvedLoop
          marqueeText="Tailwindcss ✦ React.js ✦ Next.js ✦ TypeScript ✦ Framer Motion ✦ Shadcn/ui ✦"
          speed={3.0}
          curveAmount={150}
          direction="left"
          interactive
          className="custom-text-style"
        />

      </section>
      <Desktop />
    </main>
  );
}

export default App;
