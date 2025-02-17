import React from "react";
import Button2 from "@/components/button/Button2";
import Button from "@/components/button/Button";
import Image from "next/image";
import Abstract from "@/components/astract/Object";
import icon from "../../../public/assets/icon/right.svg";
import Link from "next/link";
import { size } from "@/data/size";
import { alt } from "@/data/alt";
import { servicesPage } from "@/data/photos";
import styles from "./serviceList.module.css";

export default function SqtBioMikrotusKezeles() {
  return (
    <>
      <div className={styles.topBar}>
        <div className={styles.items}>
          <Link href="/">FŐOLDAL</Link>
          <Image
            style={{ marginBottom: "1px" }}
            alt={alt.name}
            size={size.fullsize}
            src={icon}
          />
          <Link href="/szolgaltatasok">SZOLGÁLTATÁSOK</Link>
          <Image
            style={{ marginBottom: "1px" }}
            alt={alt.name}
            size={size.fullsize}
            src={icon}
          />
          <Link  href="/szolgaltatasok/innovativ-arckezelesek">
            INNOVATÍV ARCKEZELÉSEK
          </Link>
          <Image
            style={{ marginBottom: "1px" }}
            alt={alt.name}
            size={size.fullsize}
            src={icon}
          />
           <Link className={styles.active} href="/szolgaltatasok">
           SQT® BIO MIKROTŰS KEZELÉS
          </Link>
        </div>
      </div>

      <section className={styles.container}>
        <div className={styles.helper}>
          {/* --- Fő cím + szöveg --- */}
          <div className={styles.titleContainer}>
            <div className={styles.titleHelper}>
              <h1 className={styles.title}>SQT® Bio Mikrotűs kezelés</h1>
              <Abstract />
            </div>

            <p>
              Mindössze 5 perc alatt 3 000 000 természetes szilícium bio
              mikrotűt kézi masszázzsal juttatunk a bőr középső rétegébe, hogy
              serkentsük a bőr anyagcseréjét és elősegítsük a kollagén- és
              elasztikus rostok termelődését.
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
            <h1 className={styles.title}>SQT® Bio Mikrotűs kezelés</h1>
            <p>
              A szivacstű a Spongilla nemzetségbe tartozó édesvízi szivacsokból
              származik. Ezeket a szivacsokat régóta alkalmazzák az alternatív
              gyógyászatban és kozmetikai célokra. A szivacsokat liofilizált
              eljárással szárítják, sterilizálják, őrlik porrá, majd kozmetikai
              kezelésben használják fel.
            </p>
            <Abstract />
          </div>

          {/* --- 2. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h1 className={styles.title}>
              Mitől különleges az SQT® bio mikrotűs kezelés?
            </h1>
            <p>
              Az eljárás során alkalmazott mikrotűk nem tartalmaznak vegyipari
              összetevőket, sem mesterségesen előállított anyagokat. A
              kezeléshez kizárólag természetes szilíciumalapú szivacstűket
              használunk. A tűs kezelésekhez hasonló hatást természetes módon
              éri el, a szivacstűk révén serkentve a bőr hámlását és
              megújulását.
            </p>
            <Abstract />
          </div>

          {/* --- 3. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h1 className={styles.title}>
              Az SQT® bio mikrotűs kezelés előnyei
            </h1>
            <ul>
              <li>
                Nincs szükség érzéstelenítésre, és nem jár vérzéssel vagy bőrseb
                kialakulásával.
              </li>
              <li>
                A bőr megújulási ciklusát 28 napról 7-14 napra rövidíti, így
                természetes, biztonságos és hatékony fizikai megújulást
                biztosít.
              </li>
              <li>
                Ideális választás azok számára, akik eddig tartózkodtak az
                invazív tűs eljárásoktól.
              </li>
              <li>
                A tengeri szivacs kivonat mikroszkopikus tűi biztosítják az
                egyedülálló hatékonyságot.
              </li>
              <li>
                Az eljárás után a bőr üdébb, feszesebb, egyenletesebb lesz, és a
                pigmentfoltok halványulnak.
              </li>
            </ul>
            <Abstract />
          </div>

          {/* --- 4. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h1 className={styles.title}>Milyen bőrtípusoknál alkalmazható?</h1>
            <p>
              A kémiai vagy gyógynövényes hámlasztó kezelésekkel ellentétben az
              SQT bio mikrotűs kezelés mellékhatások nélkül, minden bőrtípus
              esetében biztonságosan alkalmazható. Kizárólag természetes
              összetevőket tartalmaz, így még az érzékeny bőr számára is
              ideális. Támogatja a bőr víz- és olajtartalmának egyensúlyát,
              valamint elősegíti a természetes regenerációs folyamatokat.
            </p>
            <Abstract />
          </div>

          {/* --- 5. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h1 className={styles.title}>
              Milyen bőrproblémákra ajánlott az SQT bio mikrotűs kezelés?
            </h1>
            <ul className={styles.ul2Col}>
              <li>Akne kezelésére</li>
              <li>Hegesedés eltüntetésére</li>
              <li>Striák halványítására</li>
              <li>Pigmentfoltok kezelésére</li>
              <li>Tág pórusok csökkentésére</li>
              <li>Finom ráncok kisimítására</li>
              <li>Megereszkedett bőr feszesítésére</li>
            </ul>
            <Abstract />
          </div>

          {/* --- 6. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h1 className={styles.title}>
              Hány alkalom szükséges a látványos eredményhez?
            </h1>
            <ul>
              <li>Akne vagy hegek esetén 4-6 kezelés javasolt.</li>
              <li>
                Egyéb esetekben már 1-2 alkalom után is látványos eredmény
                érhető el.
              </li>
            </ul>
            <Abstract />
          </div>

          {/* --- Árazás --- */}
          <div className={styles.sectionSubTitles}>
            <h1 className={styles.title}>Kezelések ára</h1>
            <div className={styles.priceContainer}>
              <div className={styles.priceItems}>
                <p>Problémás bőr kezelése</p>
                <p>1 alkalom - 39 000 Ft</p>
              </div>
              <div className={styles.priceItems}>
                <p>Pigmentfoltok halványítása</p>
                <p>1 alkalom - 39 000 Ft</p>
              </div>
              <div className={styles.priceItems}>
                <p>Problémás bőr kezelése</p>
                <p>1 alkalom - 39 000 Ft</p>
              </div>
            </div>

            <Abstract />
          </div>
        </div>
      </section>
    </>
  );
}
