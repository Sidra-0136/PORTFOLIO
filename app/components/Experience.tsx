import DecorativeShapes from "./DecorativeShapes";
import ScrollReveal from "./ScrollReveal";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen overflow-hidden bg-[#FFF9F7] px-4 py-14 text-center sm:px-6 sm:py-16 md:px-16 md:py-20"
    >
      <DecorativeShapes />
      <ScrollReveal>
      {/* Section Heading */}
      <h2 className="text-3xl font-serif text-[#29262A] sm:text-4xl md:text-5xl">
        Education & Experience
      </h2>

      {/* Decorative Line */}
      <div className="mx-auto mt-4 flex items-center justify-center gap-2 sm:gap-3">
        <span className="h-px w-12 bg-[#7F9477] sm:w-16"></span>

        <span className="text-[#E8A0B8]">✦</span>

        <span className="h-px w-12 bg-[#7F9477] sm:w-16"></span>
      </div>

      {/* Intro */}
      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#29262A]/70 sm:text-base">
        My learning journey combines web development education with
hands-on professional experience, building skills across modern web technologies.
      </p>

      {/* Cards */}
      <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2 md:gap-8">
        {/* Saylani — Education */}
        <div className="rounded-2xl border border-[#7F9477]/30 bg-white p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8">
          <p className="text-sm font-medium tracking-wide text-[#7F9477]">
            Sep 2025 – Aug 2026 · 1 Year
          </p>

          <h3 className="mt-2 text-2xl font-serif text-[#29262A]">
            Web Development Course
          </h3>

          <p className="mt-1 text-base font-medium text-[#E8A0B8]">
            Saylani
          </p>

          <p className="mt-4 text-sm leading-7 text-[#29262A]/70 sm:text-base">
            Completed a one-year web development course where I built my
            coding foundation through practical learning and web development
            projects.
          </p>

          {/* Technologies & Tools */}
          <p className="mt-5 text-sm font-medium text-[#29262A]">
            Technologies & Tools
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind CSS",
              "Backend",
              "GitHub",
              "Vercel",
              "Netlify",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-[#F7DDE5]/60 px-3 py-1 text-xs text-[#29262A]"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Certificate */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#E8A0B8]/15 px-4 py-2 text-sm text-[#29262A]">
              ✓ Certificate Earned
            </span>

            <a
              href="/certificates/saylani-certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#7F9477] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
            >
              View Certificate →
            </a>
          </div>
        </div>

        {/* Faran Digital Academy — Experience */}
        <div className="rounded-2xl border border-[#7F9477]/30 bg-white p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8">
          <p className="text-sm font-medium tracking-wide text-[#7F9477]">
            2026 · 8 Weeks
          </p>

          <h3 className="mt-2 text-2xl font-serif text-[#29262A]">
            Web Engineering Intern
          </h3>

          <p className="mt-1 text-base font-medium text-[#E8A0B8]">
            Faran Digital Academy
          </p>

          <p className="mt-4 text-sm leading-7 text-[#29262A]/70 sm:text-base">
            Completed an 8-week Web Engineering Internship focused on modern
            web development, UI/UX, responsive interfaces, and building
            real-world web projects.
          </p>

          {/* Technologies & Tools */}
          <p className="mt-5 text-sm font-medium text-[#29262A]">
            Technologies & Tools
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {[
              "Figma",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "APIs",
              "GitHub",
              "Vercel",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-[#F7DDE5]/60 px-3 py-1 text-xs text-[#29262A]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}