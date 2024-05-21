import React from "react";
import dataNames from "./dataNames";
import Measure from "react-measure";

export function ModalResult({
  onClickClose,
  gender,
  clothesType,
  resultSizeData,
  selectedMetric,
}) {
  const calculateFontSize = (value, steps) => {
    if (steps === 1 || steps === 2) {
      return value;
    }
    return value * Math.pow(0.8, Math.max(0, steps - 2));
  };

  const sizeLength = resultSizeData.size.length;

  const renameKeys = (obj, keyMap) => {
    return Object.keys(obj).reduce((acc, key) => {
      const newKey = keyMap[key] || key;
      acc[newKey] = obj[key];
      return acc;
    }, {});
  };

  const matchingParameters = renameKeys(
    resultSizeData.body_parameters,
    dataNames.parametersList
  );

  return (
    <div className="absolute w-full h-full bg-white left-0 top-0 rounded-[40px] shadow-box pb-[30px] px-[20px] py-[65px] sm:px-[40px] lg:py-[45px] md:px-[60px] lg:px-[100px] z-20 shadow-box appear-animation-result">
      <h2 className="text-sm-h sm:text-md-h lg:text-lg-h text-center">
        Рекомендований розмір
      </h2>
      <div className="flex justify-between mb-8 mt-8 xs:mt-20 sm:mt-14 md:mt-20 gap-8 md:gap-16">
        <Measure bounds>
          {({ measureRef, contentRect }) => {
            const fontSize = contentRect.bounds.width
              ? calculateFontSize(contentRect.bounds.width * 0.5, sizeLength)
              : "inherit";

            return (
              <div
                ref={measureRef}
                className="max-w-[180px] sm:max-w-[210px] md:max-w-[250px] m-auto relative"
              >
                <img
                  src={`${import.meta.env.BASE_URL}assets/images/size-info.png`}
                  alt=""
                />
                <div className="size-result">
                  <span style={{ fontSize }} className="select-none">
                    {resultSizeData.size}
                  </span>
                </div>
              </div>
            );
          }}
        </Measure>
        <div className="flex flex-col justify-center md:justify-between">
          <div className="text-sm-p sm:text-md-p md:text-[22px] flex justify-between max-lg:flex-col gap-2 sm:gap-8 lg:gap:6 m-auto items-center">
            <div className="flex justify-center items-center border-green shadow-sm border-2 rounded-full min-w-[120px] py-[3px] px-6">
              <p className="font-bold tracking-wider text-center">
                {dataNames.gendersList[gender]}
              </p>
            </div>
            <div className="flex justify-center items-center rounded-full gradient-background text-white min-w-[120px] py-[5px] px-6">
              <p className="font-bold tracking-wider text-center">
                {clothesType.name_UA}
              </p>
            </div>
          </div>
          <p className="text-[18px] lg:text-[22px] text-[#787474] max-w-[450px] md:pb-4 lg:pb-8 max-md:hidden text-center">
            <span className="text-[#000000]">
              Знайдено за такими параметрами:
            </span>
            <br></br>
            {Object.entries(matchingParameters).map(([key, value], index) => (
              <p key={index}>
                {key}: {value}
                &nbsp;{selectedMetric}
                <br></br>
              </p>
            ))}
          </p>
        </div>
      </div>
      <p className="text-sm-p sm:text-lg-p text-[#787474] md:hidden text-center">
        <span className="text-[#000000]">Знайдено за такими параметрами:</span>
        <br></br>
        {Object.entries(matchingParameters).map(([key, value], index) => (
          <p key={index}>
            {key}: {value} {selectedMetric}
            <br></br>
          </p>
        ))}
      </p>
      <div className="flex absolute w-full left-0 justify-center bottom-12 sm:bottom-8 md:bottom-16">
        <div className="max-w-[250px] md:max-w-[300px] py-[5px] relative">
          <div className="h-[48px] w-[48px] md:h-[85px] md:w-[85px] bg-[#E0EEFF] rounded-full absolute left-[0px] md:left-[-40px] top-[5px] md:top-0 z-30"></div>
          <button
            onClick={() => {
              window.location.reload();
            }}
            className="text-lg-p md:text-md-h lg:text-md-h font-bold tracking-wider text-center w-full flex gap-2 items-center z-40 relative"
          >
            <span>Повернутись на головну сторінку</span>
            <i className="fa-solid fa-arrow-right text-[30px]"></i>
          </button>
        </div>
      </div>
      <button
        onClick={onClickClose}
        className="absolute border-2 w-9 h-9 sm:w-12 sm:h-12 flex justify-center items-center rounded-full right-5 top-4 md:right-8 md:top-5 hover:bg-[#000000]/[0.1]"
      >
        <img
          src={`${import.meta.env.BASE_URL}assets/images/close-icon.png`}
          className="w-8 h-8 sm:w-11 sm:h-11"
          alt=""
        />
      </button>
    </div>
  );
}
