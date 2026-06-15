import { useState } from "react";

function LearningLicense({ goBack }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    dob: "",
    mobile: "",
    aadhaar: "",
    vehicle: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    localStorage.setItem("learningLicense", JSON.stringify(formData));

    localStorage.setItem(
      "currentApplication",
      JSON.stringify({
        type: "Learning License",
        status: "Submitted",
      })
    );

    alert("Application Submitted Successfully");
  };

  return (
    <div className="page">
      <div className="card">
        <h1>📘 Learner License</h1>

        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} />
        <input type="number" name="age" placeholder="Age" onChange={handleChange} />
        <input type="date" name="dob" onChange={handleChange} />
        <input type="text" name="mobile" placeholder="Mobile Number" onChange={handleChange} />
        <input type="text" name="aadhaar" placeholder="Aadhaar Number" onChange={handleChange} />

        <select name="vehicle" onChange={handleChange} style={{ width:"100%", padding:"12px", margin:"10px 0", border:"1px solid #ccc", borderRadius:"8px" }}>
          <option value="">Select Vehicle Type</option>
          <option>Motorcycle</option>
          <option>Car</option>
          <option>Transport Vehicle</option>
        </select>

        <button onClick={handleSubmit}>Submit Application</button>

        <button onClick={goBack} style={{ background:"#757575", marginTop:"10px" }}>
          Back
        </button>
      </div>
    </div>
  );
}

export default LearningLicense;