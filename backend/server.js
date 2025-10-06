import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

import openaiCalculatorRoutes from "./routes/openaiCalculator.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(express.json());
app.use("/api", openaiCalculatorRoutes);

// ✅ Initialize OpenAI with your key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// 🧠 Universal AI function for reuse
async function getAIResponse(prompt) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 350,
    });
    return completion.choices[0].message.content.trim();
  } catch (err) {
    console.error("OpenAI Error:", err);
    return "Error generating AI response. Please try again.";
  }
}

/* ---------------------- CALCULATORS ---------------------- */

// ❤️ Love Calculator
app.post("/api/love-calculator", async (req, res) => {
  const { name1, name2 } = req.body;
  const prompt = `You are an astrology expert. Based on the names "${name1}" and "${name2}", analyze their love compatibility in English using Vedic astrology style.
Provide:
1. Compatibility percentage (0–100)
2. Relationship nature
3. Short suggestion`;
  res.json({ result: await getAIResponse(prompt) });
});

// 🌞 Dasha Calculator
app.post("/api/dasha-calculator", async (req, res) => {
  const { dob } = req.body;
  const prompt = `You are an astrology expert. Based on the date of birth ${dob}, calculate the planetary period (Dasha) according to Hindu astrology.
Provide a brief explanation and the main Dasha period currently active in English.`;
  res.json({ result: await getAIResponse(prompt) });
});

// 🌙 Nakshatra Calculator
app.post("/api/nakshatra-calculator", async (req, res) => {
  const { dob } = req.body;
  const prompt = `Determine the Nakshatra (birth star) for the birth date ${dob}.
Explain its significance and personality traits in English.`;
  res.json({ result: await getAIResponse(prompt) });
});

// 🔥 Mangal Dosh Calculator
app.post("/api/mangal-dosh-calculator", async (req, res) => {
  const { dob } = req.body;
  const prompt = `Check if Mangal Dosh (Kuja Dosha) is present for DOB ${dob}.
If yes, explain its effects and remedies. Otherwise, mention it is free from Mangal Dosh. Use English.`;
  res.json({ result: await getAIResponse(prompt) });
});

// 🐍 Kaal Sarp Dosh Calculator
app.post("/api/kaal-sarp-calculator", async (req, res) => {
  const { dob } = req.body;
  const prompt = `Analyze if DOB ${dob} is affected by Kaal Sarp Dosh.
Mention type (if any), effects, and suggested remedies in English.`;
  res.json({ result: await getAIResponse(prompt) });
});

// 👻 Pitra Dosh Calculator
app.post("/api/pitra-dosh-calculator", async (req, res) => {
  const { dob } = req.body;
  const prompt = `Determine if DOB ${dob} has Pitra Dosh.
Explain its meaning, effects, and simple remedies in English.`;
  res.json({ result: await getAIResponse(prompt) });
});

// 🪐 Sade Sati Calculator
app.post("/api/sade-sati-calculator", async (req, res) => {
  const { dob } = req.body;
  const prompt = `Analyze Sade Sati for DOB ${dob}.
Mention if active, which phase, and its general effects in English.`;
  res.json({ result: await getAIResponse(prompt) });
});

// 🏠 Vaastu Calculator
app.post("/api/vaastu-calculator", async (req, res) => {
  const { direction } = req.body;
  const prompt = `Analyze the direction "${direction}" and provide Vaastu tips for home or workspace in English.`;
  res.json({ result: await getAIResponse(prompt) });
});

// 🚗 Vehicle Number Calculator
app.post("/api/vehicle-number-calculator", async (req, res) => {
  const { vehicleNumber } = req.body;
  const prompt = `Analyze the vehicle number "${vehicleNumber}" using numerology.
Provide total number, lucky aspects, and general interpretation in English.`;
  res.json({ result: await getAIResponse(prompt) });
});

// 🌗 Rahu Ketu Calculator
app.post("/api/rahu-ketu-calculator", async (req, res) => {
  const { dob } = req.body;
  const prompt = `Explain the influence of Rahu and Ketu for DOB ${dob}.
Mention their positions and impact on life in English.`;
  res.json({ result: await getAIResponse(prompt) });
});

// 📿 Lal Kitab Calculator
app.post("/api/lal-kitab-calculator", async (req, res) => {
  const { dob } = req.body;
  const prompt = `Give Lal Kitab predictions for DOB ${dob}.
Include key insights and remedies in English.`;
  res.json({ result: await getAIResponse(prompt) });
});

// 🔥 Flame Calculator
app.post("/api/flame-calculator", async (req, res) => {
  const { name1, name2 } = req.body;
  const prompt = `Perform a FLAME (Friendship, Love, Affection, Marriage, Enemy) analysis between "${name1}" and "${name2}" in English.`;
  res.json({ result: await getAIResponse(prompt) });
});

// 🔮 Kundli Calculator
app.post("/api/kundli-calculator", async (req, res) => {
  const { dob } = req.body;
  const prompt = `Generate a birth chart (Kundli) interpretation for DOB ${dob}.
Include Sun sign, Moon sign, and general personality overview in English.`;
  res.json({ result: await getAIResponse(prompt) });
});

// 🌞 Lagna Navamsa Calculator
app.post("/api/lagna-navamsa-calculator", async (req, res) => {
  const { dob } = req.body;
  const prompt = `Analyze Lagna and Navamsa chart for DOB ${dob}.
Provide general predictions and strengths in English.`;
  res.json({ result: await getAIResponse(prompt) });
});

// 🌰 Rudraksha Calculator
app.post("/api/rudraksha-calculator", async (req, res) => {
  const { dob } = req.body;
  const prompt = `Suggest a suitable Rudraksha for DOB ${dob}, including benefits and wearing method in English.`;
  res.json({ result: await getAIResponse(prompt) });
});

// 🍀 Lucky Dates Calculator
app.post("/api/lucky-dates-calculator", async (req, res) => {
  const { dob } = req.body;
  const prompt = `Calculate lucky dates for DOB ${dob} and explain significance in English.`;
  res.json({ result: await getAIResponse(prompt) });
});

// ❌ Unlucky Dates Calculator
app.post("/api/unlucky-dates-calculator", async (req, res) => {
  const { dob } = req.body;
  const prompt = `List unlucky dates for DOB ${dob} and explain why they are unfavorable in English.`;
  res.json({ result: await getAIResponse(prompt) });
});

// 💍 Match Making Calculator
app.post("/api/matchmaking-calculator", async (req, res) => {
  const { name1, dob1, name2, dob2 } = req.body;
  const prompt = `Perform horoscope matching (Kundli Milan) between:
1. ${name1} (DOB: ${dob1})
2. ${name2} (DOB: ${dob2})
Give compatibility score and brief analysis in English.`;
  res.json({ result: await getAIResponse(prompt) });
});

// 🔢 Numerology Calculator
app.post("/api/numerology-calculator", async (req, res) => {
  const { name, dob } = req.body;
  const prompt = `Perform numerology analysis for Name: "${name}", DOB: ${dob}.
Include life path number and meaning in English.`;
  res.json({ result: await getAIResponse(prompt) });
});

// 🎨 Lucky Color Calculator
app.post("/api/lucky-color-calculator", async (req, res) => {
  const { dob } = req.body;
  const prompt = `Suggest lucky color for DOB ${dob} and explain significance in English.`;
  res.json({ result: await getAIResponse(prompt) });
});

// 🖤 Unlucky Color Calculator
app.post("/api/unlucky-color-calculator", async (req, res) => {
  const { dob } = req.body;
  const prompt = `Identify unlucky colors for DOB ${dob} and explain why to avoid in English.`;
  res.json({ result: await getAIResponse(prompt) });
});

// 📅 Personal Year Calculator
app.post("/api/personal-year-calculator", async (req, res) => {
  const { dob } = req.body;
  const prompt = `Calculate current personal year number from DOB ${dob} and interpret influence on career, health, relationships in English.`;
  res.json({ result: await getAIResponse(prompt) });
});

// 🔤 Favourable Alphabet Calculator
app.post("/api/favourable-alphabet-calculator", async (req, res) => {
  const { name } = req.body;
  const prompt = `Analyze the name "${name}" and suggest most favourable alphabet for luck and success in English.`;
  res.json({ result: await getAIResponse(prompt) });
});

// 🌙 Moon Sign Calculator
app.post("/api/moon-sign-calculator", async (req, res) => {
  const { dob } = req.body;
  const prompt = `Find the Moon Sign for DOB ${dob} and describe key traits and emotional tendencies in English.`;
  res.json({ result: await getAIResponse(prompt) });
});

/* -------------------------------------------------------- */

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
