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

export default function SecretRF() {
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
            SECRET™ RF
          </Link>
        </div>
      </div>

      <section className={styles.container}>
        <div className={styles.helper}>
          {/* --- Fő cím, bevezető szöveg és gombok --- */}
          <div className={styles.titleContainer}>
            <div className={styles.titleHelper}>
              <h1 className={styles.title}>SECRET™ RF</h1>
              <Abstract />
            </div>
          </div>

          {/* --- Kép --- */}
          <div className={styles.photoContainer}>
            <Image
              alt={alt.name}
              src={servicesPage.secret}
              sizes={size.fullsize}
            />
          </div>
          <div className={styles.buttonContainer}>
            <Button />
            <Button2 />
          </div>
          {/* --- Tartalom blokkok (minden blokk sectionSubTitles osztállyal) --- */}
          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>A Secret™ RF kezelés bemutatása</h2>
            <p>
              A Secret RF kezelés a ma elérhető egyik legmodernebb műtét nélküli
              bőrfiatalítás, mely különböző mélységekben segít újramodellezni a
              kollagénállomány szerkezetét. A kezelés forradalmian új mikrotűs
              eljárást alkalmaz, hogy a frakcionális rádiófrekvenciás energiát
              oda juttassa, ahol arra a legnagyobb szükség van, és a bőr minden
              rétegét kezeli.
            </p>
          </div>

          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>A SECRET™ RF három technológiája</h2>
            <ul>
              <li>
                <strong>Mikrotűk:</strong> A bőr felszínén precíz
                mikro-szúrásokat hoznak létre.
              </li>
              <li>
                <strong>Frakcionált rádiófrekvencia:</strong> Hőt juttat a
                bőrszövetek mélyére, serkentve az új kollagén, elasztin és
                hialuronsav termelését.
              </li>
              <li>
                <strong>LED fényterápia:</strong> Tökéletes rejuvenáció
                érdekében alkalmazzuk.
              </li>
            </ul>
          </div>

          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Miért fontos a kezelés?</h2>
            <p>
              Bőrünk öregedése és rugalmasságának elvesztése ellen már fiatal
              korban érdemes tenni, hiszen a környezeti tényezők, a stressz és a
              napsugárzás mind hozzájárulnak a bőr öregedéséhez. A Secret RF
              kezelés:
            </p>
            <ul>
              <li>Csökkenti a ráncokat</li>
              <li>
                Fiatalítja az arcot, nyakat, dekoltázst és akár a kézfejet
              </li>
              <li>Szabályozza a faggyútermelést</li>
              <li>Összehúzza a tág pórusokat</li>
              <li>Feszesítő, lifting hatású</li>
              <li>Anti-cellulit és stria kezelésre is alkalmas</li>
            </ul>
          </div>

          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>A kezelés menete</h2>
            <p>
              A kezelés során a kezelőfej, amely 25 apró tűt tartalmaz (0,5–3,5
              mm hosszúságban, a céltól és a bőr vastagságától függően),
              mikro-motorral vezérelt. A tűk, mint elektródák, közvetlenül a
              bőrbe szúrva az előre beállított mélységbe juttatják az RF áram
              impulzusait. A 2Mhz-es frakcionált bipoláris rádiófrekvencia
              kizárólag a dermis kiválasztott rétegét melegíti, így pontos és
              hatékony stimulációt biztosít, miközben a bőr sérülését
              minimalizálja.
            </p>
            <div style={{ width: "100%" }}>
              {" "}
              <p style={{ fontWeight: "bold" }}>A kezelés főbb lépései:</p>
            </div>
            <ul>
              <li>Bőr tisztítása és peeling</li>
              <li>Érzéstelenítés</li>
              <li>Rádiófrekvenciás és mikrotűs kezelés</li>
              <li>Utóápolás és fényvédelem</li>
            </ul>
          </div>

          <div className={styles.sectionSubTitles}>
            <h1 className={styles.title}>Kezelések ára</h1>
            <div className={styles.priceContainer}>
              <div className={styles.priceItems}>
                <p>1 Alkalmas Arc kezelés (60 perc)</p>
                <p>100.000 Ft-tól</p>
                <p>Bérlet: 300.000 Ft (3+1 alkalom ajándék)</p>
              </div>
              <div className={styles.priceItems}>
                <p>Teljes Arc + Nyak kezelés</p>
                <p>110.000 Ft</p>
                <p>Bérlet: 330.000 Ft (3+1 alkalom ajándék)</p>
              </div>
              <div className={styles.priceItems}>
                <p>Teljes Arc, Nyak + Dekoltázs kezelés</p>
                <p>130.000 Ft</p>
                <p>Bérlet: 390.000 Ft (3+1 alkalom ajándék)</p>
              </div>
            </div>
          </div>

          <div className={styles.sectionSubTitles}>
            <h2 className={styles.title}>Gyakran ismételt kérdések</h2>
            <p>
              <strong>Mennyi idő alatt látható a kezelés hatása?</strong>
              <br />A teljes eredmény 3 hét után válik jól láthatóvá, mivel a
              bőr mélyebb rétegeiben stimulált kollagénnek időbe telik az új
              termelődés. Általában 3-4 alkalom javasolt, amelyet 4-6 hetente
              ismételünk. Komolyabb problémák esetén havonta is ismételhető, az
              eredmény akár 1-2 évig megmarad.
            </p>
            <p>
              <strong>Hány éves kortól ajánlott a kezelés?</strong>
              <br />
              Prevenciós célból már 20-30 éves kortól ajánlott, de ráncok, hegek
              és tág pórusok esetén bármely életkorban végezhető.
            </p>
            <p>
              <strong>Milyen testrészeken végezhető a kezelés?</strong>
              <br />
              Az arc, nyak, dekoltázs és szemkörnyéken is alkalmazható.
              Különböző konfigurációjú kezelőfejekkel a test más területein,
              például hónaljon vagy felkaron is végezhető.
            </p>
            <p>
              <strong>Mennyi idő a regenerálódás?</strong>
              <br />A bőrpirosodás és ödéma általában 2-3 órán belül elmúlik.
              Extrém esetekben vagy érzékeny pácienseknél tovább tarthat, de a
              bőr maximális gyógyulása érdekében javasolt az előírt utóápolás.
            </p>
            <p>
              <strong>Mire kell odafigyelni a kezelés után?</strong>
              <br />A kezelés után 24 órán belül nem ajánlott sportolni vagy
              szaunázni. Legalább egy hétig kerülni kell a hámlasztást,
              radírozást, és 3-4 hétig nem végezhető kozmetikai beavatkozás a
              kezelt területen. Magas faktorszámú UV fényvédő használata
              kötelező.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
