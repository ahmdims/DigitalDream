import { motion } from "framer-motion";

export default function PoinDesktop() {
  const delay = 0.9;
  const poins = [
    { id: 1, name: "Experienced Designer" },
    { id: 2, name: "Your satisfactions is our priority" },
    { id: 3, name: "Unlimited design requests & revisions" },
  ];
  return (
    <div className="hidden lg:flex items-center justify-center gap-[1.5rem]">
      {poins.map((poin, index) => (
        <motion.div
          key={poin.id}
          whileInView={{ y: [25, 0], opacity: [0, 1] }}
          transition={{
            delay: delay + index * 0.1,
            duration: 1.5,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-[0.5rem]"
        >
          <i className="bi bi-check-circle text-primary text-[1rem]"></i>
          <p className="text-[1rem] text-[#676767] text-center">{poin.name}</p>
        </motion.div>
      ))}
    </div>
  );
}
