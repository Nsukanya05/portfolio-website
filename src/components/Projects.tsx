import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { BarChart3, Globe, ShieldCheck } from "lucide-react";

const projects = [
  {
    icon: BarChart3,
    title: "Sales Prediction Model",
    desc: "Built regression model using Big Mart dataset with preprocessing and feature engineering.",
    tags: ["Python", "Data Science", "ML"],
  },
  {
    icon: Globe,
    title: "Responsive Resume Website",
    desc: "Developed responsive website using HTML, CSS, JavaScript and Bootstrap.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Internship Work",
    desc: "Worked with firewall, honeypots and security tools for enterprise-grade protection.",
    tags: ["Cybersecurity", "Firewall", "Honeypots"],
  },
];

const Projects = () => (
  <SectionWrapper id="projects">
    <SectionTitle title="Projects" subtitle="Some of the things I've built" />
    <div className="grid md:grid-cols-3 gap-6">
      {projects.map((project, i) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 * i }}
          className="glass-card p-6 hover-glow group flex flex-col"
        >
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
            <project.icon className="w-6 h-6 text-primary" />
          </div>
          <h4 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h4>
          <p className="text-sm text-muted-foreground mb-4 flex-1">{project.desc}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default Projects;
