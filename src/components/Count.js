import { useReducer } from "react"

const initialState = {
    count: 0
}

const reducer = (state, action)=>{
    switch(action.type){
        case 'increment':
            return {...state, count: state.count + 1}
        break;
        case 'decrement':
            return {...state, count: state.count - 1}
        break;
        case 'double':
            return {...state, count: state.count * 2}
        break;
        case 'zero':
            return {...state, count: 0}
        break;
    }

    return state;
}

export default ()=>{
    const [state, dispatch] = useReducer(reducer, initialState)
    return(
        <div>
            <button onClick={()=>dispatch({type:'increment'})}>+</button>
            <span>{state.count}</span>
            <button onClick={()=>dispatch({type:'decrement'})}>-</button>
            <button onClick={()=>dispatch({type:'double'})}>Dobrar</button>
            <button onClick={()=>dispatch({type:'zero'})}>Zerar</button>
        </div>
    );
};