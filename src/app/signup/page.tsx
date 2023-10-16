import SignupClient from "../components/SignupClient";
import "../globals.css";
import LoadingData from "../loading";
import { varela } from "../utils/fonts";
import dynamic from "next/dynamic";

export default function register() {
  const ClientPage = dynamic(() => import("../components/SignupClient"), {
    ssr: false,
    loading: LoadingData,
  });

  return (
    <main
      className={`min-w-screen flex min-h-screen flex-row items-center justify-center bg-slate-200 ${varela.className}`}
    >
      <ClientPage />
    </main>
  );
}
