import Image from "next/image";
import { CreateCategory } from "./CreateCategories";

export const CategoriesHome = ({ categories }: { categories: any[] }) => {
  return (
    <section className="h-auto w-full px-4 py-2">
      <article className="mb-10">
        <div className="mb-4 flex items-center justify-between">
          <p className="font-semibold">Categorias</p>
          <p className="text-sm font-medium text-green-700">Ver más</p>
        </div>
        <ul className="flex h-32 w-full flex-col flex-wrap items-center justify-center gap-3 overflow-y-hidden overflow-x-scroll">
          {categories.map((category) => (
            <li
              key={category.ID}
              className="h-full w-auto min-w-[7rem] max-w-[8rem]"
            >
              <div className="flex h-full w-full flex-col items-center">
                <div className="flex h-full w-full items-center justify-center rounded-md bg-green-300/100">
                  <Image
                    alt={category.Name}
                    width={400}
                    height={400}
                    src={`${category.ImageUrl}`}
                    className="w-24 object-cover"
                  />
                </div>
                <p>{category.Name}</p>
              </div>
            </li>
          ))}
        </ul>
      </article>
      <CreateCategory />
    </section>
  );
};
