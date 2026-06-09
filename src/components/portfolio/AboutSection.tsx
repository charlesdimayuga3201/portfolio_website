import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Shield, Cloud, Cpu, Globe } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Dev",
    desc: "Building end-to-end web applications with React, Node.js, and modern databases.",
  },
  // {
  //   icon: Shield,
  //   title: "Cybersecurity",
  //   desc: "Implementing security best practices, vulnerability assessments, and incident response.",
  // },
  // {
  //   icon: Cloud,
  //   title: "Cloud & DevOps",
  //   desc: "Deploying and managing scalable infrastructure on AWS, Azure, and GCP.",
  // },
  // {
  //   icon: Server,
  //   title: "System Admin",
  //   desc: "Managing Linux/Windows servers, networks, and enterprise IT environments.",
  // },
  // {
  //   icon: Cpu,
  //   title: "Automation",
  //   desc: "Scripting with Python & Bash to automate workflows and reduce manual overhead.",
  // },
  // {
  //   icon: Globe,
  //   title: "Networking",
  //   desc: "Designing, configuring, and troubleshooting complex network architectures.",
  // },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            About Me
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Driven by Technology, <span className="text-gradient">Fueled by Curiosity</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            I'm a Junior Programmer with over 1 year and 5 months of hands-on experience across
            software development. I thrive on solving complex problems and delivering secure,
            scalable solutions that make a real impact.
          </p>
        </motion.div>

        {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card glow-border rounded-2xl p-6 group"
            >
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
                <item.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div> */}

          <div className="justify-items-center">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card glow-border rounded-2xl p-6 group"
            >
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
                <item.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
