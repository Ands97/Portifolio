import Button from './Button';
import { useStateValue } from '../contexts/stateContext';

export default () => {
    const [state, dispatch] = useStateValue();
    return (
        <aside className={`box theme-${state.theme}`}>
            <Button />
        </aside>
    )
}

