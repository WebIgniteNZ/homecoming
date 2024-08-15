import Image from "next/image";
import styles from "./Hero.module.scss";
export default function HeroSection() {
  return (
    <section className={styles.section}>
      <div id="artists" className={`wrapper ${styles.hero}`}>
        <Image
          className={styles.flag}
          width={685}
          height={602}
          src="/assets/artists/flag.png"
          alt="Fiji Flag"
        />
        <div className={styles.artists}>
          <div className={styles.fiji}>
            <Image
              className={styles.artistImg}
              width={540}
              height={450}
              src="/assets/artists/fiji.png"
              alt="Artists"
            />
          </div>
          <div className={styles.jboog}>
            <Image
              className={styles.artistImg}
              width={540}
              height={450}
              src="/assets/artists/jboog.png"
              alt="Artists"
            />
          </div>
          <div className={styles.josh}>
            <Image
              className={styles.artistImg}
              width={540}
              height={450}
              src="/assets/artists/josh.png"
              alt="Josh"
            />
          </div>
          <div className={styles.maoli}>
            <Image
              className={styles.artistImg}
              width={540}
              height={450}
              src="/assets/artists/maoli.png"
              alt="Maoli"
            />
          </div>
        </div>
        <div className="flex w-full items-center gap-4 justify-center scale-110">
          <div className="flex w-fit  items-center justify-end gap-4">
            <p className="text-[clamp(18px,2vw,27px)] leading-none">14 sept:</p>
            <a
              target="_blank"
              href="https://www.instagram.com/f1j1/?hl=en"
              className={`${styles.name} ${styles.fiji}`}>
              <Image width={161} height={58} src="/assets/artists/fiji-name.png" alt="Fiji " />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/jboogmusic/?hl=en"
              className={`${styles.name} ${styles.jboog}`}>
              <Image width={306} height={112} src="/assets/artists/jboog-name.png" alt="JBoog " />
            </a>
          </div>
          <div className="h-14 w-0.5 flex-shrink-0 bg-mustard mx-auto"></div>
          <div className="flex  items-center  gap-4">
            <p className="text-[clamp(18px,2vw,27px)] leading-none">15 sept:</p>
            <a
              target="_blank"
              href="https://www.instagram.com/joshtatofimusic/"
              className={`${styles.name} ${styles.josh}`}>
              <Image width={279} height={103} src="/assets/artists/josh-name.png" alt="Josh " />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/maolimusic/?hl=en"
              className={`${styles.name} ${styles.maoli}`}>
              <Image width={210} height={78} src="/assets/artists/maoli-name.png" alt="Maoli " />
            </a>
          </div>
        </div>
        <div className={styles.dates}>
          <div className={`${styles.date} flex flex-col items-center`}>
            <p className="text-mustard text-[clamp(24px,2.4vw,30px)] leading-none">
              14-15 Sep 2024
            </p>
            <p className="text-[clamp(18px,2vw,27px)] leading-none">republic of fiji</p>
          </div>
          {/* <Image
            className={styles.date}
            width={332}
            height={72}
            src="/assets/hero/14-15.png"
            alt="14-15 September "
          /> */}
          <Image
            className={styles.title}
            width={427}
            height={182}
            src="/assets/hero/title.png"
            alt="HOMECOMING FEST "
          />
          <Image
            className={styles.venue}
            width={349}
            height={58}
            src="/assets/hero/king-charles.png"
            alt="14-15 September "
          />
        </div>
      </div>
      <div className={`wrapper ${styles.heroMob} relative`}>
        <Image
          style={{ position: "relative", transform: "translateY(5%)" }}
          className={styles.aritstsMob}
          width={563}
          height={533}
          src="/assets/artists-mob.png"
          alt="Artists"
        />{" "}
        <Image
          style={{ position: "relative", transform: "translateY(-20%)", zIndex: 2 }}
          className={styles.title}
          width={427}
          height={182}
          src="/assets/hero/title.png"
          alt="HOMECOMING FEST "
        />
        <Image
          style={{
            position: "relative",
            margin: "0 auto",
            transform: "translateY(-10%)",
            zIndex: 2,
          }}
          className={styles.venueMob}
          width={300}
          height={180}
          quality={100}
          src="/assets/text-mob.png"
          alt="14-15 September,King Charles Park "
        />
        {/* <p className="text-mustard text-center text-[clamp(24px,7vw,40px)] absolute top-[90%] left-1/2 -translate-x-1/2 z-10">
          2024
        </p> */}
        <Image
          className="pointer-events-none object-cover  opacity-100  z-[-1] absolute w-full h-full md:hidden "
          sizes="100vw"
          fill
          quality={75}
          src={"/assets/bg-min.jpg"}
          alt="pattern"
        />
        <div className="bg bg-gradient-to-t from-[#0b0b0b] to-transparent h-1/2 absolute bottom-0 left-0 w-full z-0 md:hidden "></div>
      </div>
    </section>
  );
}
