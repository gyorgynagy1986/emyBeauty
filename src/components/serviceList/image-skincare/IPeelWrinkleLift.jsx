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

export default function IPeelWrinkleLift() {
  return (
    <>
      <ImageSkincareHeader activePage="I PEEL | WRINKLE LIFT® - HÁMLASZTÓ KEZELÉS" />

      <section className={styles.container}>
        <div className={styles.helper}>
          {/* --- Fő cím + szöveg --- */}
          <div className={styles.titleContainer}>
            <div className={styles.titleHelper}>
              <h1 className={styles.title}>I PEEL | Wrinkle Lift® - Hámlasztó kezelés</h1>
              <Abstract />
            </div>

            <p>
              Az Image Skincare által kifejlesztett erőteljes anti-aging megoldás simább, feszesebb és fiatalosabb megjelenést biztosít, különösen azok számára, akik szeretnék csökkenteni a ráncokat és finom vonalakat. A I PEEL | WRINKLE LIFT® ultra felületmegújító glikolsavas és retinolos kezelés láthatóan csökkenti a finom vonalak és ráncok megjelenését, miközben feszesíti és revitalizálja a bőrt. A Buddleja őssejtek csökkentik a gyulladást és kezelik a fény okozta öregedést, míg a növényi kávé és borsmenta energetizál, az eukaliptusz és ylang-ylang pedig tisztítja a bőrt.
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
            <h2 className={styles.title}>Főbb összetevők</h2>
            <ul>
              <li>Glikolsav: Ez egy AHA (alfa-hidroxi-sav), amely erőteljes hámlasztó hatásával eltávolítja az elhalt hámsejteket, és fokozza a bőr megújulását.</li>
              <li>Retinol: Az egyik leghatékonyabb anti-aging összetevő, mely serkenti a kollagéntermelést, feszesíti a bőrt, és csökkenti a ráncok, valamint a finom vonalak megjelenését.</li>
            </ul>
            <Abstract />
          </div>

          {/* --- 2. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>
              Milyen hatás érhető el ezzel az eljárással?
            </h2>
            <p>
              A glikolsav és a retinol kombinációja mélyebb hámlasztó hatást biztosít, elősegítve a sejtek megújulását, így frissebb, fiatalosabb bőrréteg kerül a felszínre. Az aktív összetevők gyorsítják a sejtcserét, simábbá, egyenletesebbé és ragyogóbbá téve a bőrt.
            </p>
            <Abstract />
          </div>

          {/* --- 3. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>
              Milyen előnyei vannak?
            </h2>
            <ul>
              <li>Ráncok, finom vonalak csökkentése: A retinol és a glikolsav segít kisimítani a ráncokat és a finom vonalakat, feszesebbé és simábbá téve a bőrt.</li>
              <li>Sejtmegújítás: Serkenti a bőr természetes megújulási folyamatait, hozzájárulva a fiatalosabb megjelenéshez.</li>
              <li>Egyenletesebb bőrtónus: Csökkenti a pigmentációkat, és egységesebb bőrtónust biztosít.</li>
            </ul>
            <p>
              Ez a kezelés ideális azok számára, akik az öregedés jeleit, például ráncokat és fakó bőrt szeretnék enyhíteni, nem érzékeny bőrűeknek ajánlott, mivel erőteljesebb összetevőket tartalmaz.
            </p>
            <Abstract />
          </div>

          {/* --- Árazás --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Kezelések ára</h2>
            <div className={styles.priceContainer}>
              <div className={styles.priceItems}>
                <p>1 Alkalom Teljes Arc</p>
                <p>29.000 Ft</p>
              </div>
              <div className={styles.priceItems}>
                <p>1 Alkalom Arc+Nyak+Dekoltázs</p>
                <p>35.000 Ft</p>
              </div>
              <div className={styles.priceItems}>
                <p>Bérlet</p>
                <p>6+ 1 Alkalom Ajándék</p>
              </div>
            </div>

            <Abstract />
          </div>
        </div>
      </section>
    </>
  );
}