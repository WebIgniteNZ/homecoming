"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
const items = {
  Australia: {
    locations: ["Queensland", "New South Wales", "Western Australia", "Victoria"],
  },
  "New Zealand": {
    locations: ["CHRISTCHURCH", "WELLINGTON", "TAURANGA", "AUCKLAND"],
  },
};
export default function PreRegForm({ isPopup = false, afterSubmit = () => {} }) {
  const [submitted, setSumbitted] = useState(false);
  const [country, setCountry] = useState();
  const [location, setLocation] = useState();
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
          afterSubmit();
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
    <>
      <div className="w-full bg-pink rounded-t-xl darma-e uppercase font-bold text-xl lg:text-[30px] py-2  px-3 lg:py-3 flex justify-center items-center text-center win-text-shadow leading-none ">
        Win 2 vip tickets for juicyfest 2025!
      </div>
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col gap-2 lg:gap-4 p-3 xl:p-5 rounded-b-[10px]  w-full  mx-auto lg:text-[30px]  darma-e text-2xl  *:placeholder:text-white/75 relative z-20 ${
          !isPopup ? "bg-black/50" : "bg-black/90"
        }`}>
        {!submitted ? (
          <>
            <input
              id="emails"
              placeholder="quantity"
              className="absolute opacity-0 w-0 h-0 bottom-0 pointer-events-none BORDER_black"
              type="text"
              name="check"
            />
            <input
              id="email_real"
              placeholder="email"
              className="border border-white h-12 rounded-[10px] rounded-tr-lg bg-transparent w-full  px-3  placeholder:uppercase placeholder:text-white text-mustard caret-mustard uppercase outline-none "
              type="email"
              name="emailr"
              required
            />

            <input
              id="name"
              placeholder="First Name"
              className="border border-white  h-12 rounded-[10px]  bg-transparent w-full  px-3  placeholder:uppercase placeholder:text-white text-mustard caret-mustard uppercase outline-none "
              type="text"
              name="fname"
              required
            />
            <input
              id="name"
              placeholder="Last name"
              className="border border-white  h-12 rounded-[10px] bg-transparent w-full  px-3  placeholder:uppercase placeholder:text-white text-mustard caret-mustard uppercase outline-none "
              type="text"
              name="lname"
              required
            />

            <div className="w-full grid grid-cols-2 gap-4 uppercase">
              <Dropdown
                triggerEl={
                  <div
                    className={`border border-white cursor-pointer  h-12 rounded-[10px] bg-transparent w-full  px-3 xl:px-4 flex items-center uppercase ${
                      country ? "text-white" : "text-white/75"
                    }`}>
                    {country ?? "Country"}
                  </div>
                }>
                <div
                  onClick={() => {
                    setCountry("Australia");
                    setLocation(items?.["Australia"]?.locations[0]);
                  }}
                  className="px-4 py-1 leading-none cursor-pointer hover:bg-white/40 text-2xl uppercase">
                  Australia
                </div>
                <div
                  className="px-4 py-1 leading-none cursor-pointer hover:bg-white/40 text-2xl uppercase"
                  onClick={() => {
                    setCountry("New Zealand");
                    setLocation(items?.["New Zealand"]?.locations[0]);
                  }}>
                  New Zealand
                </div>
              </Dropdown>
              <Dropdown
                triggerEl={
                  <div className="w-full border border-white  cursor-pointer h-12  rounded-[10px] bg-transparent  px-3  flex items-center uppercase">
                    <p
                      className={`whitespace-nowrap overflow-hidden overflow-ellipsis uppercase ${
                        location ? "text-white" : "text-white/75"
                      }`}>
                      {location ?? "Location"}
                    </p>
                  </div>
                }>
                {items?.[country]?.locations &&
                  items?.[country]?.locations.map((location) => (
                    <div
                      className="px-4 py-1 leading-none cursor-pointer hover:bg-white/40 text-2xl"
                      key={location}
                      onClick={() => setLocation(location)}>
                      {location}
                    </div>
                  ))}
              </Dropdown>
            </div>
            <input
              id="invite"
              placeholder="Who do you wanna see?"
              className="border border-white h-12 rounded-[10px]  bg-transparent w-full  px-3  placeholder:uppercase placeholder:text-white text-mustard caret-mustard uppercase outline-none "
              type="text"
              name="invite"
            />
            <button
              type="submit"
              disabled={submitted}
              className="bg-white text-center h-12  w-full  rounded-lg rounded-bl-lg text-black lg:text-[30px] px-3   flex-shrink-0 uppercase  darma-e transition-all hover:text-white hover:bg-pink ">
              <span className="relative top-0.5">
                {" "}
                {submitted ? "Thank You for application" : "STAY UPDATED"}
              </span>
            </button>
          </>
        ) : (
          <p className="text-3xl lg:text-40 leading-none  tracking-[2%] text-center uppercase text-balance max-w-[710px] py-5 darma-e">
            You will be one of the first to receive updates and announcements for JuicyFest
            &apos;25. 📢🎉
          </p>
        )}
      </form>
    </>
  );
}
