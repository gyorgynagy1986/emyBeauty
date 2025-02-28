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

export default function OneNeedPro() {
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
            1 NEED PRO
          </Link>
        </div>
      </div>

      <section className={styles.container}>
        <div className={styles.helper}>
          {/* --- Fő cím, bevezető szöveg és gombok --- */}
          <div className={styles.titleContainer}>
            <div className={styles.titleHelper}>
              <h1 className={styles.title}>1 NEED PRO</h1>
              <Abstract />
            </div>
            <p>
              Az 1 NEED PRO mikrotűs kezelés egy speciális bőrfiatalító eljárás,
              amely mikrotűk segítségével serkenti a bőr természetes
              kollagéntermelését és regenerálódását. A kezelés a mikrotűs
              mezoterápia, más néven SKINPEN vagy DERMAPEN kezelések egyik
              változata.
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
              src={servicesPage.onennedpro}
              sizes={size.fullsize}
            />
          </div>

          {/* --- Tartalom (minden blokk sectionSubTitles osztállyal) --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Hatékony bőrfelszín-megújítás</h2>
            <p>
              A különböző kezelőfejek lehetőséget biztosítanak egyéni
              protokollok kialakítására, személyre szabhatóak, így hatékony
              eredmény érhető el a 1NeedPro kezelések által. A cserélhető
              kezelőfejének köszönhetően végezhető vele mikrotűs, micropricking
              (mikroszúrás) és nano peel is.
            </p>
          </div>

          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Sokrétű megoldás</h2>
            <p>
              Egyedülálló technológiájának köszönhetően az 1NeedPro nem csupán a
              finom- és mély ráncok csökkentését, valamint az arcbőr
              textúrájának javítását támogatja, hanem enyhíti a bőrhibákat és a
              pigmentfoltokat is. Kiválóan kezeli a szemkörnyéki ráncokat, a tág
              pórusokat és a rosaceát.
            </p>
          </div>

          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Hogyan működik?</h2>
            <p>
              A mikrotűs kezelés során az aprótűk mikroszkopikus sérüléseket
              ejtenek a bőr felszínén, amelyek serkentik a bőr természetes
              gyógyulási folyamatát az új kollagén és elasztin termelésével. A
              kezelést kombináljuk különböző hatóanyagokkal – például
              hialuronsav, vitaminok és antioxidánsok – hogy a hatóanyagok
              mélyebben eljussanak a bőr rétegeibe.
            </p>
          </div>

          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Biztonságos kezelés</h2>
            <p>
              A készülék fejlesztői létrehoztak egy szilikon kupakot, amely
              összegyűjti a kezelőfej belsejébe került kórokozókat. Így a
              NOFLOW® steril, szabadalmaztatott kezelőfej kidobásával
              biztosítjuk, hogy a keresztfertőzés minden lehetőségét
              felszámoltuk.
            </p>
          </div>

          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Milyen előnyei vannak?</h2>
            <ul>
              <li>
                <strong>Bőr fiatalítása:</strong> Serkenti a kollagéntermelést,
                ami feszesebbé és rugalmasabbá teszi a bőrt, csökkenti a
                ráncokat és a finom vonalakat.
              </li>
              <li>
                <strong>Hegek és striák halványítása:</strong> Elősegíti az
                aknés hegek, műtéti hegek vagy striák megjelenésének
                csökkentését.
              </li>
              <li>
                <strong>Pigmentfoltok halványítása:</strong> Segít a
                napkárosodott bőr és pigmentfoltok kezelésében.
              </li>
              <li>
                <strong>Bőr textúrájának javítása:</strong> A bőr simább,
                egyenletesebb lesz, és javul a tónusa.
              </li>
              <li>
                <strong>Pórusok méretének csökkentése:</strong> A mikrotűs
                kezelés segít csökkenteni a pórusok láthatóságát.
              </li>
            </ul>
          </div>

          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Kinek ajánlott?</h2>
            <p>
              Az 1NeedPro kezelést azoknak ajánljuk, akik szeretnék javítani
              bőrük állapotát, megfiatalítani azt, vagy csökkenteni a hegek,
              ráncok és striák megjelenését. Különösen ajánlott:
            </p>
            <ul>
              <li>Érett bőr esetén a kollagéntermelés fokozására.</li>
              <li>Akne után maradt hegek kezelésére.</li>
              <li>Striák és bőrfeszesség-csökkenés ellen.</li>
              <li>Pigmentációs problémák vagy napkárosodott bőr esetén.</li>
            </ul>
          </div>

          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Mire kell figyelni a kezelés után?</h2>
            <p>
              A mikrotűs kezelés után a bőr ideiglenesen vörös lehet, és enyhe
              irritáció léphet fel, de ez hamar elmúlik. Fontos a megfelelő
              fényvédelem és hidratálás, mivel a bőr érzékenyebbé válik a külső
              hatásokra.
            </p>
          </div>

          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Kezelés menete</h2>
            <ul>
              <li>
                <strong>Konzultáció:</strong> A kezelés előtt alapos konzultáció
                történik, amely során felmérjük a bőr állapotát, megismerjük az
                otthon használt kozmetikumokat, napozási szokásokat és
                bőrproblémákat.
              </li>
              <li>
                <strong>Előkészítés:</strong> A kezelési terület tisztítása és
                enzimes peeling. Fertőtlenítés után érzéstelenítő krémet
                alkalmazunk a kellemetlenség minimalizálása érdekében.
              </li>
              <li>
                <strong>A kezelés:</strong> A 1NeedPro eszköz apró tűi a bőrbe
                hatolnak. A tűk mikrocsatornákat hoznak létre, amelyek serkentik
                a sejtmegújulást és segítik a hatóanyagok extracelluláris térbe
                juttatását. A Nano Peel esetében mechanikai hámlasztást végzünk,
                mely peelinggel kombinálva kiválóan alkalmas a bőr
                fiatalítására, hiperpigmentációra és az öregedési jelek
                csökkentésére.
              </li>
              <li>
                <strong>Bőrnyugtatás:</strong> GENO LED FÉNYTERÁPIA alkalmazása.
              </li>
              <li>
                <strong>Befejező ápolás:</strong> A kezelt területet bőrnyugtató
                termékekkel és fényvédővel ápoljuk.
              </li>
            </ul>
          </div>

          {/* --- Árazás --- */}
          <div className={styles.sectionSubTitles}>
            <h1 className={styles.title}>Kezelések ára</h1>
            <div className={styles.priceContainer}>
              <div className={styles.priceItems}>
                <p>1NeedPro</p>
                <p>1 alkalom 49.000 Ft-tól</p>
              </div>
              <div className={styles.priceItems}>
                <p>Exosome Therapy 1NEED Pro</p>
                <p>1 alkalom + ASCEplus EXOSOME ampulla arckezelés 80.000 Ft</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
