import MSCLogo from "../assets/MSCLogo";

const Header = () => {
  return (
    <header className="bg-white borded rounded-lg shadow-md px-[23px] py-[27px] flex flex-row justify-center items-center gap-4">
      <div className="logo-wrapper">
        <MSCLogo />
      </div>
      <div>
        <h1 className="text-md sm:text-xl text-ms-blue font-bold">
          BulSU Microsoft Student Community
        </h1>
        <span className="text-sm sm:text-base">Inspire | Teach | Promote</span>
      </div>
    </header>
  );
};

export default Header;
