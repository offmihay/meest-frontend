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
      className="m-5"
      onClick={onClick}
      style={{
        backgroundColor: color,
        boxShadow: `0 0 1px 5px ${bordercolor}`,
        width: "10rem",
        height: "2.8rem",
        borderRadius: "100px",
        color: "white",
      }}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
