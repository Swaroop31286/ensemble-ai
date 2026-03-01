import { useState } from "react";
import PromptBox from "./components/PromptBox";
import ModelSelector from "./components/ModelSelector";
import ComparisonGrid from "./components/ComparisonGrid";
import Loader from "./components/Loader";
import { compareLLMs } from "./services/api";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [selectedModels, setSelectedModels] = useState([
    "openai",
    "gemini",
    "openrouter",
  ]);
  const [responses, setResponses] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCompare = async () => {
    if (!prompt.trim()) return;

    try {
      setLoading(true);
      setError("");
      setResponses({});

      const data = await compareLLMs(prompt, selectedModels);
      setResponses(data);
    } catch (err) {
      setError("Failed to fetch responses. Check backend connection.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
       <h1 className="text-5xl font-semibold mb-3 tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
  EnsembleAI
</h1>
<p className="text-gray-400 text-lg mb-10 max-w-2xl">
  Compare OpenAI, Gemini, and OpenRouter responses in one unified intelligence dashboard.
</p>
        <PromptBox
          prompt={prompt}
          setPrompt={setPrompt}
          onSubmit={handleCompare}
        />

        <ModelSelector
          selectedModels={selectedModels}
          setSelectedModels={setSelectedModels}
        />

        {loading && <Loader />}

        {error && (
          <div className="mt-6 text-red-400 bg-red-900/20 p-3 rounded-lg">
            {error}
          </div>
        )}

        {!loading && Object.keys(responses).length === 0 && (
  <div className="mt-16 text-center text-gray-500">
    <p className="text-lg">
      Your model responses will appear here.
    </p>
    <p className="text-sm mt-2">
      Enter a prompt and compare multiple LLM outputs side by side.
    </p>
  </div>
)}

{!loading && Object.keys(responses).length > 0 && (
  <ComparisonGrid responses={responses} />
)}
      </div>
    </div>
  );
}