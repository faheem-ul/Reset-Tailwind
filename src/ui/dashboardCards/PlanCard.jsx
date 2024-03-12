import Text from "../Text";

function PlanCard() {
  return (
    <div className="max-w-[450px] w-[100%] min-w-[450px] mt-6">
      <div className="flex justify-between items-center w-full">
        <Text className="text-xl font-bold leading-6 text-white">MyPlan</Text>
        <Text className="text-[#ff7565] leading-6 font-semibold  text-base">
          Edit
        </Text>
      </div>
      <div className="bg-[#161626]  rounded-[24px] shrink-0 px-6 py-6 mt-6 ">
        <div className="">
          <Text className="text-sm font-semibold leading-5 text-white">
            12 Month • <span className="text-[#ff7565] ">Best Deal</span>
          </Text>
          <Text className="text-sm font-semibold leading-5 text-white"></Text>
          <Text className="text-xs font-medium text-[#98A7C3]">
            Term expires March 5, 2025
          </Text>
        </div>
      </div>
    </div>
  );
}

export default PlanCard;
