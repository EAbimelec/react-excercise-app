import React from "react";
import StateBar from "./StateBar";
import styles from "./PersonalStats.module.css";

function PersonalStats(props) {

  const personalStats = styles["personal-stats"];
  const statisticTypes = {
    physicalHealth: {
      label:"Physical Health",
      colorBar:"#A13333",
      needState: `50%`
    },
    mentalHealth: {
      label:"Mental Health",
      colorBar:"#4FBDBA",
      needState: `20%`
    }
  };

  return(
    <div className={personalStats}>
      <h1>
        {props.characterName}
      </h1>
      
      <StateBar {...statisticTypes.physicalHealth}/> 
      <StateBar {...statisticTypes.mentalHealth}/> 
    </div>
  );
}

export default PersonalStats;