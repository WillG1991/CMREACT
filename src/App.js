import './App.css';
import FAQ from './Pages/FAQ';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Grow from './Components/Grow';
import MeetMe from './Components/MeetMe';

function App() {
  return (
    <div className="App">
      <Grow/>
      <MeetMe/>
      <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faq" element={<FAQ />} />
      </Routes>
      </Router>
    </div>
   
  );
}

export default App;
