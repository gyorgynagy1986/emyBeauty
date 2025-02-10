import Link from "next/link";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Page Not Found</h2>
      <p className={styles.message}>
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link href="/" className={styles.homeLink}>
        Return Home
      </Link>
    </div>
  );
}
