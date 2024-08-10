import Image from "next/image";
import styles from "./Hero.module.scss";
export default function HeroSection() {
  return (
    <section className={styles.section}>
      <div className={`wrapper ${styles.hero}`}>
        <Image width={685} height={602} src="/assets/artists/josh.png" alt="Artists" />
        <div className={styles.artists}>
          <div className={styles.josh}>
            <Image width={540} height={450} src="/assets/artists/josh.png" alt="Artists" />
          </div>
          <div className={styles.jboog}>
            <Image width={540} height={450} src="/assets/artists/jboog.png" alt="Artists" />
          </div>
          <div className={styles.fiji}>
            <Image width={540} height={450} src="/assets/artists/fiji.png" alt="Artists" />
          </div>
          <div className={styles.maoli}>
            <Image width={540} height={450} src="/assets/artists/maoli.png" alt="Artists" />
          </div>
        </div>
        <div className={styles.dates}></div>
      </div>
    </section>
  );
}
