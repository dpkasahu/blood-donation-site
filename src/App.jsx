import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DonorForm from './components/DonorForm';
import RequestForm from './components/RequestForm';
import DonorList from './components/DonorList';
import About from './pages/About';      // Import About from src/pages
import Contact from './pages/Contact';  // Import Contact from src/pages
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<DonorForm />} />
          <Route path="/request" element={<RequestForm />} />
          <Route path="/donors" element={<DonorList />} />
          <Route path="/about" element={<About />} />        {/* About Page Route */}
          <Route path="/contact" element={<Contact />} />    {/* Contact Page Route */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
