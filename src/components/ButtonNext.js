import { useStateValue } from "../contexts/stateContext";
import {HiArrowDown} from 'react-icons/hi';

export default () => {
    const [state, dispatch] = useStateValue();

    return (
        <div onClick={()=>{dispatch({type:'scrollAbout'})}} className='buttonNext'>
            <span>AVANÇAR</span>
            <HiArrowDown/>
        </div>
    );
}