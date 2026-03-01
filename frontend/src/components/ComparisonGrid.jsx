import ResponseCard from "./ResponseCard";

export default function ComparisonGrid({ responses }) {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-6">
      {Object.entries(responses).map(([model, text]) => (
        <ResponseCard key={model} model={model} text={text} />
      ))}
    </div>
  );
}