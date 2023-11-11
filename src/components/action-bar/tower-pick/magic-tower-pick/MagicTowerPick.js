import React from "react";
import './magic-tower-pick.scss';
import { towerTypes } from "../../../../config/config";

const MagicTowerPick = ({openBuildTowerView}) => {

    const onPickTowerHandler = () => {
        openBuildTowerView(towerTypes.magicTower);
    };

    return (
        <div className={'magic-tower-pick'} onClick={onPickTowerHandler}>
            MAGIC TOWER
        </div>
    )
  }
  
  export default MagicTowerPick; 
  