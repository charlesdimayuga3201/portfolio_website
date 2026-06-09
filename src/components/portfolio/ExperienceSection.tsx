import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Junior Programmer",
    org: "METS Cold Storage Services Inc.",
    period: "October 2024 - March 2026",
    description:
      "Maintained and enhanced in-house enterprise systems across multiple business domains. Updated modules, resolved printout issues, optimized processes, and contributed to new feature development to improve operational efficiency and system performance.",
    icon: Briefcase,
  },
  // {
  //   type: "work",
  //   title: "Junior Developer",
  //   org: "Digital Innovations Inc.",
  //   period: "2020 - 2022",
  //   description:
  //     "Built and maintained web applications using React and Node.js. Collaborated on API design and database optimization projects.",
  //   icon: Briefcase,
  // },
  {
    type: "education",
    title: "B.S. Information Technology",
    org: "Batangas State University",
    period: "August 2020 - August 2024",
    description:
      "Graduated with a major in Service Management and a strong foundation in programming, databases, and software development. Completed a capstone project, EquipCheck - a safety equipment mapping and maintenance management system featuring 2D mobile mapping built with React Native, Expo, and Firebase.",
    icon: GraduationCap,
  },
  // {
  //   type: "cert",
  //   title: "AWS Cloud Practitioner",
  //   org: "Amazon Web Services",
  //   period: "2023",
  //   description:
  //     "Validated cloud fluency and foundational AWS knowledge including core services, security, architecture, and billing.",
  //   icon: Award,
  // },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Background
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Experience & <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/50 to-transparent md:left-1/2 md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.title}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative mb-10 md:flex ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 top-0 z-10 -translate-x-1/2 md:left-1/2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-background shadow-[0_0_15px_oklch(0.6_0.18_250_/_30%)]">
                  <exp.icon size={20} className="text-primary" />
                </div>
              </div>

              {/* Card */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                <div className="glass-card glow-border rounded-xl p-5">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {exp.period}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-foreground">{exp.title}</h3>
                  <p className="text-sm font-medium text-muted-foreground">{exp.org}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
