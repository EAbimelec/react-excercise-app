import React from "react";
import styles from "./StateBar.module.css";

class StateBar extends React.Component {

  // barContainer = styles["bar-container"];

  constructor(props){
    super(props);
    this.barContainer = styles["bar-container"];
  }

  render() {
    this.barState = {
      "--color": this.props.colorBar,
      "--need-state": this.props.needState
    };
    return(
      <div style={this.barState} className={this.barContainer}>
        <p>{this.props.label}</p>
        <div className={styles["state-bar"]}></div>
      </div>
    );
  }

}

export default StateBar;