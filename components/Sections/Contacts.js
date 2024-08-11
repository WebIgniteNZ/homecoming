export default function Contacts() {
  return (
    <div
      style={{ maxWidth: "1840px", paddingBottom: "clamp(40px,10vw,100px)" }}
      className="wrapper ">
      <div
        id="contact"
        className="w-full py-10 p-5 lg:p-10 xl:px-14 grid lg:grid-cols-3 gap-5 lg:gap-10 bg-white rounded-10">
        <p className="text-black xl:text-40 self-center mx-auto">contact us</p>
        <div className="flex flex-col items-center gap-2 p-5 xl:p-10 font-arial text-black bg-black/5">
          <p className="uppercase arial-black font-black">MEdia & Sponsorship</p>
          <a
            className="font-bold transition-all hover:text-pink"
            href="mailto:bula@homecomingfiji.com">
            bula@homecomingfiji.com
          </a>
        </div>
        <div className="flex flex-col items-center gap-2 p-5 xl:p-10 font-arial text-black bg-black/5">
          <p className="uppercase arial-black font-black">General ENQUIRIES</p>
          <a
            className="font-bold transition-all hover:text-pink"
            href="mailto:support@homecomingfiji.com">
            support@homecomingfiji.com
          </a>
        </div>
      </div>
    </div>
  );
}
