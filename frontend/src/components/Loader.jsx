export default function Loader() {
  return (
    <div className="flex flex-col items-center mt-12">
      <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-gray-400 text-sm">
        Gathering responses from selected models...
      </p>
    </div>
  );
}