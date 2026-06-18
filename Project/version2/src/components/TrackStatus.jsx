import { useEffect, useState } from "react";

function TrackStatus({ goBack }) {
  const [application, setApplication] = useState(null);

  useEffect(() => {
    const learning = JSON.parse(localStorage.getItem("learningLicense"));
    const driving = JSON.parse(localStorage.getItem("drivingLicense"));
    const renewal = JSON.parse(localStorage.getItem("renewalRequest"));

    // Priority: Renewal > Driving > Learning
    if (renewal && renewal.status !== "Renewed") {
      setApplication({
        type: "Renewal",
        status: "Processing Renewal Request",
      });
    } 
    else if (driving) {
      setApplication({
        type: "Driving License",
        status: "Driving License Approved",
      });
    } 
    else if (learning) {
      setApplication({
        type: "Learning License",
        status: "Learning License Submitted",
      });
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
            <h3>{application.type}</h3>
            <p>Application ID: DL1001</p>

            <p>
              <strong>Current Process:</strong> {application.type}
            </p>

            <div className="status-box">
              <p>Status: {application.status}</p>
            </div>
          </>
        )}

        <button onClick={goBack} style={{ background:"#757575", marginTop:"20px" }}>
          Back
        </button>
      </div>
    </div>
  );
}

export default TrackStatus;