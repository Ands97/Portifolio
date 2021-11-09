import './App.css';

import { StateProvider } from './contexts/stateContext'


import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const App = () => {
    
    return (
        <StateProvider >
            <div className="container">
                <Header />
                <section>
                    <Body />
                </section>
                <footer>
                    <Footer></Footer>
                </footer>
            </div>
        </StateProvider>
    );
}


export default App;
