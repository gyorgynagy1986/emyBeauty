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

export default function IPeelLighteningLiftForte() {
  return (
    <>
      <ImageSkincareHeader activePage="I PEEL | LIGHTENING LIFT® FORTE - INTENZÍV BŐRVILÁGOSÍTÓ HÁMLASZTÁS" />

      <section className={styles.container}>
        <div className={styles.helper}>
          {/* --- Fő cím + szöveg --- */}
          <div className={styles.titleContainer}>
            <div className={styles.titleHelper}>
              <h1 className={styles.title}>I PEEL | LIGHTENING LIFT® FORTE - Intenzív bőrvilágosító hámlasztás</h1>
              <Abstract />
            </div>

            <p>
              Az IMAGE Skincare világosító hámlasztó kezelésének intenzívebb változata, amely kifejezetten a makacsabb hiperpigmentációra, sötét foltokra és egyenetlen bőrtónusra lett kifejlesztve. A FORTE változat magasabb koncentrációban tartalmazza az aktív világosító összetevőket, így hatékonyabban kezeli az erősebb pigmentációs problémákat.
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
              <li>Magasabb koncentrációjú tejsav: Erőteljes hámlasztást biztosít, amely gyorsítja a sejtek megújulását és világosítja a pigmentfoltokat.</li>
              <li>Emelt szintű kojiksav: Hatékonyan halványítja a hiperpigmentációt és az egyenetlen bőrtónust.</li>
              <li>C-vitamin: Ragyogóvá és világosabbá teszi a bőrt, miközben antioxidáns védelmet nyújt.</li>
              <li>Erősebb növényi őssejtek: Támogatják a bőr regenerációját és védik a környezeti káros hatásoktól.</li>
            </ul>
            <Abstract />
          </div>

          {/* --- 2. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>
              Milyen hatás érhető el ezzel az eljárással?
            </h2>
            <p>
              Ez az intenzívebb kezelés mélyebb hámlasztást biztosít, amely serkenti a bőr megújulását és hatékonyan halványítja a pigmentfoltokat. A magasabb hatóanyag-koncentráció miatt a bőr világosabb, egyenletesebb tónusú lesz.
            </p>
            <Abstract />
          </div>

          {/* --- 3. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>
              Milyen előnyei vannak?
            </h2>
            <ul>
              <li>Erőteljes pigmentfolt halványítás: A magasabb tejsav- és kojiksav-koncentráció hatékonyan kezeli a makacs hiperpigmentációt.</li>
              <li>Egyenletesebb, ragyogóbb bőrtónus: Csökkenti az egyenetlen bőrtónust és ragyogóbbá teszi az arcbőrt.</li>
              <li>Regeneráció és védelem: A növényi őssejtek és a C-vitamin fokozzák a bőr természetes védekezőképességét és segítik a megújulást.</li>
            </ul>
            <p>
              Ez a kezelés ideális azok számára, akik erősebb pigmentációs problémákkal küzdenek, és tartós, makacs foltokat szeretnének halványítani. Tapasztaltabb peeling használóknak ajánlott, mivel az erősebb koncentráció intenzívebb hatást biztosít.
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
                <p>Arc+ nyak + dekoltázs 1 Alkalom</p>
                <p>35.000 Ft-tól</p>
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