import React from 'react'

export default function Button({ text = "Prévisualiser la carte", color = "blue", size = "medium", textColor = 'white' }) {
  // Tailles prédéfinies
  const sizes = {
    small: "10px 16px",
    medium: "12px 22px",
    large: "16px 28px"
  };

  return (
    <button 
      type="submit" 
      className="submit-button1" 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color,
        color: textColor,
        border: 'none',
        padding: sizes[size],
        fontSize: size === "small" ? "14px" : size === "large" ? "18px" : "16px",
        cursor: 'pointer',
        fontWeight:'bold'
      }}
    >
      {text}
      <span className="button-glow"></span>
    </button>
  )
}
