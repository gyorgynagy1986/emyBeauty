import React from "react";
import styles from "./page.module.css";
import Abstract from "@/components/astract/ObjectElement";
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
      <Link href={`/szolgaltatasok/image-skincare-protokolok/${slug}`}>{title}</Link>
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
      src: servicesPage.serices7,
      title: "O2LIFT SPA VÖRÖS SZŐNYEG KEZELÉS",
      slug: "o2lift-spa-voros-szonyeg-kezeles",
      text: "Luxus, oxigénalapú arckezelés, amely mélyen tisztít, hidratál és élénkíti a bőrt. Azonnali ragyogást biztosít különleges alkalmakra, érzékeny bőrre is alkalmas.",
    },
    {
      src: servicesPage.serices7,
      title: "I PEEL | ORMEDIC LIFT™ - FELÜLET MEGÚJÍTÓ BIO PEELING",
      slug: "i-peel-ormedic-lift",
      text: "Gyengéd, mégis hatékony BIO hámlasztó kezelés, amely helyreállítja a bőr egyensúlyát. Érzékeny bőrre is alkalmas, természetes enzimekkel és aloe verával hidratál és nyugtat.",
    },
    {
      src: servicesPage.serices7,
      title: "I PEEL | SIGNATURE FACELIFT® - C VITAMIN SPECIALISTA",
      slug: "i-peel-signature-facelift",
      text: "Eredményorientált kezelés 30%-os C-vitaminnal, hidroxisavakkal és enzimekkel a sejtmegújulás gyorsítására. Ragyogóbbá teszi a bőrt, halványítja a foltokat és érzékeny, rosaceas bőrre is alkalmas.",
    },
    {
      src: servicesPage.serices7,
      title: "I PEEL | LIGHTENING LIFT® - BŐRVILÁGOSÍTÓ HÁMLASZTÁS",
      slug: "i-peel-lightening-lift-borvilagosito-hamlasztas",
      text: "Bőrhalványító és világosító hámlasztó kezelés tejsavval, kojiksavval, C-vitaminnal és növényi őssejtekkel. Gyengéden halványítja a pigmentfoltokat és egységesíti a bőrtónust.",
    },
    {
      src: servicesPage.serices7,
      title: "I PEEL | LIGHTENING LIFT® FORTE - INTENZÍV BŐRVILÁGOSÍTÓ HÁMLASZTÁS",
      slug: "i-peel-lightening-lift-forte-intenzive-borvilagosito-hamlasztas",
      text: "Intenzív bőrvilágosító kezelés magasabb koncentrációjú hatóanyagokkal a makacsabb pigmentációs problémákra. Mélyebb hámlasztást biztosít és hatékonyan kezeli az erősebb elszíneződéseket.",
    },
    {
      src: servicesPage.serices7,
      title: "I PEEL | WRINKLE LIFT® - HÁMLASZTÓ KEZELÉS",
      slug: "i-peel-wrinkle-lift-hamlaszto-kezeles",
      text: "Erőteljes anti-aging megoldás glikolsavval és retinollal a ráncok és finom vonalak ellen. Feszesíti és revitalizálja a bőrt, javítja a bőrtónust és serkenti a sejtmegújulást.",
    },
    {
      src: servicesPage.serices7,
      title: "I PEEL | WRINKLE LIFT® FORTE - INTENZÍV HÁMLASZTÓ KEZELÉS",
      slug: "i-peel-wrinkle-lift-forte-intenziv-hamlaszto-kezeles",
      text: "Extra erősségű peeling 45% glikolsavval és emelt retinol tartalommal mélyebb ráncokra. Intenzív sejt-regeneráció, kollagénstimuláció és bőrfeszesítés érett, tapasztaltabb bőrre.",
    },
    {
      src: servicesPage.serices7,
      title: "I PEEL | ACNE LIFT® - AKNÉS BŐR KEZELÉSE",
      slug: "i-peel-acne-lift-aknes-bor-kezelese",
      text: "Speciális hámlasztó kezelés aknéra hajlamos, problémás bőrre. Alfa- és béta-hidroxi savak kombinációja, amely csökkenti a pattanásokat, tisztítja a pórusokat és halványítja az akne utáni foltokat.",
    },
    {
      src: servicesPage.serices7,
      title: "I PEEL | BETA LIFT - AKNÉKEZELŐ HÁMLASZTÁS",
      slug: "i-peel-beta-lift-aknekezelo-hamlasztas",
      text: "Orvosi szintű, intenzív tisztító hámlasztás aknéra hajlamos, olajos bőrre. Szalicilsavval mélyen tisztítja a pórusokat, szabályozza a faggyútermelést és megelőzi az újabb pattanások kialakulását.",
    },
    
    {
      src: servicesPage.serices7,
      title: "I PEEL | PERFECTION LIFT™ - BŐRMEGÚJÍTÓ KEZELÉS",
      slug: "i-peel-perfection-lift-bormegujito-kezeles",
      text: "Orvosi szintű hámlasztó kezelés aknéra, hiperpigmentációra és ráncokra. Szalicilsav, glikolsav és retinol kombinációja, amely intenzíven fiatalítja a bőrt és halványítja a foltokat.",
    },
    {
      src: servicesPage.serices7,
      title: "I PEEL | PERFECTION LIFT® FORTE - INTENZÍV BŐRMEGÚJÍTÓ KEZELÉS",
      slug: "i-peel-perfection-lift-forte-intenziv-bormegujito-kezeles",
      text: "Erőteljes, orvosi szintű hámlasztó kezelés a komolyabb bőrproblémákra. Magas koncentrációjú savakkal és retinollal kezeli a mélyebb ráncokat, aknét és pigmentfoltokat tapasztalt felhasználóknak.",
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
            href="/szolgaltatasok/image-skincare-protokolok"
          >
            IMAGE SKINCARE PROTOKOLOK
          </Link>
        </div>
      </div>
      <section className={styles.containerHelper}>
        <div className={styles.titleContainer}>
          <h1>IMAGE Skincare Protokolok 
          </h1>
          <Abstract />
          <p>
          Peeling kezelések és személyre szabott bőrminőségjavító kezelési programok 
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
