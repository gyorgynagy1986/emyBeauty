import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import icon from "../../../../public/assets/icon/right.svg";

import { size } from "@/data/size";
import { alt } from "@/data/alt";
import Kozultacio from "@/components/serviceList/konzultacio/Konzultacio";

export const metadata = {
  title: 'Aramo bőrdiagnosztika, bőranalízis , konzultáció - Emy Beauty Estetics',
  description: '...',
  openGraph: {
      title: 'Aramo bőrdiagnosztika, bőranalízis , konzultáció - Emy Beauty Estetics',
      description: '',
    },
}
 

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
            href="/szolgaltatasok/aramo-bordiagnosztika-boranalizis-konzultacio"
          >
            FÉRFI KOZMETIKA
          </Link>
        </div>
      </div>
      <Kozultacio />
    </div>
  );
};

export default page;
