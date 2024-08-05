import akon from "@/assets/akon-hero.png";
import bg from "@/assets/back.jpg";
import corner from "@/assets/corner.png";
import tpain from "@/assets/t-pain-hero.png";
import Image from "next/image";
import Timer from "../../Timer";
import SectionHeading from "../../UI/SectionHeading";
import styles from "./Hero.module.scss";
export default function HeroSection() {
  return (
    <section className={styles.section}>
      <div className={`wrapper ${styles.wrapper}`}>
        <div className={styles.countdown}>
          <div className="relative translate-y-[15%]">
            <SectionHeading>May 3th 2024</SectionHeading>
          </div>
          <div className="relative bg-mustard border-[6px] border-purp rounded-xl w-full max-w-[632px] justify-center items-center flex p-4 pb-0 class-box  ">
            <Timer />
          </div>
          <p className="xl:text-[40px] pt-10 max-w-[620px] text-center uppercase leading-none darma-e ">
            OMAR APOLLO - PINKPANTHERESS - DOM KENNEDY & <br /> TEefliI - JOJO - UMI - MAETA - naOMI
            SHARON <br />- RAAHiiM - LEKAN - AMINDi
          </p>
        </div>
      </div>
      <div className="-z-[1] w-full h-full absolute top-0 left-0">
        <Image
          className="pointer-events-none object-cover"
          loading="eager"
          priority
          fill
          src={bg}
          alt="pattern"
        />
      </div>
      <Image
        width={corner.width}
        height={corner.height}
        className="pointer-events-none absolute bottom-0 right-0 rotate-180 -scale-x-100 max-lg:w-20 w-20 "
        src={corner}
        alt="pattern"
      />
      <Image
        width={corner.width}
        height={corner.height}
        className="pointer-events-none absolute bottom-0 left-0 rotate-180 max-lg:w-20 w-20 "
        src={corner}
        alt="pattern"
      />
      <Image
        width={tpain.width}
        height={tpain.height}
        className="z-0 pointer-events-none absolute bottom-0 left-0 w-auto max-h-[40%] lg:max-h-[90%] object-contain max-2xl:-translate-x-1/4"
        src={tpain}
        alt="pattern"
      />
      <Image
        width={akon.width}
        height={akon.height}
        className="z-0 pointer-events-none absolute bottom-0 right-0 w-auto max-h-[40%] lg:max-h-[90%] object-contain max-2xl:translate-x-1/3 "
        src={akon}
        alt="pattern"
      />
    </section>
  );
}
