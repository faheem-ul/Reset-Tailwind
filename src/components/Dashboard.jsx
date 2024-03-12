import { Link, useNavigate } from "react-router-dom";

import Text from "../ui/Text";
import Button from "../ui/Button";
import AccountCard from "../ui/dashboardCards/AccountCard";
import ProfileCard from "../ui/dashboardCards/ProfileCard";
import PlanCard from "../ui/dashboardCards/PlanCard";
import PaymentCard from "../ui/dashboardCards/PaymentCard";
import cameraicon from "../assets/Pictures/cameraicon.jpg";
import androidsvg from "../assets/SVGs/Android.svg";
import iossvg from "../assets/SVGs/Ios.svg";
function Dashboard() {
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate("/");
  };

  return (
    <div className="bg-black">
      <div className="flex items-center justify-between py-6 px-[10%]">
        <div className="bg-yellow">
          <Text className="text-[40px] text-white font-bold">
            <Link to="/">Reset</Link>
          </Text>
        </div>
        <div className="bg-red">
          <Button
            className="bg-black text-[16px]  py-2 pr-3font-normal leading-6 tracking-[0.48px]"
            onClick={() => {
              handleLogOut();
            }}
          >
            Logout
          </Button>
        </div>
      </div>

      <div className="flex flex-col justify-center text-center">
        <div className=" relative flex justify-center text-center mt-[5%] ">
          <input
            type="file"
            className=" absolute left-[-30px] p-8 w-[110px] opacity-0 "
          />
          <img src={cameraicon} alt="" />
        </div>
        <Text className="text-[#1E2534] font-semibold py-2 text-xl">
          Welcome Trial
        </Text>
        <Text className=" text-white font-normal py-3 text-sm">
          Download the app below and login in with the same <br></br>{" "}
          creditentials you just used to create your account
        </Text>
        <div className=" flex justify-center my-3 gap-4">
          <img src={androidsvg} alt="" />
          <img src={iossvg} alt="" />
        </div>
      </div>

      <div className="flex mt-10 flex-wrap justify-center gap-10 bg-black">
        <div>
          <AccountCard />
          <ProfileCard />
        </div>
        <div>
          <PlanCard />
          <PaymentCard />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
