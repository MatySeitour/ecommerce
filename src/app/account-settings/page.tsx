import "../globals.css";
import LoadingData from "../loading";
import { varela } from "../utils/fonts";
import dynamic from "next/dynamic";
import { cookies } from "next/headers";
import { protectRoutesAccountSettings } from "../functions/protectRoutes";
import FormAccountSettings from "../components/FormAccountSettings";

async function getData() {
  const sessionCookie = cookies().get("authorization");
  const a = await protectRoutesAccountSettings(sessionCookie);
  console.log(a);
  return a;
}

export default async function accountSettings() {
  const dataUser: any = await getData();
  console.log(dataUser);

  return (
    <main
      className={`min-w-screen flex min-h-screen flex-row items-center justify-center bg-slate-200 ${varela.className}`}
    >
      <article className="flex h-screen w-full items-center justify-center bg-slate-300/20 py-4">
        <FormAccountSettings logoImage={dataUser.logo} />
      </article>
    </main>
  );
}
