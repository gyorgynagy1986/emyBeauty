export default async function Page({ params }) {
  const { id } = params;

  return <h1>{id}</h1>;
}
