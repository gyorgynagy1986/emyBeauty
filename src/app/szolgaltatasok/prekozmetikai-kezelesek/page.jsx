import React from "react";
import styles from "./page.module.css";
import Abstract from "@/components/astract/Object";
import Image from "next/image";
import Link from "next/link";
import icon from '../../../../public/assets/icon/right.svg'

import { size } from "@/data/size";
import { alt } from "@/data/alt";
import { servicesPage } from "@/data/photos";

const ServiceItem = ({ src, title, slug, text }) => (
  <div className={styles.ServiceItem}>
    <Image className={styles.img} alt={alt.name} size={size.fullsize} src={src} />
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

const page = () => {
  const serviceItems = [
    {
      src: servicesPage.serices5,
      title: "Secret™ RF",
      slug: "secret-rf",
      text: "A Secret™ RF egy modern, műtét nélküli bőrfiatalító eljárás, mely mikrotűs és frakcionált rádiófrekvenciás technológiával serkenti a kollagéntermelést, így fiatalosabb, feszesebb bőrt eredményez.",
    },
    {
      src: servicesPage.serices5,
      title: "Secret™ Booster",
      slug: "secret-booster",
      text: "A Secret Booster a Secret™ RF mikrotűs frakcionált rádiófrekvenciás kezelés és a feltöltő DEEP SHOOT AA kezelés egyedülálló kombinációja az arcbőr teljes megújításáért."
    },
    {
      src: servicesPage.serices5,
      title: "Oxy Geneo™ by Pollogen",
      slug: "pollogen-oxygeneo",
      text: "Komplex bőrmegújító program, mely rádiófrekvenciás bőrfiatalítással, oxigénes kezeléssel és ultrahangos hatóanyag-bejuttatással biztosít friss, fiatalos megjelenést minden bőrtípus számára.",
    },
    {
      src: servicesPage.serices5,
      title: "EXOSOME SEJTTERÁPIA",
      slug: "exosome-sejtterapia",
      text: "Forradalmi sejtterápia, mely exoszómákkal serkenti a bőr és a haj regenerációját, fiatalos, ragyogó megjelenést kölcsönözve minden kezelési területen.",
    },
    {
      src: servicesPage.serices5,
      title: "1 NEED PRO",
      slug: "1-need-pro",
      text: "Az 1 NEED PRO mikrotűs kezelés egy speciális bőrfiatalító eljárás, mely mikrotűs mezoterápiával serkenti a kollagéntermelést, javítja a bőr textúráját és csökkenti a ráncokat, hegeket, valamint a pigmentfoltokat.",
    },
    {
      src: servicesPage.serices5,
      title: "Hollywood Carbon Lézeres MEDICAL Peeling",
      slug: "hollywood-carbon-peeling",
      text: "Hosszú távon is látványos eredményekkel járó bőrrejuvenációs kezelés, mely a hőenergia felhasználásával halványítja a hegeket, egységesíti a pigmentállományt és fokozza a kollagéntermelést.",
    },
    {
      src: servicesPage.serices5,
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
        <div className={styles.titleContainer}>
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
            <ServiceItem key={index} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
