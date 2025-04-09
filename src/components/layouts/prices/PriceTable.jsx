"use client"

import React, { useState } from "react";
import styles from "./PriceTable.module.css";
import Ob from "@/components/astract/ObjectElement";

const allServices = [
  {
    category: "ARAMO BŐRDIAGNOSZTIKA",
    description: null,
    items: [
      { name: "3D Mikroszkopikus BŐRDIAGNOSZTIKA és Konzultáció (30 perc)", price: "20.000 Ft", perUse: "", discount: null, note: null },
    ],
  },
  {
    category: "PREKOZMETIKAI KEZELÉSEK",
    description: "A Prekozmetika egy olyan köztes megoldás, amely azoknak szól, akik látványos bőrmegújulást szeretnének elérni, de még nem állnak készen egy plasztikai beavatkozásra. Ez a megközelítés a hagyományos kozmetikai kezeléseknél hatékonyabb eljárásokat alkalmaz, de még mindig a nem invazív vagy minimálisan invazív esztétikai kezelések kategóriájába tartozik.",
    items: [
      { name: "Secret™ RF Mikrotűs Frakcionált RF - Teljes arc", price: "110.000 Ft", perUse: "/alkalom", discount: null, note: null },
      { 
        name: "Secret™ RF Mikrotűs Frakcionált RF - Teljes arc + nyak", 
        price: "120.000 Ft", 
        perUse: "/alkalom", 
        discount: null, 
        note: "3+1 AJÁNDÉK kezelés - Bérlet: 375.000 Ft" 
      },
      { 
        name: "Secret™ RF Mikrotűs Frakcionált RF - Teljes arc + nyak + dekoltázs", 
        price: "130.000 Ft", 
        perUse: "/alkalom", 
        discount: null, 
        note: "3+1 AJÁNDÉK kezelés - Bérlet: 390.000 Ft" 
      },
      { 
        name: "Secret Booster - SECRET™ RF + DEEP SHOOT AA", 
        price: "170.000 Ft", 
        perUse: "", 
        discount: "155.000 Ft", 
        note: "Kedvezményes ár" 
      },
      { 
        name: "SECRET™ RF + EXOSOME SEJTTERÁPIÁS INNOVÁCIÓ", 
        price: "195.000 Ft", 
        perUse: "", 
        discount: "170.000 Ft", 
        note: "Kedvezményes ár" 
      },
      { 
        name: "Oxygeneo™ Komplex Bőrmegújító Program - Arc kezelés", 
        price: "49.900 Ft", 
        perUse: "", 
        discount: null, 
        note: "Oxygenizálás, Hámlasztás, Mélytisztítás, TriPollar RF (Rádiófrekvenciás kollagénstimuláció), Ultrahang hatóanyag bejuttatás, Neo Mikromasszázs"
      },
      { 
        name: "Oxygeneo™ Komplex Bőrmegújító Program - Arc-Nyak-Dekoltázs Kezelés", 
        price: "59.900 Ft", 
        perUse: "", 
        discount: null, 
        note: "Oxygenizálás, Hámlasztás, Mélytisztítás, TriPollar RF (Rádiófrekvenciás kollagénstimuláció), Ultrahang hatóanyag bejuttatás, Neo Mikromasszázs"
      },
    ],
  },
  {
    category: "SPECIÁLIS BŐRMEGÚJÍTÓ KEZELÉSEK",
    description: null,
    items: [
      { name: "EXOSOME Sejtterápiás Innováció - Arc", price: "85.000 Ft", perUse: "", discount: null, note: null },
      { 
        name: "EXOSOME Sejtterápiás Innováció - Arc-Nyak-Dekoltázs", 
        price: "150.000 Ft", 
        perUse: "", 
        discount: "130.000 Ft", 
        note: "Kedvezményes ár" 
      },
      { name: "1 NEED Pro Kollagén Indukció terápia Koreai SkinBoosterek", price: "55.000 Ft", perUse: "-tól", discount: null, note: null },
      { 
        name: "Hollywood Carbon Lézeres MEDICAL Peeling - Arc", 
        price: "35.000 Ft", 
        perUse: "-tól", 
        discount: null, 
        note: "Személyre szabott kombinált kezeléssel kiegészítve opcionális (Bőrállapottól függ): Mezoterápia, vagy Rádiófrekvenciás kezelés, vagy masszázs és Led Fényterápia. Arc-nyak-Dekoltázs kezelés: 59.999 Ft" 
      },
      { name: "RIBESKIN Deep SHOOT SKINBOOSTER - Arc", price: "55.000 Ft", perUse: "-tól", discount: null, note: null },
      { name: "RIBESKIN koreai CO2 Carboxy Terápia - Arc kezelés", price: "20.000 Ft", perUse: "", discount: null, note: null },
      { name: "RIBESKIN koreai CO2 Carboxy Terápia - Arc-Nyak-Dekoltázs", price: "25.000 Ft", perUse: "", discount: null, note: null },
      { 
        name: "CO2 Carboxy Kezelés Mélytisztítással", 
        price: "29.900 Ft", 
        perUse: "", 
        discount: null, 
        note: "Masszázs + Led FÉNYTERÁPIÁVAL kiegészítve: 39.000 Ft" 
      },
    ],
  },
  {
    category: "RÁDIÓFREKVENCIÁS ÉS MEZOTERÁPIÁS KEZELÉSEK",
    description: null,
    items: [
      { name: "Plazma G Collage - Frakcionált rádiófrekvenciás kezelés - Arc", price: "35.000 Ft", perUse: "", discount: null, note: null },
      { name: "Plazma G Collage - Frakcionált rádiófrekvenciás kezelés - Arc-Nyak-Dekoltázs", price: "45.000 Ft", perUse: "", discount: null, note: null },
      { 
        name: "Tű nélküli Mezoterápia - Elektroporáció - Arc (Nobel Díjas Technológia)", 
        price: "25.000 Ft", 
        perUse: "-tól", 
        discount: null, 
        note: "Kúra kezelés esetén 5+1 Ajándék Alkalom" 
      },
      { 
        name: "Tű nélküli Mezoterápia - Elektroporáció - Arc-Nyak-Dekoltázs", 
        price: "39.000 Ft", 
        perUse: "", 
        discount: null, 
        note: "Exosomás Biorevitalizáló Ampullával +15.000 Ft, Kúra kezelés esetén 5+1 Ajándék Alkalom" 
      },
      { name: "EJAL 40 Biorevitalizáló Mélyhidratáló SkinBooster - Teljes Arc (Nem keresztkötött hialuronsav)", price: "80.000 Ft", perUse: "", discount: null, note: null },
    ],
  },
  {
    category: "SLOW AGING KEZELÉSEK",
    description: "A Slow Aging filozófiája az öregedés lassítására, nem pedig az azonnali és drasztikus beavatkozásokra épül. A cél a bőr természetes regenerációjának támogatása, a kollagéntermelés serkentése és az egészséges, fiatalos megjelenés megőrzése hosszú távon.",
    items: [
      { 
        name: "Genosys Geno Led Fényterápiás kezelés - Arc (Collagen, Mezoheal, Ejal, Exosome Fátyol Maszkkal, 20 perc)", 
        price: "20.000 Ft", 
        perUse: "", 
        discount: null, 
        note: "6 Alkalmas Bőrmegújító kezelés sorozat bérletben 6+1 Alkalom AJÁNDÉK" 
      },
      { name: "SQT® Bio Mikrotűs szivacstű - Akne-Heg kezelés", price: "40.000 Ft", perUse: "-tól", discount: null, note: null },
      { name: "SQT® Bio Mikrotűs szivacstű - Pigmentfolt Kezelés", price: "40.000 Ft", perUse: "-tól", discount: null, note: null },
      { name: "SQT® Bio Mikrotűs szivacstű - Hidratáló Kezelés", price: "45.000 Ft", perUse: "-tól", discount: null, note: null },
      { name: "SQT® Bio Mikrotűs szivacstű - Anti-Aging Kezelés", price: "58.000 Ft", perUse: "-tól", discount: null, note: null },
      { name: "SQT® Bio Mikrotűs szivacstű - Revitalizáló kezelés", price: "45.000 Ft", perUse: "-tól", discount: null, note: null },
      { name: "SQT® Bio Mikrotűs szivacstű - Mélytisztító kezelés", price: "45.000 Ft", perUse: "-tól", discount: null, note: null },
      { name: "SQT® Bio Mikrotűs szivacstű - Tápláló Kezelés", price: "48.000 Ft", perUse: "-tól", discount: null, note: null },
      { name: "GENOSYS SnowCell Koreai Luxus Bőrfiatalító, bőrtónus-javító, pigmentfolt halványító kezelés", price: "29.900 Ft", perUse: "-tól", discount: null, note: null },
      { name: "Mikrodermabrázió Gyémántfejes Bőrcsiszolás/Bőrmegújítás - Arc", price: "9.900 Ft", perUse: "-tól", discount: null, note: null },
      { name: "Tini Arctisztító kezelés Mikrodermabrázióval", price: "19.000 Ft", perUse: "-tól", discount: null, note: null },
    ],
  },
  {
    category: "IMAGE SKINCARE PROTOKOLOK",
    description: "IMAGE Skincare személyre szabott bőrminőség-javító kezelési programok célja a bőr ragyogásának visszanyerése és megújítása. A kezelések személyre szabottak.",
    items: [
      { name: "O2 SPA Vörös Szőnyeg Oxygén Lift Kezelés - Arc", price: "19.900 Ft", perUse: "-tól", discount: null, note: null },
      { 
        name: "I PEEL | ORMEDIC LIFT™ - Felület megújító Bio Peeling - Arc", 
        price: "29.900 Ft", 
        perUse: "-tól", 
        discount: null, 
        note: "Arc+Nyak+Dekoltázs: 35.000 Ft-tól, Kúrában 6+1 Alkalom Ajándék" 
      },
      { 
        name: "I PEEL | SIGNATURE FACELIFT® - C vitamin specialista - Arc (Érzékeny, Rosaceás Bőr kezelése)", 
        price: "29.900 Ft", 
        perUse: "-tól", 
        discount: null, 
        note: "Arc-Nyak-Dekoltázs: 35.000 Ft-tól, Kúrában 6+1 Alkalom Ajándék" 
      },
      { 
        name: "I PEEL | LIGHTENING LIFT® - Bőrvilágosító, Pigmentfolt Halványító Hámlasztás - Arc", 
        price: "29.900 Ft", 
        perUse: "-tól", 
        discount: null, 
        note: "Arc+Nyak+Dekoltázs: 35.000 Ft-tól, Kúrában 6+1 Alkalom Ajándék" 
      },
      { 
        name: "I PEEL | Wrinkle Lift® - Ránctalanító Hámlasztó kezelés - Arc", 
        price: "29.900 Ft", 
        perUse: "-tól", 
        discount: null, 
        note: "Arc+Nyak+Dekoltázs: 35.000 Ft-tól, Kúrában 6+1 Alkalom Ajándék" 
      },
      { 
        name: "I PEEL | ACNE LIFT® - Aknés bőr kezelése - Arc", 
        price: "29.900 Ft", 
        perUse: "-tól", 
        discount: null, 
        note: "Arc+Nyak+Dekoltázs: 35.000 Ft-tól, Kúrában 6+1 Alkalom Ajándék" 
      },
      { 
        name: "I PEEL | Beta Lift - Erőteljes Aknékezelő hámlasztás - Arc", 
        price: "29.900 Ft", 
        perUse: "-tól", 
        discount: null, 
        note: "Arc+Nyak+Dekoltázs: 35.000 Ft-tól, Kúrában 6+1 Alkalom Ajándék" 
      },
      { 
        name: "I PEEL | PERFECTION LIFT™ - Ránctalanító, Erőteljes Orvosi Szintű Hámlasztó-Bőrmegújító kezelés - Arc", 
        price: "29.900 Ft", 
        perUse: "-tól", 
        discount: null, 
        note: null 
      },
      { name: "BE CLEAR Akné tisztító kezelés - Arc (Pattanások, Aknék, Zsíros Bőr Mélytisztító Kezelés)", price: "25.000 Ft", perUse: "-tól", discount: null, note: null },
      { name: "IMAGE ILUMA - pigmentfolt halványító arckezelés (Pigmentáció, kipirosodásra való hajlam, fénykárosodott bőr)", price: "29.900 Ft", perUse: "-tól", discount: null, note: null },
      { name: "THE MAX őssejtes arckezelés (Idősödő, megereszkedett, fénykárosodott bőr, rosacea, akne)", price: "25.000 Ft", perUse: "-tól", discount: null, note: null },
      { name: "THE MAX Contour Arcfeszesítő kezelés", price: "35.000 Ft", perUse: "-tól", discount: null, note: null },
      { name: "IMAGE Ünnepi Signature „Glitz and Glow Ragyogó tükör sima bőr kezelés", price: "29.900 Ft", perUse: "-tól", discount: null, note: null },
      { name: "IMAGE SKINCARE Probiotikus tisztító arckezelés", price: "29.900 Ft", perUse: "-tól", discount: null, note: null },
      { name: "MIKROBIOME+ BŐRBARRIER ERŐSÍTŐ KEZELÉS", price: "19.900 Ft", perUse: "-tól", discount: null, note: null },
      { name: "BASIC NYÁRI GLOW RADIANCE REFRESH HIDRATÁLÓ KEZELÉS", price: "19.900 Ft", perUse: "-tól", discount: null, note: null },
      { name: "I MASK Lapmaszk Intenzív, Gyors Hidratáló kezelés", price: "16.000 Ft", perUse: "-tól", discount: null, note: null },
    ],
  },
  {
    category: "FÉRFI KOZMETIKA",
    description: null,
    items: [
      { name: "Oxygeneo™ By Pollogen Komplex Bőrmegújító, Ránctalanító Kezelés - Arc", price: "49.900 Ft", perUse: "-tól", discount: null, note: null },
      { name: "Férfi tisztító arckezelés", price: "29.900 Ft", perUse: "-tól", discount: null, note: null },
      { name: "Energetizáló, bőrmegújító férfi menedzser-kezelés masszázzsal", price: "35.000 Ft", perUse: "-tól", discount: null, note: null },
      { name: "Férfi Hollywood Carbon Lézeres MEDICAL Peeling", price: "35.000 Ft", perUse: "-tól", discount: null, note: null },
    ],
  },
  {
    category: "ESZTÉTIKAI SMINKTETOVÁLÁS",
    description: "Tartós Szépség, Természetes Hatás",
    items: [
      { 
        name: "PÚDERES Szemöldök Esztétikai sminktetoválás NPM gépi technikával", 
        price: "79.000 Ft", 
        perUse: "", 
        discount: null, 
        note: "A tetoválás elkészítése 2 alkalomból áll: maga a tetoválás és a korrekció, ami a tetoválástól számítva 6-12 héten belül esedékes. Az árak tartalmazzák a korrekciót is." 
      },
      { name: "Rúzsozott Hatású Teljes Ajaksatír", price: "89.000 Ft", perUse: "", discount: null, note: null },
      { name: "Nude Lágy Satiros Hatású Ajaktetoválás", price: "79.000 Ft", perUse: "", discount: null, note: null },
      { name: "Eye Liner Szemhéj Tusvonal Tetoválás", price: "69.000 Ft", perUse: "", discount: null, note: null },
      { name: "Eye Contour Szempilla Sűrítő Tetoválás", price: "49.000 Ft", perUse: "", discount: null, note: null },
      { 
        name: "SZÍNFRISSÍTÉS (az általam készített sminktetoválások esetében)", 
        price: "", 
        perUse: "", 
        discount: null, 
        note: "A sminktetoválás kötelező korrekciójának dátumától számítva 12 hónapig vehető igénybe kedvezményesen" 
      },
      { name: "Szemöldök Tetoválás (színfrissítés)", price: "55.000 Ft", perUse: "", discount: null, note: null },
      { name: "Ajaktetoválás (színfrissítés)", price: "55.000 Ft", perUse: "", discount: null, note: null },
      { name: "Szemhéj Tetoválás (színfrissítés)", price: "35.000 Ft", perUse: "", discount: null, note: null },
      { name: "Sminktetoválás Lézeres Eltávolítás", price: "20.000 Ft", perUse: "/alkalom", discount: null, note: null },
    ],
  },
  {
    category: "WAX SZŐRTELENÍTÉS GYANTÁZÁS",
    description: "Sima, Ápolt Bőr, Irritáció Nélkül",
    items: [
      { name: "Láb Térdig", price: "3.800 Ft", perUse: "-tól", discount: null, note: null },
      { name: "Teljes Láb", price: "7.800 Ft", perUse: "-tól", discount: null, note: null },
      { name: "Kar Végig", price: "3.800 Ft", perUse: "-tól", discount: null, note: null },
      { name: "Bajusz", price: "2.000 Ft", perUse: "", discount: null, note: null },
      { name: "Bikini Vonal", price: "4.000 Ft", perUse: "", discount: null, note: null },
      { name: "Teljes Intim", price: "8.000 Ft", perUse: "-tól", discount: null, note: null },
    ],
  },
];

// Szolgáltatási kategória komponens desktop nézethez
const ServiceCategory = ({ category, description, items }) => {
  return (
    <div className={styles.categoryContainer}>
      <h3 className={styles.categoryTitle}>{category}</h3>
      {description && <p className={styles.categoryDescription}>{description}</p>}
      <div className={styles.tableContainer}>
        <table className={styles.priceTable}>
          <thead>
            <tr>
              <th className={styles.nameHeader} style={{textAlign: 'left'}}>Szolgáltatás</th>
              <th className={styles.priceHeader} style={{textAlign: 'right'}}>Ár</th>
            </tr>
          </thead>
          <tbody>
            {items.map((service, index) => (
              <tr key={index}>
                <td className={styles.serviceName}>
                  {service.name}
                  {service.note && <div className={styles.serviceNote}>{service.note}</div>}
                </td>
                <td className={styles.servicePrice}>
                  {service.discount ? (
                    <>
                      <span className={styles.originalPrice}>{service.price}</span>
                      <span className={styles.discountPrice}>{service.discount}{service.perUse}</span>
                    </>
                  ) : (
                    <>{service.price}{service.perUse}</>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Szolgáltatási lista komponens mobil nézethez
const ServiceList = ({ category, description, items }) => (
  <div className={styles.mobileCategory}>
    <h3 className={styles.mobileCategoryTitle}>{category}</h3>
    {description && <p className={styles.mobileCategoryDescription}>{description}</p>}
    <div className={styles.mobileList}>
      {items.map((service, index) => (
        <div key={index} className={styles.mobileListItem}>
          <p className={styles.mobileServiceName}>
            {service.name}
            {service.note && <span className={styles.mobileServiceNote}>{service.note}</span>}
          </p>
          <p className={styles.mobileServicePrice}>
            {service.discount ? (
              <>
                <span className={styles.mobileOriginalPrice}>{service.price}</span>
                <span className={styles.mobileDiscountPrice}>{service.discount}{service.perUse}</span>
              </>
            ) : (
              <>{service.price}{service.perUse}</>
            )}
          </p>
        </div>
      ))}
    </div>
  </div>
);

// Fő komponens
const PriceTable = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Képernyőméret figyelése
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Kezdeti állapot beállítása
    handleResize();
    
    // Eseményfigyelő hozzáadása
    window.addEventListener('resize', handleResize);
    
    // Eseményfigyelő eltávolítása, amikor a komponens leszerelődik
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.helper}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Árak</h1>
          <p className={styles.disclaimer}>A weblapon található árak irányadóak, egyéni kezelési terv felállításánál eltérhetnek.</p>
          <Ob />
        </div>

        <div className={styles.contentContainer}>
          {isMobile ? (
            // Mobil nézet
            allServices.map((serviceCategory, index) => (
              <ServiceList
                key={index}
                category={serviceCategory.category}
                description={serviceCategory.description}
                items={serviceCategory.items}
              />
            ))
          ) : (
            // Desktop nézet
            allServices.map((serviceCategory, index) => (
              <ServiceCategory
                key={index}
                category={serviceCategory.category}
                description={serviceCategory.description}
                items={serviceCategory.items}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default PriceTable;