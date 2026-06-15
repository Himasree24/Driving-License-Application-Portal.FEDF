function Home({
  goToLearning,
  goToDriving,
  goToRenew,
  goToStatus,
  goToDigital,
}) {
  return (
    <div className="home">

      <header className="hero">
        <h1>Driving License Application Portal</h1>

        <p>
          Apply, Renew and Track Driving License Services Online
        </p>
      </header>

      <div className="services">

        <div
          className="service-card"
          onClick={goToLearning}
          style={{ cursor: "pointer" }}
        >
          <h3>📘 Learner License</h3>
          <p>Apply for a Learner License.</p>
        </div>

        <div
          className="service-card"
          onClick={goToDriving}
          style={{ cursor: "pointer" }}
        >
          <h3>🚗 Driving License</h3>
          <p>Apply for a Driving License.</p>
        </div>

        <div
          className="service-card"
          onClick={goToRenew}
          style={{ cursor: "pointer" }}
        >
          <h3>♻️ Renew License</h3>
          <p>Renew Existing License.</p>
        </div>

        <div
          className="service-card"
          onClick={goToStatus}
          style={{ cursor: "pointer" }}
        >
          <h3>📍 Track Status</h3>
          <p>Check Application Status.</p>
        </div>

        <div
          className="service-card"
          onClick={goToDigital}
          style={{ cursor: "pointer" }}
        >
          <h3>🪪 Digital License</h3>
          <p>View Digital License.</p>
        </div>

      </div>

    </div>
  );
}

export default Home;