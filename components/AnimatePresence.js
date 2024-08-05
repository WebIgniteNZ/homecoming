"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const PageAnimatePresence = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      {/**
       * We use `motion.div` as the first child of `<AnimatePresence />` Component so we can specify page animations at the page level.
       * The `motion.div` Component gets re-evaluated when the `key` prop updates, triggering the animation's lifecycles.
       * During this re-evaluation, the `<FrozenRoute />` Component also gets updated with the new route components.
       */}

      {children}
    </AnimatePresence>
  );
};

export default PageAnimatePresence;
