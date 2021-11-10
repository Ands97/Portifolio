import { useStateValue } from '../contexts/stateContext';
import { IoMenu } from "react-icons/io5";
import Logo from '../images/logo.png'

export default () => {
    const [state, dispatch] = useStateValue();
    
    return (
        <header >
            <div onClick={()=>{dispatch({type:'scrollHome'})}} className='logo'>
                <img src={Logo} />
            </div>
            <div className='menu-burguer'>
                <IoMenu className='ioMenu' />
            </div>
            <nav className='menu'>
                <ul>
                    <li onClick={()=>{dispatch({type:'scrollHome'})}} >Home</li>
                    <li onClick={()=>{dispatch({type:'scrollAbout'})}} >Sobre</li>
                    <li onClick={()=>{dispatch({type:'scrollProjects'})}} >Projetos</li>
                    <li onClick={()=>{dispatch({type:'scrollContacts'})}} className='key'>Contatos</li>
                </ul>
            </nav>
        </header>
    );
}

