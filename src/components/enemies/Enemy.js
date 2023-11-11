import React, {useEffect, useRef} from "react";
import './enemy.scss'
import { useDispatch, useSelector } from "react-redux";
import { path } from "../../config/config";
import { moveEnemy } from "../../store/actions/enemies.actions";
import { getGridCells } from "../../store/selectors/getGridCells";
import { changeEnemyPosition } from "../../store/actions/grid.actions";

const Enemy = ({id, position, initialRender, health}) => {

    const dispatch = useDispatch();
    const gridCells = useSelector(getGridCells);

    const currentPositionIndex = path.findIndex(pathPosition => pathPosition === position);
    const nextPosition = path[currentPositionIndex + 1];
    const newDirection = 
        initialRender ? 'init'
        : position - 10 === nextPosition ? 'up' 
        : position + 10 === nextPosition ? 'down' 
        : position + 1 === nextPosition ? 'right' 
        : position - 1 === nextPosition ? 'left' 
        : ''

    const enemyMove = () => {
        dispatch(moveEnemy(id, {position: nextPosition, direction: newDirection, initialRender: false}));
    }

    useEffect(() => {
        initialRender ? setTimeout(enemyMove, 2000) : setTimeout(enemyMove, 1000);

        const currentGridCell = gridCells.find(gridCell => gridCell.cellNumber === position)

        dispatch(changeEnemyPosition(currentGridCell.cellNumber, id))
        
        return () => dispatch(changeEnemyPosition(currentGridCell.cellNumber, 0))
      },[]);

    return (
        <div className={`enemy enemy--move-${newDirection}`}>
            <div className="enemy__health" style={{width: `${health}rem`}}></div>
        </div>
    )
  }
  
  export default Enemy;
  