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

export default function DeepShootSkinBooster() {
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
          <Link href="/szolgaltatasok/innovativ-arckezelesek">
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
          {/* --- Fő cím, bevezető szöveg és gombok --- */}
          <div className={styles.titleContainer}>
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
          <div className={styles.photoContainer}>
            <Image
              alt={alt.name}
              src={servicesPage.slug1}
              sizes={size.fullsize}
            />
          </div>

          {/* --- Tartalom (minden blokk sectionSubTitles osztállyal) --- */}
          <div className={styles.sectionSubTitles}>
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
            <p>
              Két féle hatóanyag komplexxel rendelkező DEEP SHOOT booster áll
              rendelkezésre:
            </p>
            <ul>
              <li>DEEP SHOOT AA – anti-aging hatással</li>
              <li>DEEP SHOOT HA – mélyhidratáló hatással</li>
            </ul>
            <p>
              A Ribeskin DEEP SHOOT kezelést közvetlenül Ribeskin CO2 Carboxy
              terápia előzi meg, mely megfelelően felkészíti a bőrt a
              hatóanyagok befogadására a maximális hatékonyság érdekében.
            </p>
          </div>

          {/* --- CO2 CARBOXY TERÁPIA --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>CO2 CARBOXY TERÁPIA:</h2>
            <p>
              Ezzel a kezeléssel készítjük elő, illetve fokozzuk a Deep Shoot
              boosterek hatékonyságát. 🔷Ebben a kezelésben a bőrt carboxy
              géllel fedjük be, majd erre egy speciális CO2 aktiváló anyagokat
              tartalmazó maszkot helyezünk. 🔹Bohr hatás! A gél aktiválódik a
              felhelyezett maszk alatt, carbon-dioxidot termel amely behatol a
              pórusokba és elindul a regeneráló, fiatalító és mélytisztító
              folyamat. 🔹A kezelés végére a pórusok összehúzódnak és
              detoxikálódnak a felszabaduló CO2 hatás által. Szabályozza a
              faggyútermelést, feszesíti a bört, kiegyenlíti a bőrtónust.
            </p>
            <Abstract />
          </div>

          {/* --- DEEP SHOOT AA rész --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>
              1. RIBESKIN DEEP SHOOT AA (Anti-Aging) - Többfunkciós
              öregedésgátlás
            </h2>
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
            <p>-RIBESKIN DEEP SHOOT AA (Anti-Aging) főbb hatóanyagai:</p>
            <ul>
              <li>
                Glutation: a bőrben természetesen is előforduló antioxidáns.
                Védi a bőrt a környezeti hatások okozta öregedéstől,
                mindemellett hozzájárul az egyenletes, üde bőrkép
                kialakulásához. Segít helyreállítani a bőrbarrier rétegét és
                pigmentfolt halványító hatással bír.
              </li>
              <li>
                Peptidek: A kötőszövet tömörségének visszaállítását támogatja.
                (Palmitoyl Tripeptide-5, Octapeptide-7, Galloyl Pentapeptide-33,
                Copper Tripeptide-1)
              </li>
              <li>
                Növekedési faktorok: A növekedési faktorok hatására javul a
                bőrsejtek osztódása, differenciálódása, ezáltal szebb,
                fiatalosabb lesz a bőrkép. (sh-Polypeptide-9, sh-Polypeptide-3,
                sh-Polypeptide-22, sh-Polypeptide-1, sh-Pentapeptide-19,
                sh-Oligopeptide-9, sh-Oligopeptide-2, sh-Oligopeptide-1,
                sh-Octapeptide-4, sh-Decapeptide-7)
              </li>
              <li>
                B-Vitamin komplex: a B-vitaminok hozzájárulnak a bőr
                hidratáltságához, a kollagéntermeléshez és a sejtek
                megújulásához, valamint szabályozzák a faggyútermelést.
              </li>
              <li>
                PDRN: DNS-fragmensekből álló molekula, mely elősegíti az
                angiogenézist, a sejtaktivitást, a kollagénszintézist, a
                bőrszövet regenerálódását, a bőr revitalizációját, illetve
                halványítja a pigmentfoltokat.
              </li>
            </ul>
            <Abstract />
          </div>

          {/* --- DEEP SHOOT HA rész --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>
              -RIBESKIN DEEP SHOOT HA (Hialuronsav komplex, Hidratálás)
              hatóanyagai
            </h2>
            <p>3-féle molekulatömegű hyaluronsav:</p>
            <ul>
              <li>Alacsony- (kötőszöveti réteg erősítése)</li>
              <li>Közepes- (bőr védekezőképességének növelése)</li>
              <li>
                Nagy molekulatömegű (védi a bőrt a környezeti hatásoktól és a
                láthatatlan vízveszteségtől) hialuronsav bőrbe juttatása,
                pótolja és megtartja a bőr nedvességét.
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

          {/* --- Végső ajánlat --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>
              Az alábbi RIBESKIN CO2 Carboxy terápia + DEEP SHOOT kezelések
              közül választhatsz:
            </h2>
            <ul>
              <li>
                Ribeskin CO2 Carboxy terápia + Deep Shoot AA (60p) 60.000 Ft
              </li>
              <li>
                Ribeskin CO2 Carboxy terápia + Deep Shoot HA (60 perc) 60.000 Ft
              </li>
            </ul>
            <Abstract />
          </div>
        </div>
      </section>
    </>
  );
}
