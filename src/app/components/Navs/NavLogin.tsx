import ButtonNav from "./ButtonNav";

export default function NavLogin() {
  return (
    <header className="w-full h-14 bg-transparent fixed">
      <nav className="w-full h-full p-2 flex items-center justify-between">
        <div>LOGO</div>
        <div className="flex-row flex gap-6">
          <ButtonNav
            className="bg-transparent w-full px-4 h-10 text-details-medium hover:bg-details-medium/90 hover:text-white border-details-medium  font-medium tracking-wide"
            variant={undefined}
            text="Registrarse"
          />
          <ButtonNav
            variant={undefined}
            text="Demo"
            className="w-full px-4 h-10 bg-details-medium text-white hover:bg-details-medium/90 border-details-medium  font-medium tracking-wide"
          />
        </div>
      </nav>
    </header>
  );
}
