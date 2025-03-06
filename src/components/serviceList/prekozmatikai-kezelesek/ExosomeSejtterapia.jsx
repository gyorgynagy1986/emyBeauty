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

export default function ExosomeSejtterapia() {
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
            EXOSOME SEJTTERÁPIA
          </Link>
        </div>
      </div>

      <section className={styles.container}>
        <div className={styles.helper}>
          {/* --- Fő cím + szöveg --- */}
          <div 
            data-aos={isMobile ? "fade" : "fade-right"}
            data-aos-offset="150"
            data-aos-delay="150"
            data-aos-duration="1500"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="true"
            className={styles.titleContainer}
          >
            <div className={styles.titleHelper}>
              <h1 className={styles.title}>
                EXOSOME SEJTTERÁPIA - Forradalmi innováció az orvosesztétikában
              </h1>
              <Abstract />
            </div>

            <p>
              Egyedülálló eljárás a fiatalosan ragyogó, egészséges bőrért és a
              dúsabb, erősebb hajkoronáért. Választható kezelési területek: arc,
              nyak, dekoltázs, kézfej, haj és a test bármely területe.
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
            data-aos-delay="150"
            data-aos-duration="1500"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="true"
            className={styles.photoContainer}
          >
            <Image
              alt={alt.name}
              src={servicesPage.exo2}
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
              Mit érdemes tudni az exosome terápiáról?
            </h2>
            <p>
              Az exosome egy innovatív sejtterápia, melynek kiemelkedő szerepe
              van a bőrszerkezet átalakításában és a bőrminőség javításában. De
              mik is azok az exoszómák? Az emberi test szinte minden sejtje
              nanorészecskéket bocsát ki, ezeket nevezzük exoszómáknak, mindez
              pedig azt jelenti, hogy minden egyes bőrsejt rendelkezik saját
              exoszómával. Az exoszómák biológiailag aktív anyagokat (DNS, mRNS,
              mikro-RNS, metabolitok, lipidek, proteinek) szállítanak sejtjeink
              között: tulajdonképpen olyanok, mint a hírvivők, amelyek
              ,,üzeneteket" küldenek az egészségtelen társaiknak, és
              regenerálódásra késztetik őket. Feladatuk, a sejtek közötti
              kommunikáció elősegítése. Az idő múlásával a bőr öregszik, és a
              kollagéntermeléshez hasonlóan a bőrsejtek exoszóma termelődése is
              lassul, melynek eredménye a bőr megereszkedése, ráncok
              megjelenése. Az exoszóma-terápia lehetővé teszi, hogy az új
              exoszómák beáramoljanak, segítsenek felébreszteni az inaktív
              bőrsejteket (az úgynevezett ,,idősebb" exoszómákat), hogy azok
              újra munkához lássanak.
            </p>
            <p>
              A terápiás folyamat során fokozódik a bőr elasztin- és
              kollagén-termelődése. Ennek eredménye, hogy minősége javul,
              erősebbé, fiatalosabbá és ragyogóbbá válik, illetve a
              pigmenttermelődés látványosan csökken, mely a kezelést követően
              néhány nappal már látványossá válik. Egyes kutatások szerint a
              kezelést követő 6-8 hónapig az exoszómák folyamatosan aktívak, így
              az eredmény meglehetősen tartós.
            </p>
            <Abstract />
          </div>

          {/* --- 2. szekció --- */}
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
              Hogyan kell felkészülni egy kezelésre?
            </h2>
            <p>
              Az eljárás szinte fájdalommentes: a fájdalom minimalizálásért
              érzéstelenítő krémet használunk. A kezelés során egy speciális
              eszközzel, az úgynevezett SkinPen segítségével apró
              mikrosérüléseket ejtünk a bőr felszínén és beinjektáljuk az
              exosome-ot. A kezelés nem jár felépülési idővel, maximum enyhe
              bőrpír jelentkezhet, ami 1-2 órán belül elmúlik.
            </p>
            <p>
              A kezelés napján javaslom az arcmosás elkerülését, így a
              sejtterápia hatása még tartósabbá és látványosabbá válik. A
              kezelést érdemes havonta egyszer, legalább 3 alkalommal
              megismételni.
            </p>
            <Abstract />
          </div>

          {/* --- 3. szekció --- */}
          <div 
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="150"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>A kezelés jótékony hatásai</h2>
            <ul>
              <li>
                Fokozza a kollagén és elasztin termelődését, a bőr vissza nyeri
                rugalmasságát és ragyogását
              </li>
              <li>
                Halványítja az apró ráncokat, így kölcsönözve a fiatalosabb
                megjelenést
              </li>
              <li>-Látványosan csökkenti a pigmenttermelődést</li>
              <li>
                Kitűnő megoldás a hajhullás kezelésére, hatására a haj ismét
                dúsabb és erősebb lesz
              </li>
              <li>
                Az egyik legjobb módszer a hegek és a pattanások kezelésére
              </li>
              <li>
                Könnyedén kombinálható más beavatkozásokkal, többek között a
                Carbon lézeres, Frakcionált Secret rádiófrekvenciás mikrotűs,
                Deep Shoot SkinBooster kezelésekkel
              </li>
            </ul>
            <Abstract />
          </div>

          {/* --- 4. szekció --- */}
          <div 
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="150"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>
              Kinek ajánlott az EXOSOME sejtterápiás kezelés?
            </h2>
            <ul>
              <li>
                <strong>Öregedő bőr kezelése:</strong> Azoknak, akik a bőrük
                öregedésének jeleit tapasztalják, mint a finom ráncok
                megjelenését, a rugalmasság elvesztését és a megereszkedett
                bőrt. Az exoszómák segíthetnek a bőr regenerációjában,
                javíthatják a bőr textúráját és feszességét.
              </li>
              <li>
                <strong>Aknés hegek:</strong> Azoknak, akiknek mély aknés hegeik
                vannak. Az exoszómák elősegíthetik a hegek gyógyulását és a bőr
                textúrájának javulását.
              </li>
              <li>
                <strong>Bőrkárosodás kezelése:</strong> Napkárosodott vagy más
                módon károsodott bőr esetén az exoszómák segíthetnek a bőrsejtek
                regenerálódásában, és a bőr egészségének helyreállításában.
              </li>
              <li>
                <strong>Sebgyógyulás:</strong> Sebek vagy műtéti hegek utáni
                regeneráció gyorsítására.
              </li>
              <li>
                <strong>Hajhullás kezelése:</strong> Bizonyos típusú hajhullás
                esetén is alkalmazzák, ugyanis serkentheti a hajhagymák
                regenerálódását és elősegítheti a hajnövekedést.
              </li>
              <li>
                <strong>Gyulladt, irritált bőr:</strong> Azoknak, akik
                bőrgyulladással vagy egyéb irritációkkal küzdenek, hisz az
                exoszómák gyulladáscsökkentő hatással bírnak.
              </li>
            </ul>
            <p>
              Az EXOSOME kezelés általában olyan emberek számára ajánlott, akik
              természetes módon szeretnék javítani bőrük megjelenését, és
              keresnek egy természetes biológiai önregenerációs megoldást a bőr
              regenerálására és/vagy fiatalítására.
            </p>
            <Abstract />
          </div>

          {/* --- Árazás --- */}
          <div 
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="150"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>Kezelések ára</h2>
            <div className={styles.priceContainer}>
              <div className={styles.priceItems}>
                <p>Arc kezelés 1 alkalom 2 ml</p>
                <p>80.000 Ft</p>
              </div>
              <div className={styles.priceItems}>
                <p>Arc, nyak, dekoltázs 1 alkalom 5 ml</p>
                <p>150.000 Ft</p>
              </div>
              <div className={styles.priceItems}>
                <p>Arc kezelés 3 alkalmas bérlet</p>
                <p>220.000 Ft</p>
              </div>
              <div className={styles.priceItems}>
                <p>Arc, nyak, dekoltázs 3 alkalmas bérlet</p>
                <p>390.000 Ft</p>
              </div>
            </div>
            <Abstract />
          </div>
        </div>
      </section>
    </>
  );
}