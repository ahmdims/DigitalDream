import { motion } from "framer-motion";
export default function HeroParagraph() {
  return (
    <motion.p
      whileInView={{ y: [25, 0], opacity: [0, 1] }}
      transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="text-primary text-[1rem] text-center font-normal leading-[28px] xl:leading-[28px]"
    >
      If you're looking to achieve your business goals through delightful
      experiences and engaging design, then you're in the right place.
    </motion.p>
  );
}
