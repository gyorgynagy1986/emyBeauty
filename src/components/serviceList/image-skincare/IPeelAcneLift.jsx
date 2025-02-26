import React from "react";
import Button2 from "@/components/button/Button2";
import Button from "@/components/button/Button";
import Image from "next/image";
import Abstract from "@/components/astract/Object";
import ImageSkincareHeader from "../image-skincare/header/ImageSkincareHeader";
import { size } from "@/data/size";
import { alt } from "@/data/alt";
import { servicesPage } from "@/data/photos";
import styles from "./serviceList.module.css";

export default function IPeelAcneLift() {
  return (
    <>
      <ImageSkincareHeader activePage="I PEEL | ACNE LIFT® - AKNÉS BŐR KEZELÉSE" />

      <section className={styles.container}>
        <div className={styles.helper}>
          {/* --- Fő cím + szöveg --- */}
          <div className={styles.titleContainer}>
            <div className={styles.titleHelper}>
              <h1 className={styles.title}>I PEEL | ACNE LIFT® - Aknés bőr kezelése</h1>
              <Abstract />
            </div>

            <p>
              Az I PEEL | Acne Lift® az IMAGE Skincare által fejlesztett speciális hámlasztó kezelés, aknéra hajlamos, problémás bőrre. Erős alfa- és béta-hidroxi savak elegye növényi orgona őssejtekkel, csökkenti a pattanásokat, pirosságot, eltünteti az akne után visszamaradt sötét foltokat. Méregtelenítő ylan ylang és eukaliptusz tisztítja a zsíros bőrt, és hatékonyan gyógyítja az aknés elváltozást. A kezelés kombinálja a gyulladáscsökkentő és tisztító hatású savakat, amelyek hatékonyan küzdenek a pattanások és a zsíros bőr problémái ellen, miközben segítenek tisztább, simább arcbőrt elérni.
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

          {/* --- 1. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>A kezelés főbb összetevői</h2>
            <ul>
              <li>Szalicilsav: Egy BHA (béta-hidroxi-sav), amely behatol a pórusok mélyére, tisztítja a felesleges olajat és eltávolítja az elhalt hámsejteket, így segít megelőzni az újabb pattanások kialakulását.</li>
              <li>Glikolsav: Egy AHA (alfa-hidroxi-sav), amely finoman hámlasztja a bőr felszínét, segít eltávolítani az elhalt hámréteget és elősegíti a bőr megújulását.</li>
              <li>Gyulladáscsökkentő összetevők: Segítenek csökkenteni a bőrpírt és a duzzanatot, ezáltal nyugtatják a gyulladt pattanásokat.</li>
            </ul>
            <Abstract />
          </div>

          {/* --- 2. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>
              Milyen hatás érhető el ezzel az eljárással?
            </h2>
            <p>
              A szalicilsav mélyen behatol a pórusokba, ahol feloldja a faggyút és a szennyeződéseket, míg a glikolsav eltávolítja a bőr felső rétegén található elhalt sejteket. Ez a kombináció lehetővé teszi a bőr számára, hogy megtisztuljon, miközben csökken a pórusok eltömődése.
            </p>
            <Abstract />
          </div>

          {/* --- 3. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>
              Milyen előnyei vannak?
            </h2>
            <ul>
              <li>Pattanás és faggyútermelés csökkentése: A szalicilsav és a glikolsav együttes hatása segít megtisztítani a pórusokat és csökkenteni az aknés tüneteket.</li>
              <li>Egyenletesebb bőrfelszín: A rendszeres hámlasztás segít a pattanások utáni hegek és foltok halványításában, így a bőr simábbá válik.</li>
              <li>Gyulladáscsökkentő hatás: Az összetevők nyugtatják az irritált, gyulladt bőrt, így a kezelés kevésbé okoz irritációt az aknéra hajlamos bőrön.</li>
            </ul>
            <p>
              Ez a kezelés ideális azok számára, akik aknéval, mitesszerekkel vagy zsíros bőrrel küzdenek. Továbbá mindazoknak, akik a pórusok eltömődése, gyulladások és aknés foltok ellen keresnek hatékony kezelést.
            </p>
            <Abstract />
          </div>

          {/* --- Árazás --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Kezelések ára</h2>
            <div className={styles.priceContainer}>
              <div className={styles.priceItems}>
                <p>Arc kezelés 1 Alkalom</p>
                <p>29.000 Ft-tól</p>
              </div>
              <div className={styles.priceItems}>
                <p>6 Alkalom esetén</p>
                <p>+ 1 alkalom AJÁNDÉK</p>
              </div>
            </div>

            <Abstract />
          </div>
        </div>
      </section>
    </>
  );
}