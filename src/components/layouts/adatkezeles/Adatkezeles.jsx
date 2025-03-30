import React from "react";
import styles from "./Adatkezeles.module.css";
import Ob from "@/components/astract/ObjectElement";

// Fő komponens
const Adatkezeles = () => {
  return (
    <section className={styles.container}>
      <div className={styles.helper}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Adatkezelési Tájékoztató</h1>
          <Ob />
        </div>

        <div className={styles.titleItem}>
          <h2 className={styles.titleItemTitle}>Adatkezelő adatai</h2>
          <p className={styles.serviceName}>Az adatkezelő megnevezése: EMY BEAUTY ESTETICS</p>
          <p className={styles.serviceName}>Az adatkezelő elérhetősége: *********</p>
          <p className={styles.serviceName}>email: emy@emybeautyestetics.hu</p>
          <p className={styles.serviceName}>Telefon: +36 20 342 66 18</p>
          <p className={styles.serviceName}>Adószám: *******</p>
          
          <h2 className={styles.titleItemTitle}>1. Általános fogalmak</h2>
          <h3 className={styles.titleItemTitle}>1.2 GDPR</h3>
          <p className={styles.serviceName}>
            Az Általános Adatvédelmi Rendelet (GDPR) az Európai Unióban (EU) és az Európai Gazdasági Térségben (EGT) élő személyek adatvédelméről és magánéletének védelméről szóló uniós jogrendelet. Kitér a személyes adatok EU-n és EGT-n kívüli exportjára is. A GDPR célja, hogy az egyének nagyobb ellenőrzést biztosítsanak személyes adataik felett, és harmonizálják az adatvédelmi jogszabályokat az EU-ban.
          </p>
          
          <p className={styles.serviceName}>
            A GDPR értelmében magánjellegű adatkezelésnek minősül a személyes adatok bármely olyan kezelése, amely azonosított vagy azonosítható természetes személlyel kapcsolatos bármely információ. Ez magában foglalja a neveket, címeket, e-mail címeket és minden egyéb személyes adatot, amely az egyén azonosítására használható.
          </p>
          
          <p className={styles.serviceName}>
            A GDPR szigorú szabályokat határoz meg a személyes adatok gyűjtésére, felhasználására és megosztására vonatkozóan, és számos jogot biztosít az egyéneknek a személyes adataikkal kapcsolatban, beleértve a hozzáféréshez, helyesbítéshez, törléshez és kezelésük korlátozásához való jogot.
          </p>
          
          <p className={styles.serviceName}>
            A személyes adatokat kezelő szervezetek kötelesek megfelelő technikai és szervezési intézkedéseket hozni a személyes adatok jogosulatlan hozzáféréstől, felhasználástól, nyilvánosságra hozataltól és megsemmisítéstől való védelme érdekében. Gondoskodniuk kell arról is, hogy a személyes adatokat az ő nevükben feldolgozó harmadik felek a GDPR-nak megfelelő módon kezeljék.
          </p>
          
          <h3 className={styles.titleItemTitle}>1.3 GDPR ÁLTALÁNOS FOGALMAK</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.serviceName}><strong>Személyes adat:</strong> minden olyan információ, amely egy azonosított vagy azonosítható természetes személlyel (az „érintettnek" nevezett) kapcsolatos.</span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.serviceName}><strong>Érintett:</strong> az a természetes személy, akinek személyes adatait kezelik.</span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.serviceName}><strong>Feldolgozás:</strong> minden olyan művelet vagy műveletsor, amelyet a személyes adatokon hajtanak végre.</span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.serviceName}><strong>Adatkezelő:</strong> az a természetes vagy jogi személy, amely meghatározza a személyes adatok kezelésének céljait és eszközeit.</span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.serviceName}><strong>Feldolgozó:</strong> az a természetes vagy jogi személy, amely az adatkezelő nevében személyes adatokat dolgoz fel.</span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.serviceName}><strong>Hozzájárulás:</strong> az érintett akaratának önkéntes, konkrét, tájékozott és félreérthetetlen kinyilvánítása.</span>
            </li>
          </ul>
          
          <h2 className={styles.titleItemTitle}>2. Személyes adatok gyűjtése</h2>
          <p className={styles.serviceName}>
            Személyes adatokat gyűjthetünk a látogatóktól (érintett), amikor azok a weboldalunkon található kapcsolatfelvételi űrlapot használják, időpontot foglalnak vagy kozmetikai kezelésre vagy kozultációra regisztrálnak. Az általunk gyűjtött személyes adatok közé tartozhat a vendég neve, e-mail címe, és telefonszáma.
          </p>
          
          <h2 className={styles.titleItemTitle}>3. Adatkezelés jogalapja</h2>
          <p className={styles.serviceName}>
            Az érintett hozzájárulási nyilatkozata a kapcsolatfelvételi űrlap kitöltése, az időpontfoglalás és a kozmetikai kezelésre, illetve kozultációra való regisztráció során.
          </p>
          
          <h2 className={styles.titleItemTitle}>4. A személyes adatok felhasználása</h2>
          <p className={styles.serviceName}>Az általunk gyűjtött személyes adatokat arra használjuk, hogy:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.serviceName}>Kezeljük az időpontfoglalásokat és emlékeztessük a vendégeket a közelgő kezelésekről</span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.serviceName}>Kapcsolatot tartsunk a vendégekkel a kezelésekkel kapcsolatban</span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.serviceName}>Személyre szabott kozmetikai kezeléseket biztosítsunk</span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.serviceName}>A vendégek egyéni bőrállapotát és igényeit nyomon kövessük</span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.serviceName}>Tájékoztassuk a vendégeket az akciókról, új kezelésekről (kizárólag előzetes hozzájárulás esetén)</span>
            </li>
          </ul>
          <p className={styles.serviceName}>A személyes adatokat nem osztjuk meg harmadik felekkel, kivéve, ha azt a törvény előírja.</p>
          
          <h2 className={styles.titleItemTitle}>5. Adatmegőrzés</h2>
          <p className={styles.serviceName}>
            A személyes adatokat addig őrizzük meg, amíg a vendég által igénybe vett szolgáltatások nyújtásához és a jogi kötelezettségek teljesítéséhez szükséges. Az aktív vendégkapcsolat megszűnését követően a személyes adatokat 5 évig őrizzük meg a jogi kötelezettségeink teljesítése érdekében. A kapcsolatfelvételi űrlapon keresztül érkező üzeneteket, beleértve minden megadott adatot, amelyek nem vezetnek vendégkapcsolathoz, 3 hónapon belül véglegesen töröljük.
          </p>
          
          <h2 className={styles.titleItemTitle}>6. Adatbiztonság</h2>
          <p className={styles.serviceName}>
            Személyes adatai korlátozott hozzáférésű, ellenőrzött létesítményekben elhelyezett szervereken kerülnek tárolásra. Számos technológia és eljárás kerül alkalmazásra annak érdekében, hogy személyes adatai védve legyenek a visszaéléstől, jogosulatlan hozzáféréstől, nyilvánosságra hozataltól és megváltoztatástól. Az Ön személyes adatainak védelme érdekében ésszerű óvintézkedéseket teszünk, és követjük az iparág legjobb gyakorlatait.
          </p>
          
          <h2 className={styles.titleItemTitle}>7. Az érintettek jogai</h2>
          <p className={styles.serviceName}>A GDPR értelmében az érintettek a következő jogokkal rendelkeznek:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.serviceName}>Joguk van arra, hogy tájékoztatást kapjanak személyes adataik gyűjtéséről és felhasználásáról.</span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.serviceName}>A személyes adataikhoz való hozzáférés joga.</span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.serviceName}>A személyes adataik helyesbítéséhez való jog.</span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.serviceName}>Személyes adataik törléséhez való jog.</span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.serviceName}>Személyes adataik feldolgozásának korlátozásához való jog.</span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.serviceName}>Az adathordozhatósághoz való jog.</span>
            </li>
            <li className={styles.listItem}>
              <span className={styles.serviceName}>A személyes adatok feldolgozása elleni tiltakozáshoz való jog.</span>
            </li>
          </ul>
          <p className={styles.serviceName}>
            Ha ezen jogok bármelyikével élni kíván, kérjük, lépjen kapcsolatba velünk a weboldalon elhelyezett kapcsolatfelvételi űrlap segítségével vagy az adatkezelő elérhetőségein.
          </p>
          
          <h2 className={styles.titleItemTitle}>8. A jelen adatvédelmi szabályzat módosításai</h2>
          <p className={styles.serviceName}>
            Időről időre frissíthetjük ezt az adatvédelmi szabályzatot. Javasoljuk a felhasználóknak, hogy rendszeresen tekintsék át ezt az adatvédelmi szabályzatot a frissítések miatt.
          </p>
          
          <h2 className={styles.titleItemTitle}>9. Kapcsolatfelvétel</h2>
          <p className={styles.serviceName}>
            Ha bármilyen kérdése van a jelen adatvédelmi irányelvvel vagy a személyes adatok kezelésével kapcsolatban, kérjük, lépjen kapcsolatba velünk a következő elérhetőségen: emy@emybeautyestetics.hu
          </p>
          
          <p className={styles.serviceName} style={{ fontStyle: 'italic', marginTop: '30px', textAlign: 'right' }}>
            Utolsó frissítés: 2025.03.30.
          </p>
                  </div>
      </div>
    </section>
  );
};

export default Adatkezeles;