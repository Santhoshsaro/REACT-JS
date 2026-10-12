import { useState } from "react";
import "./render.css";

function App() {
  // Conditional Rendering state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // List Rendering data
  const employees = [
    {
      id: 1,
      name: "Santhosh",
      email: "santhosh@gmail.com",
      age: 23,
      city: "Coimbatore",
      role: "Frontend Developer"
    },
    {
      id: 2,
      name: "Arun",
      email: "arun@gmail.com",
      age: 24,
      city: "Chennai",
      role: "Backend Developer"
    },
    {
      id: 3,
      name: "Rahul",
      email: "rahul@gmail.com",
      age: 25,
      city: "Madurai",
      role: "Fullstack Developer"
    },
    {
      id: 4,
      name: "Karthik",
      email: "karthik@gmail.com",
      age: 22,
      city: "Trichy",
      role: "UI Developer"
    },
    {
      id: 5,
      name: "Vijay",
      email: "vijay@gmail.com",
      age: 26,
      city: "Bangalore",
      role: "Java Developer"
    }
  ];

  return (
    <div className="app">

      <h1>Employee Management System</h1>

      {/* Conditional Rendering */}
      {isLoggedIn ? (

        // Home
        <div className="home-section">
          <h2>Welcome to Home 🏠</h2>

          <button
            className="logout-btn"
            onClick={() => setIsLoggedIn(false)}
          >
            Logout
          </button>

          {/* List Rendering */}
          <div className="employee-container">

            {employees.map((employee) => (
              <div className="employee-card" key={employee.id}>

                <h3>{employee.name}</h3>

                <p>
                  <strong>Email:</strong> {employee.email}
                </p>

                <p>
                  <strong>Age:</strong> {employee.age}
                </p>

                <p>
                  <strong>City:</strong> {employee.city}
                </p>

                <p>
                  <strong>Role:</strong> {employee.role}
                </p>

              </div>
            ))}

          </div>
        </div>

      ) : (

        // Login
        <div className="login-section">
          <h2>Please Login</h2>

          <p>You need to login to view employee details.</p>

          <button
            className="login-btn"
            onClick={() => setIsLoggedIn(true)}
          >
            Login
          </button>
        </div>

      )}

    </div>
  );
}

export default App;