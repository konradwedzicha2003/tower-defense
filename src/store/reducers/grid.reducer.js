import { initialReduxValues } from "../../config/config";

const grid = (state = initialReduxValues.grid, action) => {
    switch (action.type) {
        case "CREATE_GRID":
            return {
                gridCells: action.payload
            }
        case "BUILD_TOWER":
            return {
                gridCells: state.gridCells.map(el => el.cellNumber === action.id ? {...el, haveTower: true, towerType: action.payload} : {...el})
            }
        case "ENEMY_CHANGED_POSITION":
            return {
                gridCells: state.gridCells.map(el => el.cellNumber === action.id ? {...el, currentEnemyId: action.payload} : {...el})
            }
        default:
            return state
    }
}

export default grid