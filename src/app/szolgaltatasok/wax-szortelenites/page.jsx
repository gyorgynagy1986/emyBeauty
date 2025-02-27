import React from "react";
import styles from "./page.module.css";
import Abstract from "@/components/astract/ObjectElement";
import Image from "next/image";
import Link from "next/link";
import icon from "../../../../public/assets/icon/right.svg";

import { size } from "@/data/size";
import { alt } from "@/data/alt";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div className={styles.items}>
          <Link href="/">FŐOLDAL</Link>
          <Image
            style={{ marginBottom: "1px" }}
            alt={alt.name}
            size={size.fullsize}
            src={icon}
          />
          <Link href="/szolgaltatasok">SZOLGÁLTATÁSOK</Link>
          <Image
            style={{ marginBottom: "1px" }}
            alt={alt.name}
            size={size.fullsize}
            src={icon}
          />
          <Link
            className={styles.active}
            href="/szolgaltatasok/wax-szortelenites"
          >
            WAX SZŐRTELENÍTÉS
          </Link>
        </div>
      </div>
      <section className={styles.containerHelper}>
        <div className={styles.titleContainer}>
          <h1>Wax szőrtelenítés</h1>
          <Abstract />
          <p>Hamarosan</p>
        </div>
        <div className={styles.itemsContainer}></div>
      </section>
    </div>
  );
};

export default page;
