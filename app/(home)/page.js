"use client";
import axios from "axios";
import { motion } from "framer-motion";

import Image from "next/image";
import { useEffect, useState } from "react";
import Dropdown from "../../components/Dropdown";
const items = {
  Australia: {
    locations: ["Queensland", "New South Wales", "Western Australia", "Victoria"],
  },
  "New Zealand": {
    locations: ["CHRISTCHURCH", "WELLINGTON", "TAURANGA", "AUCKLAND"],
  },
};

const countries = [
  "Samoa",
  "	Fiji",
  "	Rarotonga",
  "	New Zealand",
  "	Australia",
  "Tonga",
  "	Other Country",
];
const tickets_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "more"];
export default function Page() {
  const [submitted, setSumbitted] = useState(false);
  const [country, setCountry] = useState();
  const [tickets, setTickets] = useState();
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

    await axios
      .post("/api/arep-create", {
        email: formData.get("emailr"),
        fname: formData.get("fname"),
        lname: formData.get("lname"),
        tag: formData.get("invite")?.toLowerCase(),
        country,
        location,
      })
      .then((res) => {
        if (res.status === 200) {
          setSumbitted(true);
          // localStorage.setItem("submitDate", new Date().toISOString());
          console.log(res.data);
        }
        if (res.status === 500) {
          alert("Whoops,something went wrong:(");
        }
      });
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
    <div className="w-screen  lg:h-screen lg:overflow-hidden  relative p-5 lg:p-10 xl:p-20 ">
      {/* <Header /> */}
      <div className="w-full h-full flex flex-col items-center border-2 border-mustard">
        <div className="flex flex-col items-center gap-3 justify-center h-1/2 flex-grow  max-h-full w-full  relative px-5 xl:px-10">
          <div className="flex flex-col lg:flex-row items-center w-full gap-5 xl:gap-10 xl:justify-evenly lg:max-h-svh  my-auto py-5  ">
            <div className="flex flex-col items-center max-lg:h-1/4 flex-shrink relative pt-10">
              <Image
                className="pointer-events-none absolute top-[10%] left-1/2 object-contain -translate-x-1/2 -translate-y-1/4 w-[105%] max-w-[unset] "
                loading="eager"
                sizes="(min-width:1024px) 50vw,100vw"
                fetchPriority="high"
                priority
                width={970}
                height={476}
                src={"/assets/flag.png"}
                alt="pattern"
              />
              <div className="flex w-full lg:w-[75%] items-end relative">
                <Image
                  className="pointer-events-none relative "
                  loading="eager"
                  sizes="(min-width:1024px) 50vw,90vw"
                  fetchPriority="high"
                  priority
                  width={900}
                  height={534}
                  src={"/assets/artists.png"}
                  alt="Artists: Maoli, Fiji, J Boog"
                />
                <div className="grid grid-cols-3 w-[110%] mx-auto z-10 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[20%] ">
                  <div className="artist-badge">Maoli</div>
                  <div className="artist-badge">figi</div>
                  <div className="artist-badge">j boog</div>
                </div>
              </div>
              <h1 className="breathing text-[clamp(36px,4.4vw,88px)] pt-[7%] text-mustard gold-shadow-big relative">
                Home Coming
                <span className="text-[clamp(12px,1.8vw,28px)] absolute left-0 bottom-0 translate-y-[90%] font-germania uppercase ">
                  + MORE SPECIAL GUESTS TO BE ANNOUNCED
                </span>
              </h1>
              <p className="text-[clamp(24px,2.2vw,50px)] uppercase leading-none pt-5 lg:pt-10 white-shadow">
                14-15 September
              </p>
              <p className="text-[clamp(26px,2.2vw,54px)] uppercase leading-none white-shadow">
                Republic of fiji
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ delay: 0.7 }}
              animate={{ opacity: 1 }}
              className="w-full lg:max-w-[560px] flex-grow">
              <div className="w-full bg-mustard rounded-t-xl uppercase     lg:text-[clamp(20px,2vw,36px)] py-3  px-4 lg:py-5 flex justify-center items-center text-center  leading-none ">
                Sign up for tickets and more info
              </div>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 lg:gap-4 bg-[#343434] p-4 xl:p-8 rounded-b-[10px]  w-full  mx-auto lg:text-3xl   text-xl  *:placeholder:text-white/75 relative z-20">
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
                      placeholder="First Name"
                      className="h-12 lg:h-16 bg-black/40  rounded-[10px]  w-full  px-3 xl:px-6 placeholder:uppercase placeholder:text-white text-mustard caret-mustard uppercase outline-none "
                      type="text"
                      name="fname"
                      required
                    />
                    <input
                      id="name"
                      placeholder="Last name"
                      className="h-12 lg:h-16 bg-black/40  rounded-[10px]  w-full  px-3 xl:px-6 placeholder:uppercase placeholder:text-white text-mustard caret-mustard uppercase outline-none "
                      type="text"
                      name="lname"
                      required
                    />
                    <input
                      id="age"
                      placeholder="Age"
                      className=" h-12 lg:h-16 rounded-[10px]  bg-black/40 w-full  px-3 xl:px-6 placeholder:uppercase placeholder:text-white text-mustard caret-mustard uppercase outline-none "
                      type="text"
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

                    <button
                      type="submit"
                      disabled={submitted}
                      className="bg-white text-center h-14  w-full  rounded-lg rounded-bl-lg text-black lg:text-40 px-3 xl:px-6  lg:px-8 flex-shrink-0 uppercase   transition-all hover:text-white hover:bg-pink ">
                      <span className="relative top-0.5">
                        {submitted ? "Thank You for application" : "Pre-Register Now"}
                      </span>
                    </button>
                  </>
                ) : (
                  <p className="text-3xl lg:text-40 leading-none  tracking-[2%] text-center uppercase text-balance max-w-[710px] py-5 ">
                    You will be one of the first to receive updates and announcements for Home
                    Coming &apos;25. 📢🎉
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
