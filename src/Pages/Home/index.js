import "../../App.css"
import Grow from "../../Components/Grow";
import MeetMe from "../../Components/MeetMe";
import Offerings from "../../Components/Offerings";
import Reviews from "../../Components/Reviews";
import Contact from "../../Components/Contact";
import Footer from "../../Components/Footer";



function Home() {
  return (
    <div className="App">
      <header className="App-header">
    
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
