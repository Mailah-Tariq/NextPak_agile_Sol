import React from 'react';
import './CallButton.css';

const CallButton = ({ onClick }) => (
  <button className="call-button" onClick={onClick}>
    📞
  </button>
);

export default CallButton;