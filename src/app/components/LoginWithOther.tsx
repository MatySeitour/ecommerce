import { AiOutlineGoogle, AiOutlineInstagram } from "react-icons/ai";
import { Button } from "@nextui-org/button";
import { BsFacebook } from "react-icons/bs";

export default function LoginWithOther() {
  return (
    <div className="flex h-auto w-full flex-col justify-center gap-4 px-2 py-4">
      <div className="flex items-center justify-center gap-4">
        <span className="h-[0.1rem] w-6 bg-primary"></span>
        <p className="text-xs text-primary">O inicia sesión con</p>
        <span className="h-[0.1rem] w-6 bg-primary"></span>
      </div>
      <div className="flex h-auto w-full flex-row gap-2 px-8 md:items-center">
        <Button
          variant="flat"
          radius="sm"
          className="px-2 hover:bg-secondary/30 md:w-full md:max-w-[14rem]"
        >
          <AiOutlineGoogle className="h-5 w-5 text-primary" />
          <p className="hidden font-bold text-primary md:inline-block">
            Google
          </p>
        </Button>
        <Button
          variant="flat"
          radius="sm"
          className="px-2 hover:bg-secondary/30 md:w-full md:max-w-[14rem]"
        >
          <AiOutlineInstagram className="h-5 w-5 text-primary" />
          <p className="hidden font-bold text-primary md:inline-block">
            Instagram
          </p>
        </Button>
        <Button
          variant="flat"
          radius="sm"
          className="px-2 hover:bg-secondary/30 md:w-full md:max-w-[14rem]"
        >
          <BsFacebook className="h-5 w-5 text-primary" />
          <p className="hidden font-bold text-primary md:inline-block">
            Facebook
          </p>
        </Button>
      </div>
    </div>
  );
}
