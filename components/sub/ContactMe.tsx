import Image from "next/image";
import React from "react";
import gmailIcon from "@/public/social-icons/gmail.svg";

const Button = () => {
  return (
    <button
      className="bg-red-500 text-center w-48 rounded-2xl h-14 relative text-white text-xl font-semibold group"
      type="button"
    >
      <div className="z-20 bg-white rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] duration-500">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="25px"
          height="25px"
        > */}
        <Image src={gmailIcon} width={40} height={40} alt="skill image" />
        {/* </svg> */}
      </div>
      <p className="translate-x-2">Gmail</p>
    </button>
  );
};

export default Button;
