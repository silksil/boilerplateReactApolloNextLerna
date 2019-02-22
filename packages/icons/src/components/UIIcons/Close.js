import React from "react";
import PropTypes from "prop-types";

const Close = ({ color, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 25 25"
    aria-label="sluiten"
  >
    <path
      fillRule="evenodd"
      strokeWidth="1.5"
      d="M12.5 11.6L19.1 5l.9.9-6.6 6.6 6.6 6.6-.9.9-6.6-6.6L5.9 20l-.9-.9 6.6-6.6L5 5.9l.9-.9 6.6 6.6z"
      fill={color}
      stroke={color}
    />
  </svg>
);

Close.defaultProps = {
  color: "#FFF",
  size: "25px"
};

Close.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string
};

export default Close;
