"use client";
import Slider from "react-slick";
import Image from "next/image";
import styles from "./Slider.module.css";
import { size } from "@/data/size";
import { alt } from "@/data/alt";
import { servicesPage } from "@/data/photos";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Ob from "@/components/astract/ObjectElement";

export default function ServicesPage() {
  // Az összes szolgáltatás egy tömbben
  const serviceItems = [
    {
      src: servicesPage.serices7,
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
      title: "I PEEL | LIGHTENING LIFT® FORTE - INTENZÍV BŐRVILÁGOSÍTÓ HÁMLASZTÁS",
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
    {
      src: servicesPage.serices7,
      title: "BE CLEAR TISZTÍTÓ ARCKEZELÉS",
      slug: "be-clear-tisztito-arckezeles",
      text: "Antibakteriális összetevőket és nyugtató növényi hatóanyagokat kombinálva nyújt megoldást az aknés bőrproblémákra. Ideális a zsíros, pattanásos bőrre, irritáció nélkül.",
    },
    {
      src: servicesPage.serices7,
      title: "ILLUMINATING ARCKEZELÉS",
      slug: "illuminating-arckezeles",
      text: "Innovatív fehérítő és hámlasztó technológiákkal szabadítja meg a bőrt a sötét foltoktól. Azonnali eredmény, ragyogóbb bőrtónus a fakó, érzékeny, fáradt bőrre.",
    },
    {
      src: servicesPage.serices7,
      title: "THE MAX ŐSSEJTES ARCKEZELÉS",
      slug: "the-max-ossejtes-arckezeles",
      text: "Növényi őssejtekkel regenerálja a bőrt, serkenti a sejtosztódást, csökkenti a ráncokat. Tökéletes az idősödő, megereszkedett, fénykárosodott bőrre.",
    },
    {
      src: servicesPage.serices7,
      title: "THE MAX CONTOUR KEZELÉS",
      slug: "the-max-contour-kezeles",
      text: "Növényi őssejtek és peptidek kombinációja, amely visszaállítja az arc feszességét. Liftingelő és feltöltő hatást biztosít a megereszkedett, idősödő bőrnek.",
    },
    {
      src: servicesPage.serices7,
      title: "IMAGE ILUMA ARCKEZELÉS",
      slug: "image-iluma-arckezeles",
      text: "Intenzív fehérítő hatóanyagok és növényi őssejt technológia a pigmentációs problémákra. Egyenletesebbé teszi a bőrtónust és megelőzi a foltok kialakulását.",
    },
    {
      src: servicesPage.serices7,
      title: "IMAGE ÜNNEPI SIGNATURE GLITZ AND GLOW KEZELÉS",
      slug: "image-glitz-and-glow-kezeles",
      text: "Gyümölcsenzimek, C-vitamin és hialuronsav kombinációja, amely táplál és ragyogást biztosít a fakó, fényét veszített bőrnek.",
    },
    {
      src: servicesPage.serices7,
      title: "IMAGE ARCFESZESÍTŐ-ÁTALAKÍTÓ KEZELÉS",
      slug: "image-arcfeszesito-atalakito-kezeles",
      text: "Hatékony arcfeszesítő kezelés, amely már egy alkalom után is látható eredményt nyújt. Kisimítja a szarkalábakat, mélyebb ráncokat is csökkenti az idősödő bőrön.",
    },
    {
      src: servicesPage.serices7,
      title: "IMAGE SKINCARE PROBIOTIKUS TISZTÍTÓ ARCKEZELÉS",
      slug: "image-probiotikus-tisztito-arckezeles",
      text: "Probiotikumok és antioxidánsok kombinációja, amely tisztítja és megújítja a bőrt. Hatékony az eltömődött pórusokra, aknéra és a fáradt, megviselt bőrre.",
    },
    {
      src: servicesPage.serices7,
      title: "MIKROBIOME+ BŐRBARRIER ERŐSÍTŐ KEZELÉS",
      slug: "mikrobiome-borbarrier-erosito-kezeles",
      text: "Az IMAGE első mikrobiombarát kezelése, amely a bőr védőrétegét erősíti természetes összetevőkkel. Védelmet nyújt a stressz, szárazság ellen.",
    },
    {
      src: servicesPage.serices7,
      title: "BASIC NYÁRI GLOW RADIANCE REFRESH KEZELES",
      slug: "basic-nyari-glow-radiance-refresh-kezeles",
      text: "Kényeztető, visszatöltő kezelés a napozási károk regenerálására. Az Image Skincare Vital C és Ormedic termékcsaládjainak jótékony hatásaival.",
    },
    {
      src: servicesPage.serices7,
      title: "I MASK LAPMASZK KEZELÉS",
      slug: "i-mask-lapmaszk-kezeles",
      text: "Gyors hidratáló kezelés 3D hidrogéles lapmaszkkal. Benntartja a nedvességet, segíti a hatóanyagok felszívódását, csökkenti a ráncokat a dehidratált bőrön.",
    },
    {
      src: servicesPage.serices1,
      title: "TŰ NÉLKÜLI MEZOTERÁPIA - ELEKTROPORÁCIÓ",
      slug: "/tu-nelkuli-mezoterapia",
      text: "Nobel-díjas hatásmechanizmusra épülő, tű nélküli mezoterápiás kezelés. A hatóanyagok 90%-a mély szövetekbe hatol, maximálisan hidratálja a bőrt és látványosan csökkenti a ráncokat.",
    },
    {
      src: servicesPage.serices2,
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
    }
  ];

  // Slider beállítások - megtartva az eredeti struktúrát
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  // Szöveg rövidítése az eredeti mintában látható módon
  const truncateText = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {serviceItems.map((service, index) => (
          <div key={index} className={styles.SwiperContainer}>
            <div className={styles.itemContainer}>
              <div className={styles.photoContainer}>
                <Image
                  sizes={size.fullsize}
                  alt={service.title || alt.name}
                  src={service.src}
                  className={styles.img}
                />
              </div>
              <div className={styles.textContainer}>
                <h3>{service.title}</h3>
                <Ob />
                <p>{truncateText(service.text)}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}