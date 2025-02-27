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

export default function ImageArcfeszesito() {
  return (
    <>
      <ImageSkincareHeader activePage="IMAGE ARCFESZESÍTŐ-ÁTALAKÍTÓ KEZELÉS" />

      <section className={styles.container}>
        <div className={styles.helper}>
          {/* --- Fő cím + szöveg --- */}
          <div className={styles.titleContainer}>
            <div className={styles.titleHelper}>
              <h1 className={styles.title}>IMAGE arcfeszesítő-átalakító kezelés</h1>
              <Abstract />
            </div>

            <p>
              A bőrbe juttatott hatóanyagoknak köszönhetően a fáradt, idősödő bőr ismét ragyogó, élettel telibb, feszesebb lesz. Az eredmény már akár egy alkalom után is látható: kisimítja a finomabb szarkalábakat, de a mélyebb ráncokat is csökkenti.
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
            <h2 className={styles.title}>Bőrprobléma</h2>
            <p>
              Idősödő, fáradt, fakó és megereszkedett bőr
            </p>
            <Abstract />
          </div>

          {/* --- Árazás --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Kezelések ára</h2>
            <div className={styles.priceContainer}>
              <div className={styles.priceItems}>
                <p>Arc kezelés 1 Alkalom</p>
                <p>35.000 Ft</p>
              </div>
            </div>
            <Abstract />
          </div>
        </div>
      </section>
    </>
  );
}