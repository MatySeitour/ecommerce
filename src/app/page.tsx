import { CreateCategory } from "./components/CreateCategories";
import { SearchHome } from "./components/SearchHome";

export default async function Home() {
  return (
    // <Nav />
    <main className="min-h-screen w-full bg-slate-100 px-2 pt-24">
      <SearchHome />
      <CreateCategory />
    </main>
  );
}
