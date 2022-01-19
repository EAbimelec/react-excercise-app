import React from "react";
import styles from "./StateBar.module.css";

function StateBar(props) {
  
  const barContainer = styles["bar-container"];
  const barState = {
    "--color": props.colorBar,
    "--need-state": props.needState
  }
  console.log(props.needState);
  return(
    <div style={barState} className={barContainer}>
      <p>{props.label}</p>
      <div className={styles["state-bar"]}></div>
    </div>
    
  );

}

export default StateBar;