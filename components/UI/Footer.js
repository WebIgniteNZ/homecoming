"use client";
import { useState } from "react";

import PreRegButton from "../PreRegButton";

import LinksPart from "./Header/LinksPart";

export default function Footer() {
  const [open, setOpen] = useState(false);
  const today = Date.now();
  const dayX = new Date(Date.UTC(2024, 4, 1, 3, 0, 0)).getTime();
  return (
    <footer className="bg-black w-full py-5 lg:py-10 hidden lg:block">
      <div className="wrapper  ">
        <div className="flex lg:h-16  lg:gap-14 justify-between lg:justify-center items-center  flex-shrink-0 uppercase  w-full">
          <div className="lg:hidden">
            <PreRegButton />
          </div>

          <ul className="hidden  gap-2 lg:gap-5 2xl:gap-14 font-bold hover:*:text-pink  lg:flex uppercase  justify-between ">
            <LinksPart desktop />
          </ul>

          <div className="lg:flex gap-2 lg:gap-5 xl:gap-10  items-center hidden">
            <PreRegButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
