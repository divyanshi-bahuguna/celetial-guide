import { useState } from "react";
import CalculatorTemplate from "../CalculatorTemplate.jsx";

const fields = [
  { name: "name", label: "Full Name", placeholder: "Enter your full name" },
];

const FavourableAlphabetCalculator = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async ({ name }) => {
    setLoading(true);
    setResult("");
    try {
      const res = await fetch("http://localhost:5000/api/favourable-alphabet-calculator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      const data = await res.json();
      setResult(data.result);
    } catch (err) {
      console.error(err);
      setResult("Error calculating favourable alphabets.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CalculatorTemplate
      title="Favourable Alphabet Calculator"
      description="Find alphabets that bring you luck (AI-powered)."
      fields={fields}
      onSubmit={onSubmit}
      loading={loading}
      result={result}
    />
  );
};

export default FavourableAlphabetCalculator;
