export default function HomeClient({ dataCompany }: { dataCompany: any }) {
  console.log(dataCompany);
  return <div>{dataCompany.company}</div>;
}
