import SecretRf from "@/components/serviceList/prekozmatikai-kezelesek/SecretRf";
import SecretBooster from "@/components/serviceList/prekozmatikai-kezelesek/SecretBooster";
import PollogenOxyGeneo from "@/components/serviceList/prekozmatikai-kezelesek/PollogenOxyGeneo";
import ExosomeSejtterapia from "@/components/serviceList/prekozmatikai-kezelesek/ExosomeSejtterapia";
import OneNeedPro from "@/components/serviceList/prekozmatikai-kezelesek/OneNeedPro";
import HollywoodCarbonPeeling from "@/components/serviceList/prekozmatikai-kezelesek/HollywoodCarbonPeeling";
import DeepShootSkinBooster from "@/components/serviceList/prekozmatikai-kezelesek/DeepShootSkinBooster";

export default async function page({ params }) {
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

  // Egyébként dobhatsz hibaoldalt,
  // vagy visszaadhatsz valami alapértelmezett UI-t:
  return <h1>Nincs ilyen oldal.</h1>;
}
