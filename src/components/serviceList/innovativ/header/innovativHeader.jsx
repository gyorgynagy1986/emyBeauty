import React from "react";
import Link from "next/link";
import Image from "next/image";
import { size } from "@/data/size";
import { alt } from "@/data/alt";
import icon from "../../../../../public/assets/icon/right.svg";
import styles from "./../serviceList.module.css";

const InovativHeader = ({ activePage }) => {
  return (
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
        <Link href="/szolgaltatasok/slow-aging-kezelesek">
          INNOVATÍV KEZELÉSEK
        </Link>
        <Image
          style={{ marginBottom: "1px" }}
          alt={alt.name}
          size={size.fullsize}
          src={icon}
        />
        <Link className={styles.active} href="/szolgaltatasok">
          {activePage}
        </Link>
      </div>
    </div>
  );
};

export default InovativHeader;
