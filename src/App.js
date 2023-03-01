import './App.css';
import React, { useState } from "react";
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import Grow from './Components/Grow';
import MeetMe from './Components/MeetMe';
import Offerings from './Components/Offerings';
import Reviews from './Components/Reviews';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import FAQ from './Pages/FAQ';
import FAQNav from './Components/FAQNav';



function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <>
        <div>
          <Grow />
          <MeetMe />
          <Offerings />
          <Reviews />
          <Contact />
          <Footer />
        </div>
      </>
    }

    if (currentPage === 'FAQ') {
      window.scrollTo(0, 0);
      return <>
        <div className="FAQBody">
          <FAQNav currentPage={currentPage} handlePageChange={handlePageChange} />
          <FAQ />
        </div>
      </>
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);   window.scrollTo(0, 0);;

  return (
    <div className="App">
      {currentPage === 'Home'
        ?
        <header className="App-header">
          <Nav currentPage={currentPage} handlePageChange={handlePageChange}></Nav>
          <Hero />
        </header>
        :
        null
      }
      {renderPage()}
    </div>

  );
}
export default App;