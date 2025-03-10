import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import icon from "../../../../public/assets/icon/right.svg";

import { size } from "@/data/size";
import { alt } from "@/data/alt";
import ManSkinCare from "@/components/serviceList/ferfi/MensSkincare";

export const metadata = {
  title: 'Férfi kozmetika - Emy Beauty Estetics',
  description: '...',
  openGraph: {
      title: 'Férfi kozmetika - Emy Beauty Estetics',
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
            href="/szolgaltatasok/ferfi-kozmetika"
          >
            FÉRFI KOZMETIKA
          </Link>
        </div>
      </div>
      <ManSkinCare />
    </div>
  );
};

export default page;
