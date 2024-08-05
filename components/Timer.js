"use client";
import { useEffect, useState } from "react";

import { calculateTimeLeft } from "../utils/helpers";
import TimerItem from "./TimerItem";
export default function Timer() {
  const today = Date.now();
  const dayX = new Date(Date.UTC(2024, 4, 1, 3, 0, 0)).getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(dayX));

  useEffect(() => {
    let timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(dayX));
    }, 60000);

    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <div className=" flex items-center  mb-2 relative ">
      {dayX < today ? (
        <p></p>
      ) : (
        <>
          <div className=" text-white  grid grid-cols-3 gap-2 lg:gap-3 w-full">
            <TimerItem time={timeLeft.days} text="D" />

            <TimerItem time={timeLeft.hours} text="H" />

            <TimerItem time={timeLeft.minutes} text="M" />
          </div>
        </>
      )}
    </div>
  );
}
