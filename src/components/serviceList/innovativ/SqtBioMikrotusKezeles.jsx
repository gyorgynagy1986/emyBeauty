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

export default function SqtBioMikrotusKezeles() {
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
      <InovativHeader activePage="SQT® Bio Mikrotűs szivacstű kezelés" />

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
                SQT® Bio Mikrotűs szivacstű kezelés
              </h1>
              <Abstract />
            </div>

            <p>
              Mindössze 5 perc alatt, 3 000 000 természetes szilícium bio
              mikrotűt közvetlenül kézi masszázzsal juttatunk a bőr középső
              rétegébe, hogy serkentsük a bőr anyagcseréjét és elősegítsük a
              kollagén és elasztikus rostok termelődését.
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
              src={servicesPage.sqt1}
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
            <h2 className={styles.title}>Pontosan mi ez a szivacstű?</h2>
            <p>
              A szivacstű egy olyan termék, amely a Spongilla nemzetségbe
              tartozó, édesvízi szivacsokból származik. A Spongilla szivacsokat
              régóta használják az alternatív gyógyászatban és a
              kozmetikumokban. A szivacsokat liofilizált eljárással szárítják,
              sterilizálják és őrlik porrá, majd kozmetikai célokra használják
              fel.
            </p>
            <Abstract />
          </div>
          <div 
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.photoContainer}
          >
            <Image
              alt={alt.name}
              src={servicesPage.sqt4}
              sizes={size.fullsize}
            />
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
            <h2 className={styles.title}>
              Mitől különleges az SQT® bio mikrotűs kezelés?
            </h2>
            <p>
              A kezeléshez használt mikrotűk nem tartalmaznak vegyipari
              összetevőket, nem kémiai szintézissel, mesterségesen előállított
              termékek. Kizárólag természetes anyagokat használok a kezelés
              során, úgynevezett szivacstű csontokat. Természetes anyagokkal
              idézi elő a bőr hámlását és megújulását a tűs kezelésekhez
              hasonlóan, viszont a hatást a szivacstű(k) által érjük el, melynek
              anyaga a természetben megtalálható szilícium.
            </p>
            <Abstract />
          </div>
          <div 
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.photoContainer}
          >
            <Image
              alt={alt.name}
              src={servicesPage.sqt2}
              sizes={size.fullsize}
            />
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
              Az SQT® bio mikrotűs kezelés előnyei
            </h2>
            <ul>
              <li>
                {" "}
                Nincs szükség érzéstelenítésre, nem keletkezik vérzés vagy
                bőrseb.
              </li>
              <li>
                {" "}
                A bőr megújulási ciklusát 28 napról 7-14 napra rövidíti le,
                természetes, biztonságos és hatékony fizikai megújulást ér el.
              </li>
              <li>
                {" "}
                Azok számára, akik eddig tartózkodtak a tűs kezelési
                eljárásoktól, egy tökéletes választás a forradalmian új és
                innovatív természetes eredetű SQT® Bio Mikrotűs eljárás.
              </li>
              <li>
                {" "}
                A különleges tengeri szivacs kivonatnak az erőssége a
                mikroszkopikus tűkben rejlik.
              </li>
              <li>
                {" "}
                A bőr egyenletesebb, üdébb, feszesebb lesz, a pigmentfoltok
                halványodnak.
              </li>
            </ul>
            <Abstract />
          </div>
          <div 
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.photoContainer}
          >
            <Image
              alt={alt.name}
              src={servicesPage.sqt3}
              sizes={size.fullsize}
            />
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
            <h2 className={styles.title}>Milyen bőrtípusnál alkalmazható?</h2>
            <p>
              A kémiai vagy gyógynövényes hámlasztó kezelésekkel ellentétben az
              SQT bio mikrotűs kezelésnek nincs mellékhatása, így minden
              bőrtípus esetében biztonsággal alkalmazható. Kizárólag természetes
              összetevőket tartalmaz, nincsenek benne szavak, vagy egyéb bőrt
              károsító összetevők. Kiválóan alkalmas az érzékeny bőr kezelésére,
              segíti a bőr víz – és olajtartalmának optimalizálását, a bőr
              természetes regenerációját.
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
              Milyen bőrproblémára ajánlott az SQT bio mikrotűs kezelés?
            </h2>
            <ul className={styles.ul2Col}>
              <li> akne kezelésre</li>
              <li> hegek eltüntetésére</li>
              <li> striák eltüntetésére</li>
              <li> pigmentfoltok halványítására</li>
              <li> tág pórusok kezelésére</li>
              <li> finom ráncok eltüntetésére</li>
              <li> megereszkedett bőr feszesebbé tételére</li>
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
            <h2 className={styles.title}>
              Hány alkalom szükséges a látványos eredmény eléréséhez?
            </h2>
            <p>
              A kezelések száma mindig az adott bőrproblémától függ. Olyan
              esetekben, mint az akne, vagy hegek 4-6 kezelés ajánlott, egyéb
              bőrtípusoknál már 1-2 alkalom után is látványos az eredmény.
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
            <h2 className={styles.title}>
              Mennyibe kerül az SQT bio mikrotűs kezelés?
            </h2>
            <div className={styles.priceContainer}>
              <div className={styles.priceItems}>
                <p>Problémás bőr kezelése</p>
                <p>1 alkalom 39.000Ft</p>
              </div>
              <div className={styles.priceItems}>
                <p>Pigmentfolt kezelése</p>
                <p>1 alkalom 39.000 Ft</p>
              </div>
              <div className={styles.priceItems}>
                <p>Anti-aging kezelés</p>
                <p>1 alkalom 50.000 Ft</p>
              </div>
            </div>

            <Abstract />
          </div>
        </div>
      </section>
    </>
  );
}