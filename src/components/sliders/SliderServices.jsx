"use client";

import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import styles from "./Slider.module.css";
import { size } from "@/data/size";
import { alt } from "@/data/alt";
import { servicesPage } from "@/data/photos";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Ob from "@/components/astract/ObjectElement";

export default function ServicesPage() {
  // Az összes szolgáltatás egy tömbben
  // const serviceItems = [
  //   {
  //     src: servicesPage.serices7,
  //     title: "O2LIFT SPA VÖRÖS SZŐNYEG KEZELÉS",
  //     slug: "/szolgaltatasok/image-skincare-protokolok/o2lift-spa-voros-szonyeg-kezeles",
  //     text: "Luxus, oxigénalapú arckezelés, amely mélyen tisztít, hidratál és élénkíti a bőrt. Azonnali ragyogást biztosít különleges alkalmakra, érzékeny bőrre is alkalmas.",
  //   },
  //   {
  //     src: servicesPage.ormedic,
  //     title: "I PEEL | ORMEDIC LIFT™ - FELÜLET MEGÚJÍTÓ BIO PEELING",
  //     slug: "/szolgaltatasok/image-skincare-protokolok/i-peel-ormedic-lift",
  //     text: "Gyengéd, mégis hatékony BIO hámlasztó kezelés, amely helyreállítja a bőr egyensúlyát. Érzékeny bőrre is alkalmas, természetes enzimekkel és aloe verával hidratál és nyugtat.",
  //   },
  //   {
  //     src: servicesPage.facelift,
  //     title: "I PEEL | SIGNATURE FACELIFT® - C VITAMIN SPECIALISTA",
  //     slug: "/szolgaltatasok/image-skincare-protokolok/i-peel-signature-facelift",
  //     text: "Eredményorientált kezelés 30%-os C-vitaminnal, hidroxisavakkal és enzimekkel a sejtmegújulás gyorsítására. Ragyogóbbá teszi a bőrt, halványítja a foltokat és érzékeny, rosaceas bőrre is alkalmas.",
  //   },
  //   {
  //     src: servicesPage.lightlift,
  //     title: "I PEEL | LIGHTENING LIFT® - BŐRVILÁGOSÍTÓ HÁMLASZTÁS",
  //     slug: "/szolgaltatasok/image-skincare-protokolok/i-peel-lightening-lift-borvilagosito-hamlasztas",
  //     text: "Bőrhalványító és világosító hámlasztó kezelés tejsavval, kojiksavval, C-vitaminnal és növényi őssejtekkel. Gyengéden halványítja a pigmentfoltokat és egységesíti a bőrtónust.",
  //   },
  //   {
  //     src: servicesPage.lightliftforte,
  //     title: "I PEEL | LIGHTENING LIFT® FORTE - INTENZÍV BŐRVILÁGOSÍTÓ HÁMLASZTÁS",
  //     slug: "/szolgaltatasok/image-skincare-protokolok/i-peel-lightening-lift-forte-intenzive-borvilagosito-hamlasztas",
  //     text: "Intenzív bőrvilágosító kezelés magasabb koncentrációjú hatóanyagokkal a makacsabb pigmentációs problémákra. Mélyebb hámlasztást biztosít és hatékonyan kezeli az erősebb elszíneződéseket.",
  //   },
  //   {
  //     src: servicesPage.wr,
  //     title: "I PEEL | WRINKLE LIFT® - HÁMLASZTÓ KEZELÉS",
  //     slug: "/szolgaltatasok/image-skincare-protokolok/i-peel-wrinkle-lift-hamlaszto-kezeles",
  //     text: "Erőteljes anti-aging megoldás glikolsavval és retinollal a ráncok és finom vonalak ellen. Feszesíti és revitalizálja a bőrt, javítja a bőrtónust és serkenti a sejtmegújulást.",
  //   },
  //   {
  //     src: servicesPage.wrforte,
  //     title: "I PEEL | WRINKLE LIFT® FORTE - INTENZÍV HÁMLASZTÓ KEZELÉS",
  //     slug: "/szolgaltatasok/image-skincare-protokolok/i-peel-wrinkle-lift-forte-intenziv-hamlaszto-kezeles",
  //     text: "Extra erősségű peeling 45% glikolsavval és emelt retinol tartalommal mélyebb ráncokra. Intenzív sejt-regeneráció, kollagénstimuláció és bőrfeszesítés érett, tapasztaltabb bőrre.",
  //   },
  //   {
  //     src: servicesPage.ance,
  //     title: "I PEEL | ACNE LIFT® - AKNÉS BŐR KEZELÉSE",
  //     slug: "/szolgaltatasok/image-skincare-protokolok/i-peel-acne-lift-aknes-bor-kezelese",
  //     text: "Speciális hámlasztó kezelés aknéra hajlamos, problémás bőrre. Alfa- és béta-hidroxi savak kombinációja, amely csökkenti a pattanásokat, tisztítja a pórusokat és halványítja az akne utáni foltokat.",
  //   },
  //   {
  //     src: servicesPage.betalfit,
  //     title: "I PEEL | BETA LIFT - AKNÉKEZELŐ HÁMLASZTÁS",
  //     slug: "/szolgaltatasok/image-skincare-protokolok/i-peel-beta-lift-aknekezelo-hamlasztas",
  //     text: "Orvosi szintű, intenzív tisztító hámlasztás aknéra hajlamos, olajos bőrre. Szalicilsavval mélyen tisztítja a pórusokat, szabályozza a faggyútermelést és megelőzi az újabb pattanások kialakulását.",
  //   },
  //   {
  //     src: servicesPage.perfectionlift,
  //     title: "I PEEL | PERFECTION LIFT™ - BŐRMEGÚJÍTÓ KEZELÉS",
  //     slug: "/szolgaltatasok/image-skincare-protokolok/i-peel-perfection-lift-bormegujito-kezeles",
  //     text: "Orvosi szintű hámlasztó kezelés aknéra, hiperpigmentációra és ráncokra. Szalicilsav, glikolsav és retinol kombinációja, amely intenzíven fiatalítja a bőrt és halványítja a foltokat.",
  //   },
  //   {
  //     src: servicesPage.perfectionliftforte,
  //     title: "I PEEL | PERFECTION LIFT® FORTE - INTENZÍV BŐRMEGÚJÍTÓ KEZELÉS",
  //     slug: "/szolgaltatasok/image-skincare-protokolok/i-peel-perfection-lift-forte-intenziv-bormegujito-kezeles",
  //     text: "Erőteljes, orvosi szintű hámlasztó kezelés a komolyabb bőrproblémákra. Magas koncentrációjú savakkal és retinollal kezeli a mélyebb ráncokat, aknét és pigmentfoltokat tapasztalt felhasználóknak.",
  //   },
  //   {
  //     src: servicesPage.serices7,
  //     title: "BE CLEAR TISZTÍTÓ ARCKEZELÉS",
  //     slug: "/szolgaltatasok/image-skincare-protokolok/be-clear-tisztito-arckezeles",
  //     text: "Antibakteriális összetevőket és nyugtató növényi hatóanyagokat kombinálva nyújt megoldást az aknés bőrproblémákra. Ideális a zsíros, pattanásos bőrre, irritáció nélkül.",
  //   },
  //   {
  //     src: servicesPage.serices7,
  //     title: "ILLUMINATING ARCKEZELÉS",
  //     slug: "/szolgaltatasok/image-skincare-protokolok/illuminating-pigmenfolt-halvanyito-arckezeles",
  //     text: "Innovatív fehérítő és hámlasztó technológiákkal szabadítja meg a bőrt a sötét foltoktól. Azonnali eredmény, ragyogóbb bőrtónus a fakó, érzékeny, fáradt bőrre.",
  //   },
  //   {
  //     src: servicesPage.serices7,
  //     title: "THE MAX ŐSSEJTES ARCKEZELÉS",
  //     slug: "/szolgaltatasok/image-skincare-protokolok/the-max-ossejtes-arckezeles",
  //     text: "Növényi őssejtekkel regenerálja a bőrt, serkenti a sejtosztódást, csökkenti a ráncokat. Tökéletes az idősödő, megereszkedett, fénykárosodott bőrre.",
  //   },
  //   {
  //     src: servicesPage.serices7,
  //     title: "THE MAX CONTOUR KEZELÉS",
  //     slug: "/szolgaltatasok/image-skincare-protokolok/the-max-contour-kezeles",
  //     text: "Növényi őssejtek és peptidek kombinációja, amely visszaállítja az arc feszességét. Liftingelő és feltöltő hatást biztosít a megereszkedett, idősödő bőrnek.",
  //   },
  //   {
  //     src: servicesPage.serices7,
  //     title: "IMAGE ILUMA ARCKEZELÉS",
  //     slug: "/szolgaltatasok/image-skincare-protokolok/image-iluma-arckezeles",
  //     text: "Intenzív fehérítő hatóanyagok és növényi őssejt technológia a pigmentációs problémákra. Egyenletesebbé teszi a bőrtónust és megelőzi a foltok kialakulását.",
  //   },
  //   {
  //     src: servicesPage.serices7,
  //     title: "IMAGE ÜNNEPI SIGNATURE GLITZ AND GLOW KEZELÉS",
  //     slug: "/szolgaltatasok/image-skincare-protokolok/image-glitz-and-glow-kezeles",
  //     text: "Gyümölcsenzimek, C-vitamin és hialuronsav kombinációja, amely táplál és ragyogást biztosít a fakó, fényét veszített bőrnek.",
  //   },
  //   {
  //     src: servicesPage.serices7,
  //     title: "IMAGE ARCFESZESÍTŐ-ÁTALAKÍTÓ KEZELÉS",
  //     slug: "/szolgaltatasok/image-skincare-protokolok/image-arcfeszesito-atalakito-kezeles",
  //     text: "Hatékony arcfeszesítő kezelés, amely már egy alkalom után is látható eredményt nyújt. Kisimítja a szarkalábakat, mélyebb ráncokat is csökkenti az idősödő bőrön.",
  //   },
  //   {
  //     src: servicesPage.serices7,
  //     title: "IMAGE SKINCARE PROBIOTIKUS TISZTÍTÓ ARCKEZELÉS",
  //     slug: "/szolgaltatasok/image-skincare-protokolok/image-probiotikus-tisztito-arckezeles",
  //     text: "Probiotikumok és antioxidánsok kombinációja, amely tisztítja és megújítja a bőrt. Hatékony az eltömődött pórusokra, aknéra és a fáradt, megviselt bőrre.",
  //   },
  //   {
  //     src: servicesPage.serices7,
  //     title: "MIKROBIOME+ BŐRBARRIER ERŐSÍTŐ KEZELÉS",
  //     slug: "/szolgaltatasok/image-skincare-protokolok/mikrobiome-borbarrier-erosito-kezeles",
  //     text: "Az IMAGE első mikrobiombarát kezelése, amely a bőr védőrétegét erősíti természetes összetevőkkel. Védelmet nyújt a stressz, szárazság ellen.",
  //   },
  //   {
  //     src: servicesPage.serices7,
  //     title: "BASIC NYÁRI GLOW RADIANCE REFRESH KEZELES",
  //     slug: "/szolgaltatasok/image-skincare-protokolok/basic-nyari-glow-radiance-refresh-kezeles",
  //     text: "Kényeztető, visszatöltő kezelés a napozási károk regenerálására. Az Image Skincare Vital C és Ormedic termékcsaládjainak jótékony hatásaival.",
  //   },
  //   {
  //     src: servicesPage.serices7,
  //     title: "I MASK LAPMASZK KEZELÉS",
  //     slug: "/szolgaltatasok/image-skincare-protokolok/i-mask-lapmaszk-kezeles",
  //     text: "Gyors hidratáló kezelés 3D hidrogéles lapmaszkkal. Benntartja a nedvességet, segíti a hatóanyagok felszívódását, csökkenti a ráncokat a dehidratált bőrön.",
  //   },
  //   {
  //     src: servicesPage.serices1,
  //     title: "TŰ NÉLKÜLI MEZOTERÁPIA - ELEKTROPORÁCIÓ",
  //     slug: "/szolgaltatasok/slow-aging-kezelesek/tu-nelkuli-mezoterapia",
  //     text: "Nobel-díjas hatásmechanizmusra épülő, tű nélküli mezoterápiás kezelés. A hatóanyagok 90%-a mély szövetekbe hatol, maximálisan hidratálja a bőrt és látványosan csökkenti a ráncokat.",
  //   },
  //   {
  //     src: servicesPage.serices2,
  //     title: "GENO-LED ALACSONY INTENZITÁSÚ LED FÉNY",
  //     slug: "/szolgaltatasok/slow-aging-kezelesek/geno-led-alacsony-intenzitasu-led-feny",
  //     text: "Komplikált bőrproblémákat old meg LED fénnyel. A 287 speciális LED összetevő különböző hullámhosszúságú fényt sugározva regenerálja és nyugtatja a bőrt, mellékhatások nélkül.",
  //   },
  //   {
  //     src: servicesPage.sqt4,
  //     title: "SQT® BIO MIKROTŰS SZIVACSTŰ KEZELÉS",
  //     slug: "/szolgaltatasok/slow-aging-kezelesek/sqt-bio-mikrotus-kezeles",
  //     text: "3 millió természetes szilícium mikrotűvel serkenti a bőr anyagcseréjét. Fájdalommentes megoldás, amely természetes módon rövidíti a bőr megújulási ciklusát és halványítja a pigmentfoltokat.",
  //   },
  //   {
  //     src: servicesPage.serices4,
  //     title: "GENOSYS SNOWCELL",
  //     slug: "/szolgaltatasok/slow-aging-kezelesek/genosys-snowcell",
  //     text: "Innovatív pigmentációkezelő és bőrfiatalító eljárás, amely gátolja a melanin termelődését. Nyáron is alkalmazható, halványítja a foltokat és stimulálja a kollagén termelődést.",
  //   },
  //   {
  //     src: servicesPage.serices5,
  //     title: "MIKRODERMABRÁZIÓ - GYÉMÁNTFEJES TECHNOLOGIA",
  //     slug: "/szolgaltatasok/slow-aging-kezelesek/mikrodermabrazio-gyemantfejes-technologia",
  //     text: "Fájdalommentes bőrhámlasztó kezelés, amely gyémántfejes technológiával megújítja a bőrt. Csökkenti a ráncokat, halványítja a pigmentfoltokat és segíti a hatóanyagok felszívódását.",
  //   },
  //   {
  //     src: servicesPage.serices6,
  //     title: "1 NEED PRO MIKROTŰS KEZELÉS",
  //     slug: "/szolgaltatasok/slow-aging-kezelesek/1-need-pro-mikrotus-kezeles",
  //     text: "Speciális bőrfiatalító eljárás, amely mikrotűkkel serkenti a kollagéntermelést. Cserélhető kezelőfejekkel személyre szabható, kezeli a ráncokat, pigmentfoltokat és a tág pórusokat.",
  //   },
  // ];

  const serviceItems = [
    {
      src: servicesPage.konzultacio,
      title: "ARAMO 3D Mikroszkopikus BŐRDIAGNOSZTIKA",
      slug: "/szolgaltatasok/aramo-bordiagnosztika-boranalizis-konzultacio",
      text: "Fejlett bőrdiagnosztikai eljárás, amely 3D mikroszkópos technológiával részletesen vizsgálja a bőr állapotát. Pontos képet ad a pórusokról, hidratáltságról és a bőr egyéb jellemzőiről, megalapozva a személyre szabott kezelési tervet.",
    },
    {
      src: servicesPage.secret,
      title: "Secret™ RF Mikrotűs Frakcionált Rádiófrekvenciás Kezelés",
      slug: "/szolgaltatasok/prekozmetikai-kezelesek/secret-rf",
      text: "Innovatív kombinált technológia, amely mikrotűk és rádiófrekvencia együttes alkalmazásával stimulálja a kollagéntermelést. Hatékonyan kezeli a ráncokat, hegeket, tág pórusokat és javítja a bőr feszességét minimális felépülési idővel.",
    },
    {
      src: servicesPage.oxi2,
      title: "Oxygeneo™ Komplex Bőrmegújító Program",
      slug: "/szolgaltatasok/prekozmetikai-kezelesek/pollogen-oxygeneo",
      text: "Háromfázisú luxus arckezelés, amely exfoliál, oxigénnel dúsít és tápláló hatóanyagokat juttat a bőrbe. Természetes módon serkenti a vérkeringést, azonnali ragyogást biztosít és hosszú távon javítja a bőr textúráját.",
    },
    {
      src: servicesPage.asceplus,
      title: "EXOSOME Sejtterápia",
      slug: "/szolgaltatasok/prekozmetikai-kezelesek/exosome-sejtterapia",
      text: "Forradalmi anti-aging kezelés, amely őssejtekből származó exoszómákat használ a bőr regenerálására. Serkenti a sejtek közötti kommunikációt, felgyorsítja a bőr természetes megújulási folyamatait és jelentősen csökkenti az öregedés jeleit.",
    },
    {
      src: servicesPage.serices6,
      title: "1 NEED Pro Kollagén Indukció terápia",
      slug: "/szolgaltatasok/slow-aging-kezelesek/1-need-pro-mikrotus-kezeles",
      text: "Speciális bőrfiatalító eljárás, amely mikrotűkkel serkenti a kollagéntermelést. Cserélhető kezelőfejekkel személyre szabható, kezeli a ráncokat, pigmentfoltokat és a tág pórusokat.",
    },
    {
      src: servicesPage.carbon,
      title: "Hollywood Carbon Lézeres MEDICAL Peeling",
      slug: "/szolgaltatasok/prekozmetikai-kezelesek/hollywood-carbon-peeling",
      text: "Prémium bőrfiatalító kezelés, amely szénrészecskéket és lézertechnológiát kombinál. Mélyen tisztítja a pórusokat, eltávolítja az elhalt hámsejteket, és csökkenti a faggyútermelést, azonnali ragyogást és fiatalosabb megjelenést biztosítva.",
    },
    {
      src: servicesPage.deep4,
      title: "Deep SHOOT SKINBOOSTER",
      slug: "/szolgaltatasok/prekozmetikai-kezelesek/deep-shoot-skin-booster",
      text: "Speciális bőrfeltöltő kezelés, amely mélyen hidratálja és táplálja a bőrt. Hialuronsavat és vitaminokat juttat a bőr mélyebb rétegeibe, javítva annak rugalmasságát, feszességét és általános megjelenését.",
    },
    {
      src: servicesPage.plasma,
      title: "Plazma G Collage - Frakcionált rádiófrekvenciás kezelés",
      slug: "/szolgaltatasok/prekozmetikai-kezelesek/plazma-g-collage-frakcionalt-radiofrekvencias-kezeles",
      text: "Modern bőrfeszesítő eljárás, amely plazma és rádiófrekvenciás technológiát ötvöz. Stimulálja a kollagén és elasztin termelődését, feszesíti a laza bőrt és látványosan fiatalítja az arc, nyak és dekoltázs területét.",
    },
    {
      src: servicesPage.tunelkuli,
      title: "TŰ NÉLKÜLI MEZOTERÁPIA - ELEKTROPORÁCIÓ",
      slug: "/szolgaltatasok/slow-aging-kezelesek/tu-nelkuli-mezoterapia",
      text: "Nobel-díjas hatásmechanizmusra épülő, tű nélküli mezoterápiás kezelés. A hatóanyagok 90%-a mély szövetekbe hatol, maximálisan hidratálja a bőrt és látványosan csökkenti a ráncokat.",
    },
  // {
  //   src: servicesPage.ance,
  //   title: "Dr.Platon Atmoszférikus Hideg Plazma",
  //   slug: "/szolgaltatasok/dr-platon-atmoszferikus-hideg-plazma",
  //   text: "Innovatív technológia, amely hideg plazma alkalmazásával stimulálja a bőr természetes gyógyulási folyamatait. Antibakteriális hatású, javítja a bőr oxigénellátását, és hatékonyan kezeli az aknét, rozáceát és egyéb bőrproblémákat mellékhatások nélkül.",
  // },
  ];

  // Slider beállítások - megtartva az eredeti struktúrát
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
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
  // Szöveg rövidítése
  const truncateText = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  // Cím rövidítése 820px szélességtől
  const truncateTitle = (title, maxLength = 45) => {
    if (typeof window !== "undefined" && window.innerWidth <= 820) {
      return title.length > maxLength
        ? title.substring(0, maxLength) + "..."
        : title;
    }
    return title;
  };

  // A URL összeállítása a szolgáltatáshoz
  const getServiceUrl = (service) => {
    return `${service.slug}`;
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {serviceItems.map((service, index) => (
          <div key={index} className={styles.SwiperContainer}>
            <Link href={getServiceUrl(service)} className={styles.serviceLink}>
              <div className={styles.itemContainer}>
                <div className={styles.photoContainer}>
                  <div className={styles.imageWrapper}>
                    <Image
                      sizes={size.fullsize}
                      alt={service.title || alt.name}
                      src={service.src}
                      className={styles.img}
                    />
                  </div>
                </div>
                <div className={styles.textContainer}>
                  <h3>{truncateTitle(service.title)}</h3>
                  <Ob />
                  <p>{truncateText(service.text)}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
