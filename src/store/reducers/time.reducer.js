import { initialReduxValues } from "../../config/config";

const time = (state = initialReduxValues.time, action) => {
    switch (action.type) {
        case "TIME_INCREMENT":
            return state + 1;
        default:
            return state
    }
}

export default time