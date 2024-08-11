"use client";
import axios from "axios";

import Image from "next/image";
import { useEffect, useState } from "react";
import Contacts from "../../components/Sections/Contacts";
import HeroSection from "../../components/Sections/Hero/HeroSection";
import Tickets from "../../components/Sections/Hero/Tickets";
import ToPeople from "../../components/Sections/ToPeople";
import { submitForm } from "../../utils/server-actions";

const countries = [
  "Samoa",
  "	Fiji",
  "	Rarotonga",
  "	New Zealand",
  "	Australia",
  "Tonga",
  "	Other Country",
];
const tickets_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, "10 or more"];
export default function Page() {
  const [submitted, setSumbitted] = useState(false);
  const [country, setCountry] = useState();
  const [tickets, setTickets] = useState();
  const [error, setErrorMessage] = useState("");
  const addMergeField = async () => {
    await axios.get("/api/maichimp-add-merge-field");
  };
  const handleSubmit = async (e) => {
    const formData = new FormData(e.target);

    e.preventDefault();
    if (formData.get("check")) {
      console.log(formData.get("check"));
      return;
    }
    setErrorMessage("");
    const submit = await submitForm(formData, country, tickets);
    if (submit === true) {
      setSumbitted(true);
      return;
    }
    if (typeof submit === "string") {
      setErrorMessage(submit);
    }
  };
  useEffect(() => {
    if (window) {
      const submitDate = localStorage?.getItem("submitDate");
      const today = new Date();
      const twentyFourHoursInMilliseconds = 1000 * 60 * 60 * 24;
      const is24HoursPassed = today >= submitDate + twentyFourHoursInMilliseconds;
      setSumbitted(!is24HoursPassed);
    }
  }, []);

  return (
    <>
      <div className="relative">
        <HeroSection />
        <div className="wrapper flex max-md:flex-col justify-center items-center mx-auto relative z-10">
          <div className="flex gap-2">
            <p className="text-[clamp(18px,1.6vw,24px)] text-right leading-none">
              Gate Open:
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
            // onClick={openClick}
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
      {/* <Footer /> */}
    </>
  );
}
