import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [user, setUser] = useState(null); // State to track user information
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate user fetching
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUser(userData);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="">
      <div className="flex bg-orange-600">
        <Link to="/">
          <h1>C</h1>
          <h3>arManagement</h3>
        </Link>
      </div>

      {/* Right: Authentication Buttons or User Info */}
      <div className="flex items-center space-x-4">
        {user ? (
          <div className="flex items-center space-x-3">
            {/* User Icon and Name */}
            <FaUserCircle className="text-white text-2xl" />
            <span className="text-white font-medium">{user.name}</span>
            {/* Profile Button */}
            <button
              onClick={() => navigate("/profile")}
              className="bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-gray-100 transition"
            >
              Profile
            </button>
            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            {/* Sign Up Button */}
            <button
              onClick={() => navigate("/signup")}
              className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition"
            >
              Sign Up
            </button>
            {/* Login Button */}
            <button
              onClick={() => navigate("/login")}
              className="bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-gray-100 transition"
            >
              Login
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
