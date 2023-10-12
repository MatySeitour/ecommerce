import SignupClient from "../components/SignupClient";
import "../globals.css";
import { varela } from "../utils/fonts";

export default function errorServer() {
  return (
    <main
      className={`min-w-screen flex min-h-screen flex-row items-center justify-center bg-slate-200 ${varela.className}`}
    >
      <div>Error de servidor</div>
    </main>
  );
}
