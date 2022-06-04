import './App.css';
import {Footer, Blog, Possibility, Features, About, Header} from './containers';
import {CTA, Brand, Navbar} from './components';

function App() {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar/>
                <Header/>
            </div>
            <Brand/>
            <About/>
            <Features/>
            <Possibility/>
            <CTA/>y
            <Blog/>
            <Footer/>

        </div>
    );
}

export default App;
