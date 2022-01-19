import React from "react";
import styles from "./StateBar.module.css";

function StateBar(props) {
  
  const barContainer = styles["bar-container"];
  const colorBar = {"--color": props.colorBar};
  
  return(
    <div style={colorBar} className={barContainer}>
      <p>{props.label}</p>
      <div className={styles["state-bar"]}></div>
    </div>
    
  );

}

export default StateBar;