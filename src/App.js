import './App.css';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import Grow from './Components/Grow';
import MeetMe from './Components/MeetMe';
import Offerings from './Components/Offerings';
import Reviews from './Components/Reviews';
import Contact from './Components/Contact';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
    <header className="App-header">
    <Nav></Nav>
    <Hero/>
    </header>
    <body>
    <Grow/>
    <MeetMe/>
    <Offerings/>
    <Reviews/>
    <Contact/>
    </body>
    <Footer/>
  </div>
   
  );
}

export default App;
