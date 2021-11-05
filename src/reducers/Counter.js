const initialState = 0

export default (state = initialState, action = {})=>{
    switch (action.type){
        case 'increment':
            return state + 1
        break;
        case 'decrement':
            return state - 1
        break;
        case 'double':
            return state * 2
        break;
        case 'zero':
            return state = 0
        break;
    }
    return state;
}