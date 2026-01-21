export default function priorityStyle(priority) {
  switch (priority) {
    case "high":
      return "bg-red-100 text-red-600 border-red-400";
    case "medium":
      return "bg-yellow-100 text-yellow-600 border-yellow-400";
    case "low":
      return "bg-green-100 text-green-600 border-green-400";
    default:
      return "bg-gray-100 text-gray-600 border-gray-300";
  }
}
