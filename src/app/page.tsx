import { GetStaticProps } from "next";
import { CreateCategory } from "./components/CreateCategories";
import { SearchHome } from "./components/SearchHome";
import RootLayout from "./layout";
import axios from "axios";
import { useEffect, useState } from "react";
import { Nav } from "./components/Navs/Nav";
import { cookies } from "next/headers";

export default async function Home() {
  return (
    // <Nav />
    <main className="min-h-screen w-full bg-slate-100 px-2 pt-24">
      <SearchHome />
      <CreateCategory />
    </main>
  );
}
