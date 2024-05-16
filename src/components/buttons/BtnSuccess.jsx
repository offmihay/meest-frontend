import React from "react";

export function Button({
  onClick,
  children,
  color = "rgb(40,211,161, 1)",
  bordercolor = "rgb(40, 211, 161, 0.6)",
  textcolor = "white",
  disabled,
}) {
  return (
    <button
      className="btn-success mt-3 mb-12"
      onClick={onClick}
      style={{
        backgroundColor: color,
        width: "10rem",
        height: "3rem",
        borderRadius: "100px",
        color: "white",
      }}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
