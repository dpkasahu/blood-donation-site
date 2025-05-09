import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DonorForm from './components/DonorForm';
import RequestForm from './components/RequestForm';
import DonorList from './components/DonorList';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import EligibilityRules from './pages/EligibilityRules';
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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/eligibility" element={<EligibilityRules />} />
          <Route path="/admin" element={<AdminLogin />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
