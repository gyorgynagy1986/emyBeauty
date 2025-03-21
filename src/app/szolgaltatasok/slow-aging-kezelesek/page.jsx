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

// Animation variants for more diversity
const animationVariants = [
  "fade-up", 
  "fade-right", 
  "fade-left", 
  "zoom-in", 
  "flip-up"
];

const ServiceItem = ({ src, title, slug, text, index }) => {
  // Use animation variants array for diversity
  const animation = animationVariants[index % animationVariants.length];
  
  // Function to limit text to 300 characters and add ellipsis if needed
  const limitText = (text, limit = 300) => {
    if (text.length <= limit) return text;
    return text.slice(0, limit).trim() + '...';
  };
  
  return (
    <Link href={`/szolgaltatasok/slow-aging-kezelesek/${slug}`} className={styles.serviceLink}>
      <div 
        data-aos={animation}
        data-aos-offset="100"
        data-aos-delay={100 + (index * 50)} 
        data-aos-duration="1000"
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
            priority
          />
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
    // Initialize AOS with settings to prevent horizontal scroll
    AOS.init({
      offset: 120,
      delay: 0,
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      anchorPlacement: 'top-bottom',
      disable: false,
      disableHorizontalScroll: true // Add this to prevent horizontal scroll
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
      src: servicesPage.tunelkuli,
      title: "TŰ NÉLKÜLI MEZOTERÁPIA - ELEKTROPORÁCIÓ",
      slug: "/tu-nelkuli-mezoterapia",
      text: "Nobel-díjas hatásmechanizmusra épülő, tű nélküli mezoterápiás kezelés. A hatóanyagok 90%-a mély szövetekbe hatol, maximálisan hidratálja a bőrt és látványosan csökkenti a ráncokat.",
    },
    {
      src: servicesPage.genoled,
      title: "GENO-LED ALACSONY INTENZITÁSÚ LED FÉNY",
      slug: "/geno-led-alacsony-intenzitasu-led-feny",
      text: "Komplikált bőrproblémákat old meg LED fénnyel. A 287 speciális LED összetevő különböző hullámhosszúságú fényt sugározva regenerálja és nyugtatja a bőrt, mellékhatások nélkül.",
    },
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