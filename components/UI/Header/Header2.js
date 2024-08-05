"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import PreRegButton from "../../PreRegButton";
import Socials from "../../Socials";
import MobileLinks from "../MobileLinks";
import styles from "./Header.module.scss";
export default function Header2() {
  const pathname = usePathname();
  const handle = pathname !== "/" && pathname.split("/")?.[1];
  const [open, setOpen] = useState(false);
  const today = Date.now();
  const dayX = new Date(Date.UTC(2024, 4, 1, 3, 0, 0)).getTime();
  return (
    <>
      <div className="wrapper  w-full pt-[clamp(20px,2.5%,60px)] z-20 relative">
        <div className="flex lg:h-16  justify-between items-center  flex-shrink-0 uppercase  w-full">
          <div className="lg:hidden">{handle}</div>

          <button
            onClick={() => {
              setOpen(!open);
            }}
            className={`${styles.burger} ${
              open ? styles["is-open"] : ""
            } lg:hidden relative z-30 `}>
            <div className={styles["line-top"]}></div>
            <div className={styles["line-middle"]}></div>
            <div className={styles["line-bottom"]}></div>
          </button>

          <ul className="hidden  gap-2 lg:gap-5 xl:gap-10 font-bold hover:*:text-pink  lg:flex uppercase  justify-between ">
            <Socials />
          </ul>
          <Link
            href="/"
            className="w-[10vw] h-auto justify-center absolute left-1/2 bottom-0 -translate-x-1/2 hidden lg:flex">
            <Image width={228} height={80} src="/assets/logo-small.png" alt="Juicy Fest Logo" />
          </Link>
          <div className="lg:flex gap-2 lg:gap-5 xl:gap-10 items-center hidden">
            <PreRegButton />
          </div>
        </div>
        <div
          className={`lg:hidden flex flex-col items-center  fixed h-svh top-0 right-0 z-10 gradient-bg w-full transition-all pt-20 p-8 gap-5 ${
            open ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}>
          <MobileLinks
            onClick={() => {
              setOpen(false);
            }}
          />
          {dayX < today ? (
            <Link
              href={"/buy-tickets"}
              className="w-max p-4 rounded-md bg-pink leading-none font-bold text-white uppercase transition-all hover:text-pink hover:bg-white">
              Buy Tickets
            </Link>
          ) : (
            <a
              href={"https://arep.co/p/juicyfest-2025-1"}
              className="w-max p-4 rounded-md bg-pink leading-none font-bold text-white uppercase transition-all hover:text-pink hover:bg-white">
              pre-reg
            </a>
          )}

          <Socials />
        </div>
      </div>
    </>
  );
}
