import { createDataset } from "src/utils/create-chart-dataset";

const chartState = {
    datasets: []
};

const chartReducer =  (state=chartState, action) => {
    switch(action.type){
        case 'SET_CHART_DATA':
            console.log('SET_CHART_DATA');
            console.dir(action);
            return {...state, datasets: action.data}
        case 'ADD_SENSOR_DATA':
            console.log('ADD_SENSOR_DATA');
            console.dir(action);
            return {...state, datasets:[...state.datasets, createDataset(action.data, action.sensorName, action.unit, action.itemId)]  }
        case 'REMOVE_SENSOR_DATA':
            console.log('REMOVE_SENSOR_DATA');
            console.dir(action);
            return {
                 ...state,
                datasets: state.datasets.filter((item) => item.id !== action.sensorName)
            }
        case 'RESET_SENSOR_DATA':
            return {...state, datasets:[]};
        default:
            return state;
    }
}

export default chartReducer;