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

export default function Main() {
  return (
    <div className="flex flex-col w-full h-full px-[127px]">
      <div className="flex flex-row h-9 mt-[30px] justify-between">
        <img src={clarifionLogo} alt="Clarifion logo" />
        <div className="flex">
          <img src={mcAfeeLogo} alt="McAfee logo" className="mr-8" />
          <img src={nortonAntivirusLogo} alt="Norton Antivirus logo" />
        </div>
      </div>

      <div className="flex flex-col self-center mt-[11.5px]">
        <span className="h-[48px] text-5xl">
          Wait ! Your Order In Progress.
        </span>
        <span className="h-6 mt-[11px] text-center text-2xl text-[#4D5254]">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing
        </span>
      </div>

      <div className="mt-[60px] flex flex-row ml[1px] justify-between">
        <div className="flex gap-5 items-center">
          <div className="flex bg-[#85BF55] h-10 w-10 rounded-full">
            <img
              src={tickCircle}
              alt="tick circle"
              className="mx-auto self-center"
            />
          </div>
          <span className="text-xl leading-[22px]">Step 1 : Cart Review</span>
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex bg-[#85BF55] h-10 w-10 rounded-full">
            <img
              src={tickCircle}
              alt="tick circle"
              className="mx-auto self-center"
            />
          </div>
          <span className="text-xl leading-[22px]">Step 2 : Checkout</span>
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex bg-[#2C7EF8] h-10 w-10 rounded-full">
            <span className="text-xl text-white mx-auto self-center">3</span>
          </div>
          <span className="text-xl font-bold leading-[22px]">
            Step 3 : Special Offer
          </span>
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex bg-white border-[#2C7EF8] border-2 h-10 w-10 rounded-full">
            <span className="text-xl text-[#2C7EF8] mx-auto self-center">
              4
            </span>
          </div>
          <span className="text-xl leading-[22px]">Step 4 : Confirmation</span>
        </div>
      </div>

      <div className="flex flex-row gap-10 bg-[#FAFAFA] w-full mt-10 mb-[61px] ml-[1px] p-10 rounded-[10px] shrink-0">
        <div className="flex flex-col">
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

        <div className="w-full flex flex-col gap-8">
          <p className="capitalize text-[32px] leading-[44.8px] -mt-[11px] -mb-[10px]">
            <span className="text-[#2C7EF8]">ONE TIME ONLY</span>
            &nbsp;special price for 6 extra Clarifion for only
            <span className="text-[#2C7EF8]">&nbsp;$14 each</span>
            &nbsp; ($84.00 total!)
          </p>
          <div className="w-full flex gap-6">
            <img
              src={clarifionImageBackgroundBlue}
              alt="clarifion image background blue"
              className="bg-[#2C7EF8] rounded-[10px]"
            />

            <div className="flex flex-col gap-[15px]">
              <div className="flex w-full justify-between h-4">
                <span className="text-xl -mt-[6.7px]">
                  Clarifion Air Ionizer
                </span>
                <div className="flex gap-2.5 font-semibold items-center">
                  <span className="text-[#969696] line-through decoration-1 decoration-[#969696]/50">
                    $180
                  </span>
                  <span className="text-[22px] text-[#2C7EF8]">$84</span>
                </div>
              </div>

              <div className="flex gap-0.5">
                <img
                  src={starRounded}
                  alt="rounded stars"
                  className="h-[18px]"
                />
                <img
                  src={starRounded}
                  alt="rounded stars"
                  className="h-[18px]"
                />
                <img
                  src={starRounded}
                  alt="rounded stars"
                  className="h-[18px]"
                />
                <img
                  src={starRounded}
                  alt="rounded stars"
                  className="h-[18px]"
                />
                <img
                  src={starRounded}
                  alt="rounded stars"
                  className="h-[18px]"
                />
              </div>

              <div className="flex gap-4 h-[22px] items-center">
                <img src={blueBullet} alt="blue bullet" className="h-4" />
                <span className="text-[#37465A] font-light">
                  12 left in Stock
                </span>
              </div>

              <p className="text-[#4D5254] leading-[22.4px] -mt-[6px] -mb-2">
                Simply plug a Clarifion into any standard outlet and replace
                bulky, expensive air purifiers with a simple.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <img src={tickBlue} alt="tick blue" />
              <span>
                Negative Ion Technology may
                <span className="font-bold">&nbsp;help with allergens</span>
              </span>
            </div>
            <div className="flex gap-3">
              <img src={tickBlue} alt="tick blue" />
              <span>
                Designed for
                <span className="font-bold">&nbsp;air rejuvenation</span>
              </span>
            </div>
            <div className="flex gap-3">
              <img src={tickBlue} alt="tick blue" />
              <span>
                <span className="font-bold">Perfect for every room</span>
                &nbsp;in all types of places.
              </span>
            </div>
          </div>

          <div className="bg-[#EDF3FD] flex gap-4 mr-2 py-3 px-4 rounded-[10px] items-center">
            <img src={percentageIcon} alt="percentage icon" />
            <span>
              Save
              <span className="text-[#2C7EF8]">&nbsp;53%</span>
              and get
              <span className="text-[#2C7EF8]">&nbsp;6 extra Clarifision</span>
              for only
              <span className="text-[#2C7EF8]">&nbsp;$14 Each.</span>
            </span>
          </div>

          <div className="flex flex-col mr-2">
            <div className="bg-[#59AE43] flex gap-[19.76px] uppercase text-xl text-white font-bold h-[59px] py-4 px-16 rounded-[50px] justify-center items-center">
              <span>Yes - Claim my discount</span>
              <img src={arrowRight} alt="arrow right" className="w-4" />
            </div>

            <div className="flex mt-3 mb-5 py-2 px-4 gap-[15px] text-xs text-[#4D5254] capitalize border-[1px] border-[#CFCFCF] rounded items-center">
              <span>Free shipping</span>
              <img src={verticalLine} alt="verical line" />
              <div className="flex gap-2">
                <img src={smallLock} alt="small lock" className="w-3" />
                <span>Secure 256-bit SSL encryption.</span>
              </div>
              <img src={verticalLine} alt="verical line" />
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
            <span className="uppercase underline text-lg text-[#F82C2C] font-medium self-center">
              No thanks, I don’t want this.
            </span>
          </div>

          <div className="flex gap-4 -mt-2">
            <img
              src={satisfactionGuaranteeStamp}
              alt="satisfaction guarantee stamp"
            />
            <p className="leading-[22.4px] text-[#4D5254] tracking-wide">
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
