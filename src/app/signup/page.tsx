import NavLogin from "../components/Navs/NavLogin";
import "../globals.css";
import { varela } from "../utils/fonts";
import { FormLogin } from "../components/FormLogin";
import FormSignUp from "../components/FormSignUp";

// const Login = dynamic(() =>
//   import("../components/ClientLogin").then((module) => module.default)
// );

export default function register() {
  return (
    <>
      <NavLogin />
      <main
        className={`flex justify-center flex-row items-center min-h-screen min-w-screen bg-slate-200 ${varela.className}`}
      >
        <article className="w-full h-screen bg-slate-400 flex flex-col justify-center items-center flex-1 py-10">
          <span>Paso 1</span>
          <div className="w-0.5 h-screen bg-black flex flex-col"></div>
          <span>Paso 2</span>
          <div className="w-0.5 h-screen bg-black flex flex-col"></div>
          <span>Paso 3</span>
          <div className="w-0.5 h-screen bg-black flex flex-col"></div>
          <span>Paso 4</span>
        </article>

        <article className="w-full h-screen bg-slate-200 p-4 flex justify-center items-center flex-[1.5]">
          <FormSignUp />
        </article>
      </main>
    </>
  );
}
