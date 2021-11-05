import { useStateValue } from "../contexts/stateContext";
export default ()=>{
    const [state, dispatch] = useStateValue()
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