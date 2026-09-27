import DecorativeShapes from "./DecorativeShapes";
import ScrollReveal from "./ScrollReveal";
import { Monitor, Palette, Smartphone, Zap } from "lucide-react";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["700"],
});

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden px-4 py-14 text-center sm:px-6 sm:py-16 md:px-16 md:py-20"
    >
      {/* Decorative Shapes */}
      <DecorativeShapes />

      <ScrollReveal>
        {/* Section Heading */}
        <h2 className="text-3xl font-serif text-[#29262A] sm:text-4xl md:text-5xl">
          About Me
        </h2>

        {/* Decorative Line */}
        <div className="mx-auto mt-4 flex items-center justify-center gap-2 sm:gap-3">
          <span className="h-px w-12 bg-[#7F9477] sm:w-16"></span>

          <span className="text-[#E8A0B8]">✦</span>

          <span className="h-px w-12 bg-[#7F9477] sm:w-16"></span>
        </div>

        {/* Subtitle */}
        <p className="mx-auto mt-4 max-w-[95%] text-sm leading-6 text-[#7F9477] sm:text-base sm:leading-7 md:text-lg">
          Web Developer • Creative Thinker • Continuous Learner
        </p>

        {/* About Paragraphs */}
        <p className="mx-auto mt-7 max-w-[95%] text-sm leading-7 text-[#29262A]/70 sm:mt-8 sm:text-base sm:leading-8 md:max-w-[90%] md:text-lg">
          I’m Sidra Tul Muntaha, a passionate Web Developer who enjoys
          creating clean, modern, and responsive web experiences. I focus on
          turning ideas and designs into functional, user-friendly websites
          with attention to detail and visual consistency.
        </p>

        <p className="mx-auto mt-5 max-w-[95%] text-sm leading-7 text-[#29262A]/70 sm:mt-6 sm:text-base sm:leading-8 md:max-w-[90%] md:text-lg">
          I work with technologies such as HTML, CSS, JavaScript, React,
          Next.js, Tailwind CSS, and Supabase, and I use tools like Figma,
          Git, and GitHub throughout my development workflow.
        </p>

        <p className="mx-auto mt-5 max-w-[95%] text-sm leading-7 text-[#29262A]/70 sm:mt-6 sm:text-base sm:leading-8 md:max-w-[90%] md:text-lg">
          I’m continuously learning and improving my skills by building
          real-world projects, exploring modern web technologies, and creating
          interfaces that are both beautiful and easy to use.
        </p>

        {/* Personal Tagline */}
        <p
          className={`mt-7 text-xl font-bold text-[#E8A0B8] sm:mt-8 sm:text-2xl ${caveat.className}`}
        >
          Better Code • Brighter Ideas
        </p>

        {/* What I Do Heading */}
        <div className="mt-12 flex items-center justify-center gap-2 sm:mt-16 sm:gap-4">
          <span className="h-px w-10 bg-[#7F9477] sm:w-20"></span>

          <h3 className="text-xl font-serif text-[#29262A] sm:text-2xl md:text-3xl">
            What I Do
          </h3>

          <span className="h-px w-10 bg-[#7F9477] sm:w-20"></span>
        </div>

        {/* What I Do Cards */}
        <div className="mx-auto mt-7 grid max-w-[95%] grid-cols-1 gap-4 sm:mt-8 sm:max-w-[90%] sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <div className="rounded-2xl border border-[#7F9477]/30 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-5">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#F7DDE5] sm:h-14 sm:w-14">
              <Monitor className="h-6 w-6 text-[#E8A0B8] sm:h-7 sm:w-7" />
            </div>

            <h4 className="mt-3 text-sm font-semibold text-[#29262A] sm:text-base">
              Web Development
            </h4>

            <p className="mt-2 text-xs leading-6 text-[#29262A]/60 sm:text-sm">
              Building clean, interactive, and functional web experiences.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-[#7F9477]/30 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-5">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#F7DDE5] sm:h-14 sm:w-14">
              <Palette className="h-6 w-6 text-[#E8A0B8] sm:h-7 sm:w-7" />
            </div>

            <h4 className="mt-3 text-sm font-semibold text-[#29262A] sm:text-base">
              UI-focused Design
            </h4>

            <p className="mt-2 text-xs leading-6 text-[#29262A]/60 sm:text-sm">
              Creating simple and visually consistent designs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-[#7F9477]/30 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-5">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#F7DDE5] sm:h-14 sm:w-14">
              <Smartphone className="h-6 w-6 text-[#E8A0B8] sm:h-7 sm:w-7" />
            </div>

            <h4 className="mt-3 text-sm font-semibold text-[#29262A] sm:text-base">
              Responsive Websites
            </h4>

            <p className="mt-2 text-xs leading-6 text-[#29262A]/60 sm:text-sm">
              Making websites work smoothly across devices.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-2xl border border-[#7F9477]/30 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-5">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#F7DDE5] sm:h-14 sm:w-14">
              <Zap className="h-6 w-6 text-[#E8A0B8] sm:h-7 sm:w-7" />
            </div>

            <h4 className="mt-3 text-sm font-semibold text-[#29262A] sm:text-base">
              Modern Tech
            </h4>

            <p className="mt-2 text-xs leading-6 text-[#29262A]/60 sm:text-sm">
              Exploring and using modern tools and frameworks.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}