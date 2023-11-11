import React, { useRef, useEffect} from "react";
import './grid.scss';
import { useDispatch, useSelector } from "react-redux";
import { getGridCells } from "../../store/selectors/getGridCells";
import GridCell from "./grid-cell/GridCell";
import { basicEnemy, land } from "../../config/config";
import { createGrid } from "../../store/actions/grid.actions";
import { spawnEnemy } from "../../store/actions/enemies.actions";
import { timeIncrement } from "../../store/actions/time.actions";
import { getEnemies } from "../../store/selectors/getEnemies";
import { enemyKilled } from "../../store/actions/money.actions";

export const createGridCells = () => {
  const cells = [];
  
  for (let i = 1; i < 101; i++) {
    cells.push({cellNumber: i, 
      haveTower: false, 
      towerType: '', 
      towerRange: [],
    })
  }

  cells.forEach(cell => land.some(landNumber => landNumber === cell.cellNumber ? cell.isLand = true : cell.isLand = false));

  return cells;
}

export const getUniqueId = () => {
  const id = Math.random() * 10 * Math.random();
  return id;
}

const Grid = () => {
    const dispatch = useDispatch();
    const cells = useSelector(getGridCells);
    const enemies = useSelector(getEnemies);
    const enemiesRef = useRef(enemies);

    const spawnEnemyFunc = () => dispatch(spawnEnemy({id: getUniqueId(), ...basicEnemy}));

    useEffect(() => {
      dispatch(createGrid(createGridCells()));

      setTimeout(spawnEnemyFunc, 2200); 
      // setInterval(spawnEnemyFunc, 2400);

      setInterval(() => dispatch(timeIncrement()), 1000);


    },[dispatch]);


    useEffect(() => {

      if (enemiesRef.current.length > enemies.length ) {
        const killedEnemies = enemiesRef.current
        .filter(refEnemy => !enemies.some(enemy => enemy.id === refEnemy.id));
        
        killedEnemies.forEach(enemy => dispatch(enemyKilled(enemy.bounty)))
      };

      enemiesRef.current = [...enemies];


  },[enemies])


    return (
      <div className='grid'>
        {cells.map(cell => {
          return <GridCell 
              key={cell.cellNumber} 
              isLand={cell.isLand} 
              cellNumber={cell.cellNumber}
              haveTower={cell.haveTower}
              towerType={cell.towerType}
              towerRange={cell.towerRange}
            />
        })}
      </div>
    )
}

export default Grid