import SqtBioMikrotusKezeles from "@/components/serviceList/SqtBioMikrotusKezeles";

export default async function Page({ params }) {
  const { slug } = params;

  if (slug === "sqt-bio-mikrotus-kezeles") {
    return <SqtBioMikrotusKezeles />;
  }

  // Egyébként dobhatsz hibaoldalt,
  // vagy visszaadhatsz valami alapértelmezett UI-t:
  return <h1>Nincs ilyen oldal.</h1>;
}
