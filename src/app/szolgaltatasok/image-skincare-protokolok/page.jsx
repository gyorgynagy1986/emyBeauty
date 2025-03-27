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
  "flip-up",
  "slide-up",
];

const ServiceItem = ({ src, title, slug, text, index }) => {
  // Function to limit text to 300 characters and add ellipsis if needed
  const limitText = (text, limit = 150) => {
    if (text.length <= limit) return text;
    return text.slice(0, limit).trim() + "...";
  };

  return (
    <Link
      href={`/szolgaltatasok/image-skincare-protokolok/${slug}`}
      className={styles.serviceLink}
    >
      <div
        data-aos={animationVariants[index % animationVariants.length]}
        data-aos-offset="100"
        data-aos-delay={100 + index * 30}
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
    // Initialize AOS once
    AOS.init({
      // Global settings
      offset: 120,
      delay: 0,
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
      disable: false,
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
    window.addEventListener("resize", checkIfMobile);

    // Refresh AOS on window resize for better responsiveness
    const handleResize = () => {
      AOS.refresh();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", checkIfMobile);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  const serviceItems = [
    {
      src: servicesPage.voros,
      title: "O2LIFT SPA VÖRÖS SZŐNYEG KEZELÉS",
      slug: "o2lift-spa-voros-szonyeg-kezeles",
      text: "Luxus, oxigénalapú arckezelés, amely mélyen tisztít, hidratál és élénkíti a bőrt. Azonnali ragyogást biztosít különleges alkalmakra, érzékeny bőrre is alkalmas.",
    },
    {
      src: servicesPage.ormedic,
      title: "I PEEL | ORMEDIC LIFT™ - FELÜLET MEGÚJÍTÓ BIO PEELING",
      slug: "i-peel-ormedic-lift",
      text: "Gyengéd, mégis hatékony BIO hámlasztó kezelés, amely helyreállítja a bőr egyensúlyát. Érzékeny bőrre is alkalmas, természetes enzimekkel és aloe verával hidratál és nyugtat.",
    },
    {
      src: servicesPage.facelift,
      title: "I PEEL | SIGNATURE FACELIFT® - C VITAMIN SPECIALISTA",
      slug: "i-peel-signature-facelift",
      text: "Eredményorientált kezelés 30%-os C-vitaminnal, hidroxisavakkal és enzimekkel a sejtmegújulás gyorsítására. Ragyogóbbá teszi a bőrt, halványítja a foltokat és érzékeny, rosaceas bőrre is alkalmas.",
    },
    {
      src: servicesPage.lightlift,
      title: "I PEEL | LIGHTENING LIFT® - BŐRVILÁGOSÍTÓ HÁMLASZTÁS",
      slug: "i-peel-lightening-lift-borvilagosito-hamlasztas",
      text: "Bőrhalványító és világosító hámlasztó kezelés tejsavval, kojiksavval, C-vitaminnal és növényi őssejtekkel. Gyengéden halványítja a pigmentfoltokat és egységesíti a bőrtónust.",
    },
    {
      src: servicesPage.lightliftforte,
      title:
        "I PEEL | LIGHTENING LIFT® FORTE - INTENZÍV BŐRVILÁGOSÍTÓ HÁMLASZTÁS",
      slug: "i-peel-lightening-lift-forte-intenzive-borvilagosito-hamlasztas",
      text: "Intenzív bőrvilágosító kezelés magasabb koncentrációjú hatóanyagokkal a makacsabb pigmentációs problémákra. Mélyebb hámlasztást biztosít és hatékonyan kezeli az erősebb elszíneződéseket.",
    },
    {
      src: servicesPage.wr,
      title: "I PEEL | WRINKLE LIFT® - HÁMLASZTÓ KEZELÉS",
      slug: "i-peel-wrinkle-lift-hamlaszto-kezeles",
      text: "Erőteljes anti-aging megoldás glikolsavval és retinollal a ráncok és finom vonalak ellen. Feszesíti és revitalizálja a bőrt, javítja a bőrtónust és serkenti a sejtmegújulást.",
    },
    {
      src: servicesPage.wrforte,
      title: "I PEEL | WRINKLE LIFT® FORTE - INTENZÍV HÁMLASZTÓ KEZELÉS",
      slug: "i-peel-wrinkle-lift-forte-intenziv-hamlaszto-kezeles",
      text: "Extra erősségű peeling 45% glikolsavval és emelt retinol tartalommal mélyebb ráncokra. Intenzív sejt-regeneráció, kollagénstimuláció és bőrfeszesítés érett, tapasztaltabb bőrre.",
    },
    {
      src: servicesPage.ance,
      title: "I PEEL | ACNE LIFT® - AKNÉS BŐR KEZELÉSE",
      slug: "i-peel-acne-lift-aknes-bor-kezelese",
      text: "Speciális hámlasztó kezelés aknéra hajlamos, problémás bőrre. Alfa- és béta-hidroxi savak kombinációja, amely csökkenti a pattanásokat, tisztítja a pórusokat és halványítja az akne utáni foltokat.",
    },
    {
      src: servicesPage.betalfit,
      title: "I PEEL | BETA LIFT - AKNÉKEZELŐ HÁMLASZTÁS",
      slug: "i-peel-beta-lift-aknekezelo-hamlasztas",
      text: "Orvosi szintű, intenzív tisztító hámlasztás aknéra hajlamos, olajos bőrre. Szalicilsavval mélyen tisztítja a pórusokat, szabályozza a faggyútermelést és megelőzi az újabb pattanások kialakulását.",
    },

    {
      src: servicesPage.perfectionlift,
      title: "I PEEL | PERFECTION LIFT™ - BŐRMEGÚJÍTÓ KEZELÉS",
      slug: "i-peel-perfection-lift-bormegujito-kezeles",
      text: "Orvosi szintű hámlasztó kezelés aknéra, hiperpigmentációra és ráncokra. Szalicilsav, glikolsav és retinol kombinációja, amely intenzíven fiatalítja a bőrt és halványítja a foltokat.",
    },
    {
      src: servicesPage.perfectionliftforte,
      title: "I PEEL | PERFECTION LIFT® FORTE - INTENZÍV BŐRMEGÚJÍTÓ KEZELÉS",
      slug: "i-peel-perfection-lift-forte-intenziv-bormegujito-kezeles",
      text: "Erőteljes, orvosi szintű hámlasztó kezelés a komolyabb bőrproblémákra. Magas koncentrációjú savakkal és retinollal kezeli a mélyebb ráncokat, aknét és pigmentfoltokat tapasztalt felhasználóknak.",
    },

    // GROUP2 ************************************************* //

    // 19. ILLUMINATING ARCKEZELÉS
    {
      src: servicesPage.beclear,
      title: "BE CLEAR TISZTÍTÓ ARCKEZELÉS",
      slug: "be-clear-tisztito-arckezeles",
      text: "Antibakteriális összetevőket és nyugtató növényi hatóanyagokat kombinálva nyújt megoldást az aknés bőrproblémákra. Ideális a zsíros, pattanásos bőrre, irritáció nélkül.",
    },

    {
      src: servicesPage.illuminating,
      title: "ILLUMINATING PIGMENTFOLT HALVÁNYÍTÓ ARCKEZELÉS",
      slug: "illuminating-arckezeles",
      text: "Innovatív fehérítő és hámlasztó technológiákkal szabadítja meg a bőrt a sötét foltoktól. Azonnali eredmény, ragyogóbb bőrtónus a fakó, érzékeny, fáradt bőrre.",
    },

    // 20. THE MAX ŐSSEJTES ARCKEZELÉS
    {
      src: servicesPage.ossejt,
      title: "THE MAX ŐSSEJTES ARCKEZELÉS",
      slug: "the-max-ossejtes-arckezeles",
      text: "Növényi őssejtekkel regenerálja a bőrt, serkenti a sejtosztódást, csökkenti a ráncokat. Tökéletes az idősödő, megereszkedett, fénykárosodott bőrre.",
    },

    // 21. THE MAX CONTOUR KEZELÉS
    {
      src: servicesPage.contour,
      title: "THE MAX CONTOUR KEZELÉS",
      slug: "the-max-contour-kezeles",
      text: "Növényi őssejtek és peptidek kombinációja, amely visszaállítja az arc feszességét. Liftingelő és feltöltő hatást biztosít a megereszkedett, idősödő bőrnek.",
    },

    // 22. IMAGE ILUMA ARCKEZELÉS
    {
      src: servicesPage.serices7,
      title: "IMAGE ILUMA ARCKEZELÉS",
      slug: "image-iluma-arckezeles",
      text: "Intenzív fehérítő hatóanyagok és növényi őssejt technológia a pigmentációs problémákra. Egyenletesebbé teszi a bőrtónust és megelőzi a foltok kialakulását.",
    },

    // 23. IMAGE ÜNNEPI SIGNATURE „GLITZ AND GLOW" KEZELÉS
    {
      src: servicesPage.unnepi,
      title: "IMAGE ÜNNEPI SIGNATURE GLITZ AND GLOW KEZELÉS",
      slug: "image-glitz-and-glow-kezeles",
      text: "Gyümölcsenzimek, C-vitamin és hialuronsav kombinációja, amely táplál és ragyogást biztosít a fakó, fényét veszített bőrnek.",
    },

    // 24. IMAGE ARCFESZESÍTŐ-ÁTALAKÍTÓ KEZELÉS
    {
      src: servicesPage.serices7,
      title: "IMAGE ARCFESZESÍTŐ-ÁTALAKÍTÓ KEZELÉS",
      slug: "image-arcfeszesito-atalakito-kezeles",
      text: "Hatékony arcfeszesítő kezelés, amely már egy alkalom után is látható eredményt nyújt. Kisimítja a szarkalábakat, mélyebb ráncokat is csökkenti az idősödő bőrön.",
    },

    // 25. IMAGE SKINCARE PROBIOTIKUS TISZTÍTÓ ARCKEZELÉS
    {
      src: servicesPage.prob3,
      title: "IMAGE SKINCARE PROBIOTIKUS TISZTÍTÓ ARCKEZELÉS",
      slug: "image-probiotikus-tisztito-arckezeles",
      text: "Probiotikumok és antioxidánsok kombinációja, amely tisztítja és megújítja a bőrt. Hatékony az eltömődött pórusokra, aknéra és a fáradt, megviselt bőrre.",
    },

    // 26. MIKROBIOME+ BŐRBARRIER ERŐSÍTŐ KEZELÉS
    {
      src: servicesPage.probi,
      title: "MIKROBIOME+ BŐRBARRIER ERŐSÍTŐ KEZELÉS",
      slug: "mikrobiome-borbarrier-erosito-kezeles",
      text: "Az IMAGE első mikrobiombarát kezelése, amely a bőr védőrétegét erősíti természetes összetevőkkel. Védelmet nyújt a stressz, szárazság ellen.",
    },

    // 27. BASIC NYÁRI GLOW RADIANCE REFRESH KEZELES
    {
      src: servicesPage.radience,
      title: "BASIC NYÁRI GLOW RADIANCE REFRESH KEZELES",
      slug: "basic-nyari-glow-radiance-refresh-kezeles",
      text: "Kényeztető, visszatöltő kezelés a napozási károk regenerálására. Az Image Skincare Vital C és Ormedic termékcsaládjainak jótékony hatásaival.",
    },

    // 28. I MASK LAPMASZK KEZELÉS
    {
      src: servicesPage.mask,
      title: "I MASK HIDRATÁLÓ LAPMASZK KEZELÉS",
      slug: "i-mask-hidratalo-lapmaszk-kezeles",
      text: "Gyors hidratáló kezelés 3D hidrogéles lapmaszkkal. Benntartja a nedvességet, segíti a hatóanyagok felszívódását, csökkenti a ráncokat a dehidratált bőrön.",
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
        <div
          data-aos="fade-up"
          data-aos-offset="150"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
          className={styles.titleContainer}
        >
          <h1>IMAGE Skincare Protokolok</h1>
          <Abstract />
          <p>
            IMAGE Skincare személyre szabott bőrminőségjavító kezelési programok
            Célja a bőr ragyogásának visszanyerése és megújítása. A kezelések
            személyre szabottak, figyelembe véve a bőr állapotát, kiegészítve
            egy alapos arctisztítással. A professzionális, prémium Vital C,
            Antioxidáns anti-aging, Illuminating, Be Clear, Bio Balance, The Max
            őssejtes és probiotikus kezelés(ek), mind a tiszta és üde arcbőr
            elérését szolgálják. Az eredmény egészséges és gyönyörű bőr.
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
