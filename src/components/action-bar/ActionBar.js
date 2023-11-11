import React from "react";
import './action-bar.scss'
import TowerPick from "./tower-pick/TowerPick";
import Money from "./money/Money";

const ActionBar = () => {
    return (
      <div className='action-bar'>
        <TowerPick/>
        <Money />
      </div>
    )
  }
  
  export default ActionBar;