import PropTypes from "prop-types";
import { Children } from "react";

const Button = ({ children, onClick, className = "btn btn-primary" }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
export default Button;