import { useState } from "react";
import CalculatorTemplate from "../CalculatorTemplate.jsx";

const fields = [
  { name: "name1", label: "Your Name", placeholder: "Enter your name" },
  { name: "name2", label: "Partner's Name", placeholder: "Enter partner's name" },
];

const LoveCalculator = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async ({ name1, name2 }) => {
    setLoading(true);
    setResult("");
    try {
      const res = await fetch("http://localhost:5000/api/love-calculator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name1, name2 }),
      });
      const data = await res.json();
      setResult(data.result);
    } catch (err) {
      console.error(err);
      setResult("Error calculating Love Compatibility.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CalculatorTemplate
      title="Love Calculator"
      description="Check your love compatibility (AI-powered)"
      fields={fields}
      onSubmit={onSubmit}
      loading={loading}
      result={result}
    />
  );
};

export default LoveCalculator;
