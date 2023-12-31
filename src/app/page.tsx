import { CreateCategory } from "./components/CreateCategories";
import { SearchHome } from "./components/SearchHome";
import "./globals.css";
import { cookies } from "next/headers";
import HomeClient from "./components/HomeClient";
import protectRoutes from "./utils/functions/protectRoutes";

async function getData() {
  const sessionCookie = cookies().get("authorization");
  return await protectRoutes(sessionCookie);
}

export default async function Home() {
  const log = await getData();
  return (
    // <Nav />
    <main className="min-h-screen w-full bg-slate-100 px-2 pt-24">
      <SearchHome />
      <HomeClient dataCompany={log} />
      <CreateCategory />
    </main>
  );
}
