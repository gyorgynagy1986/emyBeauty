"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Abstract from "@/components/astract/ObjectElement";
import Image from "next/image";
import Link from "next/link";
import icon from "../../../../public/assets/icon/right.svg";

import { size } from "@/data/size";
import { alt } from "@/data/alt";
import { servicesPage } from "@/data/photos";

// AOS import
import "aos/dist/aos.css";
import AOS from "aos";

const ServiceItem = ({ src, title, slug, text, index }) => (
  <div 
    data-aos="fade-up"
    data-aos-offset="100"
    data-aos-delay={100 + (index * 50)} // Fokozatos késleltetés minden kártyának
    data-aos-duration="800"
    data-aos-easing="ease-in-out"
    data-aos-once="true"
    className={styles.ServiceItem}
  >
    <Image
      className={styles.img}
      alt={alt.name}
      size={size.fullsize}
      src={src}
      priority
    />
    <div className={styles.titleContainer}>
      <Link href={`/szolgaltatasok/slow-aging-kezelesek/${slug}`}>{title}</Link>
    </div>
    <div className={styles.ServiceItemInfo}>
      <Abstract />
      <p>{text}</p>
    </div>
  </div>
);

const page = () => {
  // Képernyőméret figyelése
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Képernyőméret ellenőrzése és isMobile állapot beállítása
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Kezdeti ellenőrzés
    checkIfMobile();
    
    // AOS inicializálása
    AOS.init();
    
    // Mobilon frissítsük az AOS-t a state változás után
    if (isMobile) {
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    }

    // Eseményfigyelő a képernyőméret változásához
    window.addEventListener('resize', () => {
      const wasMobile = isMobile;
      checkIfMobile();
      
      // Ha változott a nézet típusa, frissítsük az AOS-t
      if (wasMobile !== isMobile) {
        setTimeout(() => {
          AOS.refresh();
        }, 100);
      }
    });
    
    // Komponens leválasztásakor takarítunk
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, [isMobile]);

  const serviceItems = [
    {
      src: servicesPage.serices1,
      title: "TŰ NÉLKÜLI MEZOTERÁPIA - ELEKTROPORÁCIÓ",
      slug: "/tu-nelkuli-mezoterapia",
      text: "Nobel-díjas hatásmechanizmusra épülő, tű nélküli mezoterápiás kezelés. A hatóanyagok 90%-a mély szövetekbe hatol, maximálisan hidratálja a bőrt és látványosan csökkenti a ráncokat.",
    },

    // 2. GENO-LED ALACSONY INTENZITÁSÚ LED FÉNY
    {
      src: servicesPage.serices2,
      title: "GENO-LED ALACSONY INTENZITÁSÚ LED FÉNY",
      slug: "/geno-led-alacsony-intenzitasu-led-feny",
      text: "Komplikált bőrproblémákat old meg LED fénnyel. A 287 speciális LED összetevő különböző hullámhosszúságú fényt sugározva regenerálja és nyugtatja a bőrt, mellékhatások nélkül.",
    },

    // 3. SQT® BIO MIKROTŰS SZIVACSTŰ KEZELÉS
    {
      src: servicesPage.sqt4,
      title: "SQT® BIO MIKROTŰS SZIVACSTŰ KEZELÉS",
      slug: "/sqt-bio-mikrotus-kezeles",
      text: "3 millió természetes szilícium mikrotűvel serkenti a bőr anyagcseréjét. Fájdalommentes megoldás, amely természetes módon rövidíti a bőr megújulási ciklusát és halványítja a pigmentfoltokat.",
    },
    {
      src: servicesPage.serices4,
      title: "GENOSYS SNOWCELL",
      slug: "/genosys-snowcell",
      text: "Innovatív pigmentációkezelő és bőrfiatalító eljárás, amely gátolja a melanin termelődését. Nyáron is alkalmazható, halványítja a foltokat és stimulálja a kollagén termelődést.",
    },

    {
      src: servicesPage.serices5,
      title: "MIKRODERMABRÁZIÓ - GYÉMÁNTFEJES TECHNOLOGIA",
      slug: "/mikrodermabrazio-gyemantfejes-technologia",
      text: "Fájdalommentes bőrhámlasztó kezelés, amely gyémántfejes technológiával megújítja a bőrt. Csökkenti a ráncokat, halványítja a pigmentfoltokat és segíti a hatóanyagok felszívódását.",
    },
    {
      src: servicesPage.serices6,
      title: "1 NEED PRO MIKROTŰS KEZELÉS",
      slug: "/1-need-pro-mikrotus-kezeles",
      text: "Speciális bőrfiatalító eljárás, amely mikrotűkkel serkenti a kollagéntermelést. Cserélhető kezelőfejekkel személyre szabható, kezeli a ráncokat, pigmentfoltokat és a tág pórusokat.",
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
          <Link href="/szolgaltatasok">SZOLGÁLTATÁSOK</Link>
          <Image
            style={{ marginBottom: "1px" }}
            alt={alt.name}
            size={size.fullsize}
            src={icon}
          />
          <Link
            className={styles.active}
            href="/szolgaltatasok/slow-aging-kezelesek"
          >
          SLOW AGING KEZELÉSEK
          </Link>
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
          <h1>Slow Aging Kezelések</h1>
          <Abstract />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            efficitur est tellus, ut eleifend metus placerat eget. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Ut condimentum magna vel sodales tempor.
          </p>
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

export default page;