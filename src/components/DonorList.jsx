import { useEffect, useState } from 'react';

const DonorList = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const storedDonors = JSON.parse(localStorage.getItem('donors')) || [];
    setDonors(storedDonors);
  }, []);

  return (
    <div className="form-container">
      <h2>Available Donors</h2>
      {donors.length === 0 ? (
        <p>No donors registered yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {donors.map((donor, index) => (
            <li
              key={index}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '15px',
                margin: '10px 0',
                borderRadius: '8px',
                color:'rgba(5, 0, 0, 0.84)',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              <p><strong>Name:</strong> {donor.name}</p>
              <p><strong>Blood Group:</strong> {donor.bloodGroup}</p>
              <p><strong>Email:</strong> {donor.email}</p>
              <p><strong>DOB:</strong> {donor.dob}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DonorList;
