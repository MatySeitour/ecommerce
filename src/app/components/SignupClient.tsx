import Onboarding from "./Onboarding";

export default function SignupClient() {
  return (
    <>
      {/* <article className="flex h-screen w-full items-center justify-center bg-slate-300/20 py-4">
        <StepsInterface />
        <FormSignUp />
      </article> */}
      <article className="flex h-screen w-full flex-col items-center justify-center bg-button-style py-4">
        <Onboarding />
      </article>
    </>
  );
}
