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

export default function IPeelWrinkleLiftForte() {
  return (
    <>
      <ImageSkincareHeader activePage="I PEEL | WRINKLE LIFT® FORTE - INTENZÍV HÁMLASZTÓ KEZELÉS" />

      <section className={styles.container}>
        <div className={styles.helper}>
          {/* --- Fő cím + szöveg --- */}
          <div className={styles.titleContainer}>
            <div className={styles.titleHelper}>
              <h1 className={styles.title}>
                I PEEL | WRINKLE LIFT® FORTE - Intenzív hámlasztó kezelés
              </h1>
              <Abstract />
            </div>

            <p>
              Az erősebb idősödés jeleire, többek között a mélyebb ráncokra és a
              rugalmasság vesztésre az IMAGE Skincare erősebb peelingeket is
              kínál. A wrinkle lift® FORTE egy extra erősségű I PEEL opció.
              Ugyanazokat az innovatív hatóanyagokat tartalmazza, mint az
              eredeti wrinkle lift, viszont 45% glikolsavval erősebb hámlasztást
              biztosít. Az innovatív feszesítő és öregedésgátló elegy segít
              később öregedni, azaz garantálja az "Age Later®" hatást.
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
                Magasabb koncentrációjú glikolsav: Erőteljesebb hámlasztást
                biztosít, eltávolítva az elhalt hámréteget, és felgyorsítja a
                bőr megújulását.
              </li>
              <li>
                Emelt retinol tartalom: A retinol mélyebbre hatol a bőrben,
                serkenti a kollagéntermelést, segít a ráncok csökkentésében és a
                bőr feszesítésében.
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
              Ez az intenzívebb hámlasztás elősegíti a mélyebb sejtszintű
              megújulást, serkenti a kollagéntermelést, és elősegíti a bőr
              simábbá, feszesebbé válását. A kezelés hatékonyabb, mélyebb
              hámlasztást biztosít az erősebb összetevőknek köszönhetően, ezért
              azok számára készült, akik már tapasztaltabbak a peelingekkel
              kapcsolatban.
            </p>
            <Abstract />
          </div>

          {/* --- 3. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Milyen előnyei vannak?</h2>
            <ul>
              <li>
                Mélyebb ráncok csökkentése: A retinol és a glikolsav segít a bőr
                textúrájának javításában, simább megjelenést biztosítva.
              </li>
              <li>
                Bőrfeszesítés és kollagénstimuláció: A retinol fokozza a
                kollagéntermelést, ami hozzájárul a bőr rugalmasságához és
                feszességéhez.
              </li>
              <li>
                Egységes bőrtónus: A pigmentációs problémák csökkentése révén
                világosabb és ragyogóbb bőrképet eredményez.
              </li>
            </ul>
            <p>
              Ez a kezelés ideális azok számára, akik mélyebb ráncokkal
              küzdenek, érett bőrrel rendelkeznek, egy intenzívebb, erőteljesebb
              anti-aging kezelést keresnek, és szeretnék csökkenteni az öregedés
              jeleit. Tapasztaltabb peeling használóknak javasolt, akiknek bőre
              már hozzászokott az erősebb hámlasztó kezelésekhez.
            </p>
            <Abstract />
          </div>

          {/* --- Árazás --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Kezelések ára</h2>
            <div className={styles.priceContainer}>
              <div className={styles.priceItems}>
                <p>1 Kezelés Arc</p>
                <p>29.990 Ft</p>
              </div>
            </div>

            <Abstract />
          </div>
        </div>
      </section>
    </>
  );
}
