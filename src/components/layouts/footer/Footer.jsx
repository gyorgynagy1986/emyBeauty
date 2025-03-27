"use client";

import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import ObjectStending from "@/components/astract/ObjectStending";
import { usePathname } from "next/navigation";

import { footer } from "@/data/photos";
import { alt } from "@/data/alt";
import { size } from "@/data/size";

const links = [
  { href: "/", label: "FŐOLDAL" },
  { href: "/rolam", label: "RÓLAM" },
  { href: "/szolgaltatasok", label: "SZOLGÁLTATÁSAIM" },
  { href: "/arak", label: "ÁRAK" },
  { href: "/kapcsolat", label: "KAPCSOLAT" },
];

const Footer = () => {
  const path = usePathname();

  return (
    <footer className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.textLeft}>
          {links.map((link) => (
            <Link
              className={path === link.href ? styles.active : ""}
              key={link.href}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className={styles.textCenter}>
          <ObjectStending />
          <div className={styles.helperContainerIamge}>
            <Image
              alt={alt.name}
              sizes={size.fullsize}
              src={footer.footerPhoto}
            />
            <div className={styles.helperContainerText}>
              <p className={styles.idopont}>Időpontfoglalás</p>
              <a href="tel:+36203426618">+36 20 342 66 18</a>
            </div>
          </div>
          <ObjectStending />
        </div>

        <div className={styles.textRight}>
          <div>
            <h4>Szeged</h4>
            <p>EmyBeautyEstetics™️</p>
            <p>Nádas utca 14./a</p>
          </div>

          <div>
            <h4>Budapest</h4>
            <p>XII. kerület</p>
            <p>Rác Aladár út 158 </p>
          </div>
        </div>
      </div>
      <div className={styles.legalContainer}>
        <p>
          All rights reserved © emykozmetika.hu | 2025 Designed and developed by
          <a href=""> Studio Bromo</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
