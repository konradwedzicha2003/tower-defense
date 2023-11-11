import { initialReduxValues, path} from "../../config/config";

const enemies = (state = initialReduxValues.enemies, action) => {
    switch (action.type) {
        case "SPAWN_ENEMY":
            return [
                ...state,
                {
                    ...action.payload,
                }
            ]

        case "MOVE_ENEMY":
            return state.map(enemy => enemy.id === action.id ? {
                ...enemy, 
                position: action.payload.position,
                direction: action.payload.direction,
                initialRender: action.payload.initialRender,
                step: enemy.step + 1,
                positionIndexInPath: path.indexOf(action.payload.position),
            } 
            : {...enemy})

        case "SHOOT_ENEMY":
            if (state.find(enemy => enemy.id === action.id && enemy.health - action.payload <= 0)) {
                return state.filter(enemy => enemy.id !== action.id )
            } else {
                return state.map(enemy => enemy.id === action.id ? {
                    ...enemy, 
                    health: enemy.health - action.payload
                } 
                : {...enemy})
            }
                  
        default:
            return state
    }
}

export default enemies