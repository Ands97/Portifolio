import { useStateValue } from '../contexts/stateContext';
import { IoMenu } from "react-icons/io5";
import Logo from '../images/logo.png'

export default () => {
    const [state, dispatch] = useStateValue();
    return (
        <header >
            <div className='logo'>
                <img src={Logo} />
            </div>
            <div className='menu-burguer'>
                <IoMenu className='ioMenu' />
            </div>
            <nav className='menu'>
                <ul>
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Projetos</li>
                    <li className='key'>Contatos</li>
                </ul>
            </nav>
        </header>
    );
}

