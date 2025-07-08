import Image from "next/image";
import React, { useState } from "react";

const MAX_QUESTIONS = 15;

// Redesigned Quiz component matching Linkgraph and screenshot layout
export default function Quiz() {
  const [questions, setQuestions] = useState([
    { question: "Vim vs VSCode", answer: null },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  // Save completed quiz to localStorage
  const saveResults = (list) => {
    const payload = list.map((q) => ({
      question: q.question,
      answer: q.answer,
    }));
    localStorage.setItem("quizData", JSON.stringify(payload));
  };

  // Fetch next "This vs That" question based on the previous Q&A
  const fetchNextQuestion = async (prevQ, prevA) => {
    setLoading(true);
    try {
      const OPENAI_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
      if (!OPENAI_KEY) {
        console.error("Missing NEXT_PUBLIC_OPENAI_API_KEY in environment");
        return null;
      }

      const systemPrompt =
        'You are a quiz builder that creates a personalized "This vs That" flow. ' +
        "Starting from the user’s last choice, suggest the next pair of items that dive deeper into their interests and explore related technologies or tools. " +
        'For example, after "Vim vs VSCode" (choice: Vim), you might pick "Vim vs Emacs", then "Linux vs Windows", then "TypeScript vs JavaScript", then "React vs Vue", etc. ' +
        "Always adapt to the user’s previous answer. Dont ask the same question again and again. For example if the previous question was for editor don't ask again. Ask something else Like First was Vim vs VsCode and user selected VSCode then you might ask him JavaScript vs TypeScript then React vs Vue. Basically, the related questions but not same." +
        "Output exactly one question in the format X vs Y with no extra text.";

      const userPrompt = `User chose "${prevA}" for "${prevQ}". Suggest the next question.`;

      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENAI_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              { role: "system", content: systemPrompt },
              { role: "user", content: userPrompt },
            ],
            max_tokens: 30,
            temperature: 0.8,
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("OpenAI error status:", response.status, errorText);
        return null;
      }

      const data = await response.json();
      if (!data.choices || data.choices.length === 0) {
        console.error("OpenAI returned no choices:", data);
        return null;
      }

      return data.choices[0].message.content.trim();
    } catch (err) {
      console.error("fetchNextQuestion threw:", err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const handleAnswer = async (choice) => {
    const updated = [...questions];
    updated[currentIndex].answer = choice;
    setQuestions(updated);

    if (currentIndex + 1 < MAX_QUESTIONS) {
      const nextQ = await fetchNextQuestion(
        updated[currentIndex].question,
        choice
      );
      if (nextQ) {
        setQuestions((prev) => [...prev, { question: nextQ, answer: null }]);
        setCurrentIndex((i) => i + 1);
      } else {
        saveResults(updated);
      }
    } else {
      saveResults(updated);
    }
  };

  const currentItem = questions[currentIndex];
  const [left, right] = currentItem.question.split(/\s+vs\s+/i);
  const progressPercent = Math.min(
    ((currentIndex + 1) / MAX_QUESTIONS) * 100,
    100
  );

  return (
    <section className="mt-40 relative">
      <div className="absolute top-0 left-0 right-0">
        <Image
          src="/bg6.png"
          width={600}
          height={600}
          alt="background"
          className="mx-auto opacity-60"
        />
      </div>
      <div className="px-4 text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-medium text-white mb-4">
          Play a funny quiz
        </h2>
        <p className="text-gray-300">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
          corrupti maiores, dolore qui aliquam nostrum et autem odio? Assumenda
          qui repellendus commodi.
        </p>
      </div>

      <div className="mt-12 mx-auto w-[95%] md:w-[780px] bg-neutral-900/80 backdrop-blur rounded-2xl border border-white/10 shadow-lg p-6">
        {/* Progress Bar */}
        <div className="h-2 bg-white/20 rounded-full overflow-hidden mb-6">
          <div
            className="h-full bg-green-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Question Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[left, right].map((opt) => (
            <div
              key={opt}
              onClick={() => handleAnswer(opt)}
              className={`cursor-pointer border border-white/20 rounded-lg p-6 flex flex-col items-center justify-center hover:bg-white/5 transition ${
                loading ? "opacity-50 pointer-events-none" : ""
              }`}
            >
              {/* Placeholder icon circle */}
              <div className="w-12 h-12 bg-white/10 rounded-full mb-4 flex items-center justify-center">
                <span className="text-white font-semibold">
                  {opt.charAt(0)}
                </span>
              </div>
              <span className="text-white font-medium">{opt}</span>
            </div>
          ))}
        </div>

        {loading && (
          <p className="mt-6 text-center text-gray-300">
            Loading next question...
          </p>
        )}
      </div>
    </section>
  );
}
