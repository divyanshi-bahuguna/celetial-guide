import { useState } from "react";
import CalculatorTemplate from "../CalculatorTemplate.jsx";

const fields = [
  { name: "dob", label: "Date of Birth", placeholder: "Select your date of birth", type: "date" },
];

const NakshatraCalculator = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async ({ dob }) => {
  setLoading(true);
  setResult("");

  try {
    // Prepare a prompt for OpenAI
    const prompt = `Calculate the Nakshatra for date of birth: ${dob}`;

    const res = await fetch("http://localhost:5000/api/openai-calculator", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    if (!res.ok) throw new Error("OpenAI request failed");

    const data = await res.json();
    setResult(data.result); // shows in CalculatorTemplate
    return data.result;
  } catch (err) {
    console.error(err);
    setResult("Error generating AI response. Please try again.");
    return "Error generating AI response. Please try again.";
  } finally {
    setLoading(false);
  }
};

  return (
    <CalculatorTemplate
      title="Nakshatra Calculator"
      description="Discover your birth star (Nakshatra) and personality traits."
      fields={fields}
      onSubmit={onSubmit}
      loading={loading}
      result={result}
    />
  );
};

export default NakshatraCalculator;
