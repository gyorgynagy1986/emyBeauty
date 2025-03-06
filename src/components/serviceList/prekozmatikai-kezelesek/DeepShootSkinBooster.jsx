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

export default function DeepShootSkinBooster() {
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
            DEEP SHOOT SKIN BOOSTER
          </Link>
        </div>
      </div>

      <section className={styles.container}>
        <div className={styles.helper}>
          {/* --- Fő cím + szöveg --- */}
          <div 
            data-aos={isMobile ? "fade" : "fade-right"}
            data-aos-offset="150"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="true"
            className={styles.titleContainer}
          >
            <div className={styles.titleHelper}>
              <h1 className={styles.title}>DEEP SHOOT SKIN BOOSTER</h1>
              <Abstract />
            </div>

            <p>
              A legújabb koreai innováció - Előre töltött steril fecskendők és
              Turtlepin III mikrotűs fej
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
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="true"
            className={styles.photoContainer}
          >
            <Image
              alt={alt.name}
              src={servicesPage.deep2}
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
            <h2 className={styles.title}>
              A DEEP SHOOT SKIN BOOSTER kezelésről
            </h2>
            <p>
              Az innovatív, előretöltött fecskendő és az arra szerelt 19 üreges
              mikrotű egyedülálló módon teríti szét a bőrben a 3 ml
              hatóanyagkoktélt + a 19 db tű okozta mikrosérülések tovább
              fokozzák a bőr saját megújulási folyamatait. A Ribeskin DEEP SHOOT
              egyedülálló Turtlepin mikrotűs (19db 0,5mm hosszú, üreges tű)
              technológiájának köszönhetően a bejuttatott hatóanyag komplex
              bőrben történő hasznosulása kiemelkedő:
            </p>
            <ul>
              <li>
                akár 30x hatékonyabb felszívódást biztosít a felszíni
                alkalmazáshoz képest
              </li>
              <li>
                maximalizálja a bőrfelszín alá történő hatóanyag-bejuttatást
                (3ml hatóanyag többsége közvetlenül a bőrbe kerül és ott
                hasznosul)
              </li>
              <li>
                akár 15x növeli a felszívódás hatékonyságát a hagyományos
                dermaroller/dermapen eszközökhöz képest
              </li>
            </ul>
            <p>
              A kezelés érzéstelenítő nélkül is minimális fájdalomérzettel jár
              (általában a homlok és a szemkörnyék területén érzékenyebb),
              azonban nincs felépülési idő, hatása 2-3 nap múlva válik igazán
              látványossá. A kezelés egész évben végezhető, viszont a kezelést
              követően 50 faktoros fényvédő használata minden időjárási
              körülmény esetén is szükséges.
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
            <h2 className={styles.title}>Elérhető hatóanyag komplexek</h2>
            <p>
              Két féle hatóanyak komplexxel rendelkező DEEP SHOOT booster áll
              rendelkezésre:
            </p>
            <ul>
              <li>DEEP SHOOT AA – anti-aging hatással</li>
              <li>DEEP SHOOT HA – mélyhidratáló hatással</li>
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
            <h2 className={styles.title}>CO2 CARBOXY TERÁPIA</h2>
            <p>
              A Ribeskin DEEP SHOOT kezelést közvetlenül Ribeskin CO2 Carboxy
              terápia előzi meg, mely megfelelően felkészíti a bőrt a
              hatóanyagok befogadására a maximális hatékonyság érdekében.
            </p>
            <p>
              Ezzel a kezeléssel készítjük elő, illetve fokozzuk a Deep Shoot
              boosterek hatékonyságat.
            </p>
            <p>
              🔷Ebben a kezelésben a bőrt carboxy géllel fedjük be, majd erre
              egy speciális CO2 aktiváló anyagokat tartalmazó maszkot helyezünk.
            </p>
            <p>
              🔹Bohr hatás! A gél aktiválódik a felhelyezett maszk alatt,
              carbon-dioxidot termel amely behatol a pórusokba és elindul a
              regeneraló, fiatalító és mélytisztító folyamat.
            </p>
            <p>
              🔹A kezelés végére a pórusok összehúzódnak és detoxikálódnak a
              felszabaduló CO2 hatás által. Szabályozza a faggyútermelést,
              feszesíti a bört, kiegyenlíti a bőrtónust.
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
            <h2 className={styles.title}>
              RIBESKIN DEEP SHOOT AA (Anti-Aging)
            </h2>
            <h3>Többfunkciós öregedésgátlás</h3>
            <p>
              Annak érdekében, hogy bőrünk tovább maradjon fiatalos, vagy
              visszaállítsuk fiatalosságát, alapfeltétel a bőr egészséges
              működésének támogatása, ezáltal a bőrminőség javítása. Ehhez olyan
              aktív hatóanyagokra van szükség, melyek közvetlenül támogatják a
              bőr működését, és nem csak optikai javulást adnak, hanem valós
              eredményeket érnek el. Ilyenek a DEEP SHOOT AA kulcsfontosságú
              aktív összetevői, mint például a glutation, a peptidek, a
              növekedési faktorok és a B-vitamin komplex, melyek segítenek
              fenntartani a bőr fiatalos állapotát. Ez az anti-aging koktél
              stimulálja az új sejtek termelődését, növeli a bőr teltségét.
            </p>
            <p>
              Főként pigmentfoltos, egyenetlen felszínű, sápadt/fakó,
              dehidratált/vízhiányos bőrökre ajánlott. Továbbá kitűnő prevenciós
              arckezelés azok számára, akik szeretnék minél tovább megőrizni
              bőrük szépségét. A DEEP SHOOT AA kulcsfontosságú aktív összetevői
              segítenek fenntartani a bőr fiatalos állapotát.
            </p>
            <h3>RIBESKIN DEEP SHOOT AA (Anti-Aging) főbb hatóanyagai:</h3>
            <ul>
              <li>
                <strong>Glutation:</strong> a bőrben természetesen is előforduló
                antioxidáns. Védi a bőrt a környezeti hatások okozta
                öregedéstől, mindemellett hozzájárul az egyenletes, üde bőrkép
                kialakulásához. Segít helyreállítani a bőrbarrier rétegét és
                pigmentfolt halványító hatással bír.
              </li>
              <li>
                <strong>Peptidek:</strong> A kötőszövet tömörségének
                visszaállítását támogatja.(Palmitoyl Tripeptide-5,
                Octapeptide-7, Galloyl Pentapeptide-33, Copper Tripeptide-1)
              </li>
              <li>
                <strong>Növekedési faktorok:</strong> A növekedési faktorok
                hatására javul a bőrsejtek osztódása, differenciálódása, ezáltal
                szebb, fiatalosabb lesz a bőrkép. (sh-Polypeptide-9,
                sh-Polypeptide-3, sh-Polypeptide-22, sh-Polypeptide-1,
                sh-Pentapeptide-19, sh-Oligopeptide-9, sh-Oligopeptide-2,
                sh-Oligopeptide-1, sh-Octapeptide-4, sh-Decapeptide-7)
              </li>
              <li>
                <strong>B-Vitamin komplex:</strong> a B-vitaminok legjelentősebb
                előnyeinek egyike, hogy hozzájárulnak a bőr hidratáltságához, a
                kollagéntermeléshez és támogatják a sejtek megújulását.
                Szabályozzák a faggyútermelést, továbbá hozzájárulnak a
                pigmentfoltok megjelenésének megelőzéséhez.
              </li>
              <li>
                <strong>PDRN:</strong> DNS-fragmensekből álló molekula, mely
                elősegíti az angiogenézist, a sejtaktivitást, a
                kollagénszintézist, a bőrszövet regenerálódását, a bőr
                revitalizációját, illetve halványítja a pigmentfoltokat.
              </li>
            </ul>
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
              RIBESKIN DEEP SHOOT HA (Hialuronsav komplex)
            </h2>
            <h3>Mélyhidratáló hatás</h3>
            <p>
              <strong>
                RIBESKIN DEEP SHOOT HA hatóanyagai 3-féle molekulatömegű
                hyaluronsav:
              </strong>
            </p>
            <ul>
              <li>
                <strong>Alacsony-</strong> (kötőszöveti réteg erősítése)
              </li>
              <li>
                <strong>Közepes-</strong> (bőr védekezőképességének növelése)
              </li>
              <li>
                <strong>Nagy molekulatömegű</strong> (védi a bőrt a környezeti
                hatásoktól és a láthatatlan vízveszteségtől) hialuronsav bőrbe
                juttatása pótolja és megtartja a bőr nedvességét.
              </li>
            </ul>
            <p>
              Minél kisebb a hialuronsav molekula tömege, annál mélyebb
              rétegekben képes hidratálni a bőrt. Az eredmény intenzíven
              hidratált, ragyogó és élettel teli arcszín. Főként
              dehidratált/vízhiányos, korpás seborreas, problémás bőrökre
              ajánlott. Továbbá kitűnő prevenciós arckezelés azok számára, akik
              szeretnék minél tovább megőrizni bőrük szépségét.
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
            <p>
              Az alábbi RIBESKIN CO2 Carboxy terápia + DEEP SHOOT kezelések
              közül választhatsz:
            </p>
            <div className={styles.priceContainer}>
              <div className={styles.priceItems}>
                <p>Ribeskin CO2 Carboxy terápia + Deep Shoot AA (60p)</p>
                <p>60.000 Ft</p>
              </div>
              <div className={styles.priceItems}>
                <p>Ribeskin CO2 Carboxy terápia + Deep Shoot HA (60 perc)</p>
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