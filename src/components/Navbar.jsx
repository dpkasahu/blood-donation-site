import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you're using a separate CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-title">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt1mV-hlbFpta7-420POzGk4IaSgK8iLyCIQ&s" alt="Logo" className="logo" />
          <div className="title">
            <span className="blood">Blood</span>
            <span className="donation">Donation</span>
          </div>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/admin" >Admin</Link>
          <Link to="/register">Register</Link>
          <Link to="/request">Request</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
