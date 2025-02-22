"use client";
import { useState } from "react";
import PreRegButton from "../../PreRegButton";

import MobileLinks from "../MobileLinks";
import styles from "./Header.module.scss";
import LinksPart from "./LinksPart";
export default function Header() {
  const [open, setOpen] = useState(false);
  const targetDate = Date.UTC(2024, 7, 12, 7, 0, 0);
  const showBuyTickets = Date.now() >= targetDate;

  return (
    <nav className="max-lg:fixed top-0 left-0 z-20 w-full">
      <div className="wrapper  w-full pt-[clamp(20px,2.5%,60px)] z-20 relative">
        <div className="flex lg:h-16  lg:gap-14 justify-between lg:justify-center items-center  flex-shrink-0 uppercase  w-full">
          <div className="lg:hidden">
            <PreRegButton />
          </div>
          <button
            onClick={() => {
              setOpen(!open);
            }}
            className={`${styles.burger} ${
              open ? styles["is-open"] : ""
            } lg:hidden relative z-30  `}>
            <div className={styles["line-top"]}></div>
            <div className={styles["line-middle"]}></div>
            <div className={styles["line-bottom"]}></div>
          </button>
          <ul className="hidden  gap-2 lg:gap-5 2xl:gap-14 font-bold hover:*:text-pink  lg:flex uppercase  justify-between ">
            <LinksPart desktop />
          </ul>

          <div className="lg:flex gap-2 lg:gap-5 xl:gap-10  items-center hidden">
            {showBuyTickets && <PreRegButton />}
          </div>
        </div>
        <div
          className={`lg:hidden flex flex-col items-center  fixed h-svh top-0 right-0 z-10 gradient-bg w-full transition-all pt-14 p-8 gap-5 ${
            open ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}>
          <MobileLinks
            onClick={() => {
              console.log("click");
              setOpen(false);
            }}
          />
        </div>
      </div>
    </nav>
  );
}
