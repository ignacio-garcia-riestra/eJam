import checkmarkStarburst from "./assets/header/fluent_checkmark-starburst-20-regular.svg"
import truckLight from "./assets/header/ph_truck-light.svg"
import heart from "./assets/header/mdi_cards-heart-outline.svg"
import arrowSyncCheckmark from "./assets/header/fluent_arrow-sync-checkmark-20-regular.svg"

import line from "./assets/footer/Line-2.svg"
import lock from "./assets/footer/lock.svg"

function App() {

  return (
    <div className="flex flex-col w-[1500px] h-[1379px] font-manrope">
      <header className="bg-[#252F3D] shrink-0 flex flex-row w-full h-[50px] pt-[15px] pl-[127px] pr-[137px] text-white text-xs leading-3 font-medium justify-between">
        <div className="flex flex-row h-[22px]">
          <img src={checkmarkStarburst} alt="checkmark-starburst" />
          <span className="ml-2 pt-[5px]">
            30-DAY SATISFACTION GUARANTEE
          </span>
        </div>

        <div className="flex flex-row h-[22px]">
          <img src={truckLight} alt="truck icon" />
          <span className="ml-2 pt-[5px]">
            FREE DELIVERY ON ORDERS OVER $40.00
          </span>
        </div>

        <div className="flex flex-row h-[22px]">
          <img src={heart} alt="heart" />
          <span className="ml-2 pt-[5px]">
            50.000+ HAPPY CUSTOMERS
          </span>
        </div>

        <div className="flex flex-row h-[22px]">
          <img src={arrowSyncCheckmark} alt="arrow sync checkmark" />
          <span className="ml-2 pt-[5px]">
            100% MONEY BACK GUARANTEE
          </span>
        </div>
      </header>
      
      <main className="flex flex-col w-full h-full px-[127px]">

      </main>

      <footer className="bg-[#252F3D] shrink-0 flex flex-row w-full h-[88px] py-6 pl-[127px] pr-[119px] text-white justify-between">
        <div className="flex flex-row py-2">
          <span>
            Copyright (C) 2023
          </span>
          <img src={line} alt="vertical line" className="mx-4"/>
          <span>
            clarifionsupport@clarifion.com
          </span>
        </div>

        <div className="flex flex-row py-2">
          <img src={lock} alt="lock" className="h-4 mr-4 self-center"/>
          <span>
            Secure 256-bit SSL encryption.
          </span>
        </div>
      </footer>

    </div>
  )
}

export default App
