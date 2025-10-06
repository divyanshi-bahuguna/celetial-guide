
import { useState } from "react";
import CalculatorTemplate from "../CalculatorTemplate.jsx";

const fields = [
  { name: "vehicleNumber", label: "Vehicle Number", placeholder: "Enter your vehicle number" },
];

const VehicleNumberCalculator = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async ({ vehicleNumber }) => {
    setLoading(true);
    setResult("");
    try {
      const res = await fetch("http://localhost:5000/api/vehicle-number-calculator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ vehicleNumber }),
      });
      const data = await res.json();
      setResult(data.result);
    } catch (err) {
      console.error(err);
      setResult("Error calculating vehicle numerology.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CalculatorTemplate
      title="Vehicle Number Calculator"
      description="Analyze your vehicle number using numerology (AI-powered)."
      fields={fields}
      onSubmit={onSubmit}
      loading={loading}
      result={result}
    />
  );
};

export default VehicleNumberCalculator;
