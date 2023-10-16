import { BsFillBagFill } from "react-icons/bs";
import { GiFruitBowl } from "react-icons/gi";
import { MdPhoneIphone } from "react-icons/md";
import { FaPizzaSlice } from "react-icons/fa";

export default function LoadingData() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-white">
      <div className="relative h-32 w-32 overflow-hidden">
        <BsFillBagFill className="h-full w-full overflow-hidden text-details-medium" />
        <GiFruitBowl className="animate-loadingIcons absolute left-1/2 top-14 h-16 w-16 -translate-x-1/2 -translate-y-1/4 text-white" />
        <MdPhoneIphone className="animate-loadingIcons animation-delay__200 absolute  left-1/2 top-14 h-16 w-16 -translate-y-1/4 translate-x-[150%] text-white" />
        <FaPizzaSlice className="animate-loadingIcons animation-delay__300 absolute  left-1/2 top-14 h-16 w-16 -translate-y-1/4 translate-x-[250%] text-white" />
      </div>
    </div>
  );
}
