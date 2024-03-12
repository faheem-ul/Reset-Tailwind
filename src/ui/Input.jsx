import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";
function Input({ className, ...props }) {
  return (
    <div>
      <input
        {...props}
        className={twMerge(
          "w-[100%] h-[56px] py-2 px-6 rounded-[22px] bg-[#161626] text-[#98A7C3] font-poppins font-medium leading-6 mb-4 login-input",
          className
        )}
      ></input>
    </div>
  );
}

Input.propTypes = {
  className: PropTypes.string,
};

export default Input;
