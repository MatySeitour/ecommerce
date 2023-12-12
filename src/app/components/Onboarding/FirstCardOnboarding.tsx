import { Divider } from "@nextui-org/react";
import Image from "next/image";
import { MdEdit } from "react-icons/md";

export default function FirstCardOnboarding() {
  return (
    <>
      <div className="flex h-40 items-center justify-center rounded-t-md bg-gradient-to-tr from-slate-200 to-white">
        <Image
          src={"/lata-coca-removebg-preview.png"}
          alt="product"
          width={550}
          height={550}
          className="h-32 w-32 object-cover"
        />
      </div>
      <Divider orientation="horizontal" />
      <div className="flex flex-col gap-3 rounded-md bg-gradient-to-tr from-slate-200 to-white px-2 py-2 pb-4">
        <div className="flex justify-between">
          <span className="w-auto rounded-md bg-details-low px-2 py-1 text-[0.6rem] text-white">
            Bebidas
          </span>
          <span className="flex w-auto items-center justify-center rounded-md bg-button-style px-1.5 py-0 text-[0.6rem] text-white">
            Añadir categoria
          </span>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <h5 className="text-sn font-normal text-primary">
              Coca-Cola Lata 473ml
            </h5>
            <div className="">
              <MdEdit className="h-5 w-5 rounded-full bg-details-medium p-0.5 text-white" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <h5 className="text-base font-bold text-primary">$500</h5>
            <div className="">
              <MdEdit className="h-5 w-5 rounded-full bg-details-medium p-0.5 text-white" />
            </div>
          </div>
        </div>
        <div className="flex pt-2">
          <span className="flex  items-center justify-center rounded-md bg-button-style px-2 py-1 text-[0.6rem] text-white">
            Añadir Oferta
          </span>
        </div>
      </div>
    </>
  );
}
