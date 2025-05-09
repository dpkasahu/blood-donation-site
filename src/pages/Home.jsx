import { Link } from 'react-router-dom';
import './Home.css'; // Make sure this path matches your project structure

const Home = () => {
  return (
    <div className="home">
      <div className="overlay">
        <div className="home-content">
          <h2>Welcome to the Blood Donation Website</h2>
          <p>Your one-stop solution to donate or request blood. Help save lives!</p>
          <blockquote>
            "The gift of blood is the gift of life. There is no substitute for human blood."
          </blockquote>
          <Link to="/contact" className="join-btn">Join With Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
