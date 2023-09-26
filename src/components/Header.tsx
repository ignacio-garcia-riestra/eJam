import checkmarkStarburst from "../assets/header/fluent_checkmark-starburst-20-regular.svg"
import truckLight from "../assets/header/ph_truck-light.svg"
import heart from "../assets/header/mdi_cards-heart-outline.svg"
import arrowSyncCheckmark from "../assets/header/fluent_arrow-sync-checkmark-20-regular.svg"
import leftButton from "../assets/header/left-button.svg"
import rightButton from "../assets/header/right-button.svg"

export default function Header() {
  return (
    <div className="bg-[#252F3D] shrink-0 flex flex-row w-full h-[50px] pl-5 sm:pl-[127px] pr-5 sm:pr-[137px] text-white text-xs leading-3 font-medium items-center justify-between">
      <img src={leftButton} alt="left button" className="sm:hidden h-5" />
      <div className="flex flex-row h-[22px] items-center">
        <img src={checkmarkStarburst} alt="checkmark-starburst" />
        <span className="ml-2 h-3">30-DAY SATISFACTION GUARANTEE</span>
      </div>
      <img src={rightButton} alt="right button" className="sm:hidden h-5" />

      <div className="hidden sm:flex flex-row h-[22px] items-center">
        <img src={truckLight} alt="truck icon" />
        <span className="ml-2 h-3">
          FREE DELIVERY ON ORDERS OVER $40.00
        </span>
      </div>

      <div className="hidden sm:flex flex-row h-[22px] items-center">
        <img src={heart} alt="heart" />
        <span className="ml-2 h-3">50.000+ HAPPY CUSTOMERS</span>
      </div>

      <div className="hidden sm:flex flex-row h-[22px] items-center">
        <img src={arrowSyncCheckmark} alt="arrow sync checkmark" />
        <span className="ml-2 h-3">100% MONEY BACK GUARANTEE</span>
      </div>
    </div>
  );
}
