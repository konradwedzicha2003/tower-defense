import { initialReduxValues } from "../../config/config";

const towers = (state = initialReduxValues.towers, action) => {
    switch (action.type) {
        case "TOWER_CHECK_ENEMIES_AROUND":
            return {
                towerList: state.towerList.map(tower => tower.id === action.id ? {...tower, towerRange: action.payload} : {...tower})
            }

        case "BUILD_TOWER":
            return {
                towerList: [
                    ...state.towerList,
                    {
                        id: action.id,
                        towerType: action.payload,
                        towerRange: [],
                    }
                ]
            }

        default:
            return state
    }
}

export default towers