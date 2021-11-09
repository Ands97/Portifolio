
import { useStateValue } from '../contexts/stateContext';
import Codejs from '../images/codejs.jpg'
import ButtonNext from './ButtonNext';
import Box from './Box';

export default () => {
    const [state, dispatch] = useStateValue();

    return (
        <>
        <section>
            <figure>
                <img className='codeimg' src={Codejs} />
                <div className='stacks'>
                    <h1>FULLSTACK WEB <br /> DEVELOPER</h1>
                    <aside>
                        <p>APPS</p>
                        <p>WEBSITES</p>
                        <p>SISTEMAS</p>
                    </aside>
                    <ButtonNext />
                </div>
            </figure>
        </section>
        <section className='about'>
            <Box name='SOBRE'/>
        </section>
        </>
    );
}
<div></div>
