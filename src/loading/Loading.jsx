import React from "react";
import style from "../loading/Spinner.module.css";
function Loading() {
  return (
    <div>
      <div className={style.center}>
        <div className={style.ring}></div>
        <span>loading...</span>
      </div>
    </div>
  );
}

export default Loading;
