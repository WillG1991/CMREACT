import "../../App.css"
import Reviews from '../../Components/Reviews';
import Offerings from '../../Components/Offerings';
import Nav from '../../Components/Nav';
import MeetMe from '../../Components/MeetMe';
import Hero from '../../Components/Hero';
import Grow from '../../Components/Grow';
import Contact from '../../Components/Contact';
import Footer from '../../Components/Footer';



function Home() {
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

export default Home;
