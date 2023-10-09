import NavLogin from "../components/Navs/NavLogin";
import "../globals.css";
import { varela } from "../utils/fonts";
import { FormLogin } from "../components/FormLogin";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { getSession } from "../hooks/session";

async function getData() {
  const sessionCookie = cookies().get("authorization");

  if (sessionCookie?.name != "authorization") return false;
  const isLogin = await getSession(sessionCookie);

  if (!isLogin) return false;
  return redirect("/");
}

export default async function login() {
  const log = await getData();
  return (
    <>
      <NavLogin />
      <main
        className={`flex min-h-screen w-screen items-center justify-between bg-slate-200 md:px-12 ${varela.className}`}
      >
        <div className="flex w-full flex-row items-center justify-center gap-10">
          <FormLogin />
        </div>
      </main>
    </>
  );
}
