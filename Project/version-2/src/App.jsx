import { useState } from "react";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import LearningLicense from "./components/LearningLicense";
import DrivingLicense from "./components/DrivingLicense";
import DigitalLicense from "./components/DigitalLicense";
import RenewLicense from "./components/RenewLicense";
import TrackStatus from "./components/TrackStatus";

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
        <Signup goToLogin={() => setPage("login")} />
      )}

      {page === "home" && (
        <Home
          goToLearning={() => setPage("learning")}
          goToDriving={() => setPage("driving")}
          goToRenew={() => setPage("renew")}
          goToStatus={() => setPage("status")}
          goToDigital={() => setPage("digital")}
        />
      )}

      {page === "learning" && (
        <LearningLicense goBack={() => setPage("home")} />
      )}

      {page === "driving" && (
        <DrivingLicense goBack={() => setPage("home")} />
      )}

      {page === "digital" && (
        <DigitalLicense goBack={() => setPage("home")} />
      )}

      {page === "renew" && (
        <RenewLicense goBack={() => setPage("home")} />
      )}

      {page === "status" && (
        <TrackStatus goBack={() => setPage("home")} />
      )}
    </>
  );
}

export default App;