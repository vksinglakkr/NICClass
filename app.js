// app.js (LOCAL TEST ONLY — DO NOT PUSH)
const OPENAI_API_KEY = "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";

async function askAI(msg) {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: msg }]
    })
  });

  const data = await res.json();
  return data.choices[0].message.content;
}
