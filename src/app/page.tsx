import { CreateCategory } from "./components/CreateCategories";
import { SearchHome } from "./components/SearchHome";
import "./globals.css";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { getSession } from "./hooks/session";
import HomeClient from "./components/HomeClient";

async function getData() {
  const sessionCookie = cookies().get("authorization");

  if (sessionCookie?.name != "authorization") return redirect("/login");
  const isLogin = await getSession(sessionCookie);

  if (!isLogin) return redirect("/");
  return isLogin;
}

export default async function Home() {
  const log = await getData();
  console.log(log);
  return (
    // <Nav />
    <main className="min-h-screen w-full bg-slate-100 px-2 pt-24">
      <SearchHome />
      <HomeClient dataCompany={log} />
      <CreateCategory />
    </main>
  );
}
