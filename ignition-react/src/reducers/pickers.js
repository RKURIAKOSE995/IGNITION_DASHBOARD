
let from = new Date(2021, 9, 1);
// from.setMonth(from.getMonth() - 3);

const pickerState = {
    fromDate: from,
    toDate: new Date(),
    filterPressed: false,
};

const pickerReducer =  (state=pickerState, action) => {
    switch(action.type){
        case 'SET_FROM':
            console.log('SET_FROM');
            console.dir(action);
            return {...state, fromDate: action.date}
        case 'SET_TO':
            console.log('SET_TO');
            console.dir(action);
            return {...state, toDate: action.date}
        case 'TOGGLE_FILTER':
            console.log('TOGGLE_FILTER');
            return {...state, filterPressed: !state.filterPressed}
        default:
            return state;
    }
}

export default pickerReducer;