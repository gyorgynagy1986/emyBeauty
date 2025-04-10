"use client";

import React, { useEffect, useState } from "react";
import Button2 from "@/components/button/Button2";
import Button from "@/components/button/Button";
import Image from "next/image";
import Abstract from "@/components/astract/ObjectElement";
import InovativHeader from "@/components/serviceList/innovativ/header/innovativHeader";
import { size } from "@/data/size";
import { alt } from "@/data/alt";
import { servicesPage } from "@/data/photos";
import styles from "./serviceList.module.css";

// AOS import
import "aos/dist/aos.css";
import AOS from "aos";

export default function MikrodermabrazioGyemantfejes() {
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

  return (
    <>
      <InovativHeader activePage="MIKRODERMABRÁZIÓ - Gyémántfejes technológia" />

      <section className={styles.container}>
        <div className={styles.helper}>
          {/* --- Fő cím + szöveg --- */}
          <div 
            data-aos={isMobile ? "fade-up" : "fade-right"}
            data-aos-offset="150"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="true"
            className={styles.titleContainer}
          >
            <div className={styles.titleHelper}>
              <h1 className={styles.title}>
                MIKRODERMABRÁZIÓ - Gyémántfejes technológia
              </h1>
              <Abstract />
            </div>

            <p>
              A mikrodermabrázió gyémántfejes technológiával egy bőrhámlasztó
              kezelés, amely során a bőr felső, elhalt hámrétegét finoman
              eltávolítják mechanikai úton, gyémántbevonatú fejek segítségével.
              Ez a technológia a bőr felszíni megújítására szolgál, anélkül,
              hogy mélyebb szövetkárosodást okozna. Az eljárás fájdalommentes,
              nem invazív, és gyors felépülést biztosít.
            </p>

            <div className={styles.buttonContainer}>
              <Button />
              <Button2 />
            </div>
          </div>

          {/* --- Kép --- */}
          <div 
            data-aos={isMobile ? "fade-up" : "fade-left"}
            data-aos-offset="150"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="true"
            className={styles.photoContainer}
          >
            <Image
              alt={alt.name}
              src={servicesPage.serices5}
              sizes={size.fullsize}
            />
          </div>

          {/* --- 1. szekció --- */}
          <div 
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>
              Hogyan működik a gyémántfejes mikrodermabrázió?
            </h2>
            <p>
              A kezelés során egy speciális eszközt használok, mely
              gyémántporral bevont fejet tartalmaz. Ezzel a gyémántfejjel
              finoman lecsiszolom a bőr felső rétegét, mindeközben a vákuum
              elszívja az elhalt bőrsejteket és szennyeződéseket. A bőr mélyebb
              rétegeit nem érinti a kezelés, de serkenti a bőrsejtek
              regenerálódását és a kollagéntermelést.
            </p>
            <Abstract />
          </div>

          {/* --- 2. szekció --- */}
          <div 
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>Előnyei</h2>
            <ul>
              <li>
                Bőr megújítása: A bőr simábbá, frissebbé válik, textúrája
                egyenletesebb lesz.
              </li>
              <li>
                Ráncok csökkentése: Finomítja a finom vonalakat és a sekélyebb
                ráncokat.
              </li>
              <li>
                Pigmentfoltok halványítása: Csökkenti a hiperpigmentáció,
                napfoltok és öregedési foltok megjelenését.
              </li>
              <li>
                Pórusok tisztítása: A pórusok kitisztítása által, csökken a
                miteszer(ek) és pattanás(ok) kialakulása.
              </li>
              <li>
                Hegek kezelése: Enyhíti az aknés hegek vagy egyéb felszíni
                bőrhibák megjelenését.
              </li>
              <li>
                Bőrápolás növelése: A kezelés után a bőrápoló termékek, például
                szérumok és hidratálók hatékonyabban szívódnak fel, a bőr
                megújulása által.
              </li>
            </ul>
            <Abstract />
          </div>

          {/* --- 3. szekció --- */}
          <div 
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>
              Kinek ajánlott a mikrodermabráziós kezelés?
            </h2>
            <ul>
              <li>
                Érett bőr: Azoknak, akik szeretnék csökkenteni a finom ráncokat
                és megújítani a bőrük textúráját.
              </li>
              <li>
                Akne után maradt hegek: Azoknak, akiknek felületes hegeik
                vannak, például aknés hegek.
              </li>
              <li>
                Pigmentfoltok: Azoknak, akik szeretnék halványítani a
                napkárosodás vagy öregedés által kialakult pigmentfoltokat.
              </li>
              <li>
                Zsíros, pattanásos bőr: Azoknak, akik a pórusok méretét
                szeretnék csökkenteni és a bőr állapotát javítani.
              </li>
            </ul>
            <Abstract />
          </div>

          {/* --- 4. szekció --- */}
          <div 
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>Mire figyelj a kezelés után?</h2>
            <p>
              A bőr a mikrodermabrázió után ideiglenesen kipirosodhat és
              érzékennyé válhat, ezért fontos a fényvédelem, mivel a bőr
              érzékenyebbé válik a napfényre. Emellett a megfelelő hidratálás is
              kiemelten fontos, hogy a bőr gyorsabban regenerálódjon.
            </p>
            <Abstract />
          </div>

          {/* --- 5. szekció --- */}
          <div 
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>
              A mikrodermabrázió előnyei hosszú távon
            </h2>
            <p>
              A mikrodermabrázió gyémántfejes technológia egy kíméletes, de
              hatékony módja a bőr megújításának. A bőrcsiszolás rendszeres vagy
              kúraszerű alkalmazásával a bőr normális életciklusa helyreáll, a
              fiatal bőrsejtek normális ütemben termelődnek, a bőr anyagcsere
              viszonyai felélénkülnek, és egy frissebb, fiatalabb bőrre tehetünk
              szert és látványosan csökkennek a ráncok. A kúra a striák, hegek
              állapotát is kedvezően befolyásolja. A gyémántfejes
              mikrodermabrázió hasznos kezelés fiatalkorban, hiszen
              megakadályozza a zsíros, pattanásos bőrre jellemző bőrvastagodást,
              hegek kialakulását. Az évek előrehaladtával pedig fontos eszköz a
              bőr öregedésének feltartóztatásában, lassításában, a megfelelő
              hatóanyagok bevitelével kombinálva.
            </p>
            <Abstract />
          </div>

          {/* --- Árazás --- */}
          <div 
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>Kezelések ára</h2>
            <div className={styles.priceContainer}>
              <div className={styles.priceItems}>
                <p>1 Alkalom Kezelés</p>
                <p>9.900 Ft</p>
              </div>
            </div>

            <Abstract />
          </div>
        </div>
      </section>
    </>
  );
}