import { motion } from "framer-motion";

export default function PoinMobile() {
  return (
    <motion.div
      whileInView={{ y: [25, 0], opacity: [0, 1] }}
      transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="flex justify-center items-center gap-[0.5rem] lg:hidden"
    >
      <i className="bi bi-check-circle text-primary text-[1rem]"></i>
      <p className="text-[1rem] text-[#676767] text-center">
        Unlimited design requests & revisions
      </p>
    </motion.div>
  );
}
