import "../globals.css";
import LoadingData from "../loading";
import { varela } from "../utils/fonts";
import dynamic from "next/dynamic";
import { cookies } from "next/headers";
import { protectRoutesSignUp } from "../functions/protectRoutes";

async function getData() {
  const sessionCookie = cookies().get("authorization");
  const a = await protectRoutesSignUp(sessionCookie);
  console.log(a);
  return a;
}

export default async function register() {
  const ClientPage = dynamic(() => import("../components/SignupClient"), {
    ssr: false,
    loading: LoadingData,
  });

  const dataUser = await getData();

  return (
    <main className={`${varela.className}`}>
      <ClientPage />
    </main>
  );
}
