import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 6371303034",
    href: "tel:+916371303034",
  },
  {
    icon: Mail,
    label: "Email",
    value: "nsukanya05@gmail.com",
    href: "mailto:nsukanya05@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Sukanya Nayak",
    href: "https://linkedin.com/in/sukanya-nayak-b65b02295",
  },
];

const Contact = () => (
  <SectionWrapper id="contact">
    <SectionTitle title="Contact" subtitle="Let's connect" />
    <div className="grid sm:grid-cols-3 gap-6 max-w-3xl">
      {contactItems.map((item, i) => (
        <motion.a
          key={item.label}
          href={item.href}
          target={item.label === "LinkedIn" ? "_blank" : undefined}
          rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 * i }}
          className="glass-card p-6 text-center hover-glow group"
        >
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
            <item.icon className="w-5 h-5 text-primary" />
          </div>
          <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
          <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors break-all">
            {item.value}
          </p>
        </motion.a>
      ))}
    </div>
  </SectionWrapper>
);

export default Contact;
