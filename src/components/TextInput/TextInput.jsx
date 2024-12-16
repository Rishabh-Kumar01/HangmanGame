import React from "react";

function TextInput({
  type = "text",
  label,
  placeholder = "Enter your input here",
  value,
  onChangeHandler,
}) {
  return (
    <label className="text-gray-700">
      <span className="block">{label}</span>
      <input
        type={type}
        className="px-4 py-2 border border-gray-500 rounded-md w-full"
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
      />
    </label>
  );
}

export default TextInput;
