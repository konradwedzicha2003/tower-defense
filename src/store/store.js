import {createStore, combineReducers} from "redux";
import grid from "./reducers/grid.reducer";
import enemies from './reducers/enemies.reducer'
import towerPick from "./reducers/tower-pick.reducer";
import money from "./reducers/money.reducer";
import towers from "./reducers/towers.reducer";
import time from "./reducers/time.reducer";

export const allReducers = combineReducers({
    grid,
    enemies,
    towerPick,
    money,
    towers,
    time,
})  

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store