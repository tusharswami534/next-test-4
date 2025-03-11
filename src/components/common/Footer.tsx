import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-dark-black py-[23px] max-sm:py-4 px-4">
      <div className="container items-center max-w-[1140px] max-sm:flex-col gap-2 max-sm:justify-center mx-auto flex justify-between">
        <p className="text-white/50 max-sm:text-xs leading-150 text-sm">
          Made with ❤️ for the people of the internet.
        </p>
        <p className="text-white/50 max-sm:text-xs leading-150 text-sm">
          © {year} Dataskate.io, All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
