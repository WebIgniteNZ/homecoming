import styles from "./SectionHeading.module.scss";
export default function SectionHeading({ children }) {
  return <h5 className={styles.head}>{children}</h5>;
}
