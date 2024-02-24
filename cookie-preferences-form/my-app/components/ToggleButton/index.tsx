import React from "react";
import style from "./style.module.css";

function ToggleButton() {
  return (
    <div className="toggle">
      <label className={style.switch}>
        <input type="checkbox" />
        <span className={style.slider}></span>
      </label>
    </div>
  );
}

export default ToggleButton;
