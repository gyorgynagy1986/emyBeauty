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

export default function TheMaxOssejtes() {
  return (
    <>
      <ImageSkincareHeader activePage="THE MAX ŐSSEJTES ARCKEZELÉS" />

      <section className={styles.container}>
        <div className={styles.helper}>
          {/* --- Fő cím + szöveg --- */}
          <div className={styles.titleContainer}>
            <div className={styles.titleHelper}>
              <h1 className={styles.title}>THE MAX őssejtes arckezelés</h1>
              <Abstract />
            </div>

            <p>
              A növényi kivonatoknak köszönhetően egyedülállóan regenerálja a bőrt. A növényi őssejtek elősegítik a sejtosztódást és hozzájárulnak a bőr fiatalságának megőrzéséhez. Emellett csökkenti a már kialakult ráncokat és visszaadja a bőr ragyogását.
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
              Idősödő, megereszkedett, fénykárosodott bőr, akne
            </p>
            <Abstract />
          </div>

          {/* --- Árazás --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Kezelések ára</h2>
            <div className={styles.priceContainer}>
              <div className={styles.priceItems}>
                <p>Arc kezelés 1 Alkalom</p>
                <p>25.000 Ft</p>
              </div>
            </div>
            <Abstract />
          </div>
        </div>
      </section>
    </>
  );
}