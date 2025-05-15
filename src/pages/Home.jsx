import {  useNavigate } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  const navigate = useNavigate();

  const handleEligibilityClick = () => {
    navigate("/eligibility");
  };

  return (
    <div className="home">
      <div className="overlay">
        <div className="home-content">
          <h2>Welcome to the Blood Donation Website</h2>
          <p>Your one-stop solution to donate or request blood. Help save lives!</p>
          <blockquote>
            " DONATE BLOOD, SAVE LIFE "
          </blockquote>
          <button onClick={handleEligibilityClick}>
            Donor Eligibility
          </button>
          {/* <Link to="/admin" className="admin-btn">Admin Panel</Link> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
