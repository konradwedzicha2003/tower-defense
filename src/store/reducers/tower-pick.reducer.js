import { initialReduxValues } from "../../config/config";

const towerPick = (state = initialReduxValues.towerPick, action) => {
    switch (action.type) {
        case "TOGGLE_BUILD_TOWER_VIEW":
            return {
                ...state,
                isBuildTowerViewOpened: !state.isBuildTowerViewOpened,
            }
        case "PICK_TOWER":
            return {
                ...state,
                pickedTower: action.payload,
            }

        default:
            return state
    }
}

export default towerPick