import Onboarding from "./Onboarding";
import EffectBackground from "./Onboarding/EffectBackground";

export default function SignupClient() {
  return (
    <>
      {/* <article className="flex h-screen w-full items-center justify-center bg-slate-300/20 py-4">
        <StepsInterface />
        <FormSignUp />
      </article> */}

      <article className="relative z-10 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-button-style py-4">
        <EffectBackground className="hidden after:left-0 after:top-0 after:-scale-x-100 md:inline-block" />
        <EffectBackground className="after:right-1/2 after:top-40 after:-translate-y-8 after:translate-x-1/2" />
        <EffectBackground className="after:-bottom-28 after:right-0 after:-translate-y-8 after:translate-x-1/2" />

        <Onboarding />
      </article>
    </>
  );
}
