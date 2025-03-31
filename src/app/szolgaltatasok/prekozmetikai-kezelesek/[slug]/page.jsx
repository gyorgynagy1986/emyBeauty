import SecretRf from "@/components/serviceList/prekozmatikai-kezelesek/SecretRf";
import SecretBooster from "@/components/serviceList/prekozmatikai-kezelesek/SecretBooster";
import PollogenOxyGeneo from "@/components/serviceList/prekozmatikai-kezelesek/PollogenOxyGeneo";
import ExosomeSejtterapia from "@/components/serviceList/prekozmatikai-kezelesek/ExosomeSejtterapia";
import OneNeedPro from "@/components/serviceList/prekozmatikai-kezelesek/OneNeedPro";
import HollywoodCarbonPeeling from "@/components/serviceList/prekozmatikai-kezelesek/HollywoodCarbonPeeling";
import DeepShootSkinBooster from "@/components/serviceList/prekozmatikai-kezelesek/DeepShootSkinBooster";
import PlasmaG from "@/components/serviceList/prekozmatikai-kezelesek/PlazmaG";
import Ejal from "@/components/serviceList/prekozmatikai-kezelesek/Ejal40Kezeles";

import { alt } from "@/data/alt";


export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { slug } = await params;

  
  // Készítsünk egy térképet a tényleges címekhez
  const titleMap = {
    "secret-rf": "Secret™ RF" + ' - ' + alt.shortName,
    "secret-booster": "Secret™ Booster" + ' - ' + alt.shortName,
    "pollogen-oxygeneo": "Oxy Geneo™ by Pollogen" + ' - ' + alt.shortName,
    "exosome-sejtterapia": "EXOSOME SEJTTERÁPIA" + ' - ' + alt.shortName,
    "1-need-pro": "1 NEED PRO" + ' - ' + alt.shortName,
    "hollywood-carbon-peeling": "Hollywood Carbon Lézeres MEDICAL Peeling" + ' - ' + alt.shortName,
    "deep-shoot-skin-booster": "DEEP SHOOT SKIN BOOSTER" + ' - ' + alt.shortName,
    "plazma-g": "Plazma G –RÁDIÓFREKVENCIÁS ARCKEZELÉS" + ' - ' + alt.shortName,
    "ejal-40-kezeles": "EJAL 40 kezelés" + ' - ' + alt.shortName,
};

  return {
    title: titleMap[slug] || slug,
  };
}

export default async function Page({ params }) {
  const { slug } = params;

  if (slug === "secret-rf") {
    return <SecretRf />;
  }

  if (slug === "secret-booster") {
    return <SecretBooster />;
  }

  if (slug === "pollogen-oxygeneo") {
    return <PollogenOxyGeneo />;
  }

  if (slug === "exosome-sejtterapia") {
    return <ExosomeSejtterapia />;
  }

  if (slug === "1-need-pro") {
    return <OneNeedPro />;
  }

  if (slug === "hollywood-carbon-peeling") {
    return <HollywoodCarbonPeeling />;
  }

  if (slug === "deep-shoot-skin-booster") {
    return <DeepShootSkinBooster />;
  }

  if (slug === "plazma-g-collage-frakcionalt-radiofrekvencias-kezeles") {
    return <PlasmaG />;
  }

  
  if (slug === "ejal-40-kezeles") {
    return <Ejal />;
  }
  
  

  // Egyébként dobhatsz hibaoldalt,
  // vagy visszaadhatsz valami alapértelmezett UI-t:
  return <h1>Nincs ilyen oldal.</h1>;
}