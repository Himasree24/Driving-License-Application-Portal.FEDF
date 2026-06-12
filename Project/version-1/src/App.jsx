import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import "./App.css";

function App() {
  const [page, setPage] = useState("login");

  return (
    <>
      {page === "login" && (
        <Login
          goToSignup={() => setPage("signup")}
          goToHome={() => setPage("home")}
        />
      )}

      {page === "signup" && (
        <Signup
          goToLogin={() => setPage("login")}
        />
      )}

      {page === "home" && (
        <Home />
      )}
    </>
  );
}

export default App;