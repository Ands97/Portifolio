import { useStateValue } from '../contexts/stateContext';

export default () => {
    const [state, dispatch] = useStateValue();
    return (
        <header className={`box theme-${state.theme}`}>
            {state.theme === 'light' && <label className='switch'>
                <input type='checkbox' onChange={()=>dispatch({type: 'setTheme', theme:'dark' })} />
                <span className='slider'></span>
            </label> }
            {state.theme === 'dark' && <label className='switch'>
                <input type='checkbox' checked onChange={()=>dispatch({type: 'setTheme', theme: 'light'})} />
                <span className='slider'></span>
            </label>}
            
        </header>
    );
}

