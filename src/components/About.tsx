import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { Code, Database, Shield } from "lucide-react";
import sukanyaPhoto from "@/assets/sukanya-photo.jpeg";

const highlights = [
  { icon: Code, label: "Web Development", desc: "React, JavaScript, Bootstrap" },
  { icon: Database, label: "Data Science", desc: "Python, Regression, Analysis" },
  { icon: Shield, label: "Cybersecurity", desc: "Firewalls, Honeypots, Network" },
];

const About = () => (
  <SectionWrapper id="about">
    <SectionTitle title="About Me" subtitle="Get to know me better" />
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-primary/30 shadow-[0_0_30px_hsl(var(--primary)/0.25)]"
        >
          <img src={sukanyaPhoto} alt="Sukanya Nayak" className="w-full h-full object-cover" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground leading-relaxed text-base md:text-lg text-center"
        >
          Dedicated and motivated B.Tech student in Computer Science (Data Science) with strong interest in data analysis, web development and cybersecurity. Passionate about learning new technologies and building impactful real-world projects. Seeking internship and placement opportunities to apply skills and grow professionally.
        </motion.p>
      </div>

      <div className="grid gap-4">
        {highlights.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i }}
            className="glass-card p-4 flex items-center gap-4 hover-glow"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <item.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-foreground">{item.label}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default About;
