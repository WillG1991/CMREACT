import './App.css';
import FAQ from './Pages/FAQ';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import Grow from './Components/Grow';
import MeetMe from './Components/MeetMe';
import Offerings from './Components/Offerings';
import Reviews from './Components/Reviews';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

 // <div className="App">
    //   <Grow/>
    //   <MeetMe/>
    //   <Router>
    //   <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/faq" element={<FAQ />} />
    //   </Routes>
    //   </Router>
    // </div>


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
