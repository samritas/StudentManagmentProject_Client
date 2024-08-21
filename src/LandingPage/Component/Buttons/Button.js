import React from "react";

const Button = ({ type, onClick, children, className, Click, ...props }) => {
  return (
    <button
      className={
        "flex py-2 px-4 rounded text-primary text-center bg-redButton hover:bg-tealButton text-lg capitalize " +
        className
      }
      onClick={Click}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
