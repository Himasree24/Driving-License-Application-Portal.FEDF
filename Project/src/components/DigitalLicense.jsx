import { useEffect, useState } from "react";

function DigitalLicense({ goBack }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const licenseData = JSON.parse(
      localStorage.getItem("learningLicense")
    );

    if (licenseData) {
      setData(licenseData);
    }
  }, []);

  return (
    <div className="page">
      <div className="card">

        <h1>🚗 Digital Driving License</h1>

        {!data ? (
          <p>No License Data Available</p>
        ) : (
          <>
            <p>
              <strong>Name:</strong> {data.name}
            </p>

            <p>
              <strong>License No:</strong> DL2026001
            </p>

            <p>
              <strong>Vehicle:</strong> {data.vehicle}
            </p>

            <p>
              <strong>Status:</strong> Active
            </p>

            <p>
              <strong>Valid Till:</strong> 31-12-2036
            </p>
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

export default DigitalLicense;