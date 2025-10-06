import PropTypes from "prop-types";
import { Children } from "react";

const Button = ({children, onClick}) => {
    return <button className = "btn btn-primary" onClick={onClick}>{children}</button>
}

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func
};
export default Button;