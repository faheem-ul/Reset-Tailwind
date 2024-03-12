import { Link, useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { toast } from "react-toastify";

import Text from "../ui/Text";
import Input from "../ui/Input";
import Button from "../ui/Button";
import loginbgpic from "../assets/Pictures/loginbgpic.jpg";
import { useState } from "react";

function Login() {
  const [LoginEmail, setEmail] = useState("");
  const [LoginPassword, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginSubmitBtn = () => {
    formValidateLogin();
  };

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handlePassInput = (e) => {
    setPassword(e.target.value);
  };

  const formValidateLogin = () => {
    if (LoginEmail === "" || LoginPassword === "") {
      toast.error("Please fill all the fields");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className=" flex flex-row mob:flex-col h-screen w-screen ">
      <div className=" relative h-screen w-[50%] mob:h-1/2 mob:w-full">
        <img
          className=" h-screen object-cover mob:h-[50vh] w-full "
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
      <div className=" flex flex-col justify-center items-center h-screen w-[50%] mob:h-1/2 mob:w-full bg-secondary ">
        <div className="w-[100%] max-w-[350px]  mt-10 ">
          <Text className=" font-bold text-[40px] text-primary leading-[48px] mb-2">
            Log In
          </Text>
          <Text
            className={twMerge(
              "text-[16px] text-primary leading-[18px] font-semibold mb-6"
            )}
          >
            You don’t have an account?{" "}
            <span className=" underline underline-offset-4 text-accent">
              <Link to="/signup">Sign Up </Link>
            </span>
          </Text>

          <Input onChange={handleEmailInput} placeholder="Email"></Input>
          <Input
            onChange={handlePassInput}
            placeholder="Enter your Password"
          ></Input>
          <Text className="text-accent text-[13px] font-semibold underline leading-5 underline-offset-4">
            Forgot Password?
          </Text>
          <Button
            type="submit"
            className="bg-accent w-[100%] mt-6 mb-4 max-h-[55px] py-[16px] text-primary font-semibold leading-6 text-center rounded-[16px] flex justify-center items-center"
            onClick={() => {
              handleLoginSubmitBtn();
            }}
          >
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
