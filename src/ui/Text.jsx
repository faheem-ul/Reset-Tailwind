import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";

function Text({ className, ...props }) {
  return (
    <div>
      <p {...props} className={twMerge(" font-poppins", className)}></p>
    </div>
  );
}

Text.propTypes = {
  className: PropTypes.string,
};

export default Text;
