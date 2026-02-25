import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const internships = [
  {
    role: "Cyber Security Intern",
    company: "MCL Sambalpur",
    year: "2025",
    desc: "Worked on honeypots, firewall and enterprise security basics.",
  },
  {
    role: "Web Development Intern",
    company: "YHills",
    year: "2024",
    desc: "Built responsive websites using HTML, CSS, JS.",
  },
  {
    role: "Data Science Intern",
    company: "YHills",
    year: "2024",
    desc: "Sales prediction model using regression.",
  },
];

const Internships = () => (
  <SectionWrapper id="internships">
    <SectionTitle title="Internships" subtitle="Professional experience" />
    <div className="grid md:grid-cols-3 gap-6">
      {internships.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 * i }}
          className="glass-card p-6 hover-glow"
        >
          <div className="flex items-center gap-3 mb-3">
            <Briefcase className="w-5 h-5 text-primary" />
            <span className="text-xs text-muted-foreground">{item.year}</span>
          </div>
          <h4 className="font-display font-semibold text-foreground">{item.role}</h4>
          <p className="text-sm text-primary mb-2">{item.company}</p>
          <p className="text-sm text-muted-foreground">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default Internships;
