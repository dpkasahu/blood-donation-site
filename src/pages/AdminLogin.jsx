import React, { useState } from "react";

const AdminLogin = ({ onAdminSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const handleLogin = () => {
    if (email === "deepika@example.com" && password === "admin123") {
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
        <h2 className=" text-2xl font-bold text-center">
          Welcome Admin!
        </h2>
      )}
    </div>
  );
};

export default AdminLogin;
