import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Code2, ShoppingCart, Network, GraduationCap,Warehouse, Server, Bot, Box, Blocks, FileLock2 } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive personal portfolio built with React, Tailwind CSS, and Framer Motion featuring smooth animations and glassmorphism design.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    icon: Code2,
    type: "personal",
    github: "https://github.com",
    demo: "https://example.com",
    color: "from-primary to-cyan",
  },
  {
    title: "Warehouse Management System (WMS)",
    description:
      "Maintained and enhanced an in-house enterprise Warehouse Management System (WMS) by updating modules, resolving printout issues, and optimizing system processes to improve operational efficiency.",
    tech: ["JavaScript", ".NET", "DevExpress", "Bootstrap", "MS SQL Server"],
    icon: Warehouse,
    type: "inhouse",
    github: "https://github.com",
    demo: "https://example.com",
    color: "from-accent to-purple",
  },
  {
    title: "RESTful API Development & Data Integration",
    description:
      "Designed and implemented RESTful API endpoints to enable seamless data synchronization with databases for in-house enterprise systems.",
    tech: ["JavaScript", "Node.js", "Express.js", "MS SQL Server"],
    icon: Server,
    type: "inhouse",
    github: "https://github.com",
    demo: "https://example.com",
    color: "from-cyan to-primary",
  },
  {
    title: "AI-Powered Chatbot & Document Processing",
    description:
      "Built an intelligent chatbot for in-house enterprise systems to support document ingestion and forecasting insights; implemented PDF Invoice/SOA parsing to extract structured data and store it in databases.",
    tech: ["OpenAI API", "JavaScript", "Node.js", "Express.js", "MS SQL Server"],
    icon: Bot,
    type: "inhouse",
    github: "https://github.com",
    demo: "https://example.com",
    color: "from-purple to-accent",
  },
  {
    title: "Interactive 3D Resource Monitoring Platform",
    description:
      "Contributed to the development of an in-house infrastructure monitoring platform featuring immersive 3D visualizations for intuitive resource analysis and system monitoring.",
    tech: ["JavaScript", "Three.js", "Bootstrap", "MS SQL Server"],
    icon: Box,
    type: "inhouse",
    github: "https://github.com",
    demo: "https://example.com",
    color: "from-primary to-cyan",
  },
  {
    title: "PISA - Procurement Inventory Sales Accounting",
    description:
      "Extended in-house accounting modules, enhanced printout workflows, and resolved bugs to improve system stability and performance.",
    tech: ["JavaScript", ".NET", "DevExpress", "Bootstrap", "MS SQL Server"],
    icon: Blocks,
    type: "inhouse",
    github: "https://github.com",
    demo: "https://example.com",
    color: "from-purple to-accent",
  },
  
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            My Work
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground leading-relaxed">
            A selection of projects that showcase my technical skills and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card glow-border rounded-2xl overflow-hidden group"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} opacity-80 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <project.icon size={48} className="text-white/90 relative z-10" />
                {/* Animated overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* <div className="mt-6 flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-all hover:bg-secondary/80"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div> */}

                <div className="mt-6 flex gap-3">
          {project.type === "personal" && project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-all hover:bg-secondary/80"
            >
              <Github size={16} />
              Code
            </a>
          )}

          {/* {project.type === "personal" && project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )} */}

  {project.type === "inhouse" && (
    <a  target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-all hover:bg-secondary/80">
        <FileLock2 size={16} />
      Internal System
    </a>
  )}
</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
