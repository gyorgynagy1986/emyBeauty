import React from "react";
import styles from "./FoglalasiSzabalyzat.module.css";
import Ob from "@/components/astract/ObjectElement";

// Fő komponens
const FoglalasiSzabalyzat = () => {
  return (
    <section className={styles.container}>
      <div className={styles.helper}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Foglalási Szabályzat</h1>
          <Ob />
        </div>

        <div className={styles.titleItem}>
          <h2 className={styles.titleItemTitle}>EMY BEAUTY ESTETICS</h2>
          
          <p className={styles.serviceName}>Kedves Vendégeim!</p>
          
          <p className={styles.serviceName}>
            Annak érdekében, hogy mindenki számára gördülékenyen és kényelmesen tudjam biztosítani szolgáltatásaimat, kérlek, olvasd el az alábbi foglalási szabályzatot:
          </p>
          
          <h2 className={styles.titleItemTitle}>1. Időpontfoglalás</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.serviceName}>Időpontot kizárólag előzetes egyeztetés alapján tudok biztosítani – telefonon, üzenetben vagy online.</span>
            </li>
          </ul>
          
          <h2 className={styles.titleItemTitle}>2. Lemondás és módosítás</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.serviceName}>A 24 órán belüli lemondások, illetve módosítások esetén készenléti díj kerül felszámításra, amely a tervezett kezelési díj 50%-a.</span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.serviceName}>Ha a számodra fenntartott időpontban valamilyen okból nem tudsz megjelenni, kérlek, időben jelezd felém!</span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.serviceName}>Tekintettel arra, hogy az átszervezés időbe telik, a lemondás/időpont módosítás díjmentesen a lefoglalt időpont előtt minimum 48 órával lehetséges.</span>
            </li>
          </ul>
          
          <h2 className={styles.titleItemTitle}>3. Meg nem jelenés</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.serviceName}>Amennyiben az ügyfél előzetes értesítés nélkül nem jelenik meg a kezelésen, a következő időpontot kizárólag a szolgáltatás díjának 100%-ának megfizetése mellett tudom biztosítani.</span>
            </li>
          </ul>
          
          <h2 className={styles.titleItemTitle}>4. Előleg</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.serviceName}>Bizonyos szolgáltatások esetén előleg fizetése szükséges, amely nem megjelenés esetén nem visszatérítendő. Az előleg természetesen beszámít a kezelés végösszegébe.</span>
            </li>
          </ul>
          
          <h2 className={styles.titleItemTitle}>5. Egészségi állapot</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.serviceName}>Kérlek, minden esetben jelezd, ha egészségügyi problémád van, gyógyszert szedsz, allergiás vagy, vagy bármilyen bőrelváltozást tapasztalsz magadon. Ez fontos a biztonságos és személyre szabott kezelés érdekében.</span>
            </li>
          </ul>
          
          <p className={styles.serviceName} style={{ marginTop: '30px' }}>
            Köszönöm megértésed és a bizalmat!
          </p>
          
          <p className={styles.serviceName} style={{ fontStyle: 'italic', marginTop: '30px', textAlign: 'right' }}>
            Utolsó frissítés: 2025.04.07.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FoglalasiSzabalyzat;