import { motion } from "framer-motion";
export default function Tagline() {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="text-primary text-[32px] md:text-[3.5rem] xl:text-[4rem] leading-tight xl:leading-[72px] text-center font-bold"
    >
      {["Ready", "to", "design", "an", "astounding", "digital", "product?"].map(
        (word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: index * 0.1,
              duration: 1,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
          >
            {word}{" "}
          </motion.span>
        )
      )}
    </motion.h1>
  );
}
