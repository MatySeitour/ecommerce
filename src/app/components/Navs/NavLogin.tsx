import ButtonNav from "./ButtonNav";

export default function NavLogin() {
  return (
    <header className="fixed h-12 w-full bg-transparent">
      <nav className="flex h-full w-full items-center justify-between px-4">
        <div>LOGO</div>
        <div className="flex flex-row gap-6">
          <ButtonNav
            className="h-10 w-full border-details-medium bg-transparent px-2 font-medium tracking-wide text-details-medium  hover:bg-details-medium/90 hover:text-white"
            variant={undefined}
            text="Registrarse"
          />
          <ButtonNav
            variant={undefined}
            text="Demo"
            className="h-10 w-full border-details-medium bg-details-medium px-2 font-medium tracking-wide  text-white hover:bg-details-medium/90"
          />
        </div>
      </nav>
    </header>
  );
}
