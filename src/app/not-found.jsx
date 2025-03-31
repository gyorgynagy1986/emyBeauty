import Link from "next/link";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Az oldal nem található</h2>
      <p className={styles.message}>
      Az oldal nem található
      </p>
      <Link href="/" className={styles.homeLink}>
        Főoldal
      </Link>
    </div>
  );
}
