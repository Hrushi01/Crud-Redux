import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      className="bg-indigo-600 mx-2 text-white py-2 px-6 my-10 rounded hover:bg-indigo-200"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
