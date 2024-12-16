function getButtonVariant(variant) {
  switch (variant) {
    case "primary":
      return "bg-blue-500 hover:bg-blue-700";
    case "secondary":
      return "bg-gray-500 hover:bg-gray-700";
    case "error":
      return "bg-red-500 hover:bg-red-700";
    case "success":
      return "bg-green-500 hover:bg-green-700";
    default:
      return "bg-yellow-500 hover:bg-yellow-700";
  }
}

export default getButtonVariant;
