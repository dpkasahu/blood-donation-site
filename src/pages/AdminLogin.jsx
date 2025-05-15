import { useState } from 'react';

const AdminLogin = ({ onAdminSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [showDonors, setShowDonors] = useState(false);  // State for showing donors
  const [showRequests, setShowRequests] = useState(false);  // State for showing requests

  // Fetching data from localStorage when button is clicked
  const [donors, setDonors] = useState([]);
  const [requests, setRequests] = useState([]);

  const handleLogin = () => {
    if (email === "deepika@gmail.com" && password === "deepika123") {
      setIsVerified(true);
      setError("");

      // Optional: Wait before calling onAdminSuccess so admin sees message
      setTimeout(() => {
        if (typeof onAdminSuccess === "function") {
          onAdminSuccess(true);
        } else {
          console.warn("onAdminSuccess is not a function.");
        }
      }, 1000); // Delay 1 sec to show success message
    } else {
      setError("Invalid email or password.");
    }
  };

  const handleShowDonors = () => {
    const storedDonors = JSON.parse(localStorage.getItem('donors')) || [];
    setDonors(storedDonors);
    setShowDonors(true);  // Show the donor list when clicked
    setShowRequests(false); // Hide the blood requests if "Donor List" is clicked
  };

  const handleShowRequests = () => {
    const storedRequests = JSON.parse(localStorage.getItem('requests')) || [];
    setRequests(storedRequests);
    setShowRequests(true);  // Show the blood requests when clicked
    setShowDonors(false); // Hide the donor list if "Blood Requests" is clicked
  };

  return (
    <div className="p-4 max-w-md mx-auto mt-10 border rounded shadow-md bg-white">
      {!isVerified ? (
        <>
          <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
          <input
            type="email"
            placeholder="Email"
            className="border p-2 w-full mb-3 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 w-full mb-3 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
          >
            Login
          </button>
          {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
        </>
      ) : (
        <div class='admin-container'>
          <h2 className="text-2xl font-bold text-center">Welcome Admin!</h2>

          {/* Buttons to toggle between Donor List and Blood Requests */}
          <button
            onClick={handleShowDonors}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded mt-4 block mx-auto"
          >
            Donor List
          </button>

          <button
            onClick={handleShowRequests}
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded mt-4 block mx-auto"
          >
            Blood Requests
          </button>

          {/* Show Donors List when the button is clicked */}
          {showDonors && (
            <div>
             
              <ul>
                {donors.length === 0 ? (
                  <p>No donors available.</p>
                ) : (
                  donors.map((donor, index) => (
                    <li key={index} >
                      <p><strong>Name:</strong> {donor.name}</p>
                      <p><strong>Blood Group:</strong> {donor.bloodGroup}</p>
                      <p><strong>Email:</strong> {donor.email}</p>
                      <p><strong>DOB:</strong> {donor.dob}</p>
                    </li>
                  ))
                )}
              </ul>
            </div>
          )}

          {/* Show Blood Requests List when the button is clicked */}
          {showRequests && (
            <div>
              
              <ul>
                {requests.length === 0 ? (
                  <p>No blood requests yet.</p>
                ) : (
                  requests.map((req, index) => (
                    <li key={index}>
                      <p><strong>Name:</strong> {req.name}</p>
                      <p><strong>Blood Group Needed:</strong> {req.bloodGroup}</p>
                      <p><strong>Email:</strong> {req.email}</p>
                      <p><strong>Contact:</strong> {req.contact}</p>
                    </li>
                  ))
                )}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminLogin;
