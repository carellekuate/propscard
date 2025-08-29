import React from "react";

export default function Input({
  label,
  name,
  type = "text",
  placeholder = "",
  value,
  onChange,
  required = false
}) {
  return (
    <div className="input-group">
      {label && <label htmlFor={name}>{label}</label>}
      <div className="input-wrapper">
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className="form-input"
        />
      </div>
    </div>
  );
}
