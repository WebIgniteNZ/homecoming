"use client";

export default function PreRegButton({ children }) {
  return (
    <a
      href={process.env.NEXT_PUBLIC_LINK}
      // onClick={openClick}
      className={`${
        children ? "w-full  mx-auto  flex-shrink-0 xl:text-2xl xl:px-8" : "w-max"
      } p-4  bg-pink leading-none font-bold text-white uppercase transition-all hover:text-pink hover:bg-white`}>
      Buy Tickets
    </a>
  );
}
