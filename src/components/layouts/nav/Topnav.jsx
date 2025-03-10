"use client";

import React from "react";
import styles from "./TopNav.module.css"; // Külön CSS modul
import { contacts } from "@/data/contact";
import { alt } from "@/data/alt";
import { size } from "@/data/size";
import Link from "next/link";

import Image from "next/image";
import phone from "../../../../public/assets/social/phone.svg";
import insta from "../../../../public/assets/social/instagram.svg";
import facebook from "../../../../public/assets/social/facebook.svg";

const Topnav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerItems}>
        <div className={styles.contatctContainer}>
          <Image priority alt={alt.name} sizes={size.fullsize} src={phone} />
          <a href={`tel:${contacts.tel}`}> {contacts.tel}</a>
        </div>

        <div className={styles.socialHelper}>
          <div className={styles.contatctContainer}>
            <Link className={styles.link} href={contacts.instaLink}>
              <Image
                priority
                alt={alt.name}
                sizes={size.fullsize}
                src={insta}
              />
            </Link>
            <a className={styles.socialText} href={contacts.instaLink}>
              {" "}
              {contacts.insta}
            </a>
          </div>

          <div className={styles.contatctContainer}>
            <Link className={styles.link} href={contacts.facebookLink}>
              <Image
                priority
                alt={alt.name}
                sizes={size.fullsize}
                src={facebook}
              />
            </Link>

            <a className={styles.socialText} href={contacts.facebookLink}>
              {" "}
              {contacts.facebook}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topnav;
