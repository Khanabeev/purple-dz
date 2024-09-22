import "./Button.css";
import PropTypes from "prop-types";

function Button({ text, onClick }) {
  return <button className="button" onClick={onClick}>{text}</button>;
}

export default Button;
