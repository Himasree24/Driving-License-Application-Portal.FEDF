import { useState } from "react";

function Login({ goToSignup, goToHome }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (
      user &&
      user.email === email &&
      user.password === password
    ) {
      goToHome();
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="page">
      <div className="card">

        <h1>Driving License Portal</h1>

        <h2>Login</h2>

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

        <button onClick={handleLogin}>
          Login
        </button>

        <p>
          New User?
          <span className="link" onClick={goToSignup}>
            Signup
          </span>
        </p>

      </div>
    </div>
  );
}

export default Login;

