export default function PromptBox({ prompt, setPrompt, onSubmit }) {
  return (
    <div className="bg-[#1c1c1e]/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-gray-800 mb-8">
      <textarea
  className="w-full bg-transparent outline-none resize-none text-lg placeholder-gray-500 leading-relaxed"
  rows={5}
  placeholder="Enter your prompt to compare multiple LLM responses..."
  value={prompt}
  onChange={(e) => setPrompt(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  }}
/>

      <div className="flex justify-between items-center mt-6">
        <p className="text-sm text-gray-500">
          Compare responses across multiple LLMs instantly
        </p>

        <button
  onClick={onSubmit}
  disabled={!prompt.trim()}
  className={`px-6 py-2.5 rounded-2xl font-medium transition-all duration-200 shadow-md ${
    !prompt.trim()
      ? "bg-gray-700 text-gray-400 cursor-not-allowed"
      : "bg-white text-black hover:scale-105"
  }`}
>
  Compare Models
</button>
      </div>
    </div>
  );
}