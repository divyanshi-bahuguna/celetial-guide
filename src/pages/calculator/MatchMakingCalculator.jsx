import { useState } from "react";
import CalculatorTemplate from "../CalculatorTemplate.jsx";

const fields = [
  { name: "name1", label: "Person 1 Name", placeholder: "Enter first name" },
  { name: "dob1", label: "Person 1 DOB", placeholder: "Select date of birth", type: "date" },
  { name: "name2", label: "Person 2 Name", placeholder: "Enter second name" },
  { name: "dob2", label: "Person 2 DOB", placeholder: "Select date of birth", type: "date" },
];

const MatchMakingCalculator = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async ({ name1, dob1, name2, dob2 }) => {
    setLoading(true);
    setResult("");
    try {
      const res = await fetch("http://localhost:5000/api/match-making-calculator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name1, dob1, name2, dob2 }),
      });
      const data = await res.json();
      setResult(data.result);
    } catch (err) {
      console.error(err);
      setResult("Error calculating match-making score.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CalculatorTemplate
      title="Match Making Calculator"
      description="Analyze compatibility for marriage (AI-powered)."
      fields={fields}
      onSubmit={onSubmit}
      loading={loading}
      result={result}
    />
  );
};

export default MatchMakingCalculator;
