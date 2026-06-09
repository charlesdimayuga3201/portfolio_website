import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <a href="#home" className="text-lg font-bold text-gradient">
              Charles.Codes
            </a>
            <p className="mt-1 text-sm text-muted-foreground">
              {/* Building the future, one line of code at a time. */}
            </p>
          </div>

          {/* <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#home" className="transition-colors hover:text-foreground">Home</a>
            <a href="#about" className="transition-colors hover:text-foreground">About</a>
            <a href="#projects" className="transition-colors hover:text-foreground">Projects</a>
            <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
          </div> */}

          <div className="flex items-center gap-4">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Charles Dimayuga. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
