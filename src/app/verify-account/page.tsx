import { redirect } from "next/navigation";
import SendMail from "../components/SendMail";
import { getSession } from "../hooks/session";
import { varela } from "../utils/fonts";
import { cookies } from "next/headers";

async function getData() {
  const sessionCookie = cookies().get("authorization");

  if (sessionCookie?.name != "authorization") return false;
  const isLogin = await getSession(sessionCookie);

  if (!isLogin) return false;
  return redirect("/");
}

export default function verifyAccount() {
  return (
    <main
      className={`flex h-screen w-full items-center justify-center ${varela.className}`}
    >
      <SendMail />
    </main>
  );
}
