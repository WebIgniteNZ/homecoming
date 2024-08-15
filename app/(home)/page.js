"use client";

import Image from "next/image";
import Contacts from "../../components/Sections/Contacts";
import HeroSection from "../../components/Sections/Hero/HeroSection";
import Tickets from "../../components/Sections/Hero/Tickets";
import ToPeople from "../../components/Sections/ToPeople";

export default function Page() {
  return (
    <>
      <div className="relative">
        <HeroSection />
        <div className="wrapper flex max-md:flex-col justify-center items-center mx-auto relative z-10">
          <div className="flex gap-4 items-center">
            <p className="text-[clamp(18px,1.6vw,24px)] text-right leading-none">
              Gates Open:
              <br />
              Time:
            </p>
            <p className="text-[clamp(18px,1.6vw,24px)] text-left leading-none text-mustard ">
              2:30pm
              <br />
              3PM - 10PM
            </p>
          </div>

          <div className="w-2/3 h-0.5 md:h-14 md:w-0.5 flex-shrink-0 max-md:my-5 md:mx-10 bg-white/50"></div>
          <a
            href={process.env.NEXT_PUBLIC_LINK}
            className={` p-4  bg-pink leading-none font-bold text-white uppercase transition-all hover:text-pink hover:bg-white`}>
            Buy Tickets
          </a>
        </div>
        <ToPeople />

        <Image
          className="pointer-events-none object-cover  opacity-100  z-[-1] absolute w-full h-full hidden md:block"
          sizes="100vw"
          fill
          quality={75}
          src={"/assets/bg-min.jpg"}
          alt="pattern"
        />
        <div className="bg bg-gradient-to-t from-[#0b0b0b] to-transparent h-1/2 absolute bottom-0 left-0 w-full z-0 hidden md:block"></div>
      </div>
      <div className="relative">
        <Tickets />
        <Contacts />
        <Image
          className="pointer-events-none object-cover  opacity-100  z-[-1] absolute w-full h-full"
          sizes="100vw"
          fill
          quality={75}
          src={"/assets/bg-min.jpg"}
          alt="pattern"
        />
      </div>
    </>
  );
}
