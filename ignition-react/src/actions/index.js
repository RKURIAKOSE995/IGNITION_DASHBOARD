export const setArea = (area) => {
    return {
        type: 'SET_AREA',
        area: area
    }
}

export const setSelectedMap = (area) => {
    return {
        type: 'SET_SELECTED_MAP',
        map: area
    }
}

export const setAreaDescription = (area) => {
    return {
        type: 'SET_AREA_DESCRIPTION',
        map: area,
    }
}

export const setLabArea = (labArea) => {
    return {
        type: 'SET_LAB_AREA',
        labArea: labArea,
    }
}

export const setSensors = (sensors) => 
{
    return {
        type: 'SET_SENSORS',
        sensors: sensors,
    }
}

export const toggleSensor = (sensorName, sensorSelected) => {
    return {
        type: 'TOGGLE_SENSOR',
        value: sensorName,
        selected: sensorSelected,
    }
}

export const checkSelectedsensors = () => {
    return {
        type: 'CHECK_SELECTED_SENSORS'
    }
}

export const setFromDate = (date) => {
    return {
        type: 'SET_FROM',
        date: date
    }
}

export const setToDate = (date) => {
    return {
        type: 'SET_TO',
        date: date
    }
}

export const toggleFilter = () => {
    return {
        type: 'TOGGLE_FILTER'
    }
}

export const addSensorData = (data, sensorName, itemUnit, itemId) => {
    return {
        type: 'ADD_SENSOR_DATA',
        data: data,
        sensorName: sensorName,
        unit: itemUnit,
        itemId: itemId,

    }
}

export const removeSensorData = (sensorName) => {
    return {
        type: 'REMOVE_SENSOR_DATA',
        sensorName: sensorName,
    }
}

export const resetSensorData = () =>
{
    return {
        type: 'RESET_SENSOR_DATA'
    }
}

export const deselectAllSensors = () =>
{
    return {
        type: 'DESELECT_ALL_SENSORS'
    }
}