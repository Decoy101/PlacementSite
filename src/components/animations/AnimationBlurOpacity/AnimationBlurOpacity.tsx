import { motion } from "framer-motion";
import { memo } from "react";

import { AnimationBlurOpacityProps } from "./AnimationBlurOpacity.types";

function AnimationBlurOpacity({ children }: AnimationBlurOpacityProps) {
  return (
    <motion.div
      initial={{ filter: "blur(1px)", transform: "opacity(0)" }}
      animate={{ filter: "blur(0px)", transform: "opacity(1)" }}
      transition={{
        ease: "easeIn",
        filter: {
          duration: 0.2,
        },
        opacity: {
          duration: 0.6,
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export default memo(AnimationBlurOpacity);
