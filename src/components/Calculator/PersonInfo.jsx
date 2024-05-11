import React from "react";
import inputPositions from "./inputPositions";
import dataNames from "./dataNames";

export function PersonInfo(props) {
  const { gender, clothesType, inputData, isSelected, onClick, onChange, bodyParameters } = props;

  return (
    <div
      className={`item-person-block ${isSelected ? "selected-person" : ""} ${
        clothesType != "none" && isSelected ? "translate-left" : ""
      }`}
    >
      <div className="h-full flex justify-center m-auto cursor-default">
        <div className="relative h-full">
          <img
            onClick={onClick}
            src={`${import.meta.env.BASE_URL}/assets/images/${gender}/main.png`}
            className={`person-img cursor-pointer ${
              isSelected ? "selected-person-block" : "non-selected-person-block"
            }`}
          />
          {isSelected && clothesType != "none" && (
            <>
              {bodyParameters.body_parts.map((item) => (
                <img
                  src={`${
                    import.meta.env.BASE_URL
                  }/assets/images/${gender}/parameters/${item}.png`}
                  className="absolute green-diagram-img appear-animation"
                  key={item}
                />
              ))}

              {bodyParameters.body_parts.map((item) => (
                <div
                  className="input-green-diagram-block appear-animation"
                  style={{
                    top: inputPositions[gender][item].top,
                    left: inputPositions[gender][item].left,
                  }}
                  key={name}
                >
                  <div className="input-green-diagram-label inline-block">
                    <label
                      htmlFor={name}
                      className="text-[12px] sm:text-sm-p md:text-md-p block w-full text-center appear-animation max-sm:text-[11px]"
                    >
                      {dataNames.parametersList[item]}
                    </label>
                  </div>
                  <input
                    key={item}
                    id={item}
                    type="number"
                    className="input-green-diagram appear-animation z-5"
                    name={item}
                    value={inputData[item] || ""}
                    onClick={(event) => event.stopPropagation()}
                    onChange={(event) => onChange(item, event.target.value)}
                    maxLength="4"
                    required
                  />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
