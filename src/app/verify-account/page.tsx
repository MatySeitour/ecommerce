import { redirect } from "next/navigation";
import SendMail from "../components/SendMail";
import { getSession } from "../hooks/session";
import { varela } from "../utils/fonts";
import { cookies } from "next/headers";
import { DataUserAccount } from "../types";

async function getData() {
  const sessionCookie = cookies().get("authorization");

  if (sessionCookie?.name != "authorization") return false;
  const isLogin = await getSession(sessionCookie);

  if (!isLogin) return false;
  return isLogin;
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
