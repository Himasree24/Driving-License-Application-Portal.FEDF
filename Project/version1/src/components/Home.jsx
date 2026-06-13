function Home() {
  return (
    <div className="home">

      <header className="hero">
        <h1>Driving License Application Portal</h1>

        <p>
          Apply, Renew and Track Driving License Services Online
        </p>
      </header>

      <div className="services">

        <div className="service-card">
          <h3>📘 Learner License</h3>
          <p>Apply for a Learner License.</p>
        </div>

        <div className="service-card">
          <h3>🚗 Driving License</h3>
          <p>Apply for a New Driving License.</p>
        </div>

        <div className="service-card">
          <h3>♻️ Renew License</h3>
          <p>Renew Existing License.</p>
        </div>

        <div className="service-card">
          <h3>📍 Track Status</h3>
          <p>Check Application Status.</p>
        </div>

      </div>

    </div>
  );
}

export default Home;