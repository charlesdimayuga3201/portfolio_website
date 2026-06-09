import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Cloud, Monitor, Server, Award, CheckCircle } from "lucide-react";

const certs = [
  {
    title: "Cisco CCNA",
    org: "Cisco",
    icon: Server,
    desc: "Network fundamentals, IP connectivity, security fundamentals, and automation.",
    date: "2023",
  },
  {
    title: "AWS Cloud Practitioner",
    org: "Amazon Web Services",
    icon: Cloud,
    desc: "Cloud concepts, core AWS services, security, architecture, pricing, and support.",
    date: "2023",
  },
  {
    title: "Google IT Support",
    org: "Google",
    icon: Monitor,
    desc: "Technical support, networking, operating systems, system administration, and security.",
    date: "2022",
  },
  {
    title: "CompTIA Security+",
    org: "CompTIA",
    icon: Shield,
    desc: "Threats, vulnerabilities, cryptography, identity management, and risk mitigation.",
    date: "2022",
  },
  {
    title: "CompTIA Network+",
    org: "CompTIA",
    icon: Server,
    desc: "Networking concepts, infrastructure, network operations, security, and troubleshooting.",
    date: "2021",
  },
  {
    title: "CompTIA A+",
    org: "CompTIA",
    icon: Award,
    desc: "Hardware, software, networking, security, mobile devices, and troubleshooting.",
    date: "2020",
  },
];

export default function CertificationsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Credentials
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground leading-relaxed">
            Industry-recognized certifications that validate my expertise across
            networking, cloud, and cybersecurity domains.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card glow-border rounded-2xl p-6 group"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="inline-flex rounded-xl bg-accent/10 p-3 text-accent transition-colors group-hover:bg-accent/20">
                  <cert.icon size={24} />
                </div>
                <span className="text-xs font-medium text-muted-foreground">{cert.date}</span>
              </div>
              <h3 className="text-lg font-bold text-foreground">{cert.title}</h3>
              <p className="text-sm font-medium text-muted-foreground">{cert.org}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cert.desc}</p>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-primary">
                <CheckCircle size={14} />
                Verified
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
