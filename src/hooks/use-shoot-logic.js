import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGridCells } from "../store/selectors/getGridCells";
import { getEnemies } from "../store/selectors/getEnemies";
import { defineCellsInRange } from "../helpers/define-cells-in-range";
import { checkEnemiesAround } from "../store/actions/towers.actions";

export const useShootLogic = ({shootEnemyFunc, towerPosition, towerRange}) => {
    const dispatch = useDispatch(); 
    const gridCells = useSelector(getGridCells);
    const time = useSelector(state => state.time);
    const enemies = useSelector(getEnemies);
    const towerRangeCells = useSelector(state => state.towers.towerList.find(cell => cell.id === towerPosition)?.towerRange)
    const [currentGridCells, setCurrentGridCells] = useState(gridCells);

    useEffect(() => {
        setCurrentGridCells(gridCells)
    },[time]);

    useEffect(() => {
        dispatch(checkEnemiesAround(towerPosition, defineCellsInRange(towerPosition, currentGridCells, towerRange)))
    },[currentGridCells]);

    useEffect(() => {

        const enemiesInRange = enemies.filter(enemy => towerRangeCells.some(cell => cell.cellNumber === enemy.position));
        const farthestEnemy = enemiesInRange.sort((enemyA,enemyB) => enemyB.positionIndexInPath - enemyA.positionIndexInPath)[0]
        shootEnemyFunc(farthestEnemy)

    },[towerRangeCells]);
};