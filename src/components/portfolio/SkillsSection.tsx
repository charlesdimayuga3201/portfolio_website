import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: "HTML / CSS", level: 95, category: "Frontend" },
  { name: "JavaScript / TypeScript", level: 90, category: "Frontend" },
  { name: "React & Next.js", level: 84, category: "Frontend" },
  { name: "Bootstrap", level: 88, category: "Frontend" },
  { name: "Node.js", level: 90, category: "Backend" },
  { name: "Python", level: 80, category: "Backend" },
  { name: "Three.js", level: 80, category: "3D / Graphics" },
  { name: "C# / Aspx.Net", level: 88, category: "Backend" },
  { name: "Express.js", level: 85, category: "Backend" },
  { name: "OpenAI API", level: 82, category: "AI / Tools" },
  // { name: "Java", level: 78, category: "Backend" },
  { name: "MSSQL", level: 87, category: "Database" },
  // { name: "MongoDB", level: 80, category: "Database" },
  // { name: "Networking (TCP/IP, DNS, VPN)", level: 85, category: "Infrastructure" },
  // { name: "Cybersecurity", level: 82, category: "Security" },
  // { name: "AWS / Azure / GCP", level: 80, category: "Cloud" },
  // { name: "Docker / Kubernetes", level: 75, category: "DevOps" },
  { name: "Git / GitHub", level: 87, category: "Tools" },
  // { name: "Linux Administration", level: 88, category: "Infrastructure" },
];

const categories = ["All", ...Array.from(new Set(skills.map((s) => s.category)))];

function SkillBar({ skill, delay }: { skill: Skill; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="mb-5"
    >
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-xs font-semibold text-primary">{skill.level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Technical Skills
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            My <span className="text-gradient">Expertise</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground leading-relaxed">
            A broad skill set spanning development, infrastructure, and security —
            continuously evolving with the latest technologies.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}
