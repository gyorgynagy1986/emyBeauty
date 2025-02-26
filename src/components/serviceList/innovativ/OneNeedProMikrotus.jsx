import React from "react";
import Button2 from "@/components/button/Button2";
import Button from "@/components/button/Button";
import Image from "next/image";
import Abstract from "@/components/astract/Object";
import icon from "../../../../public/assets/icon/right.svg";
import Link from "next/link";
import { size } from "@/data/size";
import { alt } from "@/data/alt";
import { servicesPage } from "@/data/photos";
import styles from "./serviceList.module.css";

export default function OneNeedProMikrotus() {
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
          <Link href="/szolgaltatasok/innovativ-kezelesek">
            INNOVATÍV KEZELÉSEK
          </Link>
          <Image
            style={{ marginBottom: "1px" }}
            alt={alt.name}
            size={size.fullsize}
            src={icon}
          />
          <Link className={styles.active} href="/szolgaltatasok">
            1 NEED PRO MIKROTŰS KEZELÉS
          </Link>
        </div>
      </div>

      <section className={styles.container}>
        <div className={styles.helper}>
          {/* --- Fő cím + szöveg --- */}
          <div className={styles.titleContainer}>
            <div className={styles.titleHelper}>
              <h1 className={styles.title}>1 NEED PRO Mikrotűs kezelés</h1>
              <Abstract />
            </div>

            <p>
              Az 1 NEED PRO mikrotűs kezelés egy speciális bőrfiatalító eljárás, amely mikrotűk segítségével serkenti a bőr természetes kollagéntermelését és regenerálódását. A kezelés a mikrotűs mezoterápia, más néven SKINPEN vagy DERMAPEN kezelések egyik változata.
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
            <h2 className={styles.title}>Hatékony bőrfelszín-megújítás</h2>
            <p>
              A különböző kezelőfejek lehetőséget biztosítanak egyéni protokollok kialakítására, személyre szabhatóak, így hatékony eredmény érhető el a 1NeedPro kezelések által. A cserélhető kezelőfejének köszönhetően végezhető vele mikrotűs, micropricking (mikroszúrás) és nano peel is.
            </p>
            <Abstract />
          </div>

          {/* --- 2. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>
              Sokrétű megoldás
            </h2>
            <p>
              Egyedülálló technológiájának köszönhetően a 1NeedPro azon kívül, hogy a finom- és mély ráncok csökkentését és az arcbőr textúrájának javítását támogatja, enyhíti a bőrhibákat és a pigmentfoltokat. Kiválóan kezeli a szemkörnyéki ráncokat, a tág pórusokat és a rosaceát is. Az ilyen típusú eljárások célja a bőr feszesítése, textúrájának javítása és az eltérő bőrproblémák kezelése.
            </p>
            <Abstract />
          </div>

          {/* --- 3. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>
              Hogyan működik?
            </h2>
            <p>
              A mikrotűs kezelés során az aprótűk mikroszkopikus sérüléseket ejtenek a bőr felszínén. Ezek a mikrosérülések serkentik a bőr természetes gyógyulási folyamatát, amely új kollagén és elasztin termelésével jár. A kollagén az a fehérje, amely a bőrt feszessé és rugalmassá teszi, míg az elasztin biztosítja annak rugalmasságát. A 1NEED PRO mikrotűs kezelést kombináljuk különböző hatóanyagokkal, például hialuronsav, vitaminok és antioxidánsok bőrbe juttatásával a bőr mélyebb rétegeibe.
            </p>
            <Abstract />
          </div>

          {/* --- 4. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Biztonságos kezelés</h2>
            <p>
              A gép fejlesztői a kezelőfejen kívül létrehoztak egy szilikon kupakot, amely összegyűjti a kezelőfej belsejébe került kórokozókat. Így az eljárás végén, a NOFLOW® steril, szabadalmaztatott kezelőfej kidobásával biztosak lehetünk abban, hogy a keresztfertőzés minden lehetőségével felszámoltunk.
            </p>
            <Abstract />
          </div>

          {/* --- 5. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>
              Milyen előnyei vannak?
            </h2>
            <ul>
              <li> Bőr fiatalítása: Serkenti a kollagéntermelést, ami feszesebbé és rugalmasabbá teszi a bőrt, valamint csökkenti a ráncokat és a finom vonalakat.</li>
              <li>Hegek és striák halványítása: A kezelés elősegíti az aknes hegek, műtéti hegek vagy striák megjelenésének csökkentését.</li>
              <li> Pigmentfoltok halványítása: Segíthet a napkárosodott bőr és pigmentfoltok kezelésében.</li>
              <li> Bőr textúrájának javítása: A bőr simább, egyenletesebb lesz, és javul a tónusa.</li>
              <li>Pórusok méretének csökkentése: A mikrotűs kezelés segíthet csökkenteni a pórusok láthatóságát.</li>
            </ul>
            <Abstract />
          </div>

          {/* --- 6. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>
              Kinek ajánlott?
            </h2>
            <p>
              Azoknak, akik szeretnék javítani bőrük állapotát, megfiatalítani azt, vagy csökkenteni a hegek, ráncok és striák megjelenését. Különösen ajánlott:
            </p>
            <ul>
              <li>Érett bőr esetén a kollagéntermelés fokozására.</li>
              <li>Akne után maradt hegek kezelésére.</li>
              <li>Striák és bőrfeszesség-csökkenés ellen.</li>
              <li>Pigmentációs problémák vagy napkárosodott bőr esetén.</li>
            </ul>
            <Abstract />
          </div>

          {/* --- 7. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>
              Mire kell figyelni a kezelés után?
            </h2>
            <p>
              A mikrotűs kezelés után a bőr ideiglenesen vörös lehet és enyhe irritáció léphet fel, de ez hamar elmúlik. A kezelés után fontos a megfelelő fényvédelem és hidratálás, mivel a bőr érzékenyebbé válik a külső hatásokra.
            </p>
            <Abstract />
          </div>

          {/* --- 8. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>
              Kezelés menete
            </h2>
            <ul>
              <li> Konzultáció: A kezelés előtt egy alapos, teljeskörű konzultációra kerül sor, ahol felmérjük a bőr állapotát, kitérve az otthon használt kozmetikumokra, napozási szokásokra, bőrproblémákra.</li>
              <li> Előkészítés: A kezelési terület tisztítása + Enzimes peeling. Fertőtlenítés után érzéstelenítő krémet alkalmazunk a bőrön, ennek segítségével minimalizáljuk a kellemetlenség érzését.</li>
              <li> A kezelés: A 1NeedPro eszköz apró tűi a bőrbe hatolnak. Legyen szó mikrotű – vagy mikroszúrásról, a tűk a sejtmembrán falán kezelőfejtől függően, mikrocsatornákat hoznak létre, ami serkenti a sejtmegújulás folyamatát, illetve segít a hatóanyagokat mélyen az extracelluláris térbe juttatni. A Nano Peel – esetében a mélyebb rétegek érintése nélkül, mechanikai hámlasztást végzünk, melynek használata peelinggel ajánlott, ezáltal kiválóan alkalmas megoldást jelent foltokra, az öregedés jeleire, hiperpigmentációra és a bőr fiatalítására egyaránt.</li>
              <li> Bőrnyugtatás: GENO LED FÉNYTERÁPIA</li>
              <li> Befejező ápolás: Utolsó lépésként, a kezelt területet bőrnyugtató termékekkel és fényvédővel ápolom.</li>
            </ul>
            <Abstract />
          </div>

          {/* --- Árazás --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Kezelések ára</h2>
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

            <Abstract />
          </div>
        </div>
      </section>
    </>
  );
}