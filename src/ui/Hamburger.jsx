import { Twirl } from "hamburger-react";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

function Hamburger() {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleHomeLoginbtn = () => {
    navigate("/login");
  };
  return (
    <div className=" hidden mob:block">
      <Twirl direction="right" toggled={isOpen} toggle={setOpen} />
      {isOpen && (
        <div className=" relative bottom-12 rounded-b-3xl flex flex-col justify-center items-center gap-4 pt-12 mob:w-full mob:h-44 bg-[#2C2C3E]">
          <button className=" font-poppins text-[16px] pr-2 font-medium leading-6 tracking-[0.48px]  text-white">
            Support
          </button>
          <button
            className=" font-poppins text-[16px] flex justify-center items-center font-normal leading-6 tracking-[0.48px] h-[48px] w-[166px] rounded-[16px] text-center text-white bg-[#ff7565]"
            onClick={handleHomeLoginbtn}
          >
            Log In
          </button>
        </div>
        // </div>
      )}
    </div>
  );
}

export default Hamburger;
