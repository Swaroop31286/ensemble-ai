const models = [
  { id: "openai", label: "OpenAI" },
  { id: "gemini", label: "Gemini" },
  { id: "openrouter", label: "OpenRouter" },
];

export default function ModelSelector({ selectedModels, setSelectedModels }) {
  const toggleModel = (id) => {
    if (selectedModels.includes(id)) {
      setSelectedModels(selectedModels.filter((m) => m !== id));
    } else {
      setSelectedModels([...selectedModels, id]);
    }
  };

  return (
    <div className="flex gap-4 flex-wrap mb-10">
      {models.map((model) => {
        const active = selectedModels.includes(model.id);
        return (
          <button
            key={model.id}
            onClick={() => toggleModel(model.id)}
            className={`px-5 py-2.5 rounded-2xl border transition-all duration-200 ${
              active
                ? "bg-white text-black border-white shadow-md"
                : "bg-[#1c1c1e] text-gray-300 border-gray-700 hover:border-gray-400"
            }`}
          >
            {model.label}
          </button>
        );
      })}
    </div>
  );
}