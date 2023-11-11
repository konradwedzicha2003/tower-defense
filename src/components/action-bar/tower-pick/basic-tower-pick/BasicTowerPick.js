import React from "react";
import './basic-tower-pick.scss';
import { towerTypes } from "../../../../config/config";

const BasicTowerPick = ({openBuildTowerView}) => {

    const onPickTowerHandler = () => {
        openBuildTowerView(towerTypes.basicTower);
    };

    return (
        <div className={'basic-tower-pick'} onClick={onPickTowerHandler}>
            BASIC TOWER
        </div>
    )
  }
  
  export default BasicTowerPick; 
  