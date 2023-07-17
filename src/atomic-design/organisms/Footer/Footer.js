import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div class="mt-48 w-full p-8 flex items-center justify-center bg-slate-700">
      <div class="md:w-2/3 w-full px-4 text-white flex flex-col">
        <p class="w-full text-center text-white">
          <a target="_blank" href="https://www.michaelwebcreation.com">
            Developed by Michael Web Creation{" "}
          </a>
          <a target="_blank" href="https://www.tailwindcss.com">
            | Powered by Tailwind
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
