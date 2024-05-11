import React, { useState } from "react";
import instructions from "./instructions";

export function SwitchInfo() {
  const [activeCategory, setActiveCategory] = useState("info");

  const categories = [
    { label: "Як правильно зняти мірки", value: "info" },
    { label: "Для жінок", value: "women" },
    { label: "Для чоловіків", value: "men" },
    { label: "Для дітей", value: "kids" },
  ];

  return (
    <div className="w-full mt-14 mb-24">
      <h2 className="text-center text-sm-h sm:text-md-h lg:text-lg-h md:mb-14">
        Який Розмір Ви Носите?
      </h2>
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="flex w-full flex-row flex-wrap justify-center my-3 md:justify-start md:flex-col md:w-5/12 md:ml-[20px]">
          {categories.map(({ label, value }) => (
            <button
              key={value}
              className={`btn-switch text-sm-p sm:text-md-p lg:text-lg-p ${
                activeCategory === value ? "btn-switch-active" : ""
              }`}
              onClick={() => setActiveCategory(value)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="instructions text-sm-p sm:text-md-p lg:text-lg-p md:w-6/12 mt-5">
          {instructions[activeCategory]}
        </div>
      </div>
    </div>
  );
}
