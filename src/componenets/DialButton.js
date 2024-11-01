import React from 'react';
//import './DialButton.css';
//import '../assets/css/DialButton.css'

const DialButton = ({ digit, onClick }) => (
  <button className="dial-button" onClick={() => onClick(digit)}>
    {digit}
    <span className="letters">{getLetters(digit)}</span>
  </button>
);

const getLetters = (digit) => {
  const letters = {
    1: '',
    2: 'ABC',
    3: 'DEF',
    4: 'GHI',
    5: 'JKL',
    6: 'MNO',
    7: 'PQRS',
    8: 'TUV',
    9: 'WXYZ',
    0: '+',
    '*': '',
    '#': '',
  };
  return letters[digit] || '';
};

export default DialButton;