"use client";
import { motion } from "framer-motion";
import MobileLinks from "../../components/UI/MobileLinks";

export default function Tickets() {
  return (
    <div className="relative z-10 flex flex-col w-full lg:grid grid-cols-[clamp(200px,25%,300px),1fr]  gap-10 ">
      <div className="hidden lg:block sticky top-5 h-max">
        <MobileLinks />
      </div>
      <motion.div
        key="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-full flex flex-col lg:h-full lg:flex-grow bg-white rounded-10 p-4 2xl:p-8 gap-10"></motion.div>
    </div>
  );
}
