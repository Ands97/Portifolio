
import { useStateValue } from '../contexts/stateContext';
import Codejs from '../images/codejs.jpg';
import Me from '../images/me.jpg';
import ButtonNext from './ButtonNext';
import Box from './Box';
import Form from './Form';
import App1 from '../images/app1.gif';
import App2 from '../images/app2.png';
import Site1 from '../images/site1.jpg';
import Site2 from '../images/site2.jpg';
import System1 from '../images/system1.png';
import { FaWhatsapp, FaInstagram, FaGithub } from "react-icons/fa";



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
                <div className='box-content'>
                    <Box name='SOBRE' />
                </div>
                <article>
                    <img src={Me} className='me' />
                    <main>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap into.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a type specimen
                            book. It has survived not only five centuries, but also the leap into.Lorem
                            Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make
                            a type specimen book. It has survived not only five centuries,
                            but also the leap into.
                        </p>
                    </main>
                </article>
            </section>
            <section className='projects'>
                <div className='box-content'>
                    <Box name='PROJETOS' />
                </div>
                <article className='optionsProject'>
                    <p className='selected'>TODOS</p>
                    <p>APPS</p>
                    <p>WEBSITES</p>
                    <p>SISTEMAS</p>
                </article>
                <div className='imgProjects'>
                    <img className='keyImg' src={App1} />
                    <img className='keyImg' src={Site1} />
                    <img className='keyImg' src={App2} />
                    <img className='keyImg site2' src={Site2} />
                    <img className='keyImg system1' src={System1} />
                </div>
            </section>
            <section className='contactSection'>

                <div className='box-content'>
                    <Box name='CONTATO' />
                </div>
                <div className='contact'>
                    <Form />
                    <div className='profile'>
                        <h1>Redes Sociais:</h1><br/>
                        <a target='blank' href='https://api.whatsapp.com/send?phone=5583986538971&text=Ol%C3%A1!'><FaWhatsapp />   (83) 98653-8971</a>
                        <a target='blank' href='https://www.instagram.com/anderson.afonso.dev/'><FaInstagram />   @anderson.afonso.dev</a>
                        <a target='blank' href='https://github.com/Ands97'><FaGithub />   https://github.com/Ands97</a>
                    </div>
                    <div className='profile-mobile'>
                        <h1>Redes Sociais:</h1><br/>
                        <a target='blank' href='https://api.whatsapp.com/send?phone=5583986538971&text=Ol%C3%A1!'><FaWhatsapp className='profile-icons' /></a>
                        <a target='blank' href='https://www.instagram.com/anderson.afonso.dev/'><FaInstagram className='profile-icons' /></a>
                        <a target='blank' href='https://github.com/Ands97'><FaGithub className='profile-icons' /></a>
                    </div>
                </div>
            </section>
        </>
    );
}
<div></div>
