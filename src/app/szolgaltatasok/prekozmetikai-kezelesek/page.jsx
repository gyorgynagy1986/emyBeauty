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

// Animation variants for more diversity
const animationVariants = [
  "fade-up", 
  "fade-right", 
  "fade-left", 
  "zoom-in", 
  "flip-up"
];

const ServiceItem = ({ src, title, slug, text, index }) => {
  // Use animation variants array instead of just alternating between two
  const animation = animationVariants[index % animationVariants.length];
  
  // Function to limit text to 300 characters and add ellipsis if needed
  const limitText = (text, limit = 300) => {
    if (text.length <= limit) return text;
    return text.slice(0, limit).trim() + '...';
  };
  
  return (
    <Link href={`/szolgaltatasok/prekozmetikai-kezelesek/${slug}`} className={styles.serviceLink}>
      <div 
        data-aos={animation}
        data-aos-offset="100"
        data-aos-delay={100 + (index * 50)} // Slightly reduced delay from 150 to 100 for better responsiveness
        data-aos-duration="1000" // Slightly reduced from 1200ms to 1000ms for snappier feel
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        className={styles.ServiceItem}
      >
        <div className={styles.imageWrapper}>
          <Image className={styles.img} priority alt={alt.name} size={size.fullsize} src={src} />
        </div>
        <div className={styles.titleContainer}>
          <span>{title}</span>
        </div>
        <div className={styles.ServiceItemInfo}>
          <Abstract />
          <p>{limitText(text)}</p>
        </div>
      </div>
    </Link>
  );
};

const page = () => {
  // Screen size tracking
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Initialize AOS with global settings
    AOS.init({
      offset: 120,
      delay: 0,
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      anchorPlacement: 'top-bottom',
      disable: false
    });

    // Screen size check function
    const checkIfMobile = () => {
      const wasMobile = isMobile;
      const newIsMobile = window.innerWidth <= 768;
      setIsMobile(newIsMobile);
      
      // Only refresh AOS when switching between mobile/desktop
      if (wasMobile !== newIsMobile) {
        setTimeout(() => {
          AOS.refresh();
        }, 100);
      }
    };

    // Initial check
    checkIfMobile();
    
    // Event listener for screen size changes
    window.addEventListener('resize', checkIfMobile);
    
    // Refresh AOS on window resize for better responsiveness
    const handleResize = () => {
      AOS.refresh();
    };
    window.addEventListener('resize', handleResize);
    
    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', checkIfMobile);
      window.removeEventListener('resize', handleResize);
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
    {
      src: servicesPage.plasma,
      title: "Plazma G –RÁDIÓFREKVENCIÁS ARCKEZELÉS",
      slug: "plazma-g-collage-frakcionalt-radiofrekvencias-kezeles",
      text: "A CollAge egy frakcionált, mátrixpontos rádiófrekvenciás eljárás, mely a mono- és bipoláris rádiófrekvenciát ötvözi. A különlegessége, hogy rendkívül mélyen, ugyanakkor nagyon sűrűn hat a 36 aranyozott pont elektródának köszönhetően.",
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
          data-aos="fade-up" // Simplified, removed conditional based on isMobile
          data-aos-offset="150"
          data-aos-delay="100"
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