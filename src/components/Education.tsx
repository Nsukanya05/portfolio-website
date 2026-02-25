import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech CSE (Data Science)",
    school: "GIET University, Gunupur",
    year: "2023 – Present",
    score: "CGPA: 8.53",
  },
  {
    degree: "Intermediate (12th)",
    school: "Kendriya Vidyalaya No.1, Sambalpur",
    year: "Completed",
    score: "80%",
  },
  {
    degree: "Matriculation (10th)",
    school: "Kendriya Vidyalaya No.1, Sambalpur",
    year: "Completed",
    score: "94.4%",
  },
];

const Education = () => (
  <SectionWrapper id="education">
    <SectionTitle title="Education" subtitle="My academic journey" />
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

      <div className="space-y-8">
        {education.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 * i }}
            className="relative pl-16 md:pl-20"
          >
            {/* Dot */}
            <div className="absolute left-4 md:left-6 top-2 w-4 h-4 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.5)]" />

            <div className="glass-card p-5 hover-glow">
              <div className="flex items-start justify-between flex-wrap gap-2">
                <div>
                  <h4 className="font-display font-semibold text-foreground flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    {item.degree}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">{item.school}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-muted-foreground">{item.year}</span>
                  <p className="text-sm font-semibold text-primary">{item.score}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default Education;
