import line from "../assets/footer/Line-2.svg";
import lock from "../assets/footer/lock.svg";

export default function Footer() {
  return (
    <div className="bg-[#252F3D] shrink-0 flex flex-col sm:flex-row w-full h-[102px] sm:h-[88px] p-5 sm:py-6 sm:pl-[127px] sm:pr-[119px] text-xs sm:text-base text-white justify-between items-center">
      <div className="flex flex-row h-[33px] sm:h-10 py-2 items-center">
        <span>Copyright (C) 2023</span>
        <img
          src={line}
          alt="vertical line"
          className="h-[14px] sm:h-6 mx-3 sm:mx-4 h"
        />
        <span>clarifionsupport@clarifion.com</span>
      </div>

      <div className="flex flex-row">
        <img
          src={lock}
          alt="lock"
          className="h-[13px] sm:h-4 mr-4 self-center"
        />
        <span>Secure 256-Bit SSL Encryption.</span>
      </div>
    </div>
  );
}
