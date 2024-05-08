import areaReducer from "./area";
import sensorReducer from "./sensors";
import { combineReducers } from "redux";
import pickerReducer from "./pickers";
import chartReducer from "./charts";

const allReducers = combineReducers({
    areas: areaReducer,
    sensors: sensorReducer,
    pickers: pickerReducer,
    charts: chartReducer,
})

export default allReducers;