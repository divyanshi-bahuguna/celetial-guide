
import { useState } from "react";
import CalculatorTemplate from "../CalculatorTemplate.jsx";

const fields = [
  { name: "name1", label: "Name 1", placeholder: "Enter first name" },
  { name: "name2", label: "Name 2", placeholder: "Enter second name" },
];

const FlameCalculator = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async ({ name1, name2 }) => {
    setLoading(true);
    setResult("");
    try {
      const res = await fetch("http://localhost:5000/api/flame-calculator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name1, name2 }),
      });
      const data = await res.json();
      setResult(data.result);
    } catch (err) {
      console.error(err);
      setResult("Error calculating FLAME compatibility.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CalculatorTemplate
      title="FLAME Calculator"
      description="Friendship, Love, Affection, Marriage, Enemy analysis (AI-powered)."
      fields={fields}
      onSubmit={onSubmit}
      loading={loading}
      result={result}
    />
  );
};

export default FlameCalculator;
