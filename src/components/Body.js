import Button from './Button';
import Count from './Count';
import { useStateValue } from '../contexts/stateContext';

export default () => {
    const [state, dispatch] = useStateValue();
    const handleButton = () => {
        dispatch({
            type: 'setName',
            name: 'Trocado'
        })
    }
    
    return (
        <article className={`box theme-${state.theme}`}>
            <Button />

            <button onClick={handleButton}>Trocar botão</button>
            <hr/>
            <Count/>    
            
            
        </article>
        
    );
}
