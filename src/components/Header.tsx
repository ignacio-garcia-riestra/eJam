import checkmarkStarburst from "../assets/header/fluent_checkmark-starburst-20-regular.svg"
import truckLight from "../assets/header/ph_truck-light.svg"
import heart from "../assets/header/mdi_cards-heart-outline.svg"
import arrowSyncCheckmark from "../assets/header/fluent_arrow-sync-checkmark-20-regular.svg"

export default function Header() {
  return (
    <div className="bg-[#252F3D] shrink-0 flex flex-row w-full h-[50px] pt-[15px] pl-[127px] pr-[137px] text-white text-xs leading-3 font-medium justify-between">
      <div className="flex flex-row h-[22px]">
        <img src={checkmarkStarburst} alt="checkmark-starburst" />
        <span className="ml-2 pt-[5px]">30-DAY SATISFACTION GUARANTEE</span>
      </div>

      <div className="flex flex-row h-[22px]">
        <img src={truckLight} alt="truck icon" />
        <span className="ml-2 pt-[5px]">
          FREE DELIVERY ON ORDERS OVER $40.00
        </span>
      </div>

      <div className="flex flex-row h-[22px]">
        <img src={heart} alt="heart" />
        <span className="ml-2 pt-[5px]">50.000+ HAPPY CUSTOMERS</span>
      </div>

      <div className="flex flex-row h-[22px]">
        <img src={arrowSyncCheckmark} alt="arrow sync checkmark" />
        <span className="ml-2 pt-[5px]">100% MONEY BACK GUARANTEE</span>
      </div>
    </div>
  );
}
