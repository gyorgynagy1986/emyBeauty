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
import ImageSkincareHeader from "./header/ImageSkincareHeader";


export default function IPeelOrmedic() {
  return (
    <>
      <ImageSkincareHeader activePage="O2LIFT SPA VÖRÖS SZŐNYEG KEZELÉS" />

      <section className={styles.container}>
        <div className={styles.helper}>
          {/* --- Fő cím + szöveg --- */}
          <div className={styles.titleContainer}>
            <div className={styles.titleHelper}>
              <h1 className={styles.title}>
                I PEEL | ORMEDIC LIFT™ - Felület megújító Bio Peeling
              </h1>
              <Abstract />
            </div>

            <p>
              Az Image Skincare egyik gyengéd, mégis hatékony hámlasztó
              kezelése, amely BIO összetevőivel segít helyreállítani a bőr
              egyensúlyát, hidratáltságát és nyugtatását. Ez a peeling ideális
              érzékeny bőrűek számára, mivel enyhe hámlasztó hatást biztosít,
              miközben tápláló, természetes összetevőket tartalmaz.
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
            <h2 className={styles.title}>
              Főbb összetevők és jótékony hatásuk
            </h2>
            <ul>
              <li>
                Organikus Aloe Vera: Nyugtatja és hidratálja a bőrt, csökkenti a
                bőrpírt és irritációt.
              </li>
              <li>
                Tök, ananász, papaya, mangó gyümölcs enzimek és peptied egy BIO
                Aloe vera alapban. Ez a nem-kémiai peeling kiegyensúlyozza,
                regenerálja és helyreállítja a bőrt, míg a fekete nadálytő
                őssejtek feltöltik a bőr őssejtjeit, segítve a bőr fiatalságának
                megtartását. Gyengéd hámlasztást biztosítanak, eltávolítva az
                elhalt hámsejteket, simábbá és ragyogóbbá téve a bőrt.
              </li>
              <li>
                Peptidek és Antioxidánsok: Védelmet nyújtanak a környezeti
                stressz ellen, és serkentik a kollagén termelődését, feszesítő
                hatást biztosítva.
              </li>
            </ul>
            <Abstract />
          </div>

          {/* --- 2. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Kinek ajánlott?</h2>
            <p>
              Az Ormedic Lift Bio Peeling különösen ajánlott azok számára, akik:
            </p>
            <ul>
              <li>
                Egyensúlyát vesztett, irritált, érzékeny, dehidratált,
                kiegyensúlyozatlan és fáradt kinézetű bőrre
              </li>
              <li>Hajlamosak a bőrpírra vagy az irritációra</li>
              <li>
                Első alkalommal próbálnak hámlasztást, vagy kíméletes megoldást
                keresnek
              </li>
            </ul>
            <p>A kezelést kismamák is igénybe vehetik.</p>
            <p>
              Ideális választás a bőr megújításához természetes és gyengéd
              módon. Az eredmény simább, ragyogóbb bőr, amely hidratált és
              kiegyensúlyozott.
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
                <p>6 Alkalmas bérlet</p>
                <p>174.000 Ft + 1 alkalom AJÁNDÉK</p>
              </div>
              <div className={styles.priceItems}>
                <p>Arc+ nyak + dekoltázs 1 Alkalom</p>
                <p>35.000 Ft-tól</p>
              </div>
              <div className={styles.priceItems}>
                <p>6 Alkalmas bérlet</p>
                <p>210.000 Ft + 1 alkalom AJÁNDÉK</p>
              </div>
              <div className={styles.priceItems}>
                <p>+ Ajándék GENO LED fényterápiával</p>
                <p></p>
              </div>
            </div>

            <Abstract />
          </div>
        </div>
      </section>
    </>
  );
}
