import React from "react";
import styles from "./page.module.css";
import Abstract from "@/components/astract/Object";
import Image from "next/image";
import Link from "next/link";

import { size } from "@/data/size";
import { alt } from "@/data/alt";
import { servicesPage } from "@/data/photos";


const ServiceItem = ({ src, title, slug }) => (
  <div className={styles.ServiceItem}>
    <Image className={styles.img} alt={alt.name} size={size.fullsize} src={src} />
    <div className={styles.titleContainer}>
      <Link href={`/szolgaltatasok/${slug}`}>{title}</Link>
    </div>
  </div>
);

const page = () => {
  
  const serviceItems = [
    { src: servicesPage.serices1, title: "Innovatív Arckezelések", slug: "innovativ-arckezelesek" },
    { src: servicesPage.serices2, title: "Innovatív Arckezelések", slug: "innovativ-arckezelesek" },
    { src: servicesPage.serices3, title: "Innovatív Arckezelések", slug: "innovativ-arckezelesek" }, 
  ];

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div className={styles.items}></div>
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