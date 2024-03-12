import { twMerge } from "tailwind-merge";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useState } from "react";

import Text from "../ui/Text";
import Button from "../ui/Button";
import Input from "../ui/Input";

import loginbgpic from "../assets/Pictures/loginbgpic.jpg";
import SignupCards from "../ui/SignupCards";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPass, setSignUpPass] = useState("");

  const navigate = useNavigate();
  const handleSignUpSubmitBtn = () => {
    formValidate();
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleSignUpEmail = (e) => {
    setSignUpEmail(e.target.value);
  };
  const handleSignUpPass = (e) => {
    setSignUpPass(e.target.value);
  };

  const formValidate = () => {
    if (
      signUpEmail === "" ||
      signUpPass === "" ||
      firstName === "" ||
      lastName === ""
    ) {
      toast.error("Please Fill all the fields");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div>
      <div className=" flex flex-row h-screen w-screen mob:flex-col ">
        <div className=" relative h-screen w-[50%] mob:w-screen mob:h-1/2">
          <img
            className=" h-screen object-cover  mob:h-[50vh] w-full"
            src={loginbgpic}
            alt="bgpic"
          />
          <div className=" w-[100%] absolute bottom-6 top-3 text-primary flex flex-col justify-center items-center">
            <Text className=" text-[50px] font-bold ">
              <Link to="/">Welcome to</Link>
            </Text>
            <Text className="text-[100px] font-extrabold">
              <Link to="/">Reset</Link>
            </Text>
          </div>
        </div>
        <div className=" flex  justify-center w-[50%] py-20 mob:w-screen overflow-y-scroll no-scrollbar bg-black ">
          <div className="w-[100%] max-w-[350px]  mt-10 ">
            <Text className=" font-bold text-[40px] text-primary leading-[48px] mb-2">
              Sign Up
            </Text>
            <Text
              className={twMerge(
                "text-[16px] text-primary leading-[18px] font-semibold mb-6"
              )}
            >
              Already have an account?{" "}
              <span className=" underline underline-offset-4 text-[#ff7565]">
                <Link to="/login">Log In </Link>
              </span>
            </Text>
            <Text className="text-[16px] text-[#ff7565] uppercase leading-6 tracking-[1.6px] font-medium mb-2">
              Step 1
            </Text>
            <Text className="text-[24px] text-primary tracking-[-5%] capitalize leading-[32px] font-bold mb-6">
              Select Your Plan
            </Text>

            <SignupCards />

            <div className="text-[24px] text-primary tracking-[-5%] leading-[32px] font-bold mb-6">
              Create Your Account
            </div>

            <Input onChange={handleFirstName} placeholder="First Name"></Input>
            <Input onChange={handleLastName} placeholder="Last Name"></Input>
            <Input onChange={handleSignUpEmail} placeholder="Email"></Input>
            <Input
              onChange={handleSignUpPass}
              placeholder="Enter your Password"
            ></Input>

            <Button
              className="bg-accent w-[100%] mt-6 mb-4 max-h-[55px] py-[16px] text-primary font-semibold leading-6 text-center rounded-[16px] flex justify-center items-center"
              onClick={() => {
                handleSignUpSubmitBtn();
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
