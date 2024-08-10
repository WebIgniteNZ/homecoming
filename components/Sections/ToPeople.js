import Image from "next/image";

export default function ToPeople() {
  return (
    <div className="wrapper grid lg:grid-cols-[1.2fr,1.8fr] gap-5 xl:gap-10 pt-10 xl:pt-20 place-content-center place-items-center relative z-[2]">
      <div className="w-full  relative h-max max-lg:order-1">
        <Image
          className="object-contain"
          width={588}
          height={505}
          src="/assets/artists/fiji-2.png"
          alt="Fiji - George Veikoso"
        />
        <div className="absolute top-[85%] left-1/2 -translate-x-1/2 text-[clamp(14px,1.5vw,16px)] text-black bg-slate-400 rounded-xl text-center leading-none pt-2.5 px-4 pb-2">
          George Veikoso
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 xl:gap-6  font-arial text-sm lg:text-lg max-lg:text-center">
        <h2 className="text-[clamp(18px,2.5vw,40px)] leading-none font-germania">
          To the People of <br />
          Fiji and the Pacific
        </h2>
        <p>
          Bula vinaka! It is with immense joy and pride that I, George &quot;FIJI&quot; Veikoso,
          announce my return home to the islands after 40 years of sharing our Pacific sounds with
          the world. This homecoming is more than just a concert—it&apos;s a celebration of our
          roots, our culture, and the music that connects us all.
        </p>
        <p>
          For four decades, I&apos;ve had the privilege of carrying the spirit of Fiji and the
          Pacific to audiences across the globe. Now, it&apos;s time to bring that journey full
          circle, back to where it all began. I am honored to return home and share with you the
          music that has been my life&apos;s work, alongside some extraordinary artists who I
          proudly call family: J Boog, Maoli, and Josh Tatofi.
        </p>
        <p>
          Together, we will celebrate not just my return, but the power of music to unite, inspire,
          and uplift our communities. This event is a tribute to our shared heritage, and I
          can&apos;t wait to experience this unforgettable night with all of you.
        </p>
        <p>
          Vinaka vakalevu for your continued support, and I look forward to seeing you all very
          soon!
        </p>
        <p>With love and respect,</p>
        <p>FIJI, George Veikoso</p>
      </div>
    </div>
  );
}
