// import React from "react";
import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";

function Button({ className, ...props }) {
  return (
    <div>
      <button
        {...props}
        className={twMerge(" text-white bg-[#FF757F] rounded-lg", className)}
      ></button>
    </div>
  );
}

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;
