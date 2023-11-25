import SendMail from "../components/SendMail";
import { varela } from "../utils/fonts";
import { cookies } from "next/headers";
import { protectVerifyAccount } from "../hooks/protectRoutes";
import { DataUserAccount } from "../types";

async function getData() {
  const sessionCookie = cookies().get("authorization");
  const a = await protectVerifyAccount(sessionCookie);
  console.log(a);
  return a;
}

export default async function verifyAccount() {
  const dataUser: DataUserAccount = await getData();
  return (
    <main
      className={`flex h-screen w-full items-center justify-center ${varela.className}`}
    >
      <SendMail emailAccount={dataUser.email} />
    </main>
  );
}
