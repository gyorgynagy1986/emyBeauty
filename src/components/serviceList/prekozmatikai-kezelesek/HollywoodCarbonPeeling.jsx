"use client";

import React, { useEffect, useState } from "react";
import Button2 from "@/components/button/Button2";
import Button from "@/components/button/Button";
import Image from "next/image";
import Abstract from "@/components/astract/ObjectElement";
import icon from "../../../../public/assets/icon/right.svg";
import Link from "next/link";
import { size } from "@/data/size";
import { alt } from "@/data/alt";
import { servicesPage } from "@/data/photos";
import styles from "./serviceList.module.css";

// AOS import
import "aos/dist/aos.css";
import AOS from "aos";

export default function HollywoodCarbonLazeresMedicalPeeling() {
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
          <Link href="/szolgaltatasok/prekozmetikai-kezelesek">
            PREKOZMETIKAI KEZELÉSEK
          </Link>
          <Image
            style={{ marginBottom: "1px" }}
            alt={alt.name}
            size={size.fullsize}
            src={icon}
          />
          <Link className={styles.active} href="/szolgaltatasok">
            Hollywood Carbon Lézeres MEDICAL Peeling
          </Link>
        </div>
      </div>

      <section className={styles.container}>
        <div className={styles.helper}>
          {/* --- Fő cím + szöveg --- */}
          <div 
            data-aos={isMobile ? "fade" : "fade-right"}
            data-aos-offset="150"
            data-aos-delay="150"
            data-aos-duration="1500"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="true"
            className={styles.titleContainer}
          >
            <div className={styles.titleHelper}>
              <h1 className={styles.title}>
                Hollywood Carbon Lézeres MEDICAL Peeling
              </h1>
              <Abstract />
            </div>

            <p>
              A Carbon Medical Peeling egy hosszú távon is látványos
              eredményekkel járó bőrrejuvenációs kezelés, mely a hő energiáját
              használja fel, ebből kifolyólag fájdalommentesen és irritáció
              nélkül alkalmazhatjuk. Hatására a meglévő hegek halványulnak, a
              bőr pigmentállománya egységesebbé válik, az újabb aknék és
              mitesszerek kialakulása hétről hétre mérséklődik.
            </p>

            <div className={styles.buttonContainer}>
              <Button />
              <Button2 />
            </div>
          </div>

          {/* --- Kép --- */}
          <div 
            data-aos={isMobile ? "fade" : "fade-left"}
            data-aos-offset="150"
            data-aos-delay="150"
            data-aos-duration="1500"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="true"
            className={styles.photoContainer}
          >
            <Image
              alt={alt.name}
              src={servicesPage.carbon}
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
            <h2 className={styles.title}>Mi az a Carbon Medical Peeling?</h2>
            <p>
              A Carbon Medical Peeling egy hosszú távon is látványos
              eredményekkel járó bőrrejuvenációs kezelés, mely a hő energiáját
              használja fel, ebből kifolyólag fájdalommentesen és irritáció
              nélkül alkalmazhatjuk. Hatására a meglévő hegek halványulnak, a
              bőr pigmentállománya egységesebbé válik, az újabb aknék és
              mitesszerek kialakulása hétről hétre mérséklődik. A bőr
              sejtmegújító folyamatai azonban egyre hatékonyabbá válnak,
              fokozódik a kollagéntermelés, vagyis fiatalossá és rugalmassá
              válik a bőr. Az elhalt hámsejtek eltávolítása révén a pórusok
              mérete csökken és azonnal egy simább, egyenletesebb bőrfelszínt
              kapunk.
            </p>
            <p>
              Vendégeim tapasztalatai alapján a kezelés már az első alkalommal
              látványos változásokat eredményez, a harmadik-negyedik kezelést
              követően azonban jelentősen csökken az aknék és mitesszerek
              kialakulásának valószínűsége.
            </p>
            <p>
              Extra érzékeny, vagy ekcémás bőr esetén ez a kezelés kíméletesen
              elvégezhető, nem terheli meg a bőrt extrém módon, viszont kiváló
              eredménnyel lehet alkalmazni a zsíros, tág pórusú, esetleg
              gyulladt-aknés bőrön is.
            </p>
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
            <h2 className={styles.title}>Alkalmazási területek</h2>
            <ul>
              <li>Akne és aknés hegek</li>
              <li>Akne okozta hiperpigmentáció</li>
              <li>Zsíros bőr</li>
              <li>Tág pórusok</li>
              <li>Napkárosodott bőr</li>
              <li>Ráncok halványítása</li>
            </ul>
            <Abstract />
          </div>

          {/* --- 3. szekció --- */}
          <div 
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="150"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>
              Carbon Medical Peeling lézeres kezelés menete
            </h2>
            <ul>
              <li>
                <strong>A bőr felkészítése:</strong> 1 héttel a kezelés előtt
                mellőzni kell a retinolos termékek használatát és a beilleszteni
                a napi rutinba a fényvédő alkalmazását, mivel használata a
                kezelés utáni időszakban elengedhetetlen.
              </li>
              <li>
                <strong>A kezelés:</strong> A kezelés típusától függően
                előkészítjük a bőrt, majd vékony rétegben felvisszük a
                nanotechnológiás carbongélt. A szén részecskéi bejutnak a bőr
                pórusainak mélyébe, miközben felszívják az olajat, a faggyút és
                a szennyeződéseket, valamint csökkentik a baktériumok számát. A
                lézer hatására a szén részecskék a pórusokban szétrobbannnak és
                így eltávolítják a szennyező anyagokat a bőrből.
              </li>
              <li>
                <strong>Utóápolás:</strong> Kezeléseim minden esetben
                utóápolással végezem orvoskozmetikai termékekkel, fokozva az
                elvárt eredményt. A kezelés után a bőr kiszáradhat, hámlás
                jelentkezhet. A bőrkomfort elérése érdekében a megfelelő
                hidratálásról otthon is gondoskodni szükséges, legalább 1 hétig
                elengedhetetlen a fényvédő használata, továbbá ez idő alatt
                kerülni kell a további hámlasztási eljárásokat és a retinolos
                termékeket.
              </li>
            </ul>
            <Abstract />
          </div>

          {/* --- 4. szekció --- */}
          <div 
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="150"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>Kezelési ciklusok</h2>
            <h3>ANTI-AGING KEZELÉS ESETÉN:</h3>
            <p>
              A carbon peeling kezelést 3-6 alkalommal javasolom, 2-4 hetes
              időközönként, majd 2-3 havonta egy-egy fenntartó kezelésen
              ajánlott részt venni.
            </p>
            <h3>AKNE KEZELÉS ESETÉN:</h3>
            <p>
              A carbon peeling kezelést 3-4 naponta lehet ismételni, tehát
              hetente maximum 2 alkalommal. A kezelések alkalmával folyamatosan
              javuló bőrképet kapunk. Általánosan 4-6 kezelés javasolt.
            </p>
            <p>
              A minimum hathetes folyamat során heti egy alkalommal végzünk
              karbon lézeres kezelést, mely alkalmanként összesen 30 percet vesz
              igénybe.
            </p>
            <Abstract />
          </div>

          {/* --- 5. szekció --- */}
          <div 
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="150"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>Otthoni utóápolás</h2>
            <p>
              A kezelés minimálisan fényérzékennyé teszi a bőrt! Néhány napig
              kerülni kell a napsütéses helyeket, szaunát és természetesen a
              szoláriumot is. A fényvédő krémet nem lehet mellőzni, és
              fokozottan figyelmet kell fordítani a folyadékbevitelre is.
            </p>
            <Abstract />
          </div>

          {/* --- 6. szekció --- */}
          <div 
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="150"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>KONTRAINDIKÁCIÓK</h2>
            <p>A kezelés nem végezhető az alábbi esetekben:</p>
            <ul>
              <li>Ha a vendég pacemaker-el él</li>
              <li>
                Ha a kezelendő területen bőrsérülés vagy kóros bőrelváltozás
                található
              </li>
              <li> Diabetes</li>
              <li>Ismert keloid hajlamban</li>
              <li>Súlyos hipertónia</li>
              <li>Vérzékenység, vagy vérhígító gyógyszerek alkalmazása</li>
              <li>Terhesség, szoptatás</li>
              <li>Daganatos betegség</li>
              <li> Immun betegség</li>
              <li> HIV/AIDS</li>
              <li> Epilepszia</li>
              <li> Belsőleges retinol kezelés</li>
            </ul>
            <Abstract />
          </div>

          {/* --- Árazás --- */}
          <div 
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="150"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>Kezelések ára</h2>
            <div className={styles.priceContainer}>
              <div className={styles.priceItems}>
                <p>CARBON PEEL Classic 30 perc</p>
                <p>29.900 Ft</p>
              </div>
              <div className={styles.priceItems}>
                <p>CARBON PEEL Exosomes +Geno LED FÉNYTERÁPIA 60 perc</p>
                <p>60.000 Ft</p>
              </div>
            </div>
            <Abstract />
          </div>
        </div>
      </section>
    </>
  );
}