"use client";

import React, { useEffect, useState } from "react";
import Button2 from "@/components/button/Button2";
import Button from "@/components/button/Button";
import Image from "next/image";
import Abstract from "@/components/astract/ObjectElement";
import { size } from "@/data/size";
import { alt } from "@/data/alt";
import { servicesPage } from "@/data/photos";
import styles from "./serviceList.module.css";
import InovativHeader from "@/components/serviceList/innovativ/header/innovativHeader";

// AOS import
import "aos/dist/aos.css";
import AOS from "aos";

export default function PlazmaG() {
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
      <InovativHeader activePage="Plazma G" />

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
              <h1 className={styles.title}>Plazma G –RÁDIÓFREKVENCIÁS ARCKEZELÉS</h1>
              <Abstract />
            </div>

            <p>
              Arcfiatalítás csúcstechnológiával
              Egy Arckezelés mely láthatóan visszafordítja az öregedést
              🩵CollAge funkció
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
              src={servicesPage.plasma2}
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
            <h2 className={styles.title}>A CollAge funkció</h2>
            <p>
              A CollAge egy frakcionált, mátrixpontos rádiófrekvenciás eljárás, mely a mono- és bipoláris rádiófrekvenciát ötvözi.  A különlegessége, hogy rendkívül mélyen, ugyanakkor nagyon sűrűn hat a 36 aranyozott pont elektródának köszönhetően. A kezelés teljes mértékben noninvazív esztétikai beavatkozás. A kezelés feszesíti a laza, megereszkedett bőrt. Felemeli a szemöldököt és kinyitja a szemkörnyéket. Definiálja az állív területét. Visszapozícionálja a lecsúszó középarcot. Javítja a bőr keringését, ezáltal segíti a bőr sejtjeinek táplálását, illetve a salakanyagok távozását.  Minden bőrtípusnál és minden bőrszín esetében használható egész évben alkalmazható eljárás.
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
            <h2 className={styles.title}>Kezelhető bőrproblémák</h2>
            <ul>
              <li>Arc-,nyak-, toka-  kontúrozás</li>
              <li>Zsírbontó hatás a és bőrfeszesítő hatás együttesen érvényesülnek (a toka részen)</li>
              <li>Életkor, menopauza- vagy fogyás miatt megereszkedett bőr.</li>
              <li>Laza kötőszövet ,bőrszerkezet javítás</li>
              <li>A bőrtónus általános elvesztése.</li>
              <li>Ráncok,szem körüli sötét karikák és szarkalábak</li>
              <li>Tág pórusok csökkentése</li>
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
            <h2 className={styles.title}>Eredmény</h2>
            <p>
              A ráncok csökkenek, a bőrtónus szerkezete javul, a bőr megújul feszesebb,tömörebb, fiatalosabb lesz.
              🩵Relaxáló, nyugtató hatású
            </p>
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
            <h2 className={styles.title}>A G Plazma Collage Rádiófrekvenciás kezelés</h2>
            <p>
              A G Plazma Collage Rádiófrekvenciás kezelés önállóan és más esztétikai kezelésekkel kombinálva is alkalmazható, attól függően, milyen eredményt szeretnél elérni.
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
            <h2 className={styles.title}>Önálló kezelésként</h2>
            <p>
              A rádiófrekvenciás technológia hőt juttat a bőr mélyebb rétegeibe, amely:
            </p>
            <ul>
              <li><strong>Serkenti a kollagéntermelést</strong> – Feszesebbé és rugalmasabbá teszi a bőrt.</li>
              <li><strong>Csökkenti a ráncokat</strong> – Kisimítja a finom vonalakat és fokozza a bőr rugalmasságát.</li>
              <li><strong>Javítja a bőr textúráját</strong> – Egységesebbé teszi a bőrfelszínt.</li>
              <li><strong>Fokozza a vérkeringést</strong> – Ezáltal egészségesebb, üdébb bőrt eredményez.</li>
            </ul>
            <Abstract />
          </div>

          {/* --- 6. szekció --- */}
          <div 
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>Kombinált kezelésként</h2>
            <p>
              A rádiófrekvencia gyakran más kezelésekkel együtt alkalmazható az optimális hatás érdekében:
            </p>
            <ul>
              <li><strong>SkinBoosterrel (pl. Deep Shoot)</strong> – A bőr mélyebb hidratálása mellett segíti a hatóanyagok jobb felszívódását.</li>
              <li><strong>Mikrotűs kezelésekkel Secret RF Microneedling)</strong> – Kollagénindukciós terápia kombinálva a rádiófrekvenciás hőhatással a még feszesebb, rugalmasabb bőrért.</li>
              <li><strong>Mezoterápiával</strong> – A rádiófrekvencia elősegíti a vitaminok és hatóanyagok mélyebb bejutását a bőrbe</li>
            </ul>
            <Abstract />
          </div>

          {/* --- 7. szekció --- */}
          <div 
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>Kezelések száma</h2>
            <p>
              1 alkalom után is látványosan növeli a bőrminőséget és az arckontúrt. 
              Ajánlott kúrában minimum 3 Alkalom alkalom 3-4 hetente 
              A kezelés fájdalommentes, nincs szükség felépülési időre.
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
                <p>1 Alkalom Arc kezelés</p>
                <p>25.000 Ft</p>
              </div>
              <div className={styles.priceItems}>
                <p>Arc,Nyak/Dekoltázs</p>
                <p>39.000 Ft</p>
              </div>
            </div>

            <Abstract />
          </div>
        </div>
      </section>
    </>
  );
}