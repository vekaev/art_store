import React from "react";

export default function InputField({ label, type, value, onChange }) {
  return (
    <label>
      {label}
      <input type={type} value={value} onChange={onChange} />
    </label>
  );
}
