"use client";

import { useState } from "react";
import { ticket_links_au, ticket_links_nz } from "../utils/constants";
import { CloseIcon } from "./UI/icons";

export default function PreRegButton({ children }) {
  const today = Date.now();
  const dayX = new Date(Date.UTC(2024, 4, 1, 3, 0, 0)).getTime();
  const [show, setShow] = useState(false);
  const [pickedLink, setPickedLink] = useState(null);
  const closeClick = () => {
    setShow(false);
  };
  const openClick = () => {
    setShow(true);
  };
  return (
    <>
      {dayX < today ? (
        <a
          href={process.env.NEXT_PUBLIC_LINK}
          // onClick={openClick}
          className={`${
            children ? "w-full  mx-auto  flex-shrink-0 xl:text-2xl xl:px-8" : "w-max"
          } p-4  bg-pink leading-none font-bold text-white uppercase transition-all hover:text-pink hover:bg-white`}>
          Buy Tickets
        </a>
      ) : (
        children ?? (
          <a
            href={"https://arep.co/p/juicyfest-2025-1"}
            className="w-max p-4 rounded-md bg-pink leading-none font-bold text-white uppercase transition-all hover:text-pink hover:bg-white">
            pre-reg
          </a>
        )
      )}

      <div
        onClick={(e) => {
          const isBackdrop = e.target.classList.contains("fixed");
          isBackdrop && closeClick();
        }}
        className={`fixed w-screen h-svh z-40 top-0 left-0 bg-black/60 flex justify-center items-center p-5 lg:p-10 overflow-hidden transition-all ${
          show ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}>
        <div className="bg-white w-full lg:w-max rounded-10 p-5 lg:p-8 xl:py-10 xl:px-8 ">
          <div className="flex items-center justify-between gap-4 pb-5">
            <p className="text-pink font-black text-xl lg:text-3xl uppercase">Tickets on sale</p>{" "}
            <button
              onClick={closeClick}
              className="w-8 h-8 flex justify-center items-center rounded-md bg-pink flex-shrink-0 group">
              <CloseIcon className="group-hover:rotate-180 transition-all" />
            </button>
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
            className={`w-full block p-4 rounded-md  leading-none font-bold text-white uppercase transition-all  hover:bg-pink/80 text-center   ${
              !pickedLink
                ? "pointer-events-none cursor-not-allowed bg-gray-500"
                : "cursor-pointer bg-pink"
            }`}>
            buy tickets
          </a>
        </div>
      </div>
    </>
  );
}
