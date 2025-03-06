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
import "aos/dist/aos.css";
import AOS from "aos";

export default function SecretRfKezelés() {
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
        <div
          data-aos="fade-down"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
          className={styles.items}
        >
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
          <Link href="/szolgaltatasok/slow-aging-kezelesek">
            SLOW AGING KEZELÉSEK
          </Link>
          <Image
            style={{ marginBottom: "1px" }}
            alt={alt.name}
            size={size.fullsize}
            src={icon}
          />
          <Link className={styles.active} href="/szolgaltatasok">
            SECRET™ RF MIKROTŰS RÁDIÓFREKVENCIÁS KEZELÉS
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
              <h1 className={styles.title}>Mi a Secret™ RF?</h1>
              <Abstract />
            </div>

            <p>
              A Secret RF kezelés a ma elérhető egyik legmodernebb műtét nélküli
              bőrfiatalítás, mely különböző mélységekben segít újramodellezni a
              kollagénállomány szerkezetet. A kezelés forradalmian új mikrotűs
              eljárást alkalmaz, hogy a frakcionális rádiófrekvenciás energiát
              oda juttassa, ahol arra a legnagyobb szükség van és a bőr minden
              rétegét kezeli.
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
              src={servicesPage.secret}
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
            <h2 className={styles.title}>
              A SECRET™ RF három rendkívül hatékony technológia hatását ötvözi
            </h2>
            <ul>
              <li>1. A mikrotűk</li>
              <li>
                2. Frakcionált rádiófrekvenciával, hőt juttattak a bőrszövetek
                mélyére, serkentve az új kollagén, elasztin és hialuronsav
                termelését, illetve
              </li>
              <li>3. LED fényterápiát, a tökéletes rejuvenációért</li>
            </ul>
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
            <h2 className={styles.title}>SECRET FRAKCIONÁLT RÁDIÓFREKVENCIA</h2>
            <p>
              Bőrünk öregedése, és rugalmasságának elvesztése ellen már fiatal
              korban érdemes tenni, hiszen a környezeti tényezők mellett a
              stressz, és a napsugárzás is hatással van ránk. Az idő múlásával a
              kötőszövetek megereszkednek, kitágulnak a pórusok, apróbb ráncok
              jelennek meg az arcon, nyakon és dekoltázson.
            </p>
            <p>
              A frakcionált mikrotűs RF kezelés a mai legmodernebb, klinikailag
              bizonyított eljárás, mely a frakcionált rádiófrekvencia és a
              mikrotűs kezelések előnyös kombinációja. Az RF energia hőhatása a
              bőr mélyebb rétegeiben a kollagén rostokat gerjeszti, lebontja a
              régi kollagéneket, és elindítja az új kollagén termelődést
              (neokollagenezis), míg a tűszúrások a bőrfelszínen apró
              sérüléseket okoznak. A bőr felszíni és a bőr mélyebb rétegeiben
              végzett kezelés eredményeképp a bőr megfiatalodik, rugalmassá,
              tónusosabbá válik, és a pórusok összehúzódnak, a ráncok
              kisimulnak.
            </p>
            <p>
              Az innovatív bőrfiatalító és feszesítő eljárás gyors eredményeket
              kínál az arc, nyak, dekoltázs területén, egészen a kézfejig,
              vagyis a legszembetűnőbb területeken. Csökkenti a ráncokat,
              szabályozza a faggyútermelést, és hatékonyan kezeli a tág
              pórusokat. Ezen kívül lifting, anti-aging és anti-cellulit hatása
              is van, és hatékony megoldást nyújt a striák kezelésére, valamint
              a műtéti hegek halványítására is.
            </p>
            <Abstract />
          </div>

          {/* --- 3. szekció --- */}
          <div
            data-aos={isMobile ? "fade-up" : "fade-right"}
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>
              A kezelés széleskörű megoldást nyújt a bőr különböző problémáira
            </h2>
            <ul>
              <li>Ráncok csökkentése</li>
              <li>Bőrfiatalítás</li>
              <li>Szarkalábak csökkentése</li>
              <li>Bőr tónusának javítása, petyhüdtség és feszesség növelése</li>
              <li>Aknés hegek csökkentése</li>
              <li>Tág pórusok összehúzása</li>
              <li>Sötét karikák a szem alatt</li>
              <li>Fakó, sápadt bőrszín javítása</li>
              <li>Fokozott hónalji izzadás kezelése</li>
              <li>Megereszkedett felkar, térd és has feszesítése</li>
              <li>Striák kezelése</li>
            </ul>
            <Abstract />
          </div>

          {/* --- 4. szekció --- */}
          <div
            data-aos={isMobile ? "fade-up" : "fade-left"}
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>A kezelés menete</h2>
            <p>
              A kezelőfejen egyszer használatos, 25 apró tűt tartalmazó,
              mikro-motorral vezérelt fej helyezkedik el. A tűk elektródákként
              működnek, és a bőrbe szúrva közvetlenül, nagy pontossággal
              juttatják el a rádiófrekvenciát. A tűk hossza változtatható (0,5 -
              3,5mm között), attól függően, hogy mi a célterület és milyen a
              kezelt bőr vastagsága.
            </p>
            <p>
              A SECRET frakcionált mikrotűs RF készülék 2Mhz-es frakcionált
              bipoláris rádiófrekvenciát használ. A kezelőfej 25 vagy 64 nagyon
              vékony, speciális bevonatú, izolált tűvel rendelkezik egy
              négyzetben egyenletesen elosztva. Az RF bőrfiatalító kezelés alatt
              minden "lövés" során egyidejűleg hatol be a kezelőfej az összes
              tűvel a bőr előre beállított mélységébe. Ezzel egy időben a
              beszúrt tűkre előre beállított energiájú RF áram impulzus érkezik,
              mely csak a tű hegyén (szigetelő bevonatának köszönhetően) folyik,
              így kizárólag pontosan a dermis előre kiválasztott rétegét
              melegíti, ezáltal hatásosabbá teszi a kezelést és a bőr kevésbé
              sérül. A folyamat rövid ideig tart, kb. 0,1 másodpercig, majd a
              tűk eltávolítására kerül sor. Ez a lokalizált hőhatás stimulálja a
              kollagén rostokat, így fokozott kollagéntermelődést eredményez.
            </p>
            <Abstract />
          </div>

          <div
            data-aos="zoom-in"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.photoContainer}
          >
            <Image
              alt={alt.name}
              src={servicesPage.secret3}
              sizes={size.fullsize}
            />
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
            <h2 className={styles.title}>A kezelés főbb lépései</h2>
            <ul>
              <li>Bőr tisztítása</li>
              <li>Peeling</li>
              <li>Érzéstelenítés</li>
              <li>Rádiófrekvencia és mikrotűs kezelés</li>
              <li>Utóápolás és fényvédelem</li>
            </ul>
            <Abstract />
          </div>

          {/* --- Árazás --- */}
          <div
            data-aos={isMobile ? "fade-up" : "fade-right"}
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>Kezelések ára</h2>
            <div className={styles.priceContainer}>
              <div className={styles.priceItems}>
                <p>1 Alkalmas Arc kezelés (60 perc)</p>
                <p>100.000Ft-tól</p>
              </div>
              <div className={styles.priceItems}>
                <p>Bérlet</p>
                <p>300.000 Ft (3+ 1 Alkalom Ajándék)</p>
              </div>
              <div className={styles.priceItems}>
                <p>Teljes Arc +Nyak / 1 Alkalom</p>
                <p>110.000 Ft</p>
              </div>
              <div className={styles.priceItems}>
                <p>Bérlet</p>
                <p>330.000 Ft (3+1 Alkalom Ajándék)</p>
              </div>
              <div className={styles.priceItems}>
                <p>Teljes Arc-Nyak+Dekoltázs /1 Alkalom</p>
                <p>130.000 Ft</p>
              </div>
              <div className={styles.priceItems}>
                <p>Bérlet</p>
                <p>390.000 Ft (3+ 1 Alkalom Ajándék)</p>
              </div>
            </div>
            <Abstract />
          </div>

          {/* --- 6. szekció --- */}
          <div
            data-aos={isMobile ? "fade-up" : "fade-left"}
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>Hasznos kérdések és válaszok</h2>
            <h3>Mennyi idő alatt látható a kezelés hatása?</h3>
            <p>
              A frakcionált mikrotűs RF eljárás teljes eredménye 3 hét után
              válik jól láthatóvá, mert a bőr mélyebb rétegeiben stimulált
              kollagénnek időbe telik, míg elindítja az új kollagén termelését.
              Egyénre szabott arcfiatalítási terv alapján, általában 3-4 alkalom
              javasolt, amit 4-6 hetente szükséges ismételni. Komolyabb
              problémák esetén, igény szerint havonta folyamatosan ismételhető.
              A bőrfiatalítás hatékony eredményt nyújt, 1-2 évig megmarad.
            </p>

            <h3>Hány éves kortól ajánlott a kezelés?</h3>
            <p>
              Személyre szabott arcfiatalítási terv alapján, már 20-30 éves
              kortól végezhető prevenciós célból. Nemcsak ránctalanításra, hanem
              aknés hegek csökkentésére és pórusok összehúzására is ajánlott. A
              kezelés eredményeként a bőr feszesebb, rugalmasabb és fiatalosabb
              lesz.
            </p>

            <h3>Milyen testrészen végezhető a kezelés?</h3>
            <p>
              Arc, nyak, dekoltázs és szemkörnyéken is végezhető. A szemhéj
              teljes felszíne kezelhető egészen a szempillákig. Hónalji izzadás
              és testbőr feszesítés céljából is alkalmazható – ehhez egy
              speciális kar áll rendelkezésünkre, amelyen nem 25, hanem 64
              arannyal bevont tű található. Ennek köszönhetően nagyobb felületet
              kezelhetünk egyszerre, nagyobb intenzitással, maximális
              hatékonyság érdekében.
            </p>

            <h3>Mennyi időt vesz igénybe a regenerálódás?</h3>
            <p>
              A kezelés során megjelenő bőrpirosodás és ödéma a legtöbb esetben
              2-3 órán belül elmúlik. Extrém esetekben, illetve nagyon érzékeny
              személyeknél ez tovább tarthat. Kiterjedt érelváltozások, szteroid
              szedése vagy thread lifting eljáráson átesett pácienseknél
              hosszabb ideig tartó ödéma léphet fel. A kezelt területen a bőr
              tisztulása miatt átmenetileg pattanások is megjelenhetnek. Erősebb
              beállítások esetén apró hegek alakulhatnak ki a tűszúrások nyomán,
              de ezek egy héten belül gyógyulnak. A bőr maximális gyógyulása
              érdekében ajánlott a javasolt ápoló termékek használata.
            </p>

            <h3>Mire kell odafigyelni a kezelést követően?</h3>
            <p>
              A kezelést követően 24 órán belül nem szabad sportolni vagy
              szaunázni. Legalább egy hétig teljes mértékben kerülni kell a
              hámlasztást, és a bőrfelület radírozását. Továbbá, 3-4 hétig nem
              engedélyezett kozmetikai vagy kozmetológiai beavatkozásokat
              végezni a kezelt területen. Magas faktorszámú, jó minőségű UV
              fényvédő krém használata kötelező legalább 10 napon át a kezelés
              után, és ebben az időszakban nem szabad szoláriumba menni.
            </p>

            <h3>Milyen időközönként ajánlott megismétélni a beavatkozást?</h3>
            <p>
              Az ideális eredmény eléréséhez 4 hetente, összesen 3-4 alkalommal
              érdemes elvégezni a kezelést.
            </p>
            <Abstract />
          </div>
        </div>
      </section>
    </>
  );
}
