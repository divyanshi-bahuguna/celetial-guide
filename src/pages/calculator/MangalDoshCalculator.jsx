import { useState } from "react";
import CalculatorTemplate from "../CalculatorTemplate.jsx";

const fields = [
  { name: "dob", label: "Date of Birth", placeholder: "Select your date of birth", type: "date" },
];

const MangalDoshCalculator = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async ({ dob }) => {
    setLoading(true);
    setResult("");
    try {
      const res = await fetch("http://localhost:5000/api/mangal-dosh-calculator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dob }),
      });
      const data = await res.json();
      setResult(data.result);
    } catch (err) {
      console.error(err);
      setResult("Error calculating Mangal Dosh.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CalculatorTemplate
      title="Mangal Dosh Calculator"
      description="Check if Mangal Dosh is present and remedies."
      fields={fields}
      onSubmit={onSubmit}
      loading={loading}
      result={result}
    />
  );
};

export default MangalDoshCalculator;
