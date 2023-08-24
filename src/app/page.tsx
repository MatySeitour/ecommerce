import { CategoriesHome } from "./components/CategoriesHome";
import { SearchHome } from "./components/SearchHome";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-slate-100 pt-24 px-2">
      <SearchHome />
      <CategoriesHome />
    </main>
  );
}
