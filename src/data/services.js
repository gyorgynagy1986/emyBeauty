// services.js
// Foglalási típusok
export const bookingTypes = [
    "Időpontfoglalás szolgáltatásra",
    "Konzultáció"
  ];
  
  export const services = [
    // Arckezelések
    "O2LIFT SPA VÖRÖS SZŐNYEG KEZELÉS",
    "I PEEL | ORMEDIC LIFT™ - FELÜLET MEGÚJÍTÓ BIO PEELING",
    "I PEEL | SIGNATURE FACELIFT® - C VITAMIN SPECIALISTA",
    "I PEEL | LIGHTENING LIFT® - BŐRVILÁGOSÍTÓ HÁMLASZTÁS",
    "I PEEL | LIGHTENING LIFT® FORTE - INTENZÍV BŐRVILÁGOSÍTÓ HÁMLASZTÁS",
    "I PEEL | WRINKLE LIFT® - HÁMLASZTÓ KEZELÉS",
    "I PEEL | WRINKLE LIFT® FORTE - INTENZÍV HÁMLASZTÓ KEZELÉS",
    "I PEEL | ACNE LIFT® - AKNÉS BŐR KEZELÉSE",
    "I PEEL | BETA LIFT - AKNÉKEZELŐ HÁMLASZTÁS",
    "I PEEL | PERFECTION LIFT™ - BŐRMEGÚJÍTÓ KEZELÉS",
    "I PEEL | PERFECTION LIFT® FORTE - INTENZÍV BŐRMEGÚJÍTÓ KEZELÉS",
    "BE CLEAR TISZTÍTÓ ARCKEZELÉS",
    "ILLUMINATING ARCKEZELÉS",
    "THE MAX ŐSSEJTES ARCKEZELÉS",
    "THE MAX CONTOUR KEZELÉS",
    "IMAGE ILUMA ARCKEZELÉS",
    "IMAGE ÜNNEPI SIGNATURE GLITZ AND GLOW KEZELÉS",
    "IMAGE ARCFESZESÍTŐ-ÁTALAKÍTÓ KEZELÉS",
    "IMAGE SKINCARE PROBIOTIKUS TISZTÍTÓ ARCKEZELÉS",
    "MIKROBIOME+ BŐRBARRIER ERŐSÍTŐ KEZELÉS",
    "BASIC NYÁRI GLOW RADIANCE REFRESH KEZELES",
    "I MASK LAPMASZK KEZELÉS",
    
    // Speciális kezelések
    "TŰ NÉLKÜLI MEZOTERÁPIA - ELEKTROPORÁCIÓ",
    "GENO-LED ALACSONY INTENZITÁSÚ LED FÉNY",
    "SQT® BIO MIKROTŰS SZIVACSTŰ KEZELÉS",
    "GENOSYS SNOWCELL",
    "MIKRODERMABRÁZIÓ - GYÉMÁNTFEJES TECHNOLOGIA",
    "1 NEED PRO MIKROTŰS KEZELÉS",
    "Secret™ RF",
    "Secret™ Booster",
    "Oxy Geneo™ by Pollogen",
    "EXOSOME SEJTTERÁPIA",
    "1 NEED PRO",
    "Hollywood Carbon Lézeres MEDICAL Peeling",
    "DEEP SHOOT SKIN BOOSTER",
    
    // Egyéb szolgáltatások
    "Arckezelés",
    "Masszázs",
    "Manikűr",
    "Pedikűr",
    "Hajápolás"
  ];
  
  // Az összes szolgáltatás részletes adatokkal
  export const serviceItems = [
    {
      title: "O2LIFT SPA VÖRÖS SZŐNYEG KEZELÉS",
      slug: "o2lift-spa-voros-szonyeg-kezeles",
      text: "Luxus, oxigénalapú arckezelés, amely mélyen tisztít, hidratál és élénkíti a bőrt. Azonnali ragyogást biztosít különleges alkalmakra, érzékeny bőrre is alkalmas.",
    },
    {
      title: "I PEEL | ORMEDIC LIFT™ - FELÜLET MEGÚJÍTÓ BIO PEELING",
      slug: "i-peel-ormedic-lift",
      text: "Gyengéd, mégis hatékony BIO hámlasztó kezelés, amely helyreállítja a bőr egyensúlyát. Érzékeny bőrre is alkalmas, természetes enzimekkel és aloe verával hidratál és nyugtat.",
    },
    {
      title: "I PEEL | SIGNATURE FACELIFT® - C VITAMIN SPECIALISTA",
      slug: "i-peel-signature-facelift",
      text: "Eredményorientált kezelés 30%-os C-vitaminnal, hidroxisavakkal és enzimekkel a sejtmegújulás gyorsítására. Ragyogóbbá teszi a bőrt, halványítja a foltokat és érzékeny, rosaceas bőrre is alkalmas.",
    },
    {
      title: "I PEEL | LIGHTENING LIFT® - BŐRVILÁGOSÍTÓ HÁMLASZTÁS",
      slug: "i-peel-lightening-lift-borvilagosito-hamlasztas",
      text: "Bőrhalványító és világosító hámlasztó kezelés tejsavval, kojiksavval, C-vitaminnal és növényi őssejtekkel. Gyengéden halványítja a pigmentfoltokat és egységesíti a bőrtónust.",
    },
    {
      title: "I PEEL | LIGHTENING LIFT® FORTE - INTENZÍV BŐRVILÁGOSÍTÓ HÁMLASZTÁS",
      slug: "i-peel-lightening-lift-forte-intenzive-borvilagosito-hamlasztas",
      text: "Intenzív bőrvilágosító kezelés magasabb koncentrációjú hatóanyagokkal a makacsabb pigmentációs problémákra. Mélyebb hámlasztást biztosít és hatékonyan kezeli az erősebb elszíneződéseket.",
    },
    {
      title: "I PEEL | WRINKLE LIFT® - HÁMLASZTÓ KEZELÉS",
      slug: "i-peel-wrinkle-lift-hamlaszto-kezeles",
      text: "Erőteljes anti-aging megoldás glikolsavval és retinollal a ráncok és finom vonalak ellen. Feszesíti és revitalizálja a bőrt, javítja a bőrtónust és serkenti a sejtmegújulást.",
    },
    {
      title: "I PEEL | WRINKLE LIFT® FORTE - INTENZÍV HÁMLASZTÓ KEZELÉS",
      slug: "i-peel-wrinkle-lift-forte-intenziv-hamlaszto-kezeles",
      text: "Extra erősségű peeling 45% glikolsavval és emelt retinol tartalommal mélyebb ráncokra. Intenzív sejt-regeneráció, kollagénstimuláció és bőrfeszesítés érett, tapasztaltabb bőrre.",
    },
    {
      title: "I PEEL | ACNE LIFT® - AKNÉS BŐR KEZELÉSE",
      slug: "i-peel-acne-lift-aknes-bor-kezelese",
      text: "Speciális hámlasztó kezelés aknéra hajlamos, problémás bőrre. Alfa- és béta-hidroxi savak kombinációja, amely csökkenti a pattanásokat, tisztítja a pórusokat és halványítja az akne utáni foltokat.",
    },
    {
      title: "I PEEL | BETA LIFT - AKNÉKEZELŐ HÁMLASZTÁS",
      slug: "i-peel-beta-lift-aknekezelo-hamlasztas",
      text: "Orvosi szintű, intenzív tisztító hámlasztás aknéra hajlamos, olajos bőrre. Szalicilsavval mélyen tisztítja a pórusokat, szabályozza a faggyútermelést és megelőzi az újabb pattanások kialakulását.",
    },
    {
      title: "I PEEL | PERFECTION LIFT™ - BŐRMEGÚJÍTÓ KEZELÉS",
      slug: "i-peel-perfection-lift-bormegujito-kezeles",
      text: "Orvosi szintű hámlasztó kezelés aknéra, hiperpigmentációra és ráncokra. Szalicilsav, glikolsav és retinol kombinációja, amely intenzíven fiatalítja a bőrt és halványítja a foltokat.",
    },
    {
      title: "I PEEL | PERFECTION LIFT® FORTE - INTENZÍV BŐRMEGÚJÍTÓ KEZELÉS",
      slug: "i-peel-perfection-lift-forte-intenziv-bormegujito-kezeles",
      text: "Erőteljes, orvosi szintű hámlasztó kezelés a komolyabb bőrproblémákra. Magas koncentrációjú savakkal és retinollal kezeli a mélyebb ráncokat, aknét és pigmentfoltokat tapasztalt felhasználóknak.",
    },
    {
      title: "BE CLEAR TISZTÍTÓ ARCKEZELÉS",
      slug: "be-clear-tisztito-arckezeles",
      text: "Antibakteriális összetevőket és nyugtató növényi hatóanyagokat kombinálva nyújt megoldást az aknés bőrproblémákra. Ideális a zsíros, pattanásos bőrre, irritáció nélkül.",
    },
    {
      title: "ILLUMINATING ARCKEZELÉS",
      slug: "illuminating-arckezeles",
      text: "Innovatív fehérítő és hámlasztó technológiákkal szabadítja meg a bőrt a sötét foltoktól. Azonnali eredmény, ragyogóbb bőrtónus a fakó, érzékeny, fáradt bőrre.",
    },
    {
      title: "THE MAX ŐSSEJTES ARCKEZELÉS",
      slug: "the-max-ossejtes-arckezeles",
      text: "Növényi őssejtekkel regenerálja a bőrt, serkenti a sejtosztódást, csökkenti a ráncokat. Tökéletes az idősödő, megereszkedett, fénykárosodott bőrre.",
    },
    {
      title: "THE MAX CONTOUR KEZELÉS",
      slug: "the-max-contour-kezeles",
      text: "Növényi őssejtek és peptidek kombinációja, amely visszaállítja az arc feszességét. Liftingelő és feltöltő hatást biztosít a megereszkedett, idősödő bőrnek.",
    },
    {
      title: "IMAGE ILUMA ARCKEZELÉS",
      slug: "image-iluma-arckezeles",
      text: "Intenzív fehérítő hatóanyagok és növényi őssejt technológia a pigmentációs problémákra. Egyenletesebbé teszi a bőrtónust és megelőzi a foltok kialakulását.",
    },
    {
      title: "IMAGE ÜNNEPI SIGNATURE GLITZ AND GLOW KEZELÉS",
      slug: "image-glitz-and-glow-kezeles",
      text: "Gyümölcsenzimek, C-vitamin és hialuronsav kombinációja, amely táplál és ragyogást biztosít a fakó, fényét veszített bőrnek.",
    },
    {
      title: "IMAGE ARCFESZESÍTŐ-ÁTALAKÍTÓ KEZELÉS",
      slug: "image-arcfeszesito-atalakito-kezeles",
      text: "Hatékony arcfeszesítő kezelés, amely már egy alkalom után is látható eredményt nyújt. Kisimítja a szarkalábakat, mélyebb ráncokat is csökkenti az idősödő bőrön.",
    },
    {
      title: "IMAGE SKINCARE PROBIOTIKUS TISZTÍTÓ ARCKEZELÉS",
      slug: "image-probiotikus-tisztito-arckezeles",
      text: "Probiotikumok és antioxidánsok kombinációja, amely tisztítja és megújítja a bőrt. Hatékony az eltömődött pórusokra, aknéra és a fáradt, megviselt bőrre.",
    },
    {
      title: "MIKROBIOME+ BŐRBARRIER ERŐSÍTŐ KEZELÉS",
      slug: "mikrobiome-borbarrier-erosito-kezeles",
      text: "Az IMAGE első mikrobiombarát kezelése, amely a bőr védőrétegét erősíti természetes összetevőkkel. Védelmet nyújt a stressz, szárazság ellen.",
    },
    {
      title: "BASIC NYÁRI GLOW RADIANCE REFRESH KEZELES",
      slug: "basic-nyari-glow-radiance-refresh-kezeles",
      text: "Kényeztető, visszatöltő kezelés a napozási károk regenerálására. Az Image Skincare Vital C és Ormedic termékcsaládjainak jótékony hatásaival.",
    },
    {
      title: "I MASK LAPMASZK KEZELÉS",
      slug: "i-mask-lapmaszk-kezeles",
      text: "Gyors hidratáló kezelés 3D hidrogéles lapmaszkkal. Benntartja a nedvességet, segíti a hatóanyagok felszívódását, csökkenti a ráncokat a dehidratált bőrön.",
    },
    {
      title: "TŰ NÉLKÜLI MEZOTERÁPIA - ELEKTROPORÁCIÓ",
      slug: "tu-nelkuli-mezoterapia",
      text: "Nobel-díjas hatásmechanizmusra épülő, tű nélküli mezoterápiás kezelés. A hatóanyagok 90%-a mély szövetekbe hatol, maximálisan hidratálja a bőrt és látványosan csökkenti a ráncokat.",
    },
    {
      title: "GENO-LED ALACSONY INTENZITÁSÚ LED FÉNY",
      slug: "geno-led-alacsony-intenzitasu-led-feny",
      text: "Komplikált bőrproblémákat old meg LED fénnyel. A 287 speciális LED összetevő különböző hullámhosszúságú fényt sugározva regenerálja és nyugtatja a bőrt, mellékhatások nélkül.",
    },
    {
      title: "SQT® BIO MIKROTŰS SZIVACSTŰ KEZELÉS",
      slug: "sqt-bio-mikrotus-kezeles",
      text: "3 millió természetes szilícium mikrotűvel serkenti a bőr anyagcseréjét. Fájdalommentes megoldás, amely természetes módon rövidíti a bőr megújulási ciklusát és halványítja a pigmentfoltokat.",
    },
    {
      title: "GENOSYS SNOWCELL",
      slug: "genosys-snowcell",
      text: "Innovatív pigmentációkezelő és bőrfiatalító eljárás, amely gátolja a melanin termelődését. Nyáron is alkalmazható, halványítja a foltokat és stimulálja a kollagén termelődést.",
    },
    {
      title: "MIKRODERMABRÁZIÓ - GYÉMÁNTFEJES TECHNOLOGIA",
      slug: "mikrodermabrazio-gyemantfejes-technologia",
      text: "Fájdalommentes bőrhámlasztó kezelés, amely gyémántfejes technológiával megújítja a bőrt. Csökkenti a ráncokat, halványítja a pigmentfoltokat és segíti a hatóanyagok felszívódását.",
    },
    {
      title: "1 NEED PRO MIKROTŰS KEZELÉS",
      slug: "1-need-pro-mikrotus-kezeles",
      text: "Speciális bőrfiatalító eljárás, amely mikrotűkkel serkenti a kollagéntermelést. Cserélhető kezelőfejekkel személyre szabható, kezeli a ráncokat, pigmentfoltokat és a tág pórusokat.",
    },
    {
      title: "Secret™ RF",
      slug: "secret-rf",
      text: "A Secret™ RF egy modern, műtét nélküli bőrfiatalító eljárás, mely mikrotűs és frakcionált rádiófrekvenciás technológiával serkenti a kollagéntermelést, így fiatalosabb, feszesebb bőrt eredményez.",
    },
    {
      title: "Secret™ Booster",
      slug: "secret-booster",
      text: "A Secret Booster a Secret™ RF mikrotűs frakcionált rádiófrekvenciás kezelés és a feltöltő DEEP SHOOT AA kezelés egyedülálló kombinációja az arcbőr teljes megújításáért."
    },
    {
      title: "Oxy Geneo™ by Pollogen",
      slug: "pollogen-oxygeneo",
      text: "Komplex bőrmegújító program, mely rádiófrekvenciás bőrfiatalítással, oxigénes kezeléssel és ultrahangos hatóanyag-bejuttatással biztosít friss, fiatalos megjelenést minden bőrtípus számára.",
    },
    {
      title: "EXOSOME SEJTTERÁPIA",
      slug: "exosome-sejtterapia",
      text: "Forradalmi sejtterápia, mely exoszómákkal serkenti a bőr és a haj regenerációját, fiatalos, ragyogó megjelenést kölcsönözve minden kezelési területen.",
    },
    {
      title: "1 NEED PRO",
      slug: "1-need-pro",
      text: "Az 1 NEED PRO mikrotűs kezelés egy speciális bőrfiatalító eljárás, mely mikrotűs mezoterápiával serkenti a kollagéntermelést, javítja a bőr textúráját és csökkenti a ráncokat, hegeket, valamint a pigmentfoltokat.",
    },
    {
      title: "Hollywood Carbon Lézeres MEDICAL Peeling",
      slug: "hollywood-carbon-peeling",
      text: "Hosszú távon is látványos eredményekkel járó bőrrejuvenációs kezelés, mely a hőenergia felhasználásával halványítja a hegeket, egységesíti a pigmentállományt és fokozza a kollagéntermelést.",
    },
    {
      title: "DEEP SHOOT SKIN BOOSTER",
      slug: "deep-shoot-skin-booster",
      text: "Legújabb koreai innováció: előretöltött steril fecskendők és Turtlepin III mikrotűs fej kombinációja, mely akár 30x hatékonyabb felszívódást biztosít, maximalizálva a hatóanyag-bejuttatást és serkentve a bőr megújulását.",
    },
    {
      title: "Arckezelés",
      slug: "arckezeles",
      text: "Általános arckezelés a bőr állapotának javítására.",
    },
    {
      title: "Masszázs",
      slug: "masszazs",
      text: "Relaxáló vagy gyógyító masszázs.",
    },
    {
      title: "Manikűr",
      slug: "manikur",
      text: "Kézápolás és köröm szépítés.",
    },
    {
      title: "Pedikűr",
      slug: "pedikur",
      text: "Lábápolás és köröm szépítés.",
    },
    {
      title: "Hajápolás",
      slug: "hajapolas",
      text: "Hajápolási és hajszépítési szolgáltatások.",
    }
  ];