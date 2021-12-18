import { useStateValue } from '../contexts/stateContext';
import { useState } from 'react';
import Codejs from '../images/codejs.jpg';
import Me from '../images/me.jpg';
import ButtonNext from './ButtonNext';
import Box from './Box';
import Form from './Form';
import Calculator from '../images/calculator.gif';
import Todolist from '../images/Todolist.gif'
import WppClone from '../images/WppClone.gif';
import javascriptlogo from '../images/javascriptlogo.png';
import nodejs from '../images/nodejs.png';
import reactjs from '../images/reactjs.png';
import mongodb from '../images/mongodb.png'
import { FaWhatsapp, FaInstagram, FaGithub } from "react-icons/fa";



export default () => {
    const [option1, setOption1] = useState('selected')
    const [option2, setOption2] = useState('')
    const [option3, setOption3] = useState('')
    const [option4, setOption4] = useState('')
    const [showProjects1, setShowProjects1] = useState(true);
    const [showProjects2, setShowProjects2] = useState(false);
    const [showProjects3, setShowProjects3] = useState(false);
    const [showProjects4, setShowProjects4] = useState(false);

    const handleSelected1 = ()=>{
        if(option1 === ''){
            setOption1('selected');
            setOption2('');
            setOption3('');
            setOption4('');
            setShowProjects1(true);
            setShowProjects2(false);
            setShowProjects3(false);
            setShowProjects4(false);
        }
    }
    const handleSelected2 = ()=>{
        if(option2 === ''){
            setOption2('selected');
            setOption1('');
            setOption3('');
            setOption4('');
            setShowProjects2(true);
            setShowProjects1(false);
            setShowProjects3(false);
            setShowProjects4(false);
        }
    }
    const handleSelected3 = ()=>{
        if(option3 === ''){
            setOption3('selected');
            setOption2('');
            setOption1('');
            setOption4('');
            setShowProjects3(true);
            setShowProjects2(false);
            setShowProjects1(false);
            setShowProjects4(false);
        }
    }
    const handleSelected4 = ()=>{
        if(option4 === ''){
            setOption4('selected');
            setOption2('');
            setOption3('');
            setOption1('');
            setShowProjects4(true);
            setShowProjects2(false);
            setShowProjects3(false);
            setShowProjects1(false);
        }
    }
    return (
        <>
            <section>
                <figure>
                    <img alt='codeimage' className='codeimg' src={Codejs} />
                    <div className='stacks'>
                        <h1>FULLSTACK WEB <br /> DEVELOPER</h1>
                        <aside>
                            <p>APPS</p>
                            <p>WEBSITES</p>
                            <p>SISTEMAS</p>
                        </aside>
                        <ButtonNext/>
                    </div>
                </figure>
            </section>
            <section className='about'>
                <div className='box-content'>
                    <Box name='SOBRE' />
                </div>
                <article>
                    <img alt='myimage' src={Me} className='me' />
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
                        <p>
                        It has survived not only five centuries, but also the leap into.Lorem
                            Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make
                            a type specimen book. It has survived not only five centuries,
                            but also the leap into.
                        </p>
                    </main>
                </article>
            </section>
            <section>

                <div className='box-content'>
                    <Box name='STACKS' />
                </div>
                <div className='imgProjects'>
                            <div className='imgFile-stacks'>
                                <img alt='JS' className='keyImg-stacks-js' src={javascriptlogo}/>
                            </div>
                            <div className='imgFile-stacks'>
                                <img alt='JS' className='keyImg-stacks' src={nodejs}/>
                            </div>
                            <div className='imgFile-stacks'>
                                <img alt='JS' className='keyImg-stacks' src={reactjs}/>
                            </div>
                            <div className='imgFile-stacks'>
                                <img alt='JS' className='keyImg-stacks-js' src={mongodb}/>
                            </div>     
                </div>


            </section>
            <section className='projects'>
                <div className='box-content'>
                    <Box name='PROJETOS' />
                </div>
                <article className='optionsProject'>
                    <p onClick={handleSelected1} className={option1}>TODOS</p>
                    <p onClick={handleSelected2} className={option2}>APPS</p>
                    <p onClick={handleSelected3} className={option3}>WEBSITES</p>
                    <p onClick={handleSelected4} className={option4}>SISTEMAS</p>
                </article>
                
                        <div className='imgProjects'>
                            <div className='imgFile'>
                                <img alt='WhatsAppClone' className='keyImg' src={WppClone}/>
                                <span>WhatsApp Clone</span>
                            </div>
                            <div className='imgFile'>
                                <img alt='Calculator' className='keyImg' src={Calculator}/>
                                <span>Calculadora com Histórico</span>
                            </div>
                            <div className='imgFile'>
                                <img alt='Todolist' className='keyImg' src={Todolist}/>
                                <span>Todolist</span>
                            </div>
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
