import clarifionLogo from "../assets/main/Clarifion_Logo.svg";
import mcAfeeLogo from "../assets/main/McAfee-logo.svg";
import nortonAntivirusLogo from "../assets/main/norton-antivirus-logo.svg";
import tickCircle from "../assets/main/tick-circle.svg";
import clarifionImageFeatures from "../assets/main/clarifion-image-features.svg";
import girlThumbnail from "../assets/main/girl-thumbnail.svg";
import stars from "../assets/main/Stars.svg";
import verifiedIcon from "../assets/main/verify-icon.svg";
import clarifionImageBackgroundBlue from "../assets/main/clarifion-image-background-blue.svg";
import starRounded from "../assets/main/star-rounded.svg";
import blueBullet from "../assets/main/blue-bullet.svg";
import tickBlue from "../assets/main/tick-blue.svg";
import percentageIcon from "../assets/main/percentage-icon.svg";
import arrowRight from "../assets/main/arrow-right.svg";
import verticalLine from "../assets/main/vertical-line.svg";
import smallLock from "../assets/main/lock.svg";
import visaIcon from "../assets/main/visa-icon.svg";
import shopPayIcon from "../assets/main/shop-pay-icon.svg";
import paypalIcon from "../assets/main/paypal-icon.svg";
import mastercardIcon from "../assets/main/mastercard-icon.svg";
import googlePayIcon from "../assets/main/google-pay-icon.svg";
import applePayIcon from "../assets/main/apple-pay-icon.svg";
import amexIcon from "../assets/main/amex-icon.svg";
import satisfactionGuaranteeStamp from "../assets/main/satisfaction-guarantee-stamp.svg";
import horizontalLine from "../assets/main/horizontal-line.svg";

export default function Main() {
  return (
    <div className="flex flex-col w-full h-[1081px] sm:h-full sm:px-[127px]">
      <div className="flex flex-row h-[60px] sm:h-9 sm:mt-[30px] p-5 sm:p-0 justify-between shrink-0 shadow-[0_24px_24px_0_rgba(15,29,11,0.04)] sm:shadow-none">
        <img src={clarifionLogo} alt="Clarifion logo" />
        <div className="flex flex-row justify-end">
          <img src={mcAfeeLogo} alt="McAfee logo" className="mr-4 sm:mr-8" />
          <img src={nortonAntivirusLogo} alt="Norton Antivirus logo" />
        </div>
      </div>

      <div className="flex flex-col self-center text-center mt-[19px] px-5 sm:px-0">
        <span className="h-[68px] sm:h-[35px] text-[32px] sm:text-5xl leading-[44.8px] sm:leading-[33px] -mt-[11.5px] sm:-mt-0">
          Wait ! Your Order In Progress.
        </span>
        <span className="h-[58px] sm:h-[17px] mt-[11.5px] sm:mt-6 text-center sm:text-2xl leading-[22.4px] sm:leading-[15px] text-[#4D5254] pt-[18px] sm:pt-0">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing
        </span>
      </div>

      <div className="pb-0.5 sm:pb-0 mt-6 sm:mt-[60px] flex flex-row px-5 sm:px-0 justify-between">
        <div className="flex flex-col sm:flex-row gap-[6px] sm:gap-5 items-center">
          <div className="flex bg-[#85BF55] h-5 sm:h-10 w-5 sm:w-10 rounded-full">
            <img
              src={tickCircle}
              alt="tick circle"
              className="mx-auto h-2 sm:h-4 self-center"
            />
          </div>
          <span className="hidden sm:flex text-xs sm:text-xl leading-[22px]">
            Step 1 :&nbsp;
          </span>
          <span className="text-xs sm:text-xl leading-[13.2px] sm:leading-[22px] sm:-ml-5 h-[9px] sm:h-[22px]">
            Cart Review
          </span>
          
        </div>
        <div className="flex flex-col sm:flex-row gap-[6px] sm:gap-5 items-center">
          <div className="flex bg-[#85BF55] h-5 sm:h-10 w-5 sm:w-10 rounded-full">
            <img
              src={tickCircle}
              alt="tick circle"
              className="mx-auto h-2 sm:h-4 self-center"
            />
          </div>
          <span className="hidden sm:flex text-xs sm:text-xl leading-[22px]">
            Step 2 :&nbsp;
          </span>
          <span className="text-xs sm:text-xl leading-[13.2px] sm:leading-[22px] sm:-ml-5 h-[9px] sm:h-[22px]">
            Checkout
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-[6px] sm:gap-5 font-bold items-center">
          <div className="flex bg-[#2C7EF8] h-5 sm:h-10 w-5 sm:w-10 rounded-full">
            <span className="h-2.5 sm:h-[14px] text-sm sm:text-xl leading-[8px] sm:leading-[14px] text-white font-normal mx-auto self-center">3</span>
          </div>
          <span className="hidden sm:flex text-xs sm:text-xl leading-[22px]">
            Step 3 :&nbsp;
          </span>
          <span className="text-xs sm:text-xl leading-[13.2px] sm:leading-[22px] sm:-ml-5 h-[9px] sm:h-[22px]">
            Special Offer
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-[6px] sm:gap-5 items-center">
          <div className="flex bg-white border-[#2C7EF8] border-[1px] sm:border-2 h-5 sm:h-10 w-5 sm:w-10 rounded-full">
            <span className="h-2.5 sm:h-[14px] text-sm sm:text-xl leading-[8px] sm:leading-[14px] text-[#2C7EF8] mx-auto self-center">
              4
            </span>
          </div>
          <span className="hidden sm:flex text-xs sm:text-xl leading-[22px]">
            Step 4 :&nbsp;
          </span>
          <span className="text-xs sm:text-xl leading-[13.2px] sm:leading-[22px] sm:-ml-5 h-[9px] sm:h-[22px]">
            Confirmation
          </span>
        </div>
      </div>

      <div className="flex flex-row gap-10 sm:bg-[#FAFAFA] w-full mt-6 sm:mt-10 mb-[61px] sm:ml-[1px] px-5 pt-0.5 sm:p-10 sm:rounded-[10px] shrink-0">
        <div className="hidden sm:flex flex-col">
          <img
            src={clarifionImageFeatures}
            alt="clarifion image features"
            className="shrink-0"
          />

          <div className="bg-white flex flex-col w-[575px] gap-[18px] -mb-0.5 mt-6 p-6 rounded-[10px] shrink-0">
            <div className="flex gap-[13px] items-center">
              <img src={girlThumbnail} alt="girl thumbnail" />
              <div>
                <img src={stars} alt="stars" />
                <div className="flex mt-[4.35px] items-center gap-2.5">
                  <span className="text-sm font-bold">Ken T.</span>
                  <img src={verifiedIcon} alt="verified icon" />
                  <span className="text-[#5BB59A] text-xs">
                    Verified Customer
                  </span>
                </div>
              </div>
            </div>

            <p className="text-[#4D5254]">
              “As soon as the Clarifions arrived I put one in my bedroom. This
              was late in the afternoon. When I went to the bedroom in the
              evening it smelled clean. When I went to bed I felt I could
              breathe better. Wonderful.”
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-6 sm:gap-8">
          <p className="h-[85px] sm:h-auto capitalize text-2xl leading-[34px] sm:text-[32px] sm:leading-[44.8px] -mt-[11px] -mb-[10px] text-center sm:text-start">
            <span className="text-[#2C7EF8]">ONE TIME ONLY&nbsp;</span>
            special price for 6 extra Clarifion for only &nbsp; 
            <span className="text-[#2C7EF8]">$14 each</span>
            &nbsp; ($84.00 total!)
          </p>

          <div className="w-full flex gap-4 sm:gap-6 mt-5">
            <img
              src={clarifionImageBackgroundBlue}
              alt="clarifion image background blue"
              className="bg-[#2C7EF8] h-20 sm:h-auto rounded-[10px]"
            />

            <div className="flex flex-col w-full gap-3 sm:gap-[15px] py-[9px] sm:py-0 ">
              <div className="flex justify-between h-2.5 sm:h-4">
                <span className="text-sm sm:text-xl -mt-[6.7px] w-full">
                  Clarifion Air Ionizer
                </span>
                <div className="flex gap-2 sm:gap-2.5 font-semibold items-center">
                  <span className="text-[#969696] text-[10px] sm:text-base line-through decoration-1 decoration-[#969696]/50">
                    $180
                  </span>
                  <span className="text-sm -mt-0.5 sm:-mt-0 sm:text-[22px] text-[#2C7EF8]">$84</span>
                </div>
              </div>

              <div className="flex gap-0.5">
                <img
                  src={starRounded}
                  alt="rounded stars"
                  className="h-3 sm:h-[18px]"
                />
                <img
                  src={starRounded}
                  alt="rounded stars"
                  className="h-3 sm:h-[18px]"
                />
                <img
                  src={starRounded}
                  alt="rounded stars"
                  className="h-3 sm:h-[18px]"
                />
                <img
                  src={starRounded}
                  alt="rounded stars"
                  className="h-3 sm:h-[18px]"
                />
                <img
                  src={starRounded}
                  alt="rounded stars"
                  className="h-3 sm:h-[18px]"
                />
              </div>

              <div className="flex gap-4 h-4 sm:h-[22px] items-center">
                <img src={blueBullet} alt="blue bullet" className="h-3 sm:h-4" />
                <span className="text-[#37465A] text-xs sm:text-base font-light">
                  12 left in Stock
                </span>
              </div>

              <p className="hidden sm:flex text-[#4D5254] leading-[22.4px] -mt-[6px] -mb-2">
                Simply plug a Clarifion into any standard outlet and replace
                bulky, expensive air purifiers with a simple.
              </p>
            </div>
          </div>

          <p className="sm:hidden text-[#4D5254] text-xs leading-[16.8px] text-center w-[101%] -mt-1">
            Simply plug a Clarifion into any standard outlet and replace
            bulky, expensive air purifiers with a simple.
          </p>

          <div className="flex flex-col gap-4 text-xs sm:text-base">
            <div className="flex h-4 gap-3">
              <img src={tickBlue} alt="tick blue" />
              <span>
                Negative Ion Technology may
                <span className="font-bold">&nbsp;help with allergens</span>
              </span>
            </div>
            <div className="flex h-4 gap-3">
              <img src={tickBlue} alt="tick blue" />
              <span>
                Designed for
                <span className="font-bold">&nbsp;air rejuvenation</span>
              </span>
            </div>
            <div className="flex h-4 gap-3">
              <img src={tickBlue} alt="tick blue" />
              <span>
                <span className="font-bold">Perfect for every room</span>
                &nbsp;in all types of places.
              </span>
            </div>
          </div>

          <div className="bg-[#EDF3FD] flex gap-4 text-sm sm:text-base sm:mr-2 py-3 px-4 rounded-[10px] items-center">
            <img src={percentageIcon} alt="percentage icon" />
            <span>
              Save
              <span className="text-[#2C7EF8]">&nbsp;53%&nbsp;</span>
              and get
              <span className="text-[#2C7EF8]">&nbsp;6 extra Clarifision&nbsp; </span>
              for only
              <span className="text-[#2C7EF8]">&nbsp;$14 Each.</span>
            </span>
          </div>

          <div className="flex flex-col sm:mr-2">
            <div className="bg-[#59AE43] flex gap-4 sm:gap-[19.76px] uppercase text-sm sm:text-xl text-white font-bold h-[59px] py-4 rounded-[50px] justify-center items-center">
              <span>Yes - Claim my discount</span>
              <img src={arrowRight} alt="arrow right" className="w-4" />
            </div>

            <div className="flex flex-col sm:flex-row mt-3 mb-3 sm:mb-5 py-2 px-4 gap-3 sm:gap-[15px] text-xs text-[#4D5254] capitalize border-[1px] border-[#CFCFCF] rounded items-center">

              <div className="flex gap-[9px] sm:gap-[15px]">
                <span>Free shipping</span>
                <img src={verticalLine} alt="verical line" />
                <div className="flex gap-2">
                  <img src={smallLock} alt="small lock" className="w-3" />
                  <span>Secure 256-bit SSL encryption.</span>
                </div>
              </div>

              <img src={verticalLine} alt="verical line" className="hidden sm:flex"/>
              <img src={horizontalLine} alt="horizontal line" className="sm:hidden" />
              
              <div className="flex gap-0.5">
                <img src={visaIcon} alt="visa icon" />
                <img src={shopPayIcon} alt="shop pay icon" />
                <img src={paypalIcon} alt="paypal icon" />
                <img src={mastercardIcon} alt="mastercard icon" />
                <img src={googlePayIcon} alt="google pay icon" />
                <img src={applePayIcon} alt="apple pay icon" />
                <img src={amexIcon} alt="amex icon" />
              </div>
            </div>
            <span className="uppercase underline text-xs sm:text-lg text-[#F82C2C] font-medium self-center">
              No thanks, I don’t want this.
            </span>
          </div>

          <div className="flex gap-4 -mt-2">
            <img
              src={satisfactionGuaranteeStamp}
              alt="satisfaction guarantee stamp"
              className="w-12 sm:w-auto self-start"
            />
            <p className="text-xs sm:text-base leading-[16.8px] sm:leading-[22.4px] text-[#4D5254] sm:tracking-wide">
              If you are not completely thrilled with your Clarifion - We have a
              <span className="font-bold">
                &nbsp;30 day satisfaction guarantee.
              </span>
              &nbsp;Please refer to our return policy at the bottom of the page
              for more details. Happy Shopping!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
