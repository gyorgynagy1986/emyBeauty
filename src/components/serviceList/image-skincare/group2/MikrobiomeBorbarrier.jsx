import React from "react";
import Button2 from "@/components/button/Button2";
import Button from "@/components/button/Button";
import Image from "next/image";
import Abstract from "@/components/astract/ObjectElement";
import ImageSkincareHeader from "../header/ImageSkincareHeader";
import { size } from "@/data/size";
import { alt } from "@/data/alt";
import { servicesPage } from "@/data/photos";
import styles from "../serviceList.module.css";

export default function MikrobiomeBorbarrier() {
  return (
    <>
      <ImageSkincareHeader activePage="MIKROBIOME+ BŐRBARRIER ERŐSÍTŐ KEZELÉS" />

      <section className={styles.container}>
        <div className={styles.helper}>
          {/* --- Fő cím + szöveg --- */}
          <div className={styles.titleContainer}>
            <div className={styles.titleHelper}>
              <h1 className={styles.title}>MIKROBIOME+ BŐRBARRIER ERŐSÍTŐ KEZELÉS</h1>
              <Abstract />
            </div>

            <p>
              A BIOME+ az IMAGE első mikrobiombarát családja, amely a bőr védő nedvesség barrierét helyezi előtérbe, amely a szárazság, a kellemetlenségek és a stressz látható jelei elleni első védelmi vonalként működik. Segít, hogy a bőr a lehető legjobban funkcionáljon természetes összetevők, a fermentált, növényi eredetű szkvalán, növényi adaptogének és tápláló növényi kivonatok segítségével.
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

          {/* --- Árazás --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Kezelések ára</h2>
            <div className={styles.priceContainer}>
              <div className={styles.priceItems}>
                <p>Arc kezelés 1 Alkalom</p>
                <p>19.900 Ft</p>
              </div>
            </div>
            <Abstract />
          </div>
        </div>
      </section>
    </>
  );
}