"use client";

import React, { useEffect, useState } from "react";
import Button2 from "@/components/button/Button2";
import Button from "@/components/button/Button";
import Image from "next/image";
import Abstract from "@/components/astract/ObjectElement";
import { size } from "@/data/size";
import { alt } from "@/data/alt";
import { servicesPage } from "@/data/photos";
import styles from "./serviceList.module.css";

// AOS import
import "aos/dist/aos.css";
import AOS from "aos";

export default function MensSkincare() {
  // Képernyőméret figyelése
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Képernyőméret ellenőrzése és isMobile állapot beállítása
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Kezdeti ellenőrzés
    checkIfMobile();

    // AOS inicializálása
    AOS.init();

    // Mobilon frissítsük az AOS-t a state változás után
    if (isMobile) {
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    }

    // Eseményfigyelő a képernyőméret változásához
    window.addEventListener("resize", () => {
      const wasMobile = isMobile;
      checkIfMobile();

      // Ha változott a nézet típusa, frissítsük az AOS-t
      if (wasMobile !== isMobile) {
        setTimeout(() => {
          AOS.refresh();
        }, 100);
      }
    });

    // Komponens leválasztásakor takarítunk
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, [isMobile]);

  return (
    <>
      <section className={styles.container}>
        <div className={styles.helper}>
          {/* --- Fő cím + szöveg --- */}
          <div
            data-aos={isMobile ? "fade-up" : "fade-right"}
            data-aos-offset="150"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="true"
            className={styles.titleContainer}
          >
            <div className={styles.titleHelper}>
              <h1 className={styles.title}>
                ARAMO BŐRDIAGNOSZTIKA, BŐRANALÍZIS ,Konzultáció
              </h1>
              <Abstract />
            </div>

            <p>
              A leghatékonyabb és legeredményesebb kezelés alapja a részletes diagnosztikán alapuló tervezés. Ehhez ideális választás az ARAMO bőrdiaganosztikai készülék, amely a bőrről háromdimenziós, nagy felbontású fotókat készít és kielemez, professzionális mikroszkóp segítségével.
            </p>

            <div className={styles.buttonContainer}>
              <Button />
              <Button2 />
            </div>
          </div>
          {/* --- Kép --- */}
          <div
            data-aos={isMobile ? "fade-up" : "fade-left"}
            data-aos-offset="150"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="true"
            className={styles.photoContainer}
          >
            <Image alt={alt.name} src={servicesPage.konzultacio} sizes={size.fullsize} />
          </div>
          
          {/* --- 1. szekció --- */}
          <div
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>ARAMO BŐRDIAGNOSZTIKA</h2>
            <p>
              A mérés során pontos képet kapunk a bőr hidratáltságáról, rugalmasságáról, a faggyútermelésről, a pórusok és hajszálerek állapotáról, valamint a pigmentelváltozásokról és a ráncok mélységéről.
            </p>
            <p>
              A megbízható analízis által a kezelések hatása és eredményessége figyelemmel kísérhető.
            </p>
            <p>
              Bőrdiagnosztikai rendszerünk lehetővé teszi, hogy a mért adatok elemzésével képet kapjunk arról, hogy a bőrünk állapota megfelel-e korunknak. Ha eltér az elvárható értékektől, meg tudjuk határozni, hogy milyen típusú és fokú problémákról van szó, és hogy milyen intenzitású beavatkozásokra van szükség. Az esetleges eltérések feltárásával közelebb kerülünk ahhoz, hogy precíz otthoni bőrápolás vagy kozmetikai kezelési tervet készítsük, a biztos eredmény érdekében.
            </p>
            <p>
              Alapos arcdiagnosztika a leghatékonyabb arckezelések kiválasztásához. Minden kezelés személyes konzultációhoz kötött.
            </p>
            <Abstract />
          </div>
          
          {/* --- 2. szekció --- */}
          <div
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>Hogyan zajlik a Bőrdiagnosztika és a konzultáció?</h2>
            <ul>
              <li>Átbeszéljünk az általad elmondott bőrproblémáidat</li>
              <li>Beszélünk az aktuális bőrállapotodról, életviteledről szokásaidról (pl. arcápolás, sminkhasználat, étrend,allergia vízfogyasztás).</li>
              <li>Megvizsgáljuk a bőröd állapotát, és feltárjuk a problémát.</li>
              <li>A bőröd sajátosságainak figyelembe vételével megalkotjuk egyéni kezelési tervedet.</li>
              <li>Összeállítom bőrápolási rutinodat, mellyel napi és heti szinten tudod támogatni bőrödet, illetve a kezelés hatékonyáságát.</li>
              <li>Olyan célzott szépségvitaminokat javaslok melyek a probléma belső okát segítenek elhárítani.</li>
              <li>Az általam javasolt klinikai tisztaságú termékeket, vitaminokat megvásárolhatod szalonomban</li>
              <li>Ha elégedett vagy, időpontot egyeztetünk első kezelésedre.</li>
            </ul>
            <p>
              Egy konzultáció barátságos, bizalmi légkörben zajlik, ahol nyugodtan felteheted a kérdéseidet.
            </p>
            <Abstract />
          </div>
          
          {/* --- 3. szekció --- */}
          <div
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>Bőrproblémák megelőzése</h2>
            <p>
              A különféle bőrproblémák kialakulása a legtöbb esetben megelőzhető vagy jelentősen késleltethető, mérsékelhető. Ehhez azonban fontos az időben megkezdett prevenció. Az ARAMO arcdiagnosztika segítségével időben felfedezhetjük az elindult káros folyamatokat és ellensúlyozhatjuk az azokat kialakító okokat.
            </p>
            <div className={styles.priceItems}>
              <p>Az ARAMO BŐRDIAGNISZTIKA konzultáció ,és tanácsadás díja</p>
              <p>20.000 Ft</p>
            </div>
            <p>
              A konzultáció összege termékek vagy bármely szolgáltatás esetén teljes egészében felhasználható!
            </p>
            <Abstract />
          </div>
          
          {/* --- 4. szekció --- */}
          <div
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>Az EMY BEAUTY ESTETICS hatékonyságának három pillére</h2>
            <p>
              Átfogó és tudatos szépségápolási rendszert tükröz a következő három pillér:
            </p>
            
            <h3>1. Otthoni bőrápolás</h3>
            <ul>
              <li>A napi bőrápolási rutin alapvető fontosságú a tartós eredmények érdekében.</li>
              <li>Személyre szabott, professzionális termékekkel támogatja a kezelések hatását.</li>
              <li>A rendszeres tisztítás, hidratálás és fényvédelem segít fenntartani a bőr egészségét és szépségét.</li>
            </ul>
            
            <h3>2. Szépségvitaminok, klinikai tisztaságú étrend-kiegészítők</h3>
            <ul>
              <li>A bőr szépsége belülről kezdődik, ezért a megfelelő vitaminok és tápanyagok pótlása kulcsfontosságú.</li>
              <li>Kollagén, hialuronsav, antioxidánsok és egyéb hatóanyagok segítik a bőr rugalmasságát, hidratáltságát és regenerációját.</li>
              <li>Az egészséges életmód és táplálkozás kiegészítésével támogatja a kozmetikai kezelések hatékonyságát.</li>
            </ul>
            
            <h3>3. Innovatív gépek, kezelések</h3>
            <ul>
              <li>A legújabb technológiák alkalmazásával hatékonyabb, mélyebb rétegekbe hatoló kezeléseket lehet végezni.</li>
              <li>Például rádiófrekvenciás kezelések, Skin Booster, Exosoma LED-terápia vagy mikrotűs eljárások segítenek a bőrfiatalításban és problémák kezelésében.</li>
              <li>Az innovatív eszközök fokozzák a hatóanyagok bejutását és serkentik a bőr természetes megújulási folyamatait.</li>
            </ul>
            
            <p>
              Ez a három pillér együtt garantálja a bőr hosszú távú egészségét és szépségét, hiszen a külső és belső ápolás együttesen hozza meg a legjobb eredményeket.
            </p>
            <p>
              Nincs kompromisszum, nincs próbálkozás, csak tökéletes gyönyörű bőr. A természetes szépség időtálló, sosem megy ki a divatból!
            </p>
            <p>
              Várlak szeretettel Szegeden és Budapesten!
            </p>
            <Abstract />
          </div>
        </div>
      </section>
    </>
  );
}