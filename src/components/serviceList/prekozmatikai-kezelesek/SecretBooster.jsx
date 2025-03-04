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
          {/* --- Fő cím + szöveg --- */}
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
              így összességében jelentős javulás tapasztalható a bőr
              megjelenésében és állapotában.
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
              src={servicesPage.secretrf}
              sizes={size.fullsize}
              className={styles.img}
            />
          </div>

          {/* --- 1. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>A kezelés összetevői</h2>
            <p>
              1. A Secret RF kezelés a ma elérhető egyik legmodernebb műtét
              nélküli bőrfiatalítás, mely különböző mélységekben segít
              újramodellezni a kollagénállomány szerkezetet.
            </p>
            <p>
              2. A Secret kezelés után az innovatív DEEP SHOOT AA anti-aging
              koktélt juttatjuk a bőrfelszín alá 0.5 mm mélységben, ezzel tovább
              fokozva a Secret RF kezelés látványos hatását.
            </p>
            <Abstract />
          </div>

          {/* --- 2. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>1. Secret™ RF kezelés</h2>
            <p>
              A frakcionált mikrotűs RF kezelés a mai legmodernebb, klinikailag
              bizonyított eljárás, mely a frakcionált rádiófrekvencia és a
              mikrotűs kezelések előnyös kombinációja. Az RF energia hőhatása a
              bőr mélyebb rétegeiben a kollagén rostokat gerjeszti, lebontja a
              régi kollagéneket, és elindítja az új kollagén termelődést
              (neokollagenezis), míg a tűszúrások a bőrfelszínen apró
              sérüléseket okoznak. A bőr felszíni és a bőr mélyebb rétegeiben
              végzett kezelés eredményeképp a bőr megfiatalodik, rugalmassá,
              tónusosabbá válik, és a pórusok összehúzódnak, a ráncok
              kisimulnak.
            </p>
            <Abstract />
          </div>

          <div className={styles.photoContainer}>
            <Image
              alt={alt.name}
              src={servicesPage.sc3}
              sizes={size.fullsize}
              className={styles.img}
            />
          </div>

          {/* --- 3. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>2. DEEP SHOOT AA kezelés</h2>
            <p>
              A DEEP SHOOT AA booster 3 ml hatóanyagkoktélt juttat 0,5 mm mélyen
              a bőrfelszín alá, optimalizálva az anti-aging hatóanyagok
              hasznosulását és gyors beépülését. A 19 üreges mikrotű akár 15x
              hatékonyabb felszívódást biztosít, mint a hagyományos
              dermaroller/pen kezelőfejek, és akár 30x hatékonyságot nyújt a
              felszíni alkalmazásokhoz képest. A DEEP SHOOT AA kulcsfontosságú
              aktív összetevői, mint például a glutation, a peptidek, a
              növekedési faktorok és a B-vitamin komplex segítenek fenntartani a
              bőr fiatalos állapotát. Ez az anti-aging koktél stimulálja az új
              sejtek termelődését és növeli a bőr teltségét.
            </p>
            <Abstract />
          </div>
          <div className={styles.photoContainer}>
            <Image
              alt={alt.name}
              src={servicesPage.secret2}
              sizes={size.fullsize}
              className={styles.img}
            />
          </div>

          {/* --- 4. szekció --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>
              SECRET BOOSTER + EXOSOME SEJTTERÁPA
            </h2>
            <p>
              Közvetlenül a Secret™ RF mikrotűs frakcionális rádiófrekvenciás
              kezelés után történik az EXOSOME sejtterápiás kezelés, amely
              ragyogóvá, frissé és élettel telivé varázsolja a bőrt.
            </p>
            <p>
              Ez a kezelés ideális választás mindazok számára, akik innovatív
              bőrfialító megoldásokat keresnek. Kifejezetten ajánlott azoknak,
              akik a kollagénstimuláló kezeléseiket szeretnék kiegészíteni egy
              új, hatékony terápiával, valamint azoknak, akiknek az arcbőre
              egyenletlen textúrájú, matt és fénytelen. Továbbá, kiválóan
              alkalmas azok számára, akik szeretnének megszabadulni bőrük
              esztétikai hibáitól, például a tág pórusoktól, az aknés hegektől
              vagy a pigmentfoltoktól. A kezelés különösen hasznos lehet
              azoknak, akiknek nehezen regenerálódik a bőrük, illetve akik a
              látványosabb eredmények és a nagyobb hatékonyság érdekében kedvenc
              lézeres kezeléseiket egy innovatív terápiás megoldással szeretnék
              támogatni. Ideális választás mindazoknak is, akik nem kívánnak
              botoxot vagy egyéb töltőanyagot alkalmazni, de szeretnének
              fiatalosabb, üdébb és ragyogóbb bőrt elérni.
            </p>
            <Abstract />
          </div>

          {/* --- Árazás --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Kezelések ára</h2>
            <div className={styles.priceContainer}>
              <div className={styles.priceItems}>
                <p>Secret™ + DEEP SHOOT AA</p>
                <p>
                  Arc kezelés 1 Alkalom kedvezményesen 140.000 Ft (170.000 Ft)
                  Más kedvezménnyel nem összevonható!
                </p>
              </div>
              <div className={styles.priceItems}>
                <p>Secret™ + EXOSOME Sejtterápia</p>
                <p>
                  Arc kezelés 1 Alkalom kedvezményesen 150.000 Ft (180.000 Ft)
                </p>
              </div>
            </div>
            <Abstract />
          </div>
        </div>
      </section>
    </>
  );
}
