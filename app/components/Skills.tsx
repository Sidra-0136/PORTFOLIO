import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
});

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
  SiSupabase,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

import {
  Code2,
  Palette,
  Monitor,
  MonitorSmartphone,
  Database,
  ShieldCheck,
  LockKeyhole,
  Settings,
} from "lucide-react";

import type { ReactNode } from "react";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-[#FFF9F7] px-4 py-14 sm:px-6 sm:py-16 md:px-16 md:py-20"
    >
      {/* Section Heading */}
      <div className="text-center">
        <h2 className="text-3xl font-serif text-[#29262A] sm:text-4xl md:text-5xl">
          My Skills
        </h2>

        <div className="mx-auto mt-4 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-[#7F9477] sm:w-16"></span>

          <span className="text-[#E8A0B8]">✦</span>

          <span className="h-px w-12 bg-[#7F9477] sm:w-16"></span>
        </div>

        <p className="mt-4 text-sm text-[#7F9477] sm:text-base md:text-lg">
          Technologies & tools I work with
        </p>
      </div>

      {/* Skills Cards Grid */}
      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 md:auto-rows-fr">
        {/* FRONTEND DEVELOPMENT */}
        <div className="rounded-xl border-2 border-[#7F9477] bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5 md:h-full">
          <div className="flex items-start gap-3 sm:items-center sm:gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F7DDE5] sm:h-14 sm:w-14">
              <Code2 className="h-6 w-6 text-[#E8A0B8] sm:h-7 sm:w-7" />
            </div>

            <div className="min-w-0">
              <h3 className="text-lg font-serif font-semibold leading-tight text-[#29262A] sm:text-xl">
                Frontend Development
              </h3>

              <p className="mt-1 text-xs leading-5 text-[#29262A]/60 sm:text-sm">
                Building modern and interactive web applications.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-7 sm:grid-cols-4 sm:gap-4">
            <Skill
              icon={<SiHtml5 className="h-7 w-7" color="#E34F26" />}
              name="HTML"
            />

            <Skill
              icon={<SiCss className="h-7 w-7" color="#1572B6" />}
              name="CSS"
            />

            <Skill
              icon={<SiJavascript className="h-7 w-7" color="#F7DF1E" />}
              name="JavaScript"
            />

            <Skill
              icon={<SiTypescript className="h-7 w-7" color="#3178C6" />}
              name="TypeScript"
            />

            <Skill
              icon={<SiReact className="h-7 w-7" color="#61DAFB" />}
              name="React"
            />

            <Skill
              icon={<SiNextdotjs className="h-7 w-7" color="#000000" />}
              name="Next.js"
            />

            <Skill
              icon={<SiTailwindcss className="h-7 w-7" color="#06B6D4" />}
              name="Tailwind CSS"
            />
          </div>
        </div>

        {/* DESIGN & UI/UX */}
        <div className="rounded-xl border-2 border-[#7F9477] bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5 md:h-full">
          <div className="flex items-start gap-3 sm:items-center sm:gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F7DDE5] sm:h-14 sm:w-14">
              <Palette className="h-6 w-6 text-[#E8A0B8] sm:h-7 sm:w-7" />
            </div>

            <div className="min-w-0">
              <h3 className="text-lg font-serif font-semibold leading-tight text-[#29262A] sm:text-xl">
                Design & UI/UX
              </h3>

              <p className="mt-1 text-xs leading-5 text-[#29262A]/60 sm:text-sm">
                Creating clean and user-friendly experiences.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-7 sm:grid-cols-4 sm:gap-4">
            <Skill
              icon={<SiFigma className="h-7 w-7" color="#F24E1E" />}
              name="Figma"
            />

            <Skill
              icon={<Monitor className="h-7 w-7 text-[#7A6A9A]" />}
              name="UI/UX"
            />

            {/* Canva */}
            <Skill
              icon={
                <span
                  className={`
                    ${pacifico.className}
                    inline-block
                    text-[32px]
                    leading-[1]
                    pl-1
                    pr-2
                    sm:text-[36px]
                    sm:pr-3
                    bg-gradient-to-br
                    from-[#00C4CC]
                    via-[#3B82F6]
                    to-[#7C3AED]
                    bg-clip-text
                    text-transparent
                    select-none
                  `}
                >
                  C
                </span>
              }
              name="Canva"
            />

            <Skill
              icon={
                <MonitorSmartphone className="h-7 w-7 text-[#6B3E5C]" />
              }
              name="Responsive Design"
            />
          </div>
        </div>

        {/* BACKEND & DATABASE */}
        <div className="rounded-xl border-2 border-[#7F9477] bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5 md:h-full">
          <div className="flex items-start gap-3 sm:items-center sm:gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F7DDE5] sm:h-14 sm:w-14">
              <Database className="h-6 w-6 text-[#E8A0B8] sm:h-7 sm:w-7" />
            </div>

            <div className="min-w-0">
              <h3 className="text-lg font-serif font-semibold leading-tight text-[#29262A] sm:text-xl">
                Backend & Database
              </h3>

              <p className="mt-1 text-xs leading-5 text-[#29262A]/60 sm:text-sm">
                Managing data, authentication and secure access.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-7 sm:grid-cols-4 sm:gap-4">
            <Skill
              icon={<SiSupabase className="h-7 w-7" color="#3ECF8E" />}
              name="Supabase"
            />

            <Skill
              icon={<Database className="h-7 w-7 text-[#355E3B]" />}
              name="Database"
            />

            <Skill
              icon={<ShieldCheck className="h-7 w-7 text-[#8B5CF6]" />}
              name="Authentication"
            />

            <Skill
              icon={<LockKeyhole className="h-7 w-7 text-[#F59E0B]" />}
              name="RLS"
            />
          </div>
        </div>

        {/* TOOLS & DEPLOYMENT */}
        <div className="rounded-xl border-2 border-[#7F9477] bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5 md:h-full">
          <div className="flex items-start gap-3 sm:items-center sm:gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F7DDE5] sm:h-14 sm:w-14">
              <Settings className="h-6 w-6 text-[#E8A0B8] sm:h-7 sm:w-7" />
            </div>

            <div className="min-w-0">
              <h3 className="text-lg font-serif font-semibold leading-tight text-[#29262A] sm:text-xl">
                Tools & Deployment
              </h3>

              <p className="mt-1 text-xs leading-5 text-[#29262A]/60 sm:text-sm">
                Version control and modern deployment platforms.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-7 sm:grid-cols-4 sm:gap-4">
            <Skill
              icon={<SiGit className="h-7 w-7" color="#F05032" />}
              name="Git"
            />

            <Skill
              icon={<SiGithub className="h-7 w-7" color="#181717" />}
              name="GitHub"
            />

            <Skill
              icon={<SiVercel className="h-7 w-7" color="#000000" />}
              name="Vercel"
            />

            <Skill
              icon={<SiNetlify className="h-7 w-7" color="#00C7B7" />}
              name="Netlify"
            />

            <Skill
              icon={<SiGithub className="h-7 w-7" color="#181717" />}
              name="GitHub Pages"
            />
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 flex items-center justify-center gap-2 sm:mt-14 sm:gap-3">
        <span className="h-px w-10 bg-[#7F9477] sm:w-16"></span>

        <p className="text-xs tracking-wide text-[#E8A0B8] sm:text-sm">
          Learn • Build • Grow
        </p>

        <span className="h-px w-10 bg-[#7F9477] sm:w-16"></span>
      </div>
    </section>
  );
}

interface SkillProps {
  icon: ReactNode;
  name?: string;
}

/* Reusable Skill Item Card Component */
function Skill({ icon, name }: SkillProps) {
  return (
    <div className="flex min-h-[88px] min-w-0 flex-col items-center justify-center rounded-lg border border-[#7F9477]/20 bg-[#FFF9F7]/50 p-3 text-center transition-colors duration-200 hover:bg-[#F7DDE5]/30 sm:min-h-[92px] sm:p-3">
      <div className="flex h-9 min-w-0 items-center justify-center overflow-visible sm:h-10">
        {icon}
      </div>

      <p className="mt-2 text-[11px] font-medium leading-4 text-[#29262A] sm:text-xs">
        {name || "Skill"}
      </p>
    </div>
  );
}