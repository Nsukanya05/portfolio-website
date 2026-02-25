import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Programming",
    skills: ["Python", "Java", "C"],
  },
  {
    category: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "React"],
  },
  {
    category: "Data Science",
    skills: ["Data Analysis", "Regression Models", "Preprocessing"],
  },
  {
    category: "Cybersecurity",
    skills: ["Firewall Basics", "Honeypots", "Network Security"],
  },
  {
    category: "Soft Skills",
    skills: ["Communication", "Presentation", "Problem Solving", "Critical Thinking", "Quick Learner", "Management"],
  },
];

const Skills = () => (
  <SectionWrapper id="skills">
    <SectionTitle title="Skills" subtitle="Technologies and tools I work with" />
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillGroups.map((group, gi) => (
        <motion.div
          key={group.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 * gi }}
          className="glass-card p-6 hover-glow group"
        >
          <h4 className="font-display font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
            {group.category}
          </h4>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default Skills;
