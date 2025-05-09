import React, { useState } from "react";

const AdminEmailCheck = ({ onAdminAccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleCheck = () => {
    const adminEmail = "admin@example.com";
    const adminPassword = "admin123"; // set your admin password

    if (
      email.trim().toLowerCase() === adminEmail &&
      password === adminPassword
    ) {
      onAdminAccess(true);
      setError("");
    } else {
      setError("Invalid admin credentials.");
      onAdminAccess(false);
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-2">Admin Access</h2>

      <input
        type="email"
        placeholder="Admin email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full rounded mb-2"
      />

      <input
        type="password"
        placeholder="Admin password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full rounded mb-2"
      />

      <button
        onClick={handleCheck}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full"
      >
        Verify
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default AdminEmailCheck;
