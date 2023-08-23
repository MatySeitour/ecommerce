import { BsSearch } from "react-icons/bs";

export const SearchHome = (): JSX.Element => {
  return (
    <div className="w-full h-14 px-4 py-2">
      <div className="w-full h-full bg-white rounded-md flex justify-between drop-shadow-sm">
        <div className="w-8 h-full p-1 pl-2">
          <BsSearch className="w-full text-slate-600 h-full" />
        </div>
        <div className="flex py-1 min-w-[14rem]">
          <input
            type="text"
            placeholder="Buscar comida, bebidas, frutas..."
            className="placeholder:text-red/20 text-sm w-full outline-none text-slate-600"
          />
        </div>
        <div className="w-16 h-full rounded-r-md">
          <button
            className="w-full h-full bg-green-500 rounded-r-md text-white text-sm"
            type="button"
          >
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
};
