import Image from "next/image";
import logo from "../../../public/logo.webp";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { GiThreeLeaves } from "react-icons/gi";
import { BiSolidCart } from "react-icons/bi";

export const Nav = (): JSX.Element => {
  return (
    <header className="w-full h-20 bg-transparent fixed">
      <nav className="w-full h-full p-2 flex items-center">
        <ul className="h-12 flex justify-between items-center w-full">
          <li>
            <HiBars3BottomLeft
              className={
                "w-12 h-full text-slate-600 p-1 rounded-md bg-white shadow-md"
              }
            />
          </li>
          <li className="h-full flex rounded-full bg-white w-20 justify-evenly px-2 shadow-md">
            <GiThreeLeaves className={"w-12 h-full text-green-500 p-1"} />
            {/* <div className="border-l pl-2">
              <p>Almacén</p>
              <p>Buenavida</p>
            </div> */}
          </li>
          <li>
            <BiSolidCart
              className={
                "w-12 h-full text-slate-600 p-1 rounded-md bg-white shadow-md"
              }
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};
