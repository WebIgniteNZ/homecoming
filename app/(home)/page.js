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
