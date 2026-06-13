import { useState } from "react";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import LearningLicense from "./components/LearningLicense";
import TrackStatus from "./components/TrackStatus";
import DigitalLicense from "./components/DigitalLicense";
import RenewLicense from "./components/RenewLicense";

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
        <Home
          goToLearning={() => setPage("learning")}
          goToStatus={() => setPage("status")}
          goToDigital={() => setPage("digital")}
          goToRenew={() => setPage("renew")}
        />
      )}

      {page === "learning" && (
        <LearningLicense
          goBack={() => setPage("home")}
        />
      )}

      {page === "status" && (
        <TrackStatus
          goBack={() => setPage("home")}
        />
      )}

      {page === "digital" && (
        <DigitalLicense
          goBack={() => setPage("home")}
        />
      )}

      {page === "renew" && (
        <RenewLicense
          goBack={() => setPage("home")}
        />
      )}
    </>
  );
}

export default App;