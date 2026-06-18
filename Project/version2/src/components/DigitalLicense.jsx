import { useEffect, useState } from "react";

function DigitalLicense({ goBack }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const learning = JSON.parse(
      localStorage.getItem("learningLicense")
    );

    const driving = JSON.parse(
      localStorage.getItem("drivingLicense")
    );

    const renewal = JSON.parse(
      localStorage.getItem("renewalRequest")
    );

    setData({
      learning,
      driving,
      renewal,
    });
  }, []);

  if (!data) {
    return (
      <div className="page">
        <div className="card">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  const isDrivingLicense = data.driving !== null;

  const applicantName =
    data.driving?.name ||
    data.learning?.name ||
    "Not Available";

  const licenseType = isDrivingLicense
    ? "Driving License"
    : "Learning License";

  const licenseNumber = isDrivingLicense
    ? data.driving.licenseNumber
    : "LL-" +
      (data.learning?.aadhaar?.slice(-4) || "0000");

  let status = "";

  if (data.renewal?.status === "Renewed") {
    status = "Renewed";
  } else if (isDrivingLicense) {
    status = "Active";
  } else {
    status = "Pending Driving License";
  }

  return (
    <div className="page">
      <div className="card">

        <div className="license-header">
          <h1>Digital License</h1>
        </div>

        <div className="license-card">

          <table className="license-table">
            <tbody>

              <tr>
                <td>Name</td>
                <td>{applicantName}</td>
              </tr>

              <tr>
                <td>License Type</td>
                <td>{licenseType}</td>
              </tr>

              <tr>
                <td>License Number</td>
                <td>{licenseNumber}</td>
              </tr>

              <tr>
                <td>Status</td>
                <td className="license-status">
                  {status}
                </td>
              </tr>

            </tbody>
          </table>

        </div>

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