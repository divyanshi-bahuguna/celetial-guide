
import { useState } from "react";
import CalculatorTemplate from "../CalculatorTemplate.jsx";

const fields = [
  { name: "direction", label: "Direction", placeholder: "Enter the direction (e.g., North, East)" },
];

const VaastuCalculator = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async ({ direction }) => {
    setLoading(true);
    setResult("");
    try {
      const res = await fetch("http://localhost:5000/api/vaastu-calculator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ direction }),
      });
      const data = await res.json();
      setResult(data.result);
    } catch (err) {
      console.error(err);
      setResult("Error calculating Vaastu tips.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CalculatorTemplate
      title="Vaastu Calculator"
      description="Get AI-powered Vaastu tips for your home or workspace."
      fields={fields}
      onSubmit={onSubmit}
      loading={loading}
      result={result}
    />
  );
};

export default VaastuCalculator;
