import React from "react";
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

export default function HollywoodCarbonLazeresMedicalPeeling() {
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
          {/* --- Fő cím, bevezető szöveg és gombok --- */}
          <div className={styles.titleContainer}>
            <div className={styles.titleHelper}>
              <h1 className={styles.title}>
                Hollywood Carbon Lézeres MEDICAL Peeling
              </h1>
              <Abstract />
            </div>
          </div>

          {/* --- Kép --- */}
          <div className={styles.photoContainer}>
            <Image
              alt={alt.name}
              src={servicesPage.carbon}
              sizes={size.fullsize}
            />
          </div>
          <div className={styles.buttonContainer}>
            <Button />
            <Button2 />
          </div>
          {/* --- Tartalom (minden blokk sectionSubTitles osztállyal) --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>A Carbon Medical Peeling lényege</h2>
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
          </div>

          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Alkalmazási területek</h2>
            <ul>
              <li>Akne és aknés hegek</li>
              <li>Akne okozta hiperpigmentáció</li>
              <li>Zsíros bőr</li>
              <li>Tág pórusok</li>
              <li>Napkárosodott bőr</li>
              <li>Ráncok halványítása</li>
            </ul>
          </div>

          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>
              Carbon Medical Peeling lézeres kezelés menete
            </h2>
            <ul>
              <li>
                <strong>A bőr felkészítése:</strong> 1 héttel a kezelés előtt
                mellőzni kell a retinolos termékek használatát és beilleszteni a
                napi rutinba a fényvédő alkalmazását, mivel a kezelés utáni
                időszakban elengedhetetlen.
              </li>
              <li>
                <strong>A kezelés:</strong> A kezelés típusától függően
                előkészítjük a bőrt, majd vékony rétegben felvisszük a
                nanotechnológiás carbongélt. A szén részecskéi bejutnak a bőr
                pórusainak mélyébe, miközben felszívják az olajat, a faggyút és
                a szennyeződéseket, valamint csökkentik a baktériumok számát. A
                lézer hatására a szén részecskék a pórusokban szétrobbannak, így
                eltávolítják a szennyező anyagokat a bőrből.
              </li>
              <li>
                <strong>Utóápolás:</strong> Kezeléseim minden esetben
                utóápolással végezem orvoskozmetikai termékekkel, fokozva az
                elvárt eredményt. A kezelés után a bőr kiszáradhat, hámlás
                jelentkezhet. A megfelelő hidratálásról otthon is gondoskodni
                szükséges, legalább 1 hétig elengedhetetlen a fényvédő
                használata, továbbá ez idő alatt kerülni kell a további
                hámlasztási eljárásokat és a retinolos termékeket.
              </li>
            </ul>
          </div>

          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Anti-Aging és Akne kezelés esetén</h2>
            <p>
              <strong>Anti-Aging:</strong> A carbon peeling kezelést 3-6
              alkalommal javasolom, 2-4 hetes időközönként, majd 2-3 havonta
              egy-egy fenntartó kezelésen ajánlott részt venni.
            </p>
            <p>
              <strong>Akne:</strong> A carbon peeling kezelést 3-4 naponta lehet
              ismételni, tehát hetente maximum 2 alkalommal. Általánosan 4-6
              kezelés javasolt. A minimum hathetes folyamat során heti egy
              alkalommal végzünk karbon lézeres kezelést, mely alkalmanként
              összesen 30 percet vesz igénybe.
            </p>
          </div>

          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Otthoni utóápolás</h2>
            <p>
              A kezelés minimálisan fényérzékennyé teszi a bőrt! Néhány napig
              kerülni kell a napsütéses helyeket, szaunát és természetesen a
              szoláriumot is. A fényvédő krémet nem lehet mellőzni, és
              fokozottan figyelmet kell fordítani a folyadékbevitelre is.
            </p>
          </div>

          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Kontraindikációk</h2>
            <ul className={styles.ul2Col}>
              <li>Ha a vendég pacemaker-el él</li>
              <li>
                Ha a kezelendő területen bőrsérülés vagy kóros bőrelváltozás
                található
              </li>
              <li>Diabetes</li>
              <li>Ismert keloid hajlamban</li>
              <li>Súlyos hipertónia</li>
              <li>Vérzékenység, vagy vérhígító gyógyszerek alkalmazása</li>
              <li>Terhesség, szoptatás</li>
              <li>Daganatos betegség</li>
              <li>Immun betegség</li>
              <li>HIV/AIDS</li>
              <li>Epilepszia</li>
              <li>Belsőleges retinol kezelés</li>
            </ul>
          </div>

          {/* --- Árazás --- */}
          <div className={styles.sectionSubTitles}>
            <h1 className={styles.title}>Kezelések ára</h1>
            <div className={styles.priceContainer}>
              <div className={styles.priceItems}>
                <p>CARBON PEEL Classic</p>
                <p>30 perc - 29.900 Ft</p>
              </div>
              <div className={styles.priceItems}>
                <p>CARBON PEEL Exosomes + Geno LED FÉNYTERÁPIA</p>
                <p>60 perc - 60.000 Ft</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
