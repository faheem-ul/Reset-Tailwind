import Text from "../Text";
function PaymentCard() {
  return (
    <div className="max-w-[450px] w-[100%] min-w-[450px] mt-6">
      <div className="flex justify-between items-center w-full">
        <Text className="text-xl font-bold leading-6 text-white">
          My Payment Method
        </Text>
        <Text className="text-[#ff7565] leading-6 font-semibold  text-base">
          Edit
        </Text>
      </div>
      <div className="bg-[#161626]  rounded-[24px] shrink-0 px-6 py-6 mt-6 ">
        <div className="flex justify-between items-center w-full">
          <Text className="text-sm font-semibold leading-5 text-white">
            Payment Method
          </Text>
          <Text className="text-sm font-semibold leading-5 text-white"></Text>
        </div>
        <div className="h-px my-5 bg-gray-200 border-0 "></div>
        <div className="flex justify-between items-center w-full">
          <Text className="text-sm font-semibold leading-5 text-white">
            Card Number
          </Text>
          <Text className="text-sm font-semibold leading-5 text-white"></Text>
        </div>
        <div className="h-px my-5 bg-gray-200 border-0 "></div>
        <div className="flex justify-between items-center w-full">
          <Text className="text-sm font-semibold leading-5 text-white">
            Expiry Date
          </Text>
          <Text className="text-sm font-semibold leading-5 text-white"></Text>
        </div>
        <div className="h-px my-5 bg-gray-200 border-0 "></div>
        <div className="flex justify-between items-center w-full">
          <Text className="text-sm font-semibold leading-5 text-white">
            Email
          </Text>
        </div>
      </div>
    </div>
  );
}

export default PaymentCard;
