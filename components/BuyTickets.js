"use client";
import { useState } from "react";
import { ticket_links_au, ticket_links_nz } from "../utils/constants";

export default function BuyTickets() {
  const [show, setShow] = useState(false);
  const [pickedLink, setPickedLink] = useState(null);
  const closeClick = () => {
    setShow(false);
  };
  const openClick = () => {
    setShow(true);
  };
  return (
    <div className="bg-white w-full rounded-10 p-5 lg:p-8 xl:py-10 xl:px-8 ">
      <div className="flex items-center justify-center gap-4 pb-5">
        <p className="text-pink font-black text-xl lg:text-3xl uppercase text-center">
          Tickets on sale
        </p>
      </div>
      <div className="flex items-center gap-2 w-full text-black font-bold uppercase mb-4">
        <p className="flex-shrink-0 ">NZ</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 w-full">
          {ticket_links_nz.map((item) => (
            <button
              className={`border-2 border-black rounded-md px-2 py-3 leading-none w-full text-center font-bold uppercase hover:text-white hover:bg-pink ${
                pickedLink === item.link ? "text-white bg-pink " : ""
              }`}
              key={item.name}
              onClick={() => setPickedLink(item.link)}>
              {item.name}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2 w-full text-black font-bold uppercase mb-4">
        <p className="flex-shrink-0 ">au</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 w-full ">
          {ticket_links_au.map((item) => (
            <button
              key={item.name}
              onClick={() => setPickedLink(item.link)}
              className={`border-2 border-black rounded-md px-2 py-3 leading-none w-full text-center font-bold uppercase hover:text-white hover:bg-pink ${
                pickedLink === item.link ? "text-white bg-pink " : ""
              }`}>
              {item.name}
            </button>
          ))}
        </div>
      </div>
      <a
        tra
        href={pickedLink}
        className={`w-full block p-4 rounded-md bg-pink leading-none font-bold text-white uppercase transition-all  hover:bg-pink/80 text-center   ${
          !pickedLink ? "pointer-events-none cursor-not-allowed bg-gray-500" : "cursor-pointer"
        }`}>
        buy tickets
      </a>
    </div>
  );
}
