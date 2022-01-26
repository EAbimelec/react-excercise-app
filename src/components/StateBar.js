import React from "react";
import styles from "./StateBar.module.css";

class StateBar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isFocused: false,
      needState: props.needState
    };
    this.barContainer = styles["bar-container"];
    this.handleClick = this.handleClick.bind(this);
    this.handleKeys = this.handleKeys.bind(this);
  }

  handleClick() {
    this.setState(previousState => ({
      isFocused: !previousState.isFocused
    }));
  }

  handleKeys(e) {
    
    if (this.state.isFocused === true) {
      if (e.code === "KeyJ" && this.state.needState > 0) {
        this.setState((state) => ({needState: state.needState - 1}));
      } else if(e.code === "KeyK" && this.state.needState < 100) {
        this.setState((state) => ({needState: state.needState + 1}));
      }
    }
  }

  render() {
    let color = this.props.colorBar;
    if (this.state.isFocused){
      color = "#FFF";
    }
    
    this.barState = {
      "--color": color,
      "--need-state": `${this.state.needState}%`
    };
    return(
      <div 
        style={this.barState} 
        className={this.barContainer}
        onClick={this.handleClick} 
        onKeyPress={this.handleKeys} 
        tabIndex="0"
      >

        <p>{this.props.label}</p>
        <div className={styles["state-bar"]}></div>
      </div>
    );
  }

}

export default StateBar;