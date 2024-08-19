"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useEffect, useState } from "react";

const ticket_links = [
  {
    id: "ticket-fairy",
    logo: "/assets/ticket-fairy.svg",
    payments: ["visa.svg", "mastercard.svg"],
    link: "https://www.ticketfairy.com/event/home-coming-2024-14sep2024",
    logo_width: 160,
    logo_height: 24,
  },
  {
    id: "ticket-max",
    logo: "/assets/ticket-max.png",
    payments: ["visa.svg", "mastercard.svg", "vodafone.png", "mycash.png"],
    link: "https://www.ticketmax.com.fj/Homecoming",
    logo_width: 160,
    logo_height: 24,
  },
];
export default function TicketsModal({ country = "nz" }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.addEventListener("showBuyModal", (e) => {
      setShow(true);
    });
  }, []);

  return (
    <>
      <div
        onClick={(e) => {
          console.log(e.target);
          if (e.target === e.currentTarget) {
            setShow(false);
          }
        }}
        className={`z-40 fixed top-0 left-0 bg-black/80 transition-all p-5 lg:p-10 xl:p-20 flex justify-center items-center w-dvw h-dvh ${
          show ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}>
        <div className="w-full lg:w-2/3 bg-white rounded-xl p-4 lg:p-8 max-w-[548px] relative">
          <div className="flex justify-center items-center mb-5 relative">
            <p className="font-back text-black text-center uppercase arial-black text-[clamp(18px,2vw,30px)]">
              Select Payment Type
            </p>

            <button
              onClick={() => {
                setShow(false);
              }}
              className=" h-7 w-7 bg-primary flex items-center justify-center font-bold absolute top-1/2 right-0 -translate-y-1/2">
              <XMarkIcon className="w-5 h-5 fill-black stroke-black " />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 ">
            {ticket_links?.map((ticket) => (
              <div
                key={ticket.id}
                className="flex flex-col w-full items-center border-2 border-pink text-black">
                <p className="uppercase arial-black text-center pt-4 px-2 text-[clamp(14px,1.6vw,16px)]">
                  Buy Tickets via
                </p>
                <div className="bg-pink h-12 p-2 relative w-full  flex items-center justify-center my-2">
                  <Image
                    width={ticket.logo_width}
                    height={ticket.logo_height}
                    src={ticket.logo}
                    alt={ticket.id}
                  />
                </div>
                <p className="font-arial text-center">Accepted Payments</p>
                <div className="w-full md:h-10 flex justify-center items-center gap-1 pb-3 p-2 max-md:grid max-md:grid-cols-2 place-content-center place-items-center">
                  {ticket.payments.map((src) => (
                    <img key={src} src={`/assets/${src}`} alt="payment type" />
                  ))}
                </div>
                <a
                  href={ticket.link}
                  className={`w-10/12 md:w-4/5 text-center mt-auto mx-auto mb-4 p-2 py-4 md:p-4  bg-pink leading-none font-bold text-white uppercase transition-all hover:text-pink hover:bg-white cursor-pointer`}>
                  Buy now
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
