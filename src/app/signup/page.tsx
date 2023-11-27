import "../globals.css";
import LoadingData from "../loading";
import { varela } from "../utils/fonts";
import dynamic from "next/dynamic";
import { cookies } from "next/headers";
import { protectVerifyAccount } from "../functions/protectRoutes";
import { DataUserAccount } from "../types";

// async function getData() {
//   const sessionCookie = cookies().get("authorization");
//   const a = await protectVerifyAccount(sessionCookie);
//   console.log(a);
//   return a;
// }

export default async function register() {
  const ClientPage = dynamic(() => import("../components/SignupClient"), {
    ssr: false,
    loading: LoadingData,
  });

  // const dataUser: DataUserAccount = await getData();

  return (
    <main
      className={`min-w-screen flex min-h-screen flex-row items-center justify-center bg-slate-200 ${varela.className}`}
    >
      <ClientPage />
    </main>
  );
}
