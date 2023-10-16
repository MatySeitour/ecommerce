import FormSignUp from "../components/FormSignUp";
import StepsInterface from "./StepsInterface";

export default function SignupClient() {
  return (
    <>
      <article className="flex h-screen w-full items-center justify-center bg-slate-300/20 py-4">
        <StepsInterface />
        <FormSignUp />
      </article>
    </>
  );
}
