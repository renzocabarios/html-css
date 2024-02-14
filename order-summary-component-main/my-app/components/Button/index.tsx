import React from "react";
import style from "./style.module.css";

function Button({ children }: any) {
  return (
    <button className=" bg-blue-700 text-white p-3 rounded-lg w-full">
      {children}
    </button>
  );
}

export default Button;
