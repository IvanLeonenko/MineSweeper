import React from "react";
import PropTypes from "prop-types";
import "./Overlay.scss";

const Overlay = ({ message }) => {
  return (
    <div className="overlay-root">
      <div className="text-container">
        <span>{message}</span>
      </div>
    </div>
  );
};

Overlay.propTypes = {
  message: PropTypes.string.isRequired
};

export default Overlay;
