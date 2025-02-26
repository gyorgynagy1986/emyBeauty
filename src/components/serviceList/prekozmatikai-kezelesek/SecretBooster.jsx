import React from "react";
import Button2 from "@/components/button/Button2";
import Button from "@/components/button/Button";
import Image from "next/image";
import Abstract from "@/components/astract/ObjectElement";
import icon from "../../../../public/assets/icon/right.svg";
import Link from "next/link";
import { size } from "@/data/size";
import { alt } from "@/data/alt";
import { servicesPage } from "@/data/photos";
import styles from "./serviceList.module.css";

export default function SecretBooster() {
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
          <Link href="/szolgaltatasok/prekozmetikai-kezelesek">
            PREKOZMETIKAI KEZELÉSEK
          </Link>
          <Image
            style={{ marginBottom: "1px" }}
            alt={alt.name}
            size={size.fullsize}
            src={icon}
          />
          <Link className={styles.active} href="/szolgaltatasok">
            SECRET BOOSTER
          </Link>
        </div>
      </div>

      <section className={styles.container}>
        <div className={styles.helper}>
          {/* --- Fő cím, bevezető szöveg és gombok --- */}
          <div className={styles.titleContainer}>
            <div className={styles.titleHelper}>
              <h1 className={styles.title}>SECRET BOOSTER</h1>
              <Abstract />
            </div>
            <p>
              A legnépszerűbb kezeléseink, a Secret frakcionált rádiófrekvenciás
              mikrotűs és a feltöltő DEEP SHOOT kezelések kombinációja az arcbőr
              teljes megújításáért. A bőr felszíni és mélyebb rétegein végzett
              intenzív kezelés eredményeként a bőr megfiatalodik, rugalmassá és
              tónusossá válik. A pórusok összehúzódnak, míg a ráncok kisimulnak,
              így jelentős javulás tapasztalható a bőr megjelenésében és
              állapotában.
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

          {/* --- Tartalom blokkok (sectionSubTitles) --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Secret™ RF kezelés</h2>
            <p>
              A frakcionált mikrotűs RF kezelés a ma elérhető egyik
              legmodernebb, klinikailag bizonyított eljárás, mely a frakcionált
              rádiófrekvenciás és a mikrotűs kezelések előnyös kombinációja. Az
              RF energia hőhatása a bőr mélyebb rétegeiben aktiválja a kollagén
              rostokat, lebontja a régi kollagéneket, és elindítja az új
              kollagén termelődést (neokollagenezis), míg a tűszúrások apró
              sérüléseket okoznak a bőrfelszínen.
            </p>
            <p>
              Ezzel a kezeléssel a bőr megfiatalodik, rugalmassá és tónusosabbá
              válik, a pórusok összehúzódnak és a ráncok kisimulnak.
            </p>
          </div>

          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>DEEP SHOOT AA kezelés</h2>
            <p>
              A DEEP SHOOT AA booster 3 ml hatóanyagkoktélt juttat 0.5 mm mélyen
              a bőrfelszín alá, optimalizálva az anti-aging hatóanyagok
              hasznosulását és gyors beépülését. A 19 üreges mikrotű akár 15x
              hatékonyabb felszívódást biztosít, mint a hagyományos
              dermaroller/pen kezelőfejek, és akár 30x hatékonyságot nyújt a
              felszíni alkalmazásokhoz képest.
            </p>
            <p>
              A DEEP SHOOT AA kulcsfontosságú aktív összetevői – glutation,
              peptidek, növekedési faktorok és B-vitamin komplex – segítenek
              fenntartani a bőr fiatalos állapotát, stimulálva az új sejtek
              termelődését és növelve a bőr teltségét.
            </p>
          </div>

          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Secret™ + DEEP SHOOT AA</h2>
            <p>
              A Secret kezelés után az innovatív DEEP SHOOT AA anti-aging
              koktélt juttatjuk a bőrfelszín alá 0.5 mm mélységben, ezzel tovább
              fokozva a Secret RF kezelés látványos hatását.
            </p>
            <p>
              <strong>Ár:</strong> Arc kezelés 1 alkalom kedvezményesen 140.000
              Ft (170.000 Ft) – Más kedvezménnyel nem összevonható!
            </p>
          </div>

          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>
              SECRET BOOSTER + EXOSOME SEJTTERÁPIA
            </h2>
            <p>
              A Secret™ RF mikrotűs frakcionális rádiófrekvenciás kezelés után
              történik az EXOSOME sejtterápiás kezelés, amely ragyogóvá, frissé
              és élettel telivé varázsolja a bőrt. Ez a kombinált kezelés
              ideális választás mindazok számára, akik innovatív bőrfialító
              megoldásokat keresnek, különösen azoknak, akik szeretnék
              kiegészíteni kollagénstimuláló kezeléseiket egy hatékony
              terápiával.
            </p>
            <p>
              <strong>Ár:</strong> Arc kezelés 1 alkalom kedvezményesen 150.000
              Ft (180.000 Ft)
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
