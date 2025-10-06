import { useState } from "react";
import CalculatorTemplate from "../CalculatorTemplate.jsx";

const fields = [
  { name: "name", label: "Full Name", placeholder: "Enter your full name" },
  { name: "dob", label: "Date of Birth", placeholder: "Select your date of birth", type: "date" },
];

const NumerologyCalculator = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async ({ name, dob }) => {
    setLoading(true);
    setResult("");
    try {
      const res = await fetch("http://localhost:5000/api/numerology-calculator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, dob }),
      });
      const data = await res.json();
      setResult(data.result);
    } catch (err) {
      console.error(err);
      setResult("Error calculating numerology.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CalculatorTemplate
      title="Numerology Calculator"
      description="Discover your numerology numbers (AI-powered)."
      fields={fields}
      onSubmit={onSubmit}
      loading={loading}
      result={result}
    />
  );
};

export default NumerologyCalculator;
