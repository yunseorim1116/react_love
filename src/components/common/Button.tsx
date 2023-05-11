import React from 'react';

interface IProps {
  buttonText: string;
  handleClickFunction? : ()=>void
}

const Button = ({ buttonText, handleClickFunction } : IProps) => {
    return (
        <button onClick={handleClickFunction}>
            { buttonText }
        </button>
    );
};

export default Button;