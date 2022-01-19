import React from "react";
import StateBar from "./StateBar";
import styles from "./PersonalStats.module.css";

function PersonalStats(props) {

  const personalStats = styles["personal-stats"] 
  const statisticTypes = {
    physicalActivity: {
      label:"PhysicalActivity",
      colorBar:"#FF5403"
    },
    socialNeeds: {
      label:"Social Needs",
      colorBar:"#FFE162"
    },
    hygiene: {
      label:"Hygiene",
      colorBar:"#F5F5F5"
    },
    sleep: {
      label:"Sleep",
      colorBar:"#683aad"
    },
    hedonism: {
      label:"Hedonism",
      colorBar:"#A13333"
    },
    thrist: {
      label:"Thrist",
      colorBar:"#4FBDBA"
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