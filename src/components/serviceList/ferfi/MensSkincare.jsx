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

// AOS import
import "aos/dist/aos.css";
import AOS from "aos";

export default function MensSkincare() {
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
    window.addEventListener("resize", () => {
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
      window.removeEventListener("resize", checkIfMobile);
    };
  }, [isMobile]);

  return (
    <>
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
                Férfi Kozmetika
              </h1>
              <Abstract />
            </div>

            <p>MEN'S SKINCARE </p>

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
            <Image alt={alt.name} src={servicesPage.ferfi} sizes={size.fullsize} />
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
            <h2 className={styles.title}>Férfi Kozmetika</h2>
            <p>
              A férfiak bőrápolására és egyéb esztétikai igényeire szabott kezeléseket és termékeket foglalja magában. A férfiak bőrének sajátosságai – mint például a vastagabb bőrréteg, a nagyobb pórusok és a gyakori borotválkozás miatti irritáció következtében speciális ápolási megoldásokra van szükség. Ezek a kezelések célzottan segítik a bőr egészségének és megjelenésének javítását, figyelembe véve a férfiak egyedi igényeit. Azok, akik rendszeresen foglalkoznak bőrápolásukkal, hosszú távon egészségesebb és fiatalosabb megjelenést érhetnek el.
            </p>
            <p>
              Teljeskörű kozmetikai szolgáltatás igénybevételéhez férfi vendégeim számára a legideálisabb a frissen borotvált arcbőr.
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
            <h2 className={styles.title}>Férfi kozmetikai kezelések</h2>
            
            <h3>1. Arctisztítás és hámlasztás</h3>
            <ul>
              <li>A mélytisztítás segít eltávolítani a pórusokban felgyülemlett szennyeződéseket és felesleges olajat.</li>
              <li>Gyakori hámlasztás ajánlott, mivel a férfiak bőre hajlamosabb lehet a pórusok eltömődésére és a mitesszerek kialakulására.</li>
            </ul>
            
            <h3>2. Hidratálás és bőrápolás</h3>
            <ul>
              <li>A borotválkozás irritálhatja a bőrt, fontos a nyugtató, hidratáló termékek használata.</li>
              <li>Olyan krémek és szérumok ajánlottak, amelyek nyugtatják a bőrt, csökkentik a bőrpírt, és védelmet nyújtanak a környezeti károkkal szemben.</li>
            </ul>
            
            <h3>3. Öregedésgátlás</h3>
            <ul>
              <li>Az anti-aging termékek és kezelések, mint a kollagénstimuláló krémek vagy a feszesítő szérumok, segíthetnek a finom vonalak és ráncok csökkentésében.</li>
              <li>A retinol és C-vitamin tartalmú készítmények fokozhatják a bőr rugalmasságát és feszességét.</li>
            </ul>
            
            <h3>4. Szemkörnyék ápolása</h3>
            <ul>
              <li>A férfiak körében gyakran fordul elő a szem alatt sötét karika vagy puffadás, amelyre szemkörnyékápoló krémek és hűsítő gélmaszkok nyújthatnak hatékony megoldást. Ezek a termékek segítenek csökkenteni a szem alatti fáradtság jeleit, frissíteni a tekintetet és javítani a bőr megjelenését.</li>
            </ul>
            
            <h3>5. Borotválkozás utáni ápolás</h3>
            <ul>
              <li>Borotválkozás után a bőr irritálttá válhat, ezért ajánlott borotválkozás utáni alkoholmentes balzsamot vagy nyugtató gélt használni, amely csökkenti az irritációt.</li>
            </ul>
            
            <h3>6. Napvédelem</h3>
            <ul>
              <li>Általában sok időt töltünk szabadtéren, így elengedhetetlen a napi fényvédő használata, a nap okozta károsodás és a bőr idő előtti öregedés megelőzése érdekében.</li>
            </ul>
            
            <h3>7. Speciális kezelések</h3>
            <ul>
              <li>Férfiak számára is rendelkezésre állnak különféle arcmasszázsok, Oxygeneo™ kezelések, SECRET™ RF mikrotűs frakcionált rádiófrekvenciás kezelések, kollagén indukció, mezoterápia, LED-fényterápia, valamint más bőrfiatalító és gyulladáscsökkentő megoldások, amelyek hozzájárulnak a bőr tisztaságának és frissességének megőrzéséhez.</li>
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
            <h2 className={styles.title}>Mire lehet számítani egy kozmetikai kezelés során?</h2>
            <ul>
              <li><strong>Konzultáció:</strong> Az ismeretlen kérdések helyett világos és érthető magyarázatokat nyújtok arról, hogy mit és miért tartok szükségesnek az adott bőrprobléma esetében.</li>
              <li><strong>Szakmai hozzáértés:</strong> Problémamegoldó hatóanyagok alkalmazásával segítem a bőr egészségének helyreállítását.</li>
              <li><strong>Stresszmentesítő idő:</strong> Lehetőséget biztosítok a mindennapi stressztől való elszakadásra, mert a pihenés és a törődés MINDENKINEK jár – diszkrét, személyre szabott énidőt kínálva.</li>
              <li><strong>Otthoni bőrápolás:</strong> Professzionális, tisztító és tápláló kozmetikumok összeállításával támogatom a bőr otthoni ápolását.</li>
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
            <h2 className={styles.title}>Férfi tisztító arckezelés</h2>
            <p>
              Ez az átfogó férfi arckezelés erős antibakteriális peptideket és szalicilsavat kombinál nyugtató, gyulladáscsökkentő növényekkel, lehetővé téve az akne minden fokozatának kezelését. Különleges hatóanyagai, mint a brazil zöld agyag és az aktív növényi szén, hatékonyan méregtelenítik a szervezetet és a bőrt egyaránt.
            </p>
            <p>
              Ideális választás 35 éves kor felett, azok számára, akik mindig makulátlan bőrt szeretnének.
            </p>
            <div className={styles.priceItems}>
              <p>Arc kezelés 60 perc 1 Alkalom</p>
              <p>29.000 Ft</p>
            </div>
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
            <h2 className={styles.title}>Energetizáló, bőrmegújító férfi menedzser-kezelés masszázzsal</h2>
            <p>
              Ez a kezelés kiváló választás stresszes férfi menedzserek számára, mivel maximális kikapcsolódást biztosít, miközben gyors és látványos eredményeket nyújt a napi pörgés kizárásával. A kezelés kiegészítéseként alkalmazott mikrodermabrázió valódi megújulást jelent a vastagabb, sokszor kicsit cserzett és a dohányzás miatt szürkébb bőr számára. Frissítő, oxigenizáló, luxus anti-aging SPA kezelés.
            </p>
            <p>
              Kezelés lépései: hátpeeling, rövid hátmaszás, mikrodermabrázió, ultrahangos hatóanyag bejuttatás, arcmasszázs, befejező ápolás
            </p>
            <div className={styles.priceItems}>
              <p>Arc kezelés 60 perc 1 Alkalom</p>
              <p>35.000 Ft</p>
            </div>
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
            <h2 className={styles.title}>Férfi carbon peeling kezelés</h2>
            <p>
              Bármilyen bőrhibáról legyen szó – tág pórusok, hegek, pigmentfoltok, felületes ráncok, megunt tetoválás vagy körömgomba – a Q-kapcsolt Nd Yag lézer nyújt megoldást. A szelíd, nem roncsoló finom lézerrel végzett technika alapja a fény adszorpciós elnyelődése. A lézerfénnyel való találkozáskor a szénrészecskék „felrobbannak", ezzel megszüntetve az adott bőrproblémát. Ez a különleges eljárás fájdalommentes és gyors, nincs felépülési idő. Kúrakezelés keretében, heti rendszerességgel végzett 3-4 alkalom után folyamatosan javuló bőrképet érhetünk el.
            </p>
            <div className={styles.priceItems}>
              <p>Arc kezelés 60 perc 1 Alkalom</p>
              <p>35.000 Ft</p>
            </div>
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
            <h2 className={styles.title}>Oxygeneo™ by pollogen</h2>
            <p>
              Komplex bőrmegújító program, amely hámlaszt, oxigenizál, feltölt, ránctalanít, bőrmegújít.
            </p>
            <p>
              Ez az orvosi hatékonyságú, komplex bőrmegújító program már egy alkalom után látványos eredményeket kínál. A kezelés során rádiófrekvenciás bőrfiatalítást végzünk, ezt követi egy oxigénes kezelés, majd ultrahangos hatóanyag-bejuttatás, amelyet egy mikromasszázs zár le.
            </p>
            <div className={styles.priceItems}>
              <p>Arc kezelés 60 perc 1 Alkalom</p>
              <p>49.900 Ft</p>
            </div>
            <Abstract />
          </div>
        </div>
      </section>
    </>
  );
}