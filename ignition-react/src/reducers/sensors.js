const sensorsState = {
    sensors: [],
    hasSelectedSensors: false,
};

const sensorReducer =  (state=sensorsState, action) => {
    switch(action.type){
        case 'TOGGLE_SENSOR':
            console.log('TOGGLE_SENSOR');
            let newArray = state.sensors;

            return {...state, sensors: newArray.map(sensor => {
                console.dir(sensor.value === action.value);
                if (sensor.value === action.value){
                    sensor.selected = action.selected;
                }

                return sensor;
            })};
        case 'SET_SENSORS':
            console.log(`SET_SENSORS ${action.sensors}`);
            return {...state, sensors: action.sensors.map(item => {
                return { ...item, selected: false};
            }) };
        case 'CHECK_SELECTED_SENSORS':
            console.log('CHECK SELECTED SENSORS');
            let hasSelected = false;
            state.sensors.forEach(sensor => {
                if(sensor.selected) hasSelected = true;
            });

            return {...state, hasSelectedSensors: hasSelected};
        case 'DESELECT_ALL_SENSORS':
            console.log('DESELECT_ALL_SENSORS');
            return {...state, sensors: state.sensors.map(item => {
                return { ...item, selected: false};
            }) };

            console.dir(state.sensors);
            
        default:
            return state;
    }
}

export default sensorReducer;