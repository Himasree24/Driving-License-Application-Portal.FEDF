import { useEffect, useState } from "react";

function TrackStatus({ goBack }) {
  const [application, setApplication] = useState(null);

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem("learningLicense")
    );

    if (data) {
      setApplication(data);
    }
  }, []);

  return (
    <div className="page">
      <div className="card">

        <h1>📍 Application Status</h1>

        {!application ? (
          <p>No Application Found</p>
        ) : (
          <>
            <h3>{application.name}</h3>

            <p>
              Application ID: DL1001
            </p>

            <br />

            <div className="status-box">
              <p>✅ Application Submitted</p>
              <p>✅ Under Verification</p>
              <p>🟡 Approval Pending</p>
            </div>

            <div className="progress">
              <div className="progress-fill"></div>
            </div>

            <p>75% Completed</p>
          </>
        )}

        <button
          onClick={goBack}
          style={{
            background: "#757575",
            marginTop: "20px",
          }}
        >
          Back
        </button>

      </div>
    </div>
  );
}

export default TrackStatus;