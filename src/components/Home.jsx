import { useNavigate } from "react-router-dom";

import Text from "../ui/Text";
import Hamburger from "../ui/Hamburger";

function Home() {
  const navigate = useNavigate();

  const handleHomeLoginbtn = () => {
    navigate("/login");
  };
  return (
    <div className="mainsection mob:bg-center ">
      <Hamburger />
      <div className=" flex justify-end gap-[30px] pt-5 pr-4 mob:hidden mob:pt-0">
        <button className=" font-poppins text-[16px] pr-2 font-medium leading-6 tracking-[0.48px]  text-primary">
          Support
        </button>
        <button
          className=" font-poppins text-[16px] flex justify-center items-center font-normal leading-6 tracking-[0.48px] h-[48px] w-[166px] rounded-[16px] text-center text-primary bg-accent"
          onClick={handleHomeLoginbtn}
        >
          Log In
        </button>
      </div>

      <div className=" mt-10  max-w-[650px] m-auto text-center mob:mt-0 ">
        <Text className=" text-[#ffffff] shadow-2xl font-extrabold text-[96px] mob:text-[60px] max-w-[650px] uppercase text-center mob:leading-[80px] mob:pt-44">
          Fitness For The Culture
        </Text>

        <Text className="font-normal text-[16px] text-primary leading-5">
          Get
          <span className=" font-bold"> ONE MONTH FREE </span>
          of Reset in celebration of Black History Month
        </Text>
        <button className="bg-accent text-primary rounded-2xl px-7 py-3 font-poppins font-semibold leading-[24px] mt-5">
          Claim One Month Free Now
        </button>
      </div>
    </div>
  );
}

export default Home;
