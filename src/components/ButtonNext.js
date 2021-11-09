import { useStateValue } from "../contexts/stateContext";
import {HiArrowDown} from 'react-icons/hi';

export default () => {
    const [state, dispatch] = useStateValue();

    return (
        <div className='buttonNext'>
            <span>AVANÇAR</span>
            <HiArrowDown/>
        </div>
    );
}