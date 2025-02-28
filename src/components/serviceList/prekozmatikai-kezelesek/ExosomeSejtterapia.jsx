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

export default function ExosomeSejtterapia() {
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
          {/* --- Fő cím, bevezető szöveg és gombok --- */}
          <div className={styles.titleContainer}>
            <div className={styles.titleHelper}>
              <h1 className={styles.title}>EXOSOME SEJTTERÁPIA</h1>
              <Abstract />
            </div>
            <p>Forradalmi innováció az orvosesztétikában</p>
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
          <div className={styles.photoContainer}>
            <Image
              alt={alt.name}
              src={servicesPage.exo2}
              sizes={size.fullsize}
            />
          </div>

          {/* --- Tartalom --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>
              Mit érdemes tudni az exosome terápiáról?
            </h2>
            <p>
              Az exosome egy innovatív sejtterápia, melynek kiemelkedő szerepe
              van a bőrszerkezet átalakításában és a bőrminőség javításában. Az
              exoszómák biológiailag aktív anyagokat (DNS, mRNS, mikro-RNS,
              metabolitok, lipidek, proteinek) szállítanak sejtjeink között:
              tulajdonképpen olyanok, mint a hírvivők, amelyek ,,üzeneteket”
              küldenek az egészségtelen társaiknak, és regenerálódásra késztetik
              őket.
            </p>
            <p>
              A terápiás folyamat során fokozódik a bőr elasztin- és
              kollagén-termelődése. Ennek eredménye, hogy minősége javul,
              erősebbé, fiatalosabbá és ragyogóbbá válik, illetve a
              pigmenttermelődés látványosan csökken.
            </p>
            <Abstract />
          </div>

          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>
              Hogyan kell felkészülni egy kezelésre?
            </h2>
            <p>
              Az eljárás szinte fájdalommentes: a fájdalom minimalizálásért
              érzéstelenítő krémet használunk. A kezelés során egy speciális
              eszközzel, az úgynevezett SkinPen segítségével apró
              mikrosérüléseket ejtünk a bőr felszínén és beinjektáljuk az
              exosome-ot.
            </p>
            <p>
              A kezelés napján javasolt az arcmosás elkerülése, így a
              sejtterápia hatása még tartósabbá és látványosabbá válik. A
              kezelést érdemes havonta egyszer, legalább 3 alkalommal
              megismételni.
            </p>
            <Abstract />
          </div>

          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>A kezelés jótékony hatásai</h2>
            <ul>
              <li>Fokozza a kollagén és elasztin termelődését</li>
              <li>Halványítja az apró ráncokat</li>
              <li>Látványosan csökkenti a pigmenttermelődést</li>
              <li>Hatására a haj ismét dúsabb és erősebb lesz</li>
              <li>
                Az egyik legjobb módszer a hegek és a pattanások kezelésére
              </li>
              <li>Könnyedén kombinálható más beavatkozásokkal</li>
            </ul>
            <Abstract />
          </div>

          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>
              Kinek ajánlott az EXOSOME sejtterápiás kezelés?
            </h2>
            <ul>
              <li>Öregedő bőr kezelése</li>
              <li>Aknés hegek kezelése</li>
              <li>Bőrkárosodás kezelése</li>
              <li>Sebgyógyulás elősegítése</li>
              <li>Hajhullás kezelése</li>
              <li>Gyulladt, irritált bőr kezelése</li>
            </ul>
            <p>
              Az EXOSOME kezelés ajánlott mindazok számára, akik természetes
              módon szeretnék javítani bőrük megjelenését, és keresnek egy
              biológiai önregenerációs megoldást.
            </p>
            <Abstract />
          </div>

          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Kezelések és árak</h2>
            <div className={styles.priceContainer}>
              <div className={styles.priceItems}>
                <p>Arc kezelés (1 alkalom, 2 ml)</p>
                <p>80.000 Ft</p>
              </div>
              <div className={styles.priceItems}>
                <p>Arc, nyak, dekoltázs (1 alkalom, 5 ml)</p>
                <p>150.000 Ft</p>
              </div>
              <div className={styles.priceItems}>
                <p>Arc kezelés (3 alkalmas bérlet)</p>
                <p>220.000 Ft</p>
              </div>
              <div className={styles.priceItems}>
                <p>Arc, nyak, dekoltázs (3 alkalmas bérlet)</p>
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
