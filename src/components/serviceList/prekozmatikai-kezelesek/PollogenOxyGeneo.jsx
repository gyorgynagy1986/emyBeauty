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

export default function PollogenOxyGeneo() {
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
            POLLOGEN Oxy Geneo™ - Komplex bőrmegújító program
          </Link>
        </div>
      </div>

      <section className={styles.container}>
        <div className={styles.helper}>
          {/* --- Fő cím, bevezető szöveg és gombok --- */}
          <div className={styles.titleContainer}>
            <div className={styles.titleHelper}>
              <h1 className={styles.title}>
                POLLOGEN Oxy Geneo™ - Komplex bőrmegújító program
              </h1>
              <Abstract />
            </div>
            <p>
              Minden életkorban, bőrtípusra és évszakban, nőknek és férfiaknak
              egyaránt ajánlott!
            </p>
            <p>
              Ez egy orvosi hatékonyságú, komplex bőrmegújító program, amely már
              egy alkalom után is látványos eredményeket kínál, és az izraeli
              Pollogen cég védjegyoltalommal rendelkező technológiáján alapul.
              Nálam az eredeti kezelést veheted igénybe, hiszen rajta vagyok a
              hitelesített szakemberek térképén.
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
              src={servicesPage.oxi2}
              sizes={size.fullsize}
            />
          </div>

          {/* --- Tartalom blokkok (sectionSubTitles) --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>A kezelés bemutatása</h2>
            <p>
              A kezeléshez használt OxyGeneo™ orvos-kozmetikai gép az egyetlen
              készülék a piacon, amely az OxyGeneo, TriPollar RF és Ultrahang
              technológiák egyedülálló kombinációját kínálja. Ezek a
              technológiák szinergikusan erősítik egymás jótékony hatásait. A
              kezelések a szervezet természetes mechanizmusaival összhangban
              működnek, így az eredmények mindig látványosak és természetesek.
            </p>
            <p>
              A folyamat egy rádiófrekvenciás bőrfiatalítással kezdődik, majd
              oxigénes kezelés és ultrahangos hatóanyag-bejuttatás következik,
              végül egy mikromasszázs lépéssel zárul.
            </p>
          </div>

          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>
              Miért érdemes az OxyGeneo kezelést választani?
            </h2>
            <ul>
              <li>
                Egy olyan komplex program, amely három szabadalmaztatott
                technológiával rendelkezik
              </li>
              <li>Nincs felépülési idő</li>
              <li>Azonnal látványos eredményeket nyújt</li>
              <li>Aktiválja a saját természetes folyamatokat</li>
              <li>Segít az egységesebb bőrkép kialakításában</li>
              <li>Elősegíti a pigmentfoltok halványítását</li>
              <li>Lágyítja a finom ráncokat</li>
              <li>Csökkenti a pórusok méretét</li>
            </ul>
          </div>

          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Felhasznált technológiák</h2>
            <p>
              <strong>TriPollar®:</strong> A rádiófrekvenciás hullámok által
              kibocsátott hő aktiválja a fibroblasztokat, fokozva a kollagén- és
              elasztinrostok termelését, erősítve a bőr kötőszöveti állományát.
            </p>
            <p>
              <strong>OxyGeneo™:</strong> Az innovatív OxyPod kapszula
              segítségével a bőr hámlasztása történik, amely oxigénnel tölti fel
              a bőrt, élénkíti a véráramlást és fokozza az anyagcserét.
            </p>
            <p>
              <strong>Ultrahang:</strong> A szonoforezis technológia segíti az
              adott bőrproblémáknak megfelelő hatóanyagok optimális
              felszívódását, miközben a NeoMassage formázza az arcot és javítja
              a nyirokelvezetést.
            </p>
          </div>

          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Kezelési variációk</h2>
            <p>
              7 féle, nem-invazív kezeléssel a Geneo kezelések mindenki számára
              személyre szabhatóak:
            </p>
            <ul>
              <li>
                <strong>Geneo BALANCE:</strong> Bambusz szénnel, ideális zsíros
                és pattanásos bőrre
              </li>
              <li>
                <strong>Geneo HYDRATE:</strong> Kék spirulinával, száraz és
                vízhiányos bőrre
              </li>
              <li>
                <strong>Geneo REVIVE:</strong> Vörös algával, finom és mélyebb
                ráncokra
              </li>
              <li>
                <strong>Geneo ILLUMINATE:</strong> C-vitaminnal, egyenetlen
                tónusra és pigmentfoltokra
              </li>
              <li>
                <strong>Geneo DETOX:</strong> Zöld tea kivonattal, irritált
                bőrre
              </li>
              <li>
                <strong>GLAM:</strong> Luxuskezelés érett bőrre, tiszta arannyal
                és prémium összetevőkkel
              </li>
              <li>
                <strong>Geneo RETOUCH:</strong> Savkomplexekkel és
                áfonyakivonattal, a teljes bőrmegújításért
              </li>
            </ul>
          </div>

          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Hasznos kérdések és válaszok</h2>
            <p>
              Az OxyGeneo™ kezelés ideális választás azok számára, akik orvosi
              hatékonyságú, fájdalommentes arckezelést szeretnének látványos
              eredményekkel. A 3in1 OxyGeneo™ kezelések a különféle
              bőrtípusoknak és igényeknek megfelelően alakíthatók, így tökéletes
              és hosszú távú megoldást nyújtanak a bőr folyamatos ápolására, a
              speciális bőrbetegségek célzott kezelésére, valamint a tág
              pórusok, hegek, pigmentfoltok és ráncok kezelésére.
            </p>
          </div>

          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Hány alkalom szükséges?</h2>
            <p>
              Az eredmények már az első kezelés alkalmával is tapasztalhatók. A
              hatás fokozása érdekében javasolt a kúraszerű alkalmazás, mely 4-6
              alkalomból áll, két hetente. A hosszú távú eredmény eléréséhez és
              megtartásához ajánlott a kezelés után havonta vagy kéthavonta egy
              fenntartó kezelést igénybe venni.
            </p>
          </div>

          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Mi várható a kezelés után?</h2>
            <p>
              Az OxyGeneo™ kezelést követően a bőr kissé kipirulhat, de ez
              szinte azonnal elmúlik, és a bőr friss, üde, fiatalos megjelenést
              kap. Nincs felépülési idő, így azonnal visszatérhetsz a mindennapi
              tevékenységekhez.
            </p>
          </div>

          {/* --- Árlista --- */}
          <div className={styles.sectionSubTitles}>
            <h1 className={styles.title}>
              ÁRLISTA : OxyGeneo™ BY POLLOGEN 3in1 Kezelés
            </h1>
            <div className={styles.priceContainer}>
              <div className={styles.priceItems}>
                <p>OxyGeneo arckezelés</p>
                <p>49.990 Ft</p>
              </div>
              <div className={styles.priceItems}>
                <p>OxyGeneo arc-nyak kezelés</p>
                <p>53.000 Ft</p>
              </div>
              <div className={styles.priceItems}>
                <p>OxyGeneo arc-nyak-dekoltázs kezelés</p>
                <p>59.000 Ft</p>
              </div>
              <div className={styles.priceItems}>
                <p>OxyGeneo GLAM Gold Prémium arckezelés</p>
                <p>55.000 Ft</p>
              </div>
              <div className={styles.priceItems}>
                <p>
                  Kúra szerűen: 6 alkalom + 1 Ajándék kezelés (8 alkalmas bérlet
                  esetén 15% kedvezmény)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
