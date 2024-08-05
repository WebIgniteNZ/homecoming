"use client";
import { motion } from "framer-motion";
import Header2 from "../../components/UI/Header/Header2";
import MobileLinks from "../../components/UI/MobileLinks";
import Tabs from "./Tabs";

export default function layout({ children }) {
  return (
    <section className="relative min-h-svh  flex flex-col w-screen  gap-5 xl:gap-12">
      <Header2 />

      <div className="wrapper flex flex-grow h-1/2 flex-shrink-0 z-0 pb-10 ">
        <div className="relative z-10 flex flex-col w-full lg:grid grid-cols-[clamp(200px,25%,300px),1fr]  gap-10 ">
          <div className="hidden lg:block sticky top-5 h-max">
            <MobileLinks />
          </div>
          <motion.div
            key="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full flex flex-col lg:h-full lg:flex-grow bg-white rounded-10 p-4 2xl:p-8 gap-6">
            <Tabs />
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
