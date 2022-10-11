import { motion } from "framer-motion";

export default function Pulse() {
  const variants = {
    initial: { scale: 0, opacity: 0.6 },
    animate: (index: number) => ({
      scale: 1.5,
      opacity: 0,
      transition: {
        duration: 2.3,
        delay: index * 0.4,
        repeat: Infinity,
      },
    }),
  };

  return (
    <motion.div className="relative flex items-center justify-center w-8 h-8 mr-3">
      {Array(4)
        .fill(null)
        .map((_, index) => {
          return (
            <motion.div
              key={index}
              variants={variants}
              initial="initial"
              animate="animate"
              custom={index}
              className="w-8 h-8 absolute rounded-[100px] bg-[#008A1B]"
            />
          );
        })}
    </motion.div>
  );
}
