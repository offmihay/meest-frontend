import React, { useState } from "react";
import Switch from "react-switch";

const SwitchBar = ({ onChange, height = 30 }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (checked) => {
    setChecked(checked);
    onChange(checked ? "in" : "cm");
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      boxShadow="0 0 0 2px #99A4AF"
      activeBoxShadow="0"
      offColor="#99A4AF"
      onColor="#99A4AF"
      offHandleColor="#ffffff"
      onHandleColor="#ffffff"
      handleDiameter={height}
      height={height}
      width={height * 2}
      borderRadius={0.26 * height}
      uncheckedIcon={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            fontSize: height / 2,
            color: "#ffffff",
          }}
        >
          <p>in</p>
        </div>
      }
      checkedIcon={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            fontSize: height / 2,
            color: "#ffffff",
          }}
        >
          <p>см</p>
        </div>
      }
      uncheckedHandleIcon={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            fontSize: height / 2,
            color: "#99A4AF",
          }}
        >
          <p>см</p>
        </div>
      }
      checkedHandleIcon={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            fontSize: height / 2,
            color: "#99A4AF",
          }}
        >
          <p>in</p>
        </div>
      }
      className="react-switch"
      id="small-radius-switch"
    />
  );
};

export default SwitchBar;
