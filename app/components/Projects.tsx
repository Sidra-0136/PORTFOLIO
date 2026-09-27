import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "FlowSync",
    category: "Frontend Web Project",
    description:
      "The original FlowSync project created during my FDA journey. A responsive productivity-focused web experience built with HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/images/flowsync-1.png",
    live: "https://flow-sync-seven-pearl.vercel.app/",
    github: "https://github.com/Sidra-0136/FlowSync.git",
  },
  {
    title: "FlowSync — Next.js",
    category: "Next.js Web App",
    description:
      "An upgraded version of FlowSync rebuilt with Next.js and Tailwind CSS. Includes responsive design, dark mode, SEO optimization, and API-based task functionality.",
    technologies: ["Next.js", "Tailwind CSS", "API", "Vercel"],
    image: "/images/flowsync.png",
    live: "https://flow-sync-next-js.vercel.app/",
    github: "https://github.com/Sidra-0136/FlowSync-NEXT.JS.git",
  },
  {
    title: "LUXEAURA",
    category: "E-Commerce Website",
    description:
      "A modern luxury fashion e-commerce website with a clean and elegant shopping experience. Built with product browsing, add-to-cart functionality, and Supabase integration.",
    technologies: ["React", "Vite", "Supabase", "CSS"],
    image: "/images/luxeaura.png",
    live: "https://luxeaura-nine.vercel.app/",
    github: "https://github.com/Sidra-0136/LUXEAURA.git",
  },
  {
    title: "Todo List",
    category: "Task Management App",
    description:
      "A task management application built with React and Supabase. Users can securely manage their tasks with authentication and CRUD functionality.",
    technologies: ["React", "Supabase", "PostgreSQL"],
    image: "/images/todo.png",
    live: "https://todo-list-eight-iota-94.vercel.app/",
    github: "https://github.com/Sidra-0136/Todo-List.git",
  },
  {
    title: "Human Body Explorer",
    category: "Interactive Web App",
    description:
      "An interactive educational web application that allows users to explore different human body organs through a clean and engaging interface.",
    technologies: ["React", "Vite", "React Router"],
    image: "/images/body-explorer.png",
    live: "https://sidra-0136.github.io/Human-Body-Explorer/",
    github: "https://github.com/Sidra-0136/Human-Body-Explorer.git",
  },
  {
    title: "MedReminder",
    category: "Medicine Reminder",
    description:
      "A simple medicine management application designed to help users keep track of their medicines using LocalStorage.",
    technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    image: "/images/medreminder.png",
    live: "https://sidra-0136.github.io/Medreminder-/",
    github: "https://github.com/Sidra-0136/Medreminder-.git",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#FFF9F7] px-4 py-14 text-center sm:px-6 sm:py-16 md:px-16 md:py-20"
    >
      <ScrollReveal>
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <h2 className="text-3xl font-serif text-[#29262A] sm:text-4xl md:text-5xl">
          Projects I&apos;ve Built
        </h2>

        {/* Decorative Line */}
        <div className="mx-auto mt-4 flex items-center justify-center gap-2 sm:gap-3">
          <span className="h-px w-12 bg-[#7F9477] sm:w-16"></span>

          <span className="text-[#E8A0B8]">✦</span>

          <span className="h-px w-12 bg-[#7F9477] sm:w-16"></span>
        </div>

        {/* Intro */}
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#29262A]/70 sm:text-base">
          A collection of projects that showcase my journey in web
          development, from foundational JavaScript applications to modern
          React, Next.js, and Supabase projects.
        </p>

        {/* Projects Grid */}
        <div className="mx-auto mt-10 grid max-w-7xl gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">

          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#7F9477]/30 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >

              {/* Project Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F7DDE5]">
                <Image
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  width={800}
                  height={500}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Project Number */}
                <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-sm font-semibold text-[#29262A] shadow-sm backdrop-blur-sm">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Category */}
                <span className="absolute bottom-4 left-4 rounded-full bg-[#29262A]/85 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col p-6">

                {/* Title */}
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h3 className="font-serif text-2xl text-[#29262A]">
                    {project.title}
                  </h3>

                  <ArrowUpRight
                    size={21}
                    strokeWidth={1.8}
                    className="mt-1 shrink-0 text-[#E8A0B8] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                {/* Description */}
                <p className="mb-6 flex-1 text-sm leading-7 text-[#29262A]/70">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-[#F7DDE5]/60 px-3 py-1 text-xs text-[#29262A]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3">

                  {/* Live Demo */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#7F9477] px-4 py-2.5 text-sm font-medium text-white transition duration-300 hover:opacity-90"
                  >
                    Live Demo
                    <ExternalLink size={15} />
                  </a>

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code`}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#7F9477]/30 text-[#29262A] transition duration-300 hover:border-[#E8A0B8] hover:bg-[#F7DDE5]"
                  >
                    <FaGithub size={19} />
                  </a>

                </div>
              </div>
            </article>
          ))}

        </div>

        {/* Bottom Message */}
        <div className="mt-14 sm:mt-16">
          <p className="text-sm text-[#29262A]/55">
            More projects and experiments coming soon.
          </p>
        </div>

      </div>
      </ScrollReveal>
    </section>
  );
}