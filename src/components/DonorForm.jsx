import { useState } from 'react';

const DonorForm = () => {
  const [donor, setDonor] = useState({
    name: '',
    bloodGroup: '',
    email: '',
    dob: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setDonor({ ...donor, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  if (donor.name && donor.bloodGroup && donor.email && donor.dob) {
    const donors = JSON.parse(localStorage.getItem('donors')) || [];
    donors.push(donor);
    localStorage.setItem('donors', JSON.stringify(donors));
    setSubmitted(true);
    setDonor({ name: '', bloodGroup: '', email: '', dob: '' });
  }
};


  return (
    <div className="form-container">
      <h2>Register as Donor</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={donor.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="bloodGroup"
          placeholder="Blood Group"
          value={donor.bloodGroup}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={donor.email}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="dob"
          placeholder="Date of Birth"
          value={donor.dob}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
      {submitted && (
        <p className="confirmation-message">Donor registered successfully!</p>
      )}
    </div>
  );
};

export default DonorForm;
