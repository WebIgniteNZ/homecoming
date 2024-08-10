"use client";
import axios from "axios";
import { motion } from "framer-motion";

import Image from "next/image";
import { useEffect, useState } from "react";
import Dropdown from "../../components/Dropdown";
import Header from "../../components/UI/Header/Header";
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
    <div className="w-screen  lg:h-screen lg:overflow-hidden  relative p-5 ">
      <Header />
      <div className="w-full h-full flex flex-col items-center ">
        <div className="flex flex-col items-center gap-3 justify-center h-1/2 flex-grow  max-h-full w-full  relative ">
          <div className="flex flex-col lg:flex-row items-center w-full gap-5 xl:gap-10 xl:justify-evenly lg:max-h-svh  my-auto   ">
            <div className="flex flex-col items-center max-lg:h-1/4 flex-shrink relative  w-full lg:w-[35%] max-w-[575px]">
              <div className="poster">
                <div className="artists">
                  <Image
                    className="pointer-events-none relative -translate-y-[5%] "
                    loading="eager"
                    sizes="(min-width:1024px) 50vw,90vw"
                    fetchPriority="high"
                    priority
                    width={686}
                    height={769}
                    src={"/assets/artists.png"}
                    alt="Artists: Maoli, Fiji, J Boog"
                  />
                  <div className="text">
                    <Image
                      className="pointer-events-none relative "
                      loading="eager"
                      sizes="(min-width:1024px) 50vw,90vw"
                      fetchPriority="high"
                      priority
                      width={650}
                      height={454}
                      src={"/assets/text.png"}
                      alt="Homecoming 24"
                    />
                  </div>
                </div>
              </div>

              {/* <p className="text-[clamp(12px,1.7vw,20px)] uppercase text-mustard leading-none ">
                all ages event
              </p> */}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ delay: 0.7 }}
              animate={{ opacity: 1 }}
              className="w-full lg:max-w-[560px] flex-grow">
              <div className="w-full bg-mustard rounded-t-xl uppercase     lg:text-[clamp(12px,1.5vw,20px)] py-3  px-4 lg:py-5 flex justify-center items-center text-center  leading-none ">
                Sign up for tickets and more info
              </div>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 lg:gap-4 bg-[#343434] p-4 xl:p-8 rounded-b-[10px]  w-full  mx-auto lg:text-[20px]   text-xs *:placeholder:text-white/75 relative z-20">
                {!submitted ? (
                  <>
                    <input
                      id="emails"
                      placeholder="quantity"
                      className="absolute opacity-0 w-0 h-0 bottom-0 pointer-events-none "
                      type="text"
                      name="check"
                    />
                    <input
                      id="email_real"
                      placeholder="email"
                      className="  h-12 lg:h-16 bg-black/40  rounded-[10px]  w-full  px-3 xl:px-6 placeholder:uppercase placeholder:text-white text-mustard caret-mustard uppercase outline-none "
                      type="email"
                      name="emailr"
                      required
                    />

                    <input
                      id="name"
                      placeholder="Name"
                      className="h-12 lg:h-16 bg-black/40  rounded-[10px]  w-full  px-3 xl:px-6 placeholder:uppercase placeholder:text-white text-mustard caret-mustard uppercase outline-none "
                      type="text"
                      name="name"
                      required
                    />
                    <input
                      id="phone"
                      placeholder="Phone"
                      className="h-12 lg:h-16 bg-black/40  rounded-[10px]  w-full  px-3 xl:px-6 placeholder:uppercase placeholder:text-white text-mustard caret-mustard uppercase outline-none "
                      type="phone"
                      name="phone"
                      required
                    />
                    <input
                      id="age"
                      placeholder="Age"
                      className=" h-12 lg:h-16 rounded-[10px]  bg-black/40 w-full  px-3 xl:px-6 placeholder:uppercase placeholder:text-white text-mustard caret-mustard uppercase outline-none "
                      type="number"
                      min={0}
                      max={130}
                      name="age"
                    />
                    <Dropdown
                      triggerEl={
                        <div
                          className={` cursor-pointer  h-12 lg:h-16 rounded-[10px] bg-black/40 w-full  px-3 xl:px-4 flex items-center uppercase `}>
                          {country ?? "Coming from where"}
                        </div>
                      }>
                      {countries.map((c) => (
                        <div
                          key={c}
                          onClick={() => {
                            setCountry(c);
                          }}
                          className="px-4  py-0.5 lg:py-2 leading-none cursor-pointer hover:bg-white/40 text-md lg:text-2xl uppercase">
                          {c}
                        </div>
                      ))}
                    </Dropdown>

                    <Dropdown
                      triggerEl={
                        <div className="w-full  cursor-pointer h-12 lg:h-16   rounded-[10px] bg-black/40  px-3 xl:px-6 flex items-center uppercase">
                          <p
                            className={`whitespace-nowrap overflow-hidden overflow-ellipsis uppercase `}>
                            {tickets ?? " How many tickets do you want?"}
                          </p>
                        </div>
                      }>
                      {tickets_list.map((t) => (
                        <div
                          className="px-4 py-1 leading-none cursor-pointer hover:bg-white/40 text-md lg:text-2xl"
                          key={t}
                          onClick={() => setTickets(t)}>
                          {t}
                        </div>
                      ))}
                    </Dropdown>
                    {error && <p className="text-center text-red-500">{error}</p>}
                    <button
                      type="submit"
                      disabled={submitted}
                      className="bg-white text-center h-14  w-full  rounded-lg rounded-bl-lg text-black lg:text-[20px] px-3 xl:px-6  lg:px-8 flex-shrink-0 uppercase   transition-all hover:text-white hover:bg-mustard ">
                      <span className="relative top-0.5">
                        {submitted ? "Thank You for application" : "Pre-Register Now"}
                      </span>
                    </button>
                  </>
                ) : (
                  <p className="text-3xl lg:text-40 leading-none  tracking-[2%] text-center uppercase text-balance max-w-[710px] py-5 ">
                    You will be one of the first to receive updates and announcements for Home
                    Coming &apos;24. 📢🎉
                  </p>
                )}
              </form>
              {/* <motion.div
                initial={{ y: 100, opacity: 0 }}
                transition={{ delay: 1 }}
                animate={{ y: 0, opacity: 1 }}
                className="lg:hidden  w-max mt-6 mx-auto flex-shrink-0">
                <Socials />
              </motion.div> */}
            </motion.div>
          </div>
          {/* <motion.div
            initial={{ y: 100, x: "-50%" }}
            transition={{ delay: 1 }}
            animate={{ y: 0, x: "-50%" }}
            className="hidden lg:block absolute desktop:left-1/3 1440:left-1/2 bottom-10 -translate-x-1/2 w-max">
            <Socials />
          </motion.div> */}
        </div>
      </div>
    </div>
  );
}
