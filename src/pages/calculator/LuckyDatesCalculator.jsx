
import { useState } from "react";
import CalculatorTemplate from "../CalculatorTemplate.jsx";

const fields = [
  { name: "dob", label: "Date of Birth", placeholder: "Select your date of birth", type: "date" },
];

const LuckyDatesCalculator = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async ({ dob }) => {
    setLoading(true);
    setResult("");
    try {
      const res = await fetch("http://localhost:5000/api/lucky-dates-calculator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dob }),
      });
      const data = await res.json();
      setResult(data.result);
    } catch (err) {
      console.error(err);
      setResult("Error calculating lucky dates.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CalculatorTemplate
      title="Lucky Dates Calculator"
      description="Find your auspicious dates (AI-powered)."
      fields={fields}
      onSubmit={onSubmit}
      loading={loading}
      result={result}
    />
  );
};

export default LuckyDatesCalculator;
