import { useState } from "react";

function RenewLicense({ goBack }) {
  const [licenseNo, setLicenseNo] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const handleRenew = () => {
    const renewalData = {
      licenseNo,
      expiryDate,
      renewalDate: new Date().toLocaleDateString(),
      status: "Renewal Requested",
    };

    localStorage.setItem(
      "renewalRequest",
      JSON.stringify(renewalData)
    );

    alert("Renewal Request Submitted");
  };

  return (
    <div className="page">
      <div className="card">

        <h1>♻️ Renew License</h1>

        <input
          type="text"
          placeholder="License Number"
          value={licenseNo}
          onChange={(e) =>
            setLicenseNo(e.target.value)
          }
        />

        <input
          type="date"
          value={expiryDate}
          onChange={(e) =>
            setExpiryDate(e.target.value)
          }
        />

        <button onClick={handleRenew}>
          Submit Renewal
        </button>

        <button
          onClick={goBack}
          style={{
            background: "#757575",
            marginTop: "10px",
          }}
        >
          Back
        </button>

      </div>
    </div>
  );
}

export default RenewLicense;