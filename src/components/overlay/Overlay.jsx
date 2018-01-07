import React from "react";
import PropTypes from "prop-types";
import "./Overlay.scss";

const Overlay = ({ message, children }) => {
  return (
    <div className="overlay-root">
      <div className="text-container">
        <span>{message}</span>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

Overlay.propTypes = {
  message: PropTypes.string.isRequired
};

export default Overlay;
