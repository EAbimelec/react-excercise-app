import React from "react";
import StateBar from "./StateBar";
import styles from "./PersonalStats.module.css";

function PersonalStats(props) {

  const personalStats = styles["personal-stats"];
  const needStates = [10, 50, 35, 25, 30, 2];
  const statisticTypes = {
    physicalActivity: {
      label:"PhysicalActivity",
      colorBar:"#FF5403",
      needState: `${needStates[0]}%`
    },
    socialNeeds: {
      label:"Social Needs",
      colorBar:"#FFE162",
      needState: `${needStates[1]}%`
    },
    hygiene: {
      label:"Hygiene",
      colorBar:"#F5F5F5",
      needState: `${needStates[2]}%`
    },
    sleep: {
      label:"Sleep",
      colorBar:"#683aad",
      needState: `${needStates[3]}%`
    },
    hedonism: {
      label:"Hedonism",
      colorBar:"#A13333",
      needState: `${needStates[4]}%`
    },
    thrist: {
      label:"Thrist",
      colorBar:"#4FBDBA",
      needState: `${needStates[5]}%`
    }
  };

  return(
    <div className={personalStats}>
      <h1>
        {props.characterName}
      </h1>
      
      <StateBar {...statisticTypes.physicalActivity}/> 
      <StateBar {...statisticTypes.socialNeeds}/> 
      <StateBar {...statisticTypes.hygiene}/> 
      <StateBar {...statisticTypes.sleep}/>
      <StateBar {...statisticTypes.hedonism}/>
      <StateBar {...statisticTypes.thrist}/> 
    </div>
  );
}

export default PersonalStats;