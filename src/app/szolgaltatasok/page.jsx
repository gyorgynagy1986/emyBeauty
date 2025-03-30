"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Abstract from "@/components/astract/ObjectElement";
import Image from "next/image";
import Link from "next/link";
import icon from "../../../public/assets/icon/right.svg";

import { size } from "@/data/size";
import { alt } from "@/data/alt";
import { servicesPage } from "@/data/photos";

// AOS import
import "aos/dist/aos.css";
import AOS from "aos";

// Animation variants
const animationVariants = [
  "fade-up", 
  "fade-right", 
  "fade-left", 
  "zoom-in", 
  "flip-up", 
];

const ServiceItem = ({ src, title, slug, index }) => (
  <Link href={`/szolgaltatasok/${slug}`} className={styles.serviceLink}>
    <div 
      data-aos={animationVariants[index % animationVariants.length]}
      data-aos-offset="100"
      data-aos-delay={100 + (index * 30)} 
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
      className={styles.ServiceItem}
    >
      <div className={styles.imageWrapper}>
        <Image
          className={styles.img}
          alt={alt.name}
          size={size.fullsize}
          src={src}
        />
      </div>
      <div className={styles.titleContainer}>
        <span>{title}</span>
      </div>
    </div>
  </Link>
);

const Page = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 0,
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      anchorPlacement: 'top-bottom',
      disable: false
    });

    const checkIfMobile = () => {
      const newIsMobile = window.innerWidth <= 768;
      setIsMobile(newIsMobile);
      AOS.refresh();
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const serviceItems = [
    { src: servicesPage.konzultacio, title: "Aramo bőrdiagnosztika, bőranalízis , konzultáció ", slug: "aramo-bordiagnosztika-boranalizis-konzultacio" },
    { src: servicesPage.pre, title: "Prekozmetikai Kezelések", slug: "prekozmetikai-kezelesek" },
    { src: servicesPage.serices2, title: "Slow Aging Kezelések ", slug: "slow-aging-kezelesek" },
    { src: servicesPage.scincover, title: "IMAGE Skincare Protokolok", slug: "image-skincare-protokolok" },
    { src: servicesPage.ferfi, title: "Férfi Kozmetika", slug: "ferfi-kozmetika" },
    { src: servicesPage.smink2, title: "Esztétikai Sminktetoválás", slug: "esztetikai-sminktetovalas" },
    { src: servicesPage.w5, title: "Wax Szőrtelenítés ", slug: "wax-szortelenites" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div className={styles.items}>
          <Link href="/">FŐOLDAL</Link>
          <Image style={{ marginBottom: "1px" }} alt={alt.name} size={size.fullsize} src={icon} />
          <Link className={styles.active} href="/szolgaltatasok">SZOLGÁLTATÁSOK</Link>
        </div>
      </div>
      <section className={styles.containerHelper}>
        <div 
          data-aos="fade-up"
          data-aos-offset="150"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
          className={styles.titleContainer}
        >
          <h1>Szolgáltatások</h1>
          <Abstract />
        </div>
        <div className={styles.itemsContainer}>
          {serviceItems.map((item, index) => (
            <ServiceItem key={index} index={index} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;