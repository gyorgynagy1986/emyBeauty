"use client";

import React, { useEffect, useState } from "react";
import Button2 from "@/components/button/Button2";
import Button from "@/components/button/Button";
import Image from "next/image";
import Abstract from "@/components/astract/ObjectElement";
import InovativHeader from "@/components/serviceList/prekozmatikai-kezelesek/header/innovativHeader";
import { size } from "@/data/size";
import { alt } from "@/data/alt";
import { servicesPage } from "@/data/photos";
import styles from "./serviceList.module.css";

// AOS import
import "aos/dist/aos.css";
import AOS from "aos";

export default function Ejal40Kezeles() {
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
      <InovativHeader activePage="EJAL 40 kezelés" />

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
              <h1 className={styles.title}>EJAL 40 kezelés</h1>
              <Abstract />
            </div>

            <p>
              A kezelés egy innovatív bőrfiatalító eljárás, amely helyreállítja a bőr természetes hialuronsav szintjét, 
              ezzel pedig biztosítja bőröd számára az ideális mélyhidratációt! A megereszkedett, rugalmasságát vesztett, 
              fáradt bőr a szervezet hialuronsav szintjének csökkenése miatt alakul ki, amely a kor előrehaladtával egy 
              természetes folyamat. Skinbooster kezelésekkel viszont könnyen helyreállíthatjuk a hialuronsav mértékét: 
              a töltőanyagnak köszönhetően a sejtek regenerálódnak, a károsodott bőr megújul.
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
              src={servicesPage.ejal3} 
              sizes={size.fullsize}
            />
          </div>

          {/* --- 1. szekció --- */}
          <div 
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="200"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>Az EJAL 40 hatásai</h2>
            <p>
              Az EJAL 40 kezelés a tartós mélyrétegi hidratációt segíti elő.
            </p>
            <ul>
              <li>
                <strong>Hidratálás és bőrfeszesítés:</strong> A hialuronsav természetes hidratáló anyag, 
                amely képes megkötni a vizet a bőr mélyebb rétegeiben. Ezáltal növeli a bőr nedvességtartalmát és feszességét, 
                ami simább és teltebb megjelenést eredményez.
              </li>
              <li>
                <strong>Kollagénstimuláció:</strong> Az Ejal 40 serkenti a kollagéntermelést, amely elengedhetetlen a bőr 
                rugalmasságának és struktúrájának fenntartásához. A kollagén szintézis fokozása segít csökkenteni a finom 
                vonalak és ráncok megjelenését.
              </li>
              <li>
                <strong>Bőrmegújítás:</strong> A kezelés serkenti a bőr természetes regenerációs folyamatait, ami hozzájárul a bőr 
                textúrájának és tónusának javulásához. Az eredmény egy frissebb, fiatalosabb arcbőr.
              </li>
              <li>
                <strong>Biztonságos és minimálisan invazív:</strong> Az Ejal 40 SkinBooster biorevitalizáló, kollagénindukciós kezelés, 
                amely minimálisan invazív eljárásnak számít. A beavatkozás gyors, kevés mellékhatással jár, és a felépülési idő is rövid.
              </li>
              <li>
                <strong>Széleskörű alkalmazhatóság:</strong> Az Ejal 40 alkalmazható az arc, a nyak, a dekoltázs és a kézfej fiatalítására, 
                így sokoldalúan használható a különböző bőrterületek megújítására.
              </li>
            </ul>
            <Abstract />
          </div>

          {/* --- 2. szekció --- */}
          <div 
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="200"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>A kezelés menete</h2>
            <p>
              Az arckezeléseket minden alkalommal megelőz egy konzultáció, amely során átbeszéljük az egyéni igényeidet, 
              illetve felmérjük a kezelendő terület állapotát és az aktuális bőrminőséget. Ezek alapján összeállítjuk és átbeszéljük 
              a személyre szabott kezelési tervet és részletes tájékoztatást kapsz a kezelés utáni teendőkről is.
            </p>
            <ul>
              <li>
                <strong>Konzultáció:</strong> Felmérjük az egyéni igényeket és a bőr állapotát.
              </li>
              <li>
                <strong>Előkészítés:</strong> A konzultációt követően előkészítjük a kezelendő területet: megtisztítjuk a sminktől 
                és a szennyeződésektől, illetve fertőtlenítjük a bőrt.
              </li>
              <li>
                <strong>Kezelés:</strong> Az 1 NEED PRO MIKROTŰ segítségével a hatóanyagot a bőrbe juttatjuk. Az anyag a kezelés 
                utáni időszakban magától egyenletesen eloszlik és szétterül a szövetek közt.
              </li>
              <li>
                <strong>Utókezelés:</strong> Bőrnyugtató termékek és fényvédő alkalmazása a kezelt területen.
              </li>
            </ul>
            <Abstract />
          </div>
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
              src={servicesPage.ejal2} 
              sizes={size.fullsize}
            />
          </div>
          {/* --- 3. szekció --- */}
          <div 
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="200"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>Kinek ajánlott az EJAL 40 kezelés?</h2>
            <p>
              Az EJAL 40 kezelés különösen ajánlott azok számára, akik:
            </p>
            <ul>
              <li>Vízhiányos, dehidratált bőrproblémákkal küzdenek</li>
              <li>A bőr rugalmasságának csökkenését tapasztalják</li>
              <li>Fiatalosabb, frissebb arcbőrt szeretnének</li>
              <li>Finom vonalak és ráncok csökkentésére vágynak</li>
              <li>Nap által károsodott bőrük van</li>
              <li>Egyenetlen bőrtónust vagy textúrát szeretnének javítani</li>
              <li>Megelőző, bőröregedést késleltető kezelést keresnek</li>
            </ul>
            <p>
              A kezelés alkalmas minden bőrtípusra, és mind a nők, mind a férfiak számára ajánlott, akik természetes úton 
              szeretnék javítani bőrük megjelenését és egészségét.
            </p>
            <Abstract />
          </div>
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
              src={servicesPage.ejal1} 
              sizes={size.fullsize}
            />
          </div>
          {/* --- 4. szekció --- */}
          <div 
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="200"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>Eredmények és utógondozás</h2>
            <p>
              Az EJAL 40 kezelés után a bőr azonnal hidratáltabbnak és frissebbnek tűnik. A teljes eredmény azonban fokozatosan 
              válik láthatóvá, ahogy a hialuronsav beépül a bőrbe és serkenti a kollagéntermelést. A legjobb eredmények 
              eléréséhez általában 3 kezelésből álló kúra ajánlott, 2-4 hetes időközönként.
            </p>
            <p>
              A kezelést követően különösen fontos:
            </p>
            <ul>
              <li>Kerülni a kemény arcmosást vagy dörzsölést a kezelt területeken</li>
              <li>Magas fényvédő használata a napkárosodás megelőzésére</li>
              <li>Bőséges folyadékfogyasztás a hidratálás támogatására</li>
              <li>A javasolt utóápolási termékek rendszeres használata</li>
            </ul>
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
                <p>EJAL 40 kezelés arc</p>
                <p>80.000 Ft</p>
              </div>
              <div className={styles.priceItems}>
                <p>EJAL 40 kezelés 3 alkalmas bérlet</p>
                <p>220.000 Ft</p>
              </div>
              <div className={styles.priceItems}>
                <p>EJAL 40 kezelés arc, nyak, dekoltázs</p>
                <p>120.000 Ft</p>
              </div>
            </div>
            <Abstract />
          </div>
        </div>
      </section>
    </>
  );
}