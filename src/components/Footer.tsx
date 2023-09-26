import line from "../assets/footer/Line-2.svg"
import lock from "../assets/footer/lock.svg"

export default function Footer() {
  return (
    <div className="bg-[#252F3D] shrink-0 flex flex-row w-full h-[88px] py-6 pl-[127px] pr-[119px] text-white justify-between">
      <div className="flex flex-row py-2">
        <span>Copyright (C) 2023</span>
        <img src={line} alt="vertical line" className="mx-4" />
        <span>clarifionsupport@clarifion.com</span>
      </div>

      <div className="flex flex-row py-2">
        <img src={lock} alt="lock" className="h-4 mr-4 self-center" />
        <span>Secure 256-bit SSL encryption.</span>
      </div>
    </div>
  );
}
