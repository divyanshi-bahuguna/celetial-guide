
import { useState } from "react";
import CalculatorTemplate from "../CalculatorTemplate.jsx";

const fields = [
  { name: "dob", label: "Date of Birth", placeholder: "Select your date of birth", type: "date" },
];

const KundliCalculator = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async ({ dob }) => {
    setLoading(true);
    setResult("");
    try {
      const res = await fetch("http://localhost:5000/api/kundli-calculator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dob }),
      });
      const data = await res.json();
      setResult(data.result);
    } catch (err) {
      console.error(err);
      setResult("Error generating Kundli.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CalculatorTemplate
      title="Kundli Calculator"
      description="Generate your birth chart (Kundli) interpretation."
      fields={fields}
      onSubmit={onSubmit}
      loading={loading}
      result={result}
    />
  );
};

export default KundliCalculator;
