import React from "react";
import style from "./style.module.css";

interface IButton {
  children: any;
}

function Button({ children }: IButton) {
  return <button className={`${style.container}`}>{children}</button>;
}

export default Button;
