export default function TimerItem({ time, text }) {
  return (
    <p className="text  leading-[0.9] class">{`${time.length > 1 ? time : 0 + time}${text}`}</p>
  );
}

///old one
{
  /* <div className="flex flex-col justify-center items-center  gap-1 py-6 px-7  rounded-xl timer-box">
      <p className="text text-6xl leading-[0.9]">{time.length > 1 ? time : 0 + time}</p>
      <p className="text-[53px] leading-[0.9] opacity-50 uppercase  ">{text}</p>
    </div> */
}
