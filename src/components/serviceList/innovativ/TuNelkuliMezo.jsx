import React from "react";
import Button2 from "@/components/button/Button2";
import Button from "@/components/button/Button";
import Image from "next/image";
import Abstract from "@/components/astract/Object";
import InovativHeader from "@/components/serviceList/innovativ/header/InnovativHeader";

import { size } from "@/data/size";
import { alt } from "@/data/alt";
import { servicesPage } from "@/data/photos";
import styles from "./serviceList.module.css";

export default function TuNelkuliMezoterapia() {
  return (
    <>
      <InovativHeader activePage="TŰ NÉLKÜLI MEZOTERÁPIA - Elektroporáció sejtszintű megújulás" />

      <section className={styles.container}>
        <div className={styles.helper}>
          {/* --- Fő cím + szöveg --- */}
          <div className={styles.titleContainer}>
            <div className={styles.titleHelper}>
              <h1 className={styles.title}>
                TŰ NÉLKÜLI MEZOTERÁPIA - Elektroporáció sejtszintű megújulás
              </h1>
              <Abstract />
            </div>

            <p>
              Világújdonság a kozmetikai iparágban! Nobel-díjas
              hatásmechanizmusra épülő kezelés, tű és szike nélküli
              ránctalanítás.
            </p>

            <div className={styles.buttonContainer}>
              <Button />
              <Button2 />
            </div>
          </div>

          {/* --- Kép --- */}
          <div className={styles.photoContainer}>
            <Image
              alt={alt.name}
              src={servicesPage.slug1}
              sizes={size.fullsize} // Ha különböző méretadatokat használunk
              // size objektumból v. fixen
            />
          </div>

          {/* --- 1. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>
              TŰ NÉLKÜLI MEZOTERÁPIA - ELEKTROPORÁCIÓ
            </h2>
            <p>
              A kozmetikatudomány körében a leghatékonyabb eljárás a tű nélküli
              mezoterápiás beavatkozás (elektroporáció), mely során a készülék
              által kibocsájtott speciális elektromágneses hullámok csatornákat
              képeznek (melyek szabad szemmel nem láthatók), de valós nyílásokat
              hoznak létre a bőr felszínétől a sejtmembrán falát megnyitva. Ezen
              keresztül a bőrre felvitt bármely hatóanyag hatékony módon
              penetrál a bőrbe, összehasonlítva más felszívódást elősegítő
              módszerekkel. A hatóanyagok 90%-a mély szövetekbe és sejtekbe
              hatol.
            </p>
            <Abstract />
          </div>

          {/* --- 2. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Bőrfiatalítás</h2>
            <p>
              A bőrfiatalítás során főként hialuronsavat, vitamin komplexeket
              juttatunk a bőr hám és irha rétegeibe. Maximálisan és mélyen
              hidratálja a bőrt, ezáltal kisimítja a vízhiányos ráncokat.
              Feszesíti az arcbőrt, a kollagén és elasztin termelődés
              fokozásával. Antioxidáns hatásának köszönhetően lassítja az
              öregedési folyamatokat. A bőr puhábbá, sugárzóbbá, simábbá válik,
              és a ráncok látványosan csökkenek. Fokozott hatékonysággal
              kezelhető területek: arc, nyak, dekoltázs. Az eredmény már az első
              kezelés után látványos.
            </p>
            <Abstract />
          </div>

          {/* --- 3. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>
              Személyre szabott hatóanyag-koktélok
            </h2>
            <p>
              A bőr igényeinek ismeretében személyre szabott
              hatóanyag-koktélokat tudunk összeállítani, különböző 100%-osan
              analitikus tisztaságú mezo koktél anyagokból, úgy mint:
            </p>
            <ul className={styles.ul2Col}>
              <li>hailuronsav</li>
              <li>kollagén</li>
              <li>elasztin</li>
              <li>aminosavak</li>
              <li>antioxidáns vitaminok kaviár</li>
              <li>argirelin (mimikai izomlazító)</li>
              <li>őssejt (növényi DNS)</li>
              <li>anti-aging fiatalságaktiváló Q10 koenzim</li>
            </ul>
            <Abstract />
          </div>

          {/* --- 4. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Kezelési javaslat</h2>
            <p>
              A mezoterápiás kezelés alkalomszerűen is hatékony és látványos, de
              a hatékonyság fokozásának érdekében ajánlom a kúra rendszerességű
              kezelést, mely 6 kezelésből áll össze, és minden 5. alkalom után a
              6. kezelés AJÁNDÉK. A kezelés hatékonyságát fokozottan növeli a
              bőrtípusnak megfelelően, konzultáció során közösen összeállított
              otthoni bőrápolás.
            </p>
            <Abstract />
          </div>

          {/* --- 5. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Az eljárás fő elemei</h2>
            <ul>
              <li>
                1. Elektroporáció: Az elektroporáció során elektromos
                impulzusokat alkalmazunk a bőrön, amelyek ideiglenesen
                mikroszkopikus pórusokat hoznak létre a bőr sejtjeinek
                membránján. Ezeken a nyílásokon keresztül a hatóanyagok (például
                hialuronsav, vitaminok, antioxidánsok) közvetlenül bejutnak a
                sejtekbe, ahol kifejtik hatásukat.
              </li>
              <li>
                2. Sejtszintű megújulás: A tű nélküli mezoterápia célja, hogy a
                hatóanyagokat közvetlenül a sejtekhez juttassa, így serkentve a
                sejtek megújulását, a kollagéntermelést és a bőr hidratálását.
                Ez javítja a bőr állagát, feszességét, rugalmasságát és
                csökkenti az öregedés látható jeleit.
              </li>
            </ul>
            <Abstract />
          </div>

          {/* --- 6. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Előnyei</h2>
            <ul>
              <li>
                Fájdalommentes: A kezelés tűk használata nélkül történik,
                gyakorlatilag fájdalommentes, és nincs szükség felépülési időre.
              </li>
              <li>
                Hatékony bőrfeszesítés és hidratálás: A hatóanyagok mély régetbe
                való bejutásával a bőr feszesebbé válik, a finom ráncok
                kisimulnak, és a bőr hidratáltabb lesz.
              </li>
              <li>
                Széleskörű alkalmazhatóság: Alkalmas száraz, fakó bőr,
                pigmentfoltok, ráncok, aknék vagy hegek kezelésére is.
              </li>
              <li>
                Biztonságos: Nem jár invazív eljárással, alacsony a fertőzés
                vagy komplikációk kockázata.
              </li>
            </ul>
            <Abstract />
          </div>

          {/* --- 7. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Kinek ajánlott?</h2>
            <p>
              Az elektroporációs tű nélküli mezoterápia ajánlott mindazoknak,
              akik fájdalommentes, de hatékony bőrmegújító kezelést szeretnének.
              Bőr fiatalításra, bőrproblémák kezelésére, vagy akár preventív
              célzattal is alkalmazható a bőr egészségének fenntartása
              érdekében.
            </p>
            <Abstract />
          </div>

          {/* --- Árazás --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Kezelések ára</h2>
            <div className={styles.priceContainer}>
              <div className={styles.priceItems}>
                <p>Tű nélküli mezoterápia</p>
                <p>1 Alkalom 19.000 Ft-tól</p>
              </div>
            </div>

            <Abstract />
          </div>
        </div>
      </section>
    </>
  );
}
