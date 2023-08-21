import { createPortal } from "react-dom";
const Footer = () => {
  return (
    <>
      {createPortal(
        <footer className="max-w-[640px] mx-auto p-5">
          <div className="flex flex-row gap-2 justify-center items-center">
            <img
              src="https://i.imgur.com/jCW80nQ.png"
              alt="Bul-SU-Logo"
              className="w-12 h-12 sm:w-20 sm:h-20"
            />
            <img
              src="https://i.imgur.com/2S1tQyI.png"
              alt="OSOA"
              className="w-12 h-12 sm:w-20 sm:h-20"
            />
            <img
              src="https://i.imgur.com/bxmImUR.png"
              alt="CICT-Logo"
              className="w-12 h-12 sm:w-20 sm:h-20"
            />
          </div>
        </footer>,
        document.body
      )}
    </>
  );
};

export default Footer;
