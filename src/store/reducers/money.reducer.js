import { initialReduxValues } from "../../config/config";

const money = (state = initialReduxValues.money, action) => {
    switch (action.type) {
        case "BUY_TOWER":
            return state - action.payload;
        case "ENEMY_KILLED":
            return state + action.payload;
        default:
            return state
    }
}

export default money