import NavLogin from "../components/Navs/NavLogin";
import "../globals.css";
import { varela } from "../utils/fonts";
import { FormLogin } from "../components/FormLogin";

export default function login() {
  return (
    <>
      <NavLogin />
      <main
        className={`flex justify-between items-center min-h-screen w-screen bg-slate-200 md:px-12 ${varela.className}`}
      >
        <div className="flex flex-row justify-center items-center gap-10 w-full">
          <FormLogin />
        </div>
      </main>
    </>
  );
}
