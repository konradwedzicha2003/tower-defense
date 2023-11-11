import React from "react";
import BasicTowerPick from "./basic-tower-pick/BasicTowerPick";
import MagicTowerPick from "./magic-tower-pick/MagicTowerPick";
import { useDispatch } from "react-redux";
import { pickTower, toggleBuildTowerView } from "../../../store/actions/tower-pick.actions";

const TowerPick = () => {

    const dispatch = useDispatch();

    const toggleBuildTowerViewFunc = (towerType) => {
        dispatch(toggleBuildTowerView());
        dispatch(pickTower(towerType))
    }

    return (
        <div className='tower-pick'>
            <BasicTowerPick openBuildTowerView={toggleBuildTowerViewFunc}/>
            <MagicTowerPick openBuildTowerView={toggleBuildTowerViewFunc}/>
        </div>
    )
  }
  
  export default TowerPick;
  