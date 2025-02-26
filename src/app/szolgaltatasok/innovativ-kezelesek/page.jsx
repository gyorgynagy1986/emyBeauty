import React from "react";
import styles from "./page.module.css";
import Abstract from "@/components/astract/Object";
import Image from "next/image";
import Link from "next/link";
import icon from "../../../../public/assets/icon/right.svg";

import { size } from "@/data/size";
import { alt } from "@/data/alt";
import { servicesPage } from "@/data/photos";

const ServiceItem = ({ src, title, slug, text }) => (
  <div className={styles.ServiceItem}>
    <Image
      className={styles.img}
      alt={alt.name}
      size={size.fullsize}
      src={src}
    />
    <div className={styles.titleContainer}>
      <Link href={`/szolgaltatasok/innovativ-kezelesek/${slug}`}>{title}</Link>
    </div>
    <div className={styles.ServiceItemInfo}>
      <Abstract />
      <p>{text}</p>
    </div>
  </div>
);

const Page = () => {
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
      src: servicesPage.serices3,
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
            href="/szolgaltatasok/innovativ-kezelesek"
          >
            INNOVATÍV KEZELÉSEK 
          </Link>
        </div>
      </div>
      <section className={styles.containerHelper}>
        <div className={styles.titleContainer}>
          <h1>Innovatív kezelések</h1>
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
            <ServiceItem key={index} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
