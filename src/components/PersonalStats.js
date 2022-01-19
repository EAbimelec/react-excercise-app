import React from "react";
import StateBar from "./StateBar";
import "./PersonalStats.css";

function PersonalStats(props) {

  const statisticTypes = {};
  return(
    <div className="personal-stats">
      <h1>
        {props.characterName}
      </h1>
      <StateBar statisticType="physical-activity" label="Physical Activity" colorBar="#FF5403"/> 
      <StateBar statisticType="social-needs" label="Social Needs"/> 
      <StateBar statisticType="hygiene" label="Hygiene"/> 
      <StateBar statisticType="sleep" label="Sleep"/>
      <StateBar statisticType="thrist" label="Thirst"/>
      <StateBar statisticType="hedonism" label="Hedonism"/> 
    </div>
  );
}

export default PersonalStats;