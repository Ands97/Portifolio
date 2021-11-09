export default ()=>{
    return(
        <form className='form'>
            <h1>Entre em contato:</h1>
            <label>
                <input placeholder='Digite seu nome' type='text'/>
            </label>
            <label>
                <input placeholder='Digite seu e-mail' type='email'/>
            </label>
            <label>
               <textarea placeholder='Diga-nos, o que precisa?'/>
            </label>
            <button type='button'>Enviar</button>
        </form>
    );
};
