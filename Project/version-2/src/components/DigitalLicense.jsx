import { useEffect, useState } from "react";

function DigitalLicense({ goBack }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const learning = JSON.parse(localStorage.getItem("learningLicense"));
    const driving = JSON.parse(localStorage.getItem("drivingLicense"));
    const renewal = JSON.parse(localStorage.getItem("renewalRequest"));

    setData({ learning, driving, renewal });
  }, []);

  return (
    <div className="page">
      <div className="card">
        <h1>🚗 Digital Driving License</h1>

        {!data ? (
          <p>No License Data Available</p>
        ) : (
          <>
            <p><strong>Name:</strong> {data.driving?.name || data.learning?.name}</p>

            <p><strong>License No:</strong> {data.driving?.licenseNumber || "Not Generated"}</p>

            <p><strong>Learning License:</strong> {data.learning ? "Completed ✅" : "Not Applied"}</p>

            <p><strong>Driving License:</strong> {data.driving ? "Approved ✅" : "Pending"}</p>

            <p><strong>Renewal Status:</strong> {data.renewal?.status || "Not Requested"}</p>

            <p><strong>Final Status:</strong>
              {data.renewal?.status === "Renewed"
                ? " Active (Renewed) ✅"
                : data.driving
                ? " Active"
                : " Incomplete"}
            </p>
          </>
        )}

        <button onClick={goBack} style={{ background:"#757575", marginTop:"20px" }}>
          Back
        </button>
      </div>
    </div>
  );
}

export default DigitalLicense;