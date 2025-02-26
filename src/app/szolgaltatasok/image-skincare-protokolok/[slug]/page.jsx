import O2LiftSpaKezeles from "@/components/serviceList/image-skincare/O2LiftSpaKezeles";
import IPeelOrmedic from "@/components/serviceList/image-skincare/IPeelOrmedic";
import IPeelSignatureFacelift from "@/components/serviceList/image-skincare/IPeelSignatureFacelift";
import IPeelLighteningLift from "@/components/serviceList/image-skincare/IPeelLighteningLift";
import IPeelLighteningLiftForte from "@/components/serviceList/image-skincare/IPeelLighteningLiftForte";
import IPeelWrinkleLift from "@/components/serviceList/image-skincare/IPeelWrinkleLift";
import IPeelWrinkleLiftForte from "@/components/serviceList/image-skincare/IPeelWrinkleLiftForte";
import IPeelAcneLift from "@/components/serviceList/image-skincare/IPeelAcneLift";
import IPeelBetaLift from "@/components/serviceList/image-skincare/IPeelBetaLift";
import IPeelPerfectionLiftForte from "@/components/serviceList/image-skincare/IPeelPerfectionLiftForte";
import IPeelPerfectionLift from "@/components/serviceList/image-skincare/IPeelPerfectionLift";


export default async function Page({ params }) {
  const { slug } = params;

  if (slug === "o2lift-spa-voros-szonyeg-kezeles") {
    return <O2LiftSpaKezeles />;
  }
  if (slug === "i-peel-signature-facelift") {
    return <IPeelSignatureFacelift />;
  }

  if (slug === "i-peel-ormedic-lift") {
    return <IPeelOrmedic />;
  }

  if (slug === "i-peel-lightening-lift-borvilagosito-hamlasztas") {
    return <IPeelLighteningLift />;
  }

  if (
    slug === "i-peel-lightening-lift-forte-intenzive-borvilagosito-hamlasztas"
  ) {
    return <IPeelLighteningLiftForte />;
  }

  if (slug === "i-peel-wrinkle-lift-hamlaszto-kezeles") {
    return <IPeelWrinkleLift />;
  }

  if (slug === "i-peel-wrinkle-lift-forte-intenziv-hamlaszto-kezeles") {
    return <IPeelWrinkleLiftForte />;
  }

  if (slug === "i-peel-acne-lift-aknes-bor-kezelese") {
    return <IPeelAcneLift />;
  }
  
  if (slug === "i-peel-beta-lift-aknekezelo-hamlasztas") {
    return <IPeelBetaLift />;
  }

  if (slug === "i-peel-perfection-lift-bormegujito-kezeles") {
    return <IPeelPerfectionLift />;
  }

  if (slug === "i-peel-perfection-lift-forte-intenziv-bormegujito-kezeles") {
    return <IPeelPerfectionLiftForte />;
  }



  return <h1>Nincs ilyen oldal.</h1>;
}
