export default function Input({ label }) {
  return (
    <div>
      { label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label> }
      <input
        type="text"
        className="focus:ring-purple-500 focus:border-purple-500 sm:text-sm p-3 border-gray-300 rounded-lg"
      />
    </div>
  )
}