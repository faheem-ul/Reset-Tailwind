import { useState } from "react";

import Text from "./Text";

import annaulsvg from "../assets/SVGs/annual.svg";
import starsvg from "../assets/SVGs/star.svg";
import marksvg from "../assets/SVGs/mark.svg";
import cardimage from "../assets/Pictures/Login-page-imagr.jpg";

function SignupCards() {
  const handlefirstcardExpand = () => {
    setFirstcardExpand(true);
    setSecondcardExpand(false);
  };
  const handlesecondcardExpand = () => {
    setFirstcardExpand(false);
    setSecondcardExpand(true);
  };
  const [firstcardExpand, setFirstcardExpand] = useState(true);
  const [secondcardExpand, setSecondcardExpand] = useState(false);
  return (
    <>
      <div
        className="flex border-2 border-[#ff7565] rounded-[20px] bg-[#161626] mb-6 cursor-pointer"
        onClick={handlefirstcardExpand}
      >
        <div className="py-4">
          <div className="px-6 font-bold text-sm leading-[18px]my-1 flex  items-center">
            <img src={annaulsvg} alt="" />
            <Text className=" font-extrabold uppercase text-white ml-2">
              Annual
            </Text>
          </div>
          <Text className="uppercase px-6 font-semibold text-sm leading-[18px] text-[#98A7C3] my-1">
            $9.99 USD/Per Month • BILLED ANNUALLY
          </Text>
          <Text className=" font-normal px-6 text-xs leading-[18px] mt-2 text-[#98A7C3]">
            At the end of your 30 day trial your subscription will automatically
            rollover to a $119.99/year subscription billed annually unless
            cancelled.
          </Text>
          <div className=" flex px-6 mt-3 mb-3 gap-1">
            <img src={starsvg} alt="" />
            <Text className="text-white font-medium">RECOMMENEDED</Text>
          </div>
          <div className="h-px my-1 mx-6 bg-gray-200 border-0 "></div>
          {firstcardExpand && (
            <>
              <div className=" flex px-6 gap-2 mt-3 mb-3 overflow-scroll no-scrollbar">
                <img
                  className=" h-[84px] w-[84px] object-cover rounded-2xl"
                  src={cardimage}
                  alt=""
                />
                <img
                  className=" h-[84px] w-[84px] object-cover rounded-2xl"
                  src={cardimage}
                  alt=""
                />
                <img
                  className=" h-[84px] w-[84px] object-cover rounded-2xl"
                  src={cardimage}
                  alt=""
                />
                <img
                  className=" h-[84px] w-[84px] object-cover rounded-2xl"
                  src={cardimage}
                  alt=""
                />
                <img
                  className=" h-[84px] w-[84px] object-cover rounded-2xl"
                  src={cardimage}
                  alt=""
                />
                <img
                  className=" h-[84px] w-[84px] object-cover rounded-2xl"
                  src={cardimage}
                  alt=""
                />
                <img
                  className=" h-[84px] w-[84px] object-cover rounded-2xl"
                  src={cardimage}
                  alt=""
                />
                <img
                  className=" h-[84px] w-[84px] object-cover rounded-2xl"
                  src={cardimage}
                  alt=""
                />
                <img
                  className=" h-[84px] w-[84px] object-cover rounded-2xl"
                  src={cardimage}
                  alt=""
                />
              </div>
              <div className="flex px-6 items-center gap-1 mb-2 ">
                <img src={marksvg} alt="" />
                <Text className=" text-white tracking-[-5%] capitalize  font-bold text-sm leading-[18px] ">
                  Choose Over 10 Million Branded Foods
                </Text>
              </div>
              <div className="flex px-6 items-center gap-1 mb-2 ">
                <img src={marksvg} alt="" />
                <Text className=" text-white tracking-[-5%] capitalize  font-bold text-sm leading-[18px]  ">
                  Choose Over 10 Million Branded Foods
                </Text>
              </div>
              <div className="flex px-6 items-center gap-1 mb-2 ">
                <img src={marksvg} alt="" />
                <Text className=" text-white tracking-[-5%] capitalize  font-bold text-sm leading-[18px]   ">
                  Wide Variety Of Delicious Recipes
                </Text>
              </div>
              <div className="flex px-6 items-center gap-1 mb-2 ">
                <img src={marksvg} alt="" />
                <Text className=" text-white tracking-[-5%] capitalize  font-bold text-sm leading-[18px]   ">
                  Access To Our Exclusive Community
                </Text>
              </div>
            </>
          )}
        </div>
      </div>

      <div
        className="flex border-2 border-[#ff7565] rounded-[20px] bg-[#161626] mb-6 cursor-pointer"
        onClick={handlesecondcardExpand}
      >
        <div className="py-4">
          <div className="px-6 font-bold text-sm leading-[18px]my-1 flex  items-center">
            <img src={annaulsvg} alt="" />
            <Text className=" font-extrabold uppercase text-white ml-2">
              Annual
            </Text>
          </div>
          <Text className="uppercase px-6 font-semibold text-sm leading-[18px] text-[#98A7C3] my-1">
            $9.99 USD/Per Month • BILLED ANNUALLY
          </Text>
          <Text className=" font-normal px-6 text-xs leading-[18px] mt-2 text-[#98A7C3]">
            At the end of your 30 day trial your subscription will automatically
            rollover to a $119.99/year subscription billed annually unless
            cancelled.
          </Text>
          <div className=" flex px-6 mt-3 mb-3 gap-1">
            <img src={starsvg} alt="" />
            <Text className="text-white font-medium">RECOMMENEDED</Text>
          </div>
          <div className="h-px my-1 mx-6 bg-gray-200 border-0 "></div>
          {secondcardExpand && (
            <>
              <div className=" flex px-6 gap-2 mt-3 mb-3 overflow-scroll no-scrollbar">
                <img
                  className=" h-[84px] w-[84px] object-cover rounded-2xl"
                  src={cardimage}
                  alt=""
                />
                <img
                  className=" h-[84px] w-[84px] object-cover rounded-2xl"
                  src={cardimage}
                  alt=""
                />
                <img
                  className=" h-[84px] w-[84px] object-cover rounded-2xl"
                  src={cardimage}
                  alt=""
                />
                <img
                  className=" h-[84px] w-[84px] object-cover rounded-2xl"
                  src={cardimage}
                  alt=""
                />
                <img
                  className=" h-[84px] w-[84px] object-cover rounded-2xl"
                  src={cardimage}
                  alt=""
                />
                <img
                  className=" h-[84px] w-[84px] object-cover rounded-2xl"
                  src={cardimage}
                  alt=""
                />
                <img
                  className=" h-[84px] w-[84px] object-cover rounded-2xl"
                  src={cardimage}
                  alt=""
                />
                <img
                  className=" h-[84px] w-[84px] object-cover rounded-2xl"
                  src={cardimage}
                  alt=""
                />
                <img
                  className=" h-[84px] w-[84px] object-cover rounded-2xl"
                  src={cardimage}
                  alt=""
                />
              </div>
              <div className="flex px-6 items-center gap-1 mb-2 ">
                <img src={marksvg} alt="" />
                <Text className=" text-white tracking-[-5%] capitalize  font-bold text-sm leading-[18px] ">
                  Choose Over 10 Million Branded Foods
                </Text>
              </div>
              <div className="flex px-6 items-center gap-1 mb-2 ">
                <img src={marksvg} alt="" />
                <Text className=" text-white tracking-[-5%] capitalize  font-bold text-sm leading-[18px]  ">
                  Choose Over 10 Million Branded Foods
                </Text>
              </div>
              <div className="flex px-6 items-center gap-1 mb-2 ">
                <img src={marksvg} alt="" />
                <Text className=" text-white tracking-[-5%] capitalize  font-bold text-sm leading-[18px]   ">
                  Wide Variety Of Delicious Recipes
                </Text>
              </div>
              <div className="flex px-6 items-center gap-1 mb-2 ">
                <img src={marksvg} alt="" />
                <Text className=" text-white tracking-[-5%] capitalize  font-bold text-sm leading-[18px]   ">
                  Access To Our Exclusive Community
                </Text>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default SignupCards;
