import React from "react";
import styles from "./page.module.css";
import Abstract from "@/components/astract/Object";
import Image from "next/image";
import Link from "next/link";

import { size } from "@/data/size";
import { alt } from "@/data/alt";
import { servicesPage } from "@/data/photos";

const ServiceItem = ({ src, title, slug, text }) => (
  <div className={styles.ServiceItem}>
    <Image className={styles.img} alt={alt.name} size={size.fullsize} src={src} />
    <div className={styles.titleContainer}>
      <Link href={`/szolgaltatasok/innovativ-arckezelesek/${slug}`}>
        {title}
      </Link>
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
      src: servicesPage.serices5,
      title: "Gyémántfejes mikrodermabrázió",
      slug: "sqt-bio-mikrotus-kezeles",
      text: "A gyémántfejes mikrodermabrázió egy fájdalommentes, bőrhámlasztó kezelés, amely eltávolítja az elhalt hámréteget, serkenti a bőr regenerációját és fiatalabb, simább bőrt eredményez.",
    },
    {
      src: servicesPage.serices6,
      title: "SQT® Bio Mikrotűs kezelés",
      slug: "sqt-bio-mikrotus-kezeles",
      text: "Az SQT® bio mikrotűs kezelés természetes szilícium mikrotűkkel serkenti a bőr megújulását, feszesítést, hámlasztást és pigmentfoltok halványítását fájdalommentesen.",
    },
    {
      src: servicesPage.serices7,
      title: "Tű nélküli mezoterápia - Elektroporáció ",
      slug: "sqt-bio-mikrotus-kezeles",
      text: "A tű nélküli mezoterápia fájdalommentesen juttat hatóanyagokat a bőr mélyére elektromos impulzusokkal, ránctalanítva, feszesítve és hidratálva azt.",
    },
  ];

  return (
    <div className={styles.container}>

      <div className={styles.topBar}>
        <div className={styles.items}></div>
      </div>
      <section className={styles.containerHelper}>
        <div className={styles.titleContainer}>
          <h1>Innovatív Arckezelések</h1>
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
