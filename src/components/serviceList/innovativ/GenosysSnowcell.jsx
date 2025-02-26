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
import innovativHeader from "./header/innovativHeader";

export default function GenosysSnowcell() {
  return (
    <>
      <innovativHeader activePage="Genosys SNOWCELL" />

      <section className={styles.container}>
        <div className={styles.helper}>
          {/* --- Fő cím + szöveg --- */}
          <div className={styles.titleContainer}>
            <div className={styles.titleHelper}>
              <h1 className={styles.title}>Genosys SNOWCELL</h1>
              <Abstract />
            </div>

            <p>
              Ragyogó és egységes, fiatalos bőr, pigmentáció nélkül – az ÚJ
              Genosys SnowCell eljárással!
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
            <h2 className={styles.title}>Genosys SNOWCELL</h2>
            <p>
              Egyenetlen a bőröd tónusa? Hiperpigmentációval küzdesz? Idősödés
              jeleit tapasztalod? Az innovatív pigmentációkezelő és fiatalító
              Genosys SnowCell megoldást nyújt számodra. Ez az innovatív,
              biztonságos és akár nyáron is alkalmazható kezelésrendszer
              peelinggel ötvözve frissíti a bőrfelszínt és egységesíti a bőr
              tónusát, halványítja a pigmentációt, gyorsítja a bőrsejtek
              cserélődését és támogatja a kollagén termelődését.
            </p>
            <Abstract />
          </div>

          {/* --- 2. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>A Genosys SnowCell újdonsága</h2>
            <p>
              A Genosys SnowCell újdonsága és hatékonysága abban rejlik, hogy
              gátolja a melanin termelődését, amely a bőrön megjelenő sötét
              foltokért és szeplőkért felel. Sőt! Másik nagy előnye, hogy
              kíméletesen hámlasztja a bőrfelszínt, így fényvédelemmel együtt
              egész évben, nyáron is biztonsággal alkalmazható. A
              melanintermelés korlátozásán kívül egyenletes bőrtextúrát
              eredményez, stimulálja a kollagéntermelődést, felgyorsítja a
              sejtek cserélődésének ütemét C-vitaminnal, tejsavval, kojiksavval,
              fermentált ginzenggel és többféle peptiddel kezeli a bőrt.
              Hatékonyan csökkenti a gyulladásokat és antioxidánsokkal védi a
              bőrt.
            </p>
            <Abstract />
          </div>

          {/* --- 3. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Mik a kezelés előnyei?</h2>
            <ul>
              <li>1. Csökkenti a meglévő hiperpigmentációt</li>
              <li>
                2. Megakadályozza a pigmentanyagok lerakódását a bőr felső
                rétegében
              </li>
              <li>
                3. Meggátolja a melanin termelődését, így megelőzi az újabb
                foltok megjelenését
              </li>
              <li>4. Fiatalítja a bőrt</li>
              <li>5. Stimulálja a kollagén termelődését</li>
              <li>6. Biztonságosan hámlasztja a felszíni hámsejteket</li>
              <li>7. Frissíti a bőrfelszínt és egységesíti a bőr tónusát</li>
              <li>
                8. Kezeli a szeplőket, öregségi foltokat, gyulladás utáni
                hiperpigmentációt is
              </li>
            </ul>
            <Abstract />
          </div>

          {/* --- 4. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Kinek ajánlott?</h2>
            <p>
              Az új innovatív Genosys SnowCell eljárás tökéletes választás lehet
              mindazoknak, akik szeretnék csökkenteni a hiperpigmentációt,
              helyreállítani a bőr egészségét, egyenletesebb bőrtónusra vágynak
              vagy egyszerűen csak fiatalítanák és megújítanák a bőrüket.
              Kifejezetten ajánlott pigmentált bőrre, de bármely bőrtípus és
              korosztály számára kiválóan alkalmazható.
            </p>
            <Abstract />
          </div>

          {/* --- 5. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>
              Hogyan történik egy kezelés és mennyi időt vesz igénybe?
            </h2>
            <p>
              A kezelést megelőzően összekeverjük a por állagú hatóanyagokat az
              aktivátorral. Ezt visszük fel az alaposan megtisztított arcbőrre.
              Az oldatot 10 percig a páciens bőrén hagyjuk, majd egy világosító
              regeneratív oldatot viszünk fel. Ezután egy peptides gélmaszkot
              helyezünk a bőrre. A kezelés egyben relaxációs élményt is nyújt,
              miközben szakértő kezek dolgoznak azon, hogy visszaadják bőröd
              egészségét és természetes ragyogását. Kiegészíthető LED-lámpás
              kezeléssel is.
            </p>
            <Abstract />
          </div>

          {/* --- 6. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>
              Hány alkalom szükséges a látványos eredmény eléréséhez?
            </h2>
            <p>
              A kezelést kúrában javasolt alkalmazni, és hetente ismételhető.
              4-7 kezelés javasolt, a bőr állapotától függően. A hatást hosszú
              ideig élvezhetjük, az elért látható eredmények megőrzésére pedig
              ajánlott specifikus termékkel ápolni otthon a bőrt, melynek
              kötelező eleme a fényvédelem.
            </p>
            <Abstract />
          </div>

          {/* --- 7. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>
              Mire kell figyelni a kezelés előtt és a kezelés után?
            </h2>
            <p>
              Kiemelten fontos, hogy a kezelések között megfelelően hidratáljuk
              a bőrt és gondoskodjunk a fényvédelemről.
            </p>
            <Abstract />
          </div>

          {/* --- 8. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>
              Milyen esetekben nem ajánlott a kezelés?
            </h2>
            <p>
              A hatóanyagokra való esetleges allergia esetén nem ajánlott a
              kezelés.
            </p>
            <Abstract />
          </div>

          {/* --- Árazás --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Kezelések ára</h2>
            <div className={styles.priceContainer}>
              <div className={styles.priceItems}>
                <p>1 Alkalmas Kezelés</p>
                <p>29.900 Ft</p>
              </div>
              <div className={styles.priceItems}>
                <p>4 Alkalmas bérlet</p>
                <p>99.000 Ft</p>
              </div>
            </div>

            <Abstract />
          </div>
        </div>
      </section>
    </>
  );
}
