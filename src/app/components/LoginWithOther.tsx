import { AiOutlineGoogle, AiOutlineInstagram } from "react-icons/ai";
import { Button } from "@nextui-org/button";
import { BsFacebook } from "react-icons/bs";

export default function LoginWithOther() {
  return (
    <div className="flex w-full h-auto justify-center py-4 px-2 flex-col gap-4">
      <div className="flex justify-center items-center gap-4">
        <span className="w-6 h-[0.1rem] bg-primary"></span>
        <p className="text-xs text-primary">O inicia sesión con</p>
        <span className="w-6 h-[0.1rem] bg-primary"></span>
      </div>
      <div className="w-full h-auto flex flex-row gap-2 px-8 md:items-center">
        <Button
          variant="flat"
          radius="sm"
          className="px-2 hover:bg-secondary/30 md:max-w-[14rem] md:w-full"
        >
          <AiOutlineGoogle className="w-5 h-5 text-primary" />
          <p className="font-bold text-primary hidden md:inline-block">
            Google
          </p>
        </Button>
        <Button
          variant="flat"
          radius="sm"
          className="px-2 hover:bg-secondary/30 md:max-w-[14rem] md:w-full"
        >
          <AiOutlineInstagram className="w-5 h-5 text-primary" />
          <p className="font-bold text-primary hidden md:inline-block">
            Instagram
          </p>
        </Button>
        <Button
          variant="flat"
          radius="sm"
          className="px-2 hover:bg-secondary/30 md:max-w-[14rem] md:w-full"
        >
          <BsFacebook className="w-5 h-5 text-primary" />
          <p className="font-bold text-primary hidden md:inline-block">
            Facebook
          </p>
        </Button>
      </div>
    </div>
  );
}
