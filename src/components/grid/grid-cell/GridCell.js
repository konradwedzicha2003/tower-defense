import React, { useEffect } from "react";
import './grid-cell.scss'
import { useDispatch, useSelector } from "react-redux";
import { getEnemies } from "../../../store/selectors/getEnemies";
import { getIsBuildTowerViewOpened } from "../../../store/selectors/getIsBuildTowerViewOpened";
import { getPickedTower } from "../../../store/selectors/getPickedTower";
import { toggleBuildTowerView } from "../../../store/actions/tower-pick.actions";
import { buildTower } from "../../../store/actions/grid.actions";
import { buyTower } from "../../../store/actions/money.actions";
import Enemy from "../../enemies/Enemy";
import BasicTower from "../../towers/basic-tower/BasicTower";
import { getMoney } from "../../../store/selectors/getMoney";
import { towerTypes } from "../../../config/config";
import MagicTower from "../../towers/magic-tower/MagicTower";
import { addTower } from "../../../store/actions/towers.actions";

const GridCell = ({isLand, cellNumber, haveTower, towerType}) => {

    const dispatch = useDispatch();
    const isBuildTowerViewOpened = useSelector(getIsBuildTowerViewOpened);
    const pickedTower = useSelector(getPickedTower);
    const enemies = useSelector(getEnemies);
    const currentEnemy = enemies.find(enemy => enemy.position === cellNumber);
    const money = useSelector(getMoney);

    const buildTowerFunc = () => { 
      if (haveTower || !isLand || !isBuildTowerViewOpened || money <= 0) return;
      dispatch(toggleBuildTowerView());
      dispatch(buyTower(pickedTower.cost));
      dispatch(buildTower(cellNumber, pickedTower.name));
      dispatch(addTower(cellNumber, pickedTower.name));
    }

    const getTowerType = () => {
      switch (towerType) {
        case towerTypes.basicTower.name:
          return <BasicTower position={cellNumber}/>
        case towerTypes.magicTower.name:
          return <MagicTower position={cellNumber}/>
        default:
          return ''
      }
    }

    return (
      <button 
        onClick={buildTowerFunc}
        className={`grid-cell ${
          isLand ? 'grid-cell__land' : ''} ${
          haveTower && isBuildTowerViewOpened && !isLand ? 'grid-cell__occupied' : ''}${
          !haveTower && isBuildTowerViewOpened && isLand ? 'grid-cell__free' : ''} `}
          style={currentEnemy ? {background: 'yellow'} : {}}
        value={cellNumber}
      >
        {haveTower && getTowerType()}
        {currentEnemy ? 
        <Enemy 
          id={currentEnemy.id} 
          position={currentEnemy.position} 
          direction={currentEnemy.direction} 
          initialRender={currentEnemy.initialRender}
          health={currentEnemy.health}
          bounty={currentEnemy.bounty}
        /> 
        : null}
      </button>
    )
  }
  
  export default GridCell;
  