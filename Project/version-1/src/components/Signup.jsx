import { useState } from "react";

function Signup({ goToLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    const user = {
      name,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup Successful");

    goToLogin();
  };

  return (
    <div className="page">
      <div className="card">

        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleSignup}>
          Signup
        </button>

        <p>
          Already have an account?
          <span className="link" onClick={goToLogin}>
            Login
          </span>
        </p>

      </div>
    </div>
  );
}

export default Signup;