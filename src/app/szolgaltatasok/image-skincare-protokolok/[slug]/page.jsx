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

{/*  GROUP2 */}
import BeClearTisztito from "@/components/serviceList/image-skincare/group2/BeClearTisztito";
import IlluminatingArckezeles from "@/components/serviceList/image-skincare/group2/IlluminatingArckezeles";
import TheMaxOssejtes from "@/components/serviceList/image-skincare/group2/TheMaxOssejtes";
import TheMaxContour from "@/components/serviceList/image-skincare/group2/TheMaxContour";
import ImageIluma from "@/components/serviceList/image-skincare/group2/ImageIluma";
import ImageGlitzAndGlow from "@/components/serviceList/image-skincare/group2/ImageGlitzAndGlow";
import ImageArcfeszesito from "@/components/serviceList/image-skincare/group2/ImageArcfeszesito";
import ImageProbiotikus from "@/components/serviceList/image-skincare/group2/ImageProbiotikus";
import MikrobiomeBorbarrier from "@/components/serviceList/image-skincare/group2/MikrobiomeBorbarrier";
import BasicNyariGlow from "@/components/serviceList/image-skincare/group2/BasicNyariGlow";
import IMaskLapmaszk from "@/components/serviceList/image-skincare/group2/IMaskLapmaszk";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { slug } = await params;
  
  // Készítsünk egy térképet a tényleges címekhez
  const titleMap = {
    "o2lift-spa-voros-szonyeg-kezeles": "O2LIFT SPA VÖRÖS SZŐNYEG KEZELÉS",
    "i-peel-ormedic-lift": "I PEEL | ORMEDIC LIFT™ - FELÜLET MEGÚJÍTÓ BIO PEELING",
    "i-peel-signature-facelift": "I PEEL | SIGNATURE FACELIFT® - C VITAMIN SPECIALISTA",
    "i-peel-lightening-lift-borvilagosito-hamlasztas": "I PEEL | LIGHTENING LIFT® - BŐRVILÁGOSÍTÓ HÁMLASZTÁS",
    "i-peel-lightening-lift-forte-intenziv-borvilagosito-hamlasztas": "I PEEL | LIGHTENING LIFT® FORTE - INTENZÍV BŐRVILÁGOSÍTÓ HÁMLASZTÁS",
    "i-peel-wrinkle-lift-hamlaszto-kezeles": "I PEEL | WRINKLE LIFT® - HÁMLASZTÓ KEZELÉS",
    "i-peel-wrinkle-lift-forte-intenziv-hamlaszto-kezeles": "I PEEL | WRINKLE LIFT® FORTE - INTENZÍV HÁMLASZTÓ KEZELÉS",
    "i-peel-acne-lift-aknes-bor-kezelese": "I PEEL | ACNE LIFT® - AKNÉS BŐR KEZELÉSE",
    "i-peel-beta-lift-aknekezelo-hamlasztas": "I PEEL | BETA LIFT - AKNÉKEZELŐ HÁMLASZTÁS",
    "i-peel-perfection-lift-bormegujito-kezeles": "I PEEL | PERFECTION LIFT™ - BŐRMEGÚJÍTÓ KEZELÉS",
    "i-peel-perfection-lift-forte-intenziv-bormegujito-kezeles": "I PEEL | PERFECTION LIFT® FORTE - INTENZÍV BŐRMEGÚJÍTÓ KEZELÉS",
    "be-clear-tisztito-arckezeles": "BE CLEAR TISZTÍTÓ ARCKEZELÉS",
    "illuminating-arckezeles": "ILLUMINATING ARCKEZELÉS",
    "the-max-ossejtes-arckezeles": "THE MAX ŐSSEJTES ARCKEZELÉS",
    "the-max-contour-kezeles": "THE MAX CONTOUR KEZELÉS",
    "image-iluma-arckezeles": "IMAGE ILUMA ARCKEZELÉS",
    "image-glitz-and-glow-kezeles": "IMAGE ÜNNEPI SIGNATURE GLITZ AND GLOW KEZELÉS",
    "image-arcfeszesito-atalakito-kezeles": "IMAGE ARCFESZESÍTŐ-ÁTALAKÍTÓ KEZELÉS",
    "image-probiotikus-tisztito-arckezeles": "IMAGE SKINCARE PROBIOTIKUS TISZTÍTÓ ARCKEZELÉS",
    "mikrobiome-borbarrier-erosito-kezeles": "MIKROBIOME+ BŐRBARRIER ERŐSÍTŐ KEZELÉS",
    "basic-nyari-glow-radiance-refresh-kezeles": "BASIC NYÁRI GLOW RADIANCE REFRESH KEZELES",
    "i-mask-lapmaszk-kezeles": "I MASK LAPMASZK KEZELÉS"
  };

  return {
    title: titleMap[slug] || slug,
  };
}

export default async function Page({ params, searchParams }) {
  const { slug } = params;

  // GROUP1 - Az eredeti kezelések
  if (slug === "o2lift-spa-voros-szonyeg-kezeles") {
    return <O2LiftSpaKezeles />;
  }
  
  // A következő esetekben frissítenünk kell a régi slug-okat az új, egyeztetett slug-okra
  if (slug === "i-peel-signature-facelift") {
    return <IPeelSignatureFacelift />;
  }

  if (slug === "i-peel-ormedic-lift" ) {
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

  // GROUP2 - Az új kezelések
  if (slug === "be-clear-tisztito-arckezeles") {
    return <BeClearTisztito />;
  }
  
  if (slug === "illuminating-arckezeles") {
    return <IlluminatingArckezeles />;
  }
  
  if (slug === "the-max-ossejtes-arckezeles") {
    return <TheMaxOssejtes />;
  }
  
  if (slug === "the-max-contour-kezeles") {
    return <TheMaxContour />;
  }
  
  if (slug === "image-iluma-arckezeles") {
    return <ImageIluma />;
  }
  
  if (slug === "image-glitz-and-glow-kezeles") {
    return <ImageGlitzAndGlow />;
  }
  
  if (slug === "image-arcfeszesito-atalakito-kezeles") {
    return <ImageArcfeszesito />;
  }
  
  if (slug === "image-probiotikus-tisztito-arckezeles") {
    return <ImageProbiotikus />;
  }
  
  if (slug === "mikrobiome-borbarrier-erosito-kezeles") {
    return <MikrobiomeBorbarrier />;
  }
  
  if (slug === "basic-nyari-glow-radiance-refresh-kezeles") {
    return <BasicNyariGlow />;
  }
  
  if (slug === "i-mask-lapmaszk-kezeles") {
    return <IMaskLapmaszk />;
  }

  return <h1>Nincs ilyen oldal.</h1>;
}