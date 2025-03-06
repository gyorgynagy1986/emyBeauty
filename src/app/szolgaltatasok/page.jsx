import React from "react";
import styles from "./page.module.css";
import Abstract from "@/components/astract/ObjectElement";
import Image from "next/image";
import Link from "next/link";
import icon from "../../../public/assets/icon/right.svg";

import { size } from "@/data/size";
import { alt } from "@/data/alt";
import { servicesPage } from "@/data/photos";

const ServiceItem = ({ src, title, slug }) => (
  <div className={styles.ServiceItem}>
    <Image
      className={styles.img}
      alt={alt.name}
      size={size.fullsize}
      src={src}
    />
    <div className={styles.titleContainer}>
      <Link href={`/szolgaltatasok/${slug}`}>{title}</Link>
    </div>
  </div>
);

const page = () => {
  const serviceItems = [
    {
      src: servicesPage.pre,
      title: "Prekozmetikai Kezelések",
      slug: "prekozmetikai-kezelesek",
    },
    {
      src: servicesPage.serices2,
      title: "Slow Aging Kezelések ",
      slug: "slow-aging-kezelesek",
    },
    {
      src: servicesPage.isp,
      title: "IMAGE Skincare Protokolok",
      slug: "image-skincare-protokolok",
    },
    {
      src: servicesPage.serices3,
      title: "Férfi Kozmetika",
      slug: "ferfi-kozmetika",
    },
    {
      src: servicesPage.smink2,
      title: "Esztétikai Sminktetoválás",
      slug: "esztetikai-sminktetovalas",
    },
    {
      src: servicesPage.serices3,
      title: "Wax Szőrtelenítés ",
      slug: "wax-szortelenites",
    },
  ];

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
          <Link className={styles.active} href="/szolgaltatasok">
            SZOLGÁLTATÁSOK
          </Link>
        </div>
      </div>
      <section className={styles.containerHelper}>
        <div className={styles.titleContainer}>
          <h1>Szolgáltatások</h1>
          <Abstract />
        </div>
        <div className={styles.itemsContainer}>
          {serviceItems.map((item, index) => (
            <ServiceItem key={index} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
