import { motion } from "framer-motion";

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12 md:mb-16">
    <motion.h2
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="font-display text-3xl md:text-4xl font-bold gradient-text inline-block"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <p className="text-muted-foreground mt-3 max-w-2xl">{subtitle}</p>
    )}
  </div>
);

export default SectionTitle;
