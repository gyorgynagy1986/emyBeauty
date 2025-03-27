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

export default function PollogenOxyGeneo() {
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
              src={servicesPage.oxi2}
              sizes={size.fullsize}
            />
          </div>

          {/* --- 1. szekció --- */}
          <div
            data-aos="fade-up"
            data-aos-offset="150"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>A kezelés részletei</h2>
            <p>
              A kezeléshez használt OxyGeneo™ orvos-kozmetikai gép az egyetlen
              készülék a piacon, amely az OxyGeneo, TriPollar RF és Ultrahang
              technológiák egyedülálló kombinációját kínálja. Ezek a
              technológiák szinergikusan erősítik egymás jótékony hatásait. A
              kezelések a szervezet természetes mechanizmusaival összhangban
              működnek, így az eredmények mindig látványosak és természetesek. A
              folyamat egy rádiófrekvenciás bőrfiatalítással kezdődik, majd
              oxigénes kezelés és ultrahangos hatóanyag-bejuttatás következik,
              végül egy mikromasszázs lépéssel zárul.
            </p>
            <Abstract />
          </div>

          {/* --- 2. szekció --- */}
          <div
            data-aos="fade-up"
            data-aos-offset="150"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
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
              <li> Aktiválja a saját természetes folyamatokat</li>
              <li>Segít az egységesebb bőrkép kialakításában</li>
              <li>Elősegíti a pigmentfoltok halványítását</li>
              <li>Lágyítja a finom ráncokat</li>
              <li>Csökkenti a pórusok méretét</li>
            </ul>
            <Abstract />
          </div>

          {/* --- 3. szekció --- */}
          <div
            data-aos="fade-up"
            data-aos-offset="150"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>Felhasznált technológiák</h2>
            <h3>TriPollar®</h3>
            <p>
              A TriPollar RF rádiófrekvenciás hullámok által kibocsátott hő
              aktiválja a fibroblasztokat, ami fokozza a kollagén- és
              elasztinrostok termelését, erősítve a bőr kötőszöveti állományát.
              A bőr azonnal láthatóan feszesebbé válik, és a kúraszerű
              kezeléssel tartós eredményeket érhetünk el. Megújítja a bőrt a
              kollagén és elasztin stimulálásával, míg a fejlett 3. generációs
              rádiófrekvencia biztonságos és hatékony módot kínál az azonnali,
              látható eredmények elérésére.
            </p>
            <div
              data-aos="fade"
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
                src={servicesPage.ge2}
                sizes={size.fullsize}
              />
            </div>
            <h3>OxyGeneo™</h3>
            <p>
              A bőr hámlasztása az innovatív, bőrön aktiválódó és csiszoló
              hatású OxyPod kapszulával történik, amely tartalmazza a bőr
              számára nélkülözhetetlen hasznos hatóanyagokat. Az OxyPoddal
              végzett kezelés során a bőr oxigénnel telítődik, élénkítve a
              véráramlást a kapilláris erekben, fokozva az anyagcserét és
              lehetővé téve, hogy a hatóanyagok mélyebbre jussanak. A kapszula
              és a gél kémiai reakciója során CO2 szabadul fel, amely
              fiziológiai választ vált ki (Bohr-hatás), eredményeként növekszik
              a szövetek oxigénszintje, fokozva a keringést és a sejtek
              anyagcseréjét.
            </p>
            <div
              data-aos="fade"
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
                src={servicesPage.ge4}
                sizes={size.fullsize}
              />
            </div>
            <h3>Ultrahang</h3>
            <p>
              Az oxigénizálás után, a kezelés utolsó fázisaként a bőrbe további
              szérumot juttatunk az adott bőrproblémának megfelelő
              hatóanyagokkal, amelyeket a szonoforezis ultrahang technológia
              segít optimálisan felszívódni a mikrovibráció mechanikus hatásain
              keresztül. Végezetül a NeoMassage formázza az arcot, csökkenti a
              bőrpírt és duzzanatot, valamint javítja a nyirokelvezetést, amely
              a mikrokeringés része, miközben a Geneo hatóanyagokat még
              mélyebbre juttatja a bőrbe. Az eredeti Geneo OxyPodok 100%-ban
              terápiás hatóanyagokból készülnek, hozzáadott vegyszerek,
              színezékek és tartósítószerek nélkül, célzottan a bőr speciális
              igényeit kielégítve.
            </p>
            <div
              data-aos="fade"
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
                src={servicesPage.ge3}
                sizes={size.fullsize}
              />
            </div>
            <h3>Energize</h3>
                <p>
                  Az OxyGeneo™ Energize OxyPod koffeinnel, kakaóbabbal és
                  fahéjolajjal tölti fel a bőrt, serkenti a vérkeringést és
                  támogatja a természetes méregtelenítési folyamatokat. Az
                  Energize szérum pedig értékes olajokkal – moringa, olíva és
                  marula – mélyen hidratálja és táplálja a bőrt. Mitől ilyen
                  hatékony? Kakaóbab – 20x több antioxidáns, mint az áfonyában!
                  Segít megelőzni a bőr öregedését és fokozza az oxigénellátást.
                  Fahéjolaj – Antioxidánsokban gazdag, gyulladáscsökkentő és
                  tisztító hatású. Különösen jó aknés bőrre! Koffein – Serkenti
                  a vérkeringést, méregtelenít és támogatja a kollagéntermelést.
                </p>
                <div
              data-aos="fade"
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
                src={servicesPage.energize}
                sizes={size.fullsize}
              />
            </div>
          </div>
          <Abstract />

          {/* --- 4. szekció --- */}
          <div
            data-aos="fade-up"
            data-aos-offset="150"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>Választható kezeléstípusok</h2>
            <h3>
              7 féle, nem-invazív kezeléssel a Geneo kezelések mindenki számára
              személyre szabhatóak.
            </h3>
            <ul>
              <li>
                <strong>Geneo BALANCE</strong> (Bambusz szénnel, zsíros és
                pattanásos bőrre): Megtisztítja, megnyugtatja és mattítja a
                zsíros bőrt, javítva annak textúráját és megjelenését.
                <div
                  data-aos="fade"
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
                    src={servicesPage.balance}
                    sizes={size.fullsize}
                  />
                </div>
                
              </li>

              <li>
                <strong>Geneo HYDRATE</strong> (Kék spirulinával, száraz és
                vízhiányos bőrre): Felfrissíti és újjáéleszti a száraz, fakó
                bőrt, hidratált, ragyogó és feltöltött megjelenést kölcsönözve
                neki. Emellett javítja a bőr barrier funkcióját, csökkenti a
                bőrpírt és a gyulladásokat.
                <div
                  data-aos="fade"
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
                    src={servicesPage.hyd}
                    sizes={size.fullsize}
                  />
                </div>
              </li>
              <li>
                <strong>Geneo REVIVE</strong> (Vörös algával, finom és mélyebb
                ráncokra): Növeli a bőr feszességét és rugalmasságát, valamint
                segít megelőzni az idő előtti öregedést.
                <div
                  data-aos="fade"
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
                    src={servicesPage.revive}
                    sizes={size.fullsize}
                  />
                </div>
              </li>
              <li>
                <strong>Geneo ILLUMINATE</strong> (C-vitaminnal, egyenetlen
                tónusra, pigmentfoltokra és szürke, fáradt bőrre): Egységesíti a
                bőrtónust, javítja a pigmentációt, megfiatalítja a bőrt, és véd
                a napkárosodástól.
                <div
                  data-aos="fade"
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
                    src={servicesPage.illum}
                    sizes={size.fullsize}
                  />
                </div>
              </li>
              <li>
                <strong>Geneo DETOX</strong> (Zöld tea kivonattal, környezeti
                hatásoktól irritálódott bőrre): Megerősíti a bőr védőgátját a
                szabad gyökök és egyéb környezeti ártalmak ellen, késleltetve az
                öregedési jelek, mint a finom vonalak, ráncok és foltok
                megjelenését. Emellett méregteleníti a bőrt, proaktívan kezelve
                az öregedés látható jeleit.
                <div
                  data-aos="fade"
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
                    src={servicesPage.detox}
                    sizes={size.fullsize}
                  />
                </div>
              </li>
              <li>
                <strong>GLAM</strong> (Luxuskezelés érett bőrre, tiszta arannyal
                és prémium összetevőkkel): Serkenti a mikrokeringést, fokozza a
                kollagéntermelést és a bőrsejtek megújulását, így visszaállítja
                az arcbőr hidratáltságát, vitalitását, rugalmasságát,
                feszességét és egészségét.
                <div
                  data-aos="fade"
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
                    src={servicesPage.glam}
                    sizes={size.fullsize}
                  />
                </div>
              </li>
              <li>
                <strong>Geneo RETOUCH</strong> (Savkomplexekkel és
                áfonyakivonattal a teljes bőrmegújításért): Minden bőrtípusra
                ajánlott, különösen olajos és korpás bőrre. Javítja az aknés
                elváltozásokat, elősegíti a tiszta bőrt és a jobb textúrát.
                Természetes retusáló hatása van.
                <div
                  data-aos="fade"
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
                    src={servicesPage.retouch}
                    sizes={size.fullsize}
                  />
                </div>
              </li>
              <li>
                <strong>Geneo PROTECT</strong>
                <div
                  data-aos="fade"
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
                    src={servicesPage.protect}
                    sizes={size.fullsize}
                  />
                </div>
              </li>
            </ul>
            <Abstract />
          </div>

          {/* --- 5. szekció --- */}
          <div
            data-aos="fade-up"
            data-aos-offset="150"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>Gyakori kérdések</h2>
            <h3>Kinek jó választás az OxyGeneo™ kezelés?</h3>
            <p>
              Ez az eljárás ideális választás azok számára, akik orvosi
              hatékonyságú, fájdalommentes arckezelést szeretnének látványos
              eredményekkel. A 3in1 OxyGeneo™ kezelések a legkülönfélébb
              bőrtípusoknak, korosztályoknak és igényeknek megfelelően
              alakíthatók, így tökéletes és hosszú távú megoldást nyújtanak a
              bőr folyamatos ápolására, a speciális bőrbetegségek (pl. akné)
              célzott kezelésére, valamint a tág pórusok, hegek, dehidratált és
              tónustalan arcbőr, pigmentfoltok, rosacea és a kisebb vagy mélyebb
              ráncok kezelésére. Gyakran emlegetik ezt a kezelést a
              mikrodermabrázió alternatívájaként is.
            </p>
            <h3>Hány alkalom szükséges?</h3>
            <p>
              Az eredmények már az első kezelés alkalmával is tapasztalhatók. A
              hatás fokozása érdekében javasolt a kúraszerű alkalmazás, mely 4-6
              alkalomból áll és két hetente zajlanak. A hosszú távú eredmény
              eléréséhez és megtartásához ajánlott a beavatkozás után havonta
              vagy kéthavonta egy fenntartó kezelést igénybe venni.
            </p>
            <h3>Mi várható a kezelés után?</h3>
            <p>
              Az OxyGeneo™ kezelést követően a bőr kissé kipirulhat, de ez
              szinte azonnal elmúlik, és a bőr friss, üde, fiatalos megjelenést
              kap. Nincs felépülési idő, így azonnal vissza lehet térni a
              mindennapi tevékenységekhez. A kezelés javítja a bőr tónusát és
              textúráját, oxigénnel tölti fel a bőrt, feszesít és hidratál,
              csökkenti a felesleges faggyút, mérsékeli a gyulladást, valamint
              emeli a bőr tónusát.
            </p>
            <Abstract />
          </div>

          {/* --- Árazás --- */}
          <div
            data-aos="fade-up"
            data-aos-offset="150"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>Kezelések ára</h2>
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
                <p>Kúra szerűen: 6 alkalom + 1 Ajándék kezelés</p>
                <p></p>
              </div>
              <div className={styles.priceItems}>
                <p>8 alkalmas bérlet esetén</p>
                <p>15% kedvezmény</p>
              </div>
            </div>
            <Abstract />
          </div>
        </div>
      </section>
    </>
  );
}
