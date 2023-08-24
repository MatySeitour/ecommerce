import Image from "next/image";
import cookies from "../../../public/cookies.png";

export const CategoriesHome = (): JSX.Element => {
  return (
    <article className="h-auto w-full px-4 py-2">
      <div className="flex justify-between items-center mb-4">
        <p className="font-semibold">Categorias</p>
        <p className="text-sm text-green-700 font-medium">Ver más</p>
      </div>
      <ul className="w-full h-32 flex gap-3 items-center justify-center overflow-x-scroll overflow-y-hidden flex-col flex-wrap">
        <li className="w-auto min-w-[7rem] max-w-[8rem] h-full">
          <div className="w-full h-full flex flex-col items-center">
            <div className="h-full w-full bg-green-300/100 rounded-md flex items-center justify-center">
              <Image
                alt="cookies"
                width={400}
                height={400}
                src={cookies}
                className="w-24 object-cover"
              />
            </div>
            <p>vegetables</p>
          </div>
        </li>
        <li className="w-auto min-w-[7rem] max-w-[8rem] h-full">
          <div className="w-full h-full flex flex-col items-center">
            <div className="h-full w-full bg-green-300/100 rounded-md flex items-center justify-center">
              <Image
                alt="cookies"
                width={400}
                height={400}
                src={cookies}
                className="w-24 object-cover"
              />
            </div>
            <p>vegetables</p>
          </div>
        </li>
        <li className="w-auto min-w-[7rem] max-w-[8rem] h-full">
          <div className="w-full h-full flex flex-col items-center">
            <div className="h-full w-full bg-green-300/100 rounded-md flex items-center justify-center">
              <Image
                alt="cookies"
                width={400}
                height={400}
                src={cookies}
                className="w-24 object-cover"
              />
            </div>
            <p>vegetables</p>
          </div>
        </li>
        <li className="w-auto min-w-[7rem] max-w-[8rem] h-full">
          <div className="w-full h-full flex flex-col items-center">
            <div className="h-full w-full bg-green-300/100 rounded-md flex items-center justify-center">
              <Image
                alt="cookies"
                width={400}
                height={400}
                src={cookies}
                className="w-24 object-cover"
              />
            </div>
            <p>vegetables</p>
          </div>
        </li>
        <li className="w-auto min-w-[7rem] max-w-[8rem] h-full">
          <div className="w-full h-full flex flex-col items-center">
            <div className="h-full w-full bg-green-300/100 rounded-md flex items-center justify-center">
              <Image
                alt="cookies"
                width={400}
                height={400}
                src={cookies}
                className="w-24 object-cover"
              />
            </div>
            <p>vegetables</p>
          </div>
        </li>
        <li className="w-auto min-w-[7rem] max-w-[8rem] h-full">
          <div className="w-full h-full flex flex-col items-center">
            <div className="h-full w-full bg-green-300/100 rounded-md flex items-center justify-center">
              <Image
                alt="cookies"
                width={400}
                height={400}
                src={cookies}
                className="w-24 object-cover"
              />
            </div>
            <p>vegetables</p>
          </div>
        </li>
      </ul>
    </article>
  );
};
