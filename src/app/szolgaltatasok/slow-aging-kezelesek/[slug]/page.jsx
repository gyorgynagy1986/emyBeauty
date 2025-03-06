import TuNelkuli from "@/components/serviceList/innovativ/TuNelkuliMezo";
import GenoLed from "@/components/serviceList/innovativ/GenoLed";
import SqtBioMikrotusKezeles from "@/components/serviceList/innovativ/SqtBioMikrotusKezeles";
import GenosysSnowcell from "@/components/serviceList/innovativ/GenosysSnowcell";
import MikrodermabrazioGyemantfejes from "@/components/serviceList/innovativ/MikrodermabrazioGyemantfejes";
import OneNeedProMikrotus from "@/components/serviceList/innovativ/OneNeedProMikrotus";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { slug } = await params;
  
  // Készítsünk egy térképet a tényleges címekhez
  const titleMap = {
    "tu-nelkuli-mezoterapia": "TŰ NÉLKÜLI MEZOTERÁPIA - ELEKTROPORÁCIÓ",
    "geno-led-alacsony-intenzitasu-led-feny": "GENO-LED ALACSONY INTENZITÁSÚ LED FÉNY",
    "sqt-bio-mikrotus-kezeles": "SQT® BIO MIKROTŰS SZIVACSTŰ KEZELÉS",
    "genosys-snowcell": "GENOSYS SNOWCELL",
    "mikrodermabrazio-gyemantfejes-technologia": "MIKRODERMABRÁZIÓ - GYÉMÁNTFEJES TECHNOLOGIA",
    "1-need-pro-mikrotus-kezeles": "1 NEED PRO MIKROTŰS KEZELÉS"
  };

  return {
    title: titleMap[slug] || slug,
  };
}

export default async function Page({ params,}) {
  const { slug } = params;

  if (slug === "tu-nelkuli-mezoterapia") {
    return <TuNelkuli />;
  }

  if (slug === "geno-led-alacsony-intenzitasu-led-feny") {
    return <GenoLed />;
  }
 
  if (slug === "sqt-bio-mikrotus-kezeles") {
    return <SqtBioMikrotusKezeles />;
  }

  if (slug === "genosys-snowcell") {
    return <GenosysSnowcell />;
  }

  if (slug === "mikrodermabrazio-gyemantfejes-technologia") {
    return <MikrodermabrazioGyemantfejes />;
  }

  if (slug === "1-need-pro-mikrotus-kezeles") {
    return <OneNeedProMikrotus />;
  }
  
  return <h1>Nincs ilyen oldal.</h1>;
}