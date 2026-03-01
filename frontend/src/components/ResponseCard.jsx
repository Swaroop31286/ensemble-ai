export default function ResponseCard({ model, text }) {
  return (
    <div className="bg-[#1c1c1e] rounded-2xl p-5 shadow-lg border border-gray-800">
      <h2 className="text-xl font-semibold mb-3 capitalize">
        {model}
      </h2>
      <p className="text-gray-300 whitespace-pre-wrap text-sm leading-relaxed">
        {text}
      </p>
    </div>
  );
}