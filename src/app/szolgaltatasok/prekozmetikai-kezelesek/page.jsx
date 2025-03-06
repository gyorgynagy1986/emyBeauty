"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Abstract from "@/components/astract/ObjectElement";
import Image from "next/image";
import Link from "next/link";
import icon from '../../../../public/assets/icon/right.svg'

import { size } from "@/data/size";
import { alt } from "@/data/alt";
import { servicesPage } from "@/data/photos";

// AOS import
import "aos/dist/aos.css";
import AOS from "aos";

const ServiceItem = ({ src, title, slug, text, index }) => {
  // Váltakozó animáció az egymást követő kártyáknak
  const animation = index % 2 === 0 ? "fade-right" : "fade-left";
  
  return (
    <div 
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-delay={150 + (index * 50)} // Fokozatos késleltetés minden kártyának
      data-aos-duration="1200"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
      className={styles.ServiceItem}
    >
      <Image className={styles.img} priority alt={alt.name} size={size.fullsize} src={src} />
      <div className={styles.titleContainer}>
        <Link href={`/szolgaltatasok/prekozmetikai-kezelesek/${slug}`}>
          {title}
        </Link>
      </div>
      <div className={styles.ServiceItemInfo}>
        <Abstract />
        <p>{text}</p>
      </div>
    </div>
  );
};

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
      src: servicesPage.secret,
      title: "Secret™ RF",
      slug: "secret-rf",
      text: "A Secret™ RF egy modern, műtét nélküli bőrfiatalító eljárás, mely mikrotűs és frakcionált rádiófrekvenciás technológiával serkenti a kollagéntermelést, így fiatalosabb, feszesebb bőrt eredményez.",
    },
    {
      src: servicesPage.secretrf,
      title: "Secret™ Booster",
      slug: "secret-booster",
      text: "A Secret Booster a Secret™ RF mikrotűs frakcionált rádiófrekvenciás kezelés és a feltöltő DEEP SHOOT AA kezelés egyedülálló kombinációja az arcbőr teljes megújításáért."
    },
    {
      src: servicesPage.oxi2,
      title: "Oxy Geneo™ by Pollogen",
      slug: "pollogen-oxygeneo",
      text: "Komplex bőrmegújító program, mely rádiófrekvenciás bőrfiatalítással, oxigénes kezeléssel és ultrahangos hatóanyag-bejuttatással biztosít friss, fiatalos megjelenést minden bőrtípus számára.",
    },
    {
      src: servicesPage.asceplus,
      title: "EXOSOME SEJTTERÁPIA",
      slug: "exosome-sejtterapia",
      text: "Forradalmi sejtterápia, mely exoszómákkal serkenti a bőr és a haj regenerációját, fiatalos, ragyogó megjelenést kölcsönözve minden kezelési területen.",
    },
    {
      src: servicesPage.onennedpro,
      title: "1 NEED PRO",
      slug: "1-need-pro",
      text: "Az 1 NEED PRO mikrotűs kezelés egy speciális bőrfiatalító eljárás, mely mikrotűs mezoterápiával serkenti a kollagéntermelést, javítja a bőr textúráját és csökkenti a ráncokat, hegeket, valamint a pigmentfoltokat.",
    },
    {
      src: servicesPage.carbon,
      title: "Hollywood Carbon Lézeres MEDICAL Peeling",
      slug: "hollywood-carbon-peeling",
      text: "Hosszú távon is látványos eredményekkel járó bőrrejuvenációs kezelés, mely a hőenergia felhasználásával halványítja a hegeket, egységesíti a pigmentállományt és fokozza a kollagéntermelést.",
    },
    {
      src: servicesPage.deep4,
      title: "DEEP SHOOT SKIN BOOSTER",
      slug: "deep-shoot-skin-booster",
      text: "Legújabb koreai innováció: előretöltött steril fecskendők és Turtlepin III mikrotűs fej kombinációja, mely akár 30x hatékonyabb felszívódást biztosít, maximalizálva a hatóanyag-bejuttatást és serkentve a bőr megújulását.",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div className={styles.items}>
          <Link href='/'>FŐOLDAL</Link>
          <Image style={{marginBottom:'1px'}} alt={alt.name} size={size.fullsize} src={icon} />
          <Link href='/szolgaltatasok'>SZOLGÁLTATÁSOK</Link>
          <Image style={{marginBottom:'1px'}} alt={alt.name} size={size.fullsize} src={icon} />
          <Link className={styles.active} href='/szolgaltatasok/prekozmetikai-kezelesek'>PREKOZMETIKAI KEZELÉSEK</Link>
        </div>
      </div>
      <section className={styles.containerHelper}>
        <div 
          data-aos={isMobile ? "fade" : "fade-up"}
          data-aos-offset="150"
          data-aos-delay="150"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
          className={styles.titleContainer}
        >
          <h1>Prekozmetikai kezelések</h1>
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