import React from "react";
import Button2 from "@/components/button/Button2";
import Button from "@/components/button/Button";
import Image from "next/image";
import Abstract from "@/components/astract/ObjectElement";
import ImageSkincareHeader from "../image-skincare/header/ImageSkincareHeader";
import { size } from "@/data/size";
import { alt } from "@/data/alt";
import { servicesPage } from "@/data/photos";
import styles from "./serviceList.module.css";

export default function IPeelPerfectionLiftForte() {
  return (
    <>
      <ImageSkincareHeader activePage="I PEEL | PERFECTION LIFT® FORTE - INTENZÍV BŐRMEGÚJÍTÓ KEZELÉS" />

      <section className={styles.container}>
        <div className={styles.helper}>
          {/* --- Fő cím + szöveg --- */}
          <div className={styles.titleContainer}>
            <div className={styles.titleHelper}>
              <h1 className={styles.title}>
                I PEEL | Perfection Lift® FORTE - Intenzív bőrmegújító kezelés
              </h1>
              <Abstract />
            </div>

            <p>
              Az I PEEL | Perfection Lift® FORTE az IMAGE Skincare Perfection
              Lift® kezelésének még intenzívebb változata, kifejezetten a
              komolyabb bőrproblémák, például mélyebb ráncok, súlyos akné,
              erőteljes hiperpigmentáció és egyenetlen bőrfelszín kezelésére. Ez
              a kezelés az erősebb összetevők révén mélyrehatóbb hámlasztást
              biztosít, látványos eredményeket nyújtva a bőr megújítása
              érdekében.
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
              <li>
                Magas koncentrációjú szalicilsav: Hatékonyan tisztítja a
                pórusokat, eltávolítja a felesleges faggyút, és küzd a
                pattanások ellen.
              </li>
              <li>
                Erőteljesebb glikolsav: Mélyen hámlasztja a bőrt, elősegíti a
                sejtek megújulását, és kisimítja a bőrfelszínt.
              </li>
              <li>
                Emelt retinol tartalom: Hatékony anti-aging összetevő, amely
                serkenti a kollagéntermelést, csökkenti a ráncokat, és segít
                egyenletesebbé tenni a bőrtónust.
              </li>
              <li>
                Antioxidánsok és gyulladáscsökkentők: Védik a bőrt a
                szabadgyökök ellen és segítik a bőr megnyugtatását,
                minimalizálva az irritációt.
              </li>
            </ul>
            <Abstract />
          </div>

          {/* --- 2. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>
              Milyen hatás érhető el ezzel az eljárással?
            </h2>
            <p>
              Erőteljes hámlasztást nyújt a magasabb hatóanyag-koncentráció
              révén, mélyebbre hatol a bőr rétegeiben. Ez a kombináció gyorsítja
              a sejtek megújulását, csökkenti a mélyebb ráncokat, halványítja a
              hiperpigmentációt és kezeli az aknét.
            </p>
            <Abstract />
          </div>

          {/* --- 3. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Milyen előnyei vannak?</h2>
            <ul>
              <li>
                Mélyebb ráncok és finom vonalak csökkentése: A retinol és
                glikolsav együttes hatása kisimítja a bőrt és feszesebbé teszi.
              </li>
              <li>
                Akne és hiperpigmentáció hatékony kezelése: A szalicilsav és a
                retinol erőteljesen küzd a makacs pattanások és a
                hiperpigmentáció ellen, halványítva a foltokat és hegeket.
              </li>
              <li>
                Egyenletes, fiatalos bőrtónus: Az erőteljesebb hámlasztás segít
                eltüntetni az elhalt hámsejteket és új, friss bőrréteget hoz a
                felszínre, amely simább és ragyogóbb.
              </li>
            </ul>
            <p>
              Ez a kezelés ideális azok számára, akik súlyosabb bőrproblémákkal
              – például mélyebb ráncokkal, makacs aknéval vagy erőteljes
              hiperpigmentációval – küzdenek és olyan tapasztalt
              peeling-használóknak, akik erőteljesebb, orvosi szintű bőrmegújító
              kezelést keresnek.
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
            </div>

            <Abstract />
          </div>
        </div>
      </section>
    </>
  );
}
