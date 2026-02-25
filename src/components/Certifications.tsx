import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  "NPTEL — Fundamentals of AI",
  "NPTEL — Privacy & Security in Social Media",
  "NPTEL — Joy of Computing using Python",
  "Accenture — Digital Skills AI",
];

const Certifications = () => (
  <SectionWrapper id="certifications">
    <SectionTitle title="Certifications" subtitle="Courses and achievements" />
    <div className="grid sm:grid-cols-2 gap-4">
      {certs.map((cert, i) => (
        <motion.div
          key={cert}
          initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 * i }}
          className="glass-card p-5 flex items-center gap-4 hover-glow"
        >
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
            <Award className="w-5 h-5 text-accent" />
          </div>
          <span className="text-sm font-medium text-foreground">{cert}</span>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default Certifications;
