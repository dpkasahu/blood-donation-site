import { useState } from 'react';

const RequestForm = () => {
  const [request, setRequest] = useState({
    name: '',
    bloodGroup: '',
    email: '',
    contact: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setRequest({ ...request, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  if (request.name && request.bloodGroup && request.email && request.contact) {
    const requests = JSON.parse(localStorage.getItem('requests')) || [];
    requests.push(request);
    localStorage.setItem('requests', JSON.stringify(requests));
    setSubmitted(true);
    setRequest({ name: '', bloodGroup: '', email: '', contact: '' });
  }
};


  return (
    <div className="form-container">
      <h2>Request Blood</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={request.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="bloodGroup"
          placeholder="Required Blood Group"
          value={request.bloodGroup}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={request.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="contact"
          placeholder="Contact Number"
          value={request.contact}
          onChange={handleChange}
          required
        />
        <button type="submit">Request Now</button>
      </form>
      {submitted && (
        <p className="confirmation-message">Your blood request has been submitted successfully!</p>
      )}
    </div>
  );
};

export default RequestForm;
