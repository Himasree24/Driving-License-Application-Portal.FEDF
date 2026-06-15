import { useState } from "react";

function DrivingLicense({ goBack }) {
  const [formData, setFormData] = useState({
    name: "",
    licenseNo: "",
    vehicle: "",
    testDate: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const licenseNumber = "DL" + Math.floor(1000 + Math.random() * 9000);

    const data = {
      ...formData,
      licenseNumber,
      status: "Approved",
    };

    localStorage.setItem("drivingLicense", JSON.stringify(data));

    localStorage.setItem(
      "currentApplication",
      JSON.stringify({
        type: "Driving License",
        status: "Approved",
      })
    );

    alert("Driving License Approved! Your License No: " + licenseNumber);
  };

  return (
    <div className="page">
      <div className="card">
        <h1>🚗 Driving License</h1>

        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} />
        <input type="text" name="licenseNo" placeholder="Learning License No" onChange={handleChange} />

        <select name="vehicle" onChange={handleChange} style={{ width:"100%", padding:"12px", margin:"10px 0", border:"1px solid #ccc", borderRadius:"8px" }}>
          <option value="">Select Vehicle</option>
          <option>Motorcycle</option>
          <option>Car</option>
          <option>Transport Vehicle</option>
        </select>

        <input type="date" name="testDate" onChange={handleChange} />

        <button onClick={handleSubmit}>Submit Driving Test</button>

        <button onClick={goBack} style={{ background:"#757575", marginTop:"10px" }}>
          Back
        </button>
      </div>
    </div>
  );
}

export default DrivingLicense;