import React, { useEffect, useState } from "react";
import { Button } from "../buttons/BtnSuccess";
import { PersonInfo } from "./PersonInfo";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Slider } from "../sliders/Slider";
import dataNames from "./dataNames";
import SwitchBar from "./SwitchBar";
import { ModalResult } from "./ModalResult";
import CustomSelect from "./CustomSelect";
import { fetchJson, postJson } from "../../api";
import { useTranslation } from "react-i18next";

export function CalcSection() {
  const [selectedGender, setSelectedGender] = useState(Object.keys(dataNames.gendersList)[0]);
  const [selectedBrand, setSelectedBrand] = useState("none");
  const [selectedCl, setSelectedCl] = useState("none");
  const [inputData, setInputData] = useState({});
  const [selectedMetric, setSelectedMetric] = useState("cm");
  const [showResultMenu, setShowResultMenu] = useState(false);

  const [brandsByGender, setbrandsByGender] = useState([]);
  const [clothesByBrand, setClothesByBrand] = useState([]);

  const [resultSizeData, setResultSizeData] = useState([]);
  const [selectedSizeSystem, setSelectedSizeSystem] = useState("");

  useEffect(() => {
    if (selectedGender !== "none") {
      fetchJson(`api/brands?gender=${selectedGender}`)
        .then((data) => {
          setbrandsByGender(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [selectedGender]);

  useEffect(() => {
    if (selectedBrand !== "none") {
      fetchJson(`api/clothes?gender=${selectedGender}&brand=${selectedBrand}`)
        .then((data) => {
          setClothesByBrand(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [selectedBrand]);

  const handleSelectionChange = (newValue, setSelectedValue) => {
    if (newValue !== setSelectedValue) {
      setSelectedValue(newValue);
      setInputData({});
      setResultSizeData("");
    }
  };

  const handleGenderClick = (type) => {
    handleSelectionChange(type, setSelectedGender);
    setSelectedBrand("none");
    setSelectedCl("none");
    setClothesByBrand([]);
  };

  const handleBrandChange = (brand) => {
    handleSelectionChange(brand, setSelectedBrand);
    setSelectedCl("none");
    setClothesByBrand([]);
  };

  const handleClChange = (Cl) => {
    handleSelectionChange(Cl, setSelectedCl);
  };

  const handleSizeSystemChange = (system) => {
    setSelectedSizeSystem(system);
  };

  const handleInputChange = (name, value) => {
    setInputData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleMetricChange = (metric) => {
    setSelectedMetric(metric);
  };

  const handleCarouselChange = (item) => {
    handleGenderClick(Object.keys(dataNames.gendersList)[item]);
  };

  const personTypeElements = () => {
    return Object.keys(dataNames.gendersList).map((gender) => (
      <PersonInfo
        key={gender}
        gender={gender}
        clothesType={selectedCl ?? "none"}
        inputData={inputData}
        onClick={() => handleGenderClick(gender)}
        onChange={handleInputChange}
        isSelected={selectedGender === gender}
        bodyParameters={clothesByBrand.filter((obj) => obj.key == selectedCl)[0]}
      />
    ));
  };
  const hasAllKeys = (obj, keys) => keys.every((key) => key in obj && obj[key] !== "");

  const isOptionsSelected = () => selectedBrand !== "none" && selectedCl !== "none";

  const isInputFilled = () =>
    hasAllKeys(inputData, clothesByBrand.filter((obj) => obj.key == selectedCl)[0].body_parts);

  const isCalcEnabled = isOptionsSelected() && isInputFilled();

  const handleCalc = () => {
    let convertedData;
    if (selectedMetric == "in") {
      convertedData = Object.keys(inputData).reduce((acc, key) => {
        acc[key] = (parseFloat(inputData[key]) * 2.54).toString();
        return acc;
      }, {});
    } else {
      convertedData = inputData;
    }
    postJson("api/calculate-size", {
      gender: selectedGender,
      brand: selectedBrand,
      cloth: selectedCl,
      size_system: selectedSizeSystem == "" ? "INT" : selectedSizeSystem,
      inputData: convertedData,
    })
      .then((data) => {
        let convertedData;
        if (selectedMetric == "in") {
          convertedData = {
            ...data,
            body_parameters: Object.keys(data.body_parameters).reduce((acc, key) => {
              acc[key] = (data.body_parameters[key] / 2.54).toFixed(1);
              return acc;
            }, {}),
          };
        } else {
          convertedData = data;
        }
        setResultSizeData(convertedData);
        setShowResultMenu(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const possibleSystems = clothesByBrand.filter((item) => item.key === selectedCl)[0]
    ?.unique_size_systems;

  return (
    <>
      <div className="flex flex-col items-center py-2 w-full">
        <div
          className={`w-full bg-[#EFF1F4] rounded-[40px] py-8 relative px-3 sm:px-6 md:px-8 lg:px-16 xl:px-24 my-8 ${
            showResultMenu ? "" : "shadow-box"
          }`}
        >
          <h2 className="text-center text-sm-h sm:text-md-h lg:text-lg-h">Калькулятор розмірів</h2>
          <div className="absolute left-5 right-5 mt-4 md:pb-10 md:pl-10 md:right-10">
            <div className="text-sm-p sm:text-md-p lg:text-lg-p flex items-center max-xs:gap-1 gap-3 justify-around md:mt-[-50px] lg:mt-[-40px] md:flex-col md:items-end md:right-10 max-xs:flex-wrap">
              <div className="max-md:hidden">
                <SwitchBar onChange={handleMetricChange} height={30}></SwitchBar>
              </div>
              <CustomSelect
                value={selectedBrand}
                onChange={handleBrandChange}
                options={["none", ...brandsByGender.map((brand) => brand.key)]}
                translateMap={brandsByGender.reduce(
                  (acc, curr) => ({ ...acc, [curr.key]: curr.name }),
                  {
                    none: "Бренд",
                  }
                )}
              />
              <CustomSelect
                disabled={clothesByBrand.length === 0}
                value={selectedCl}
                onChange={handleClChange}
                options={["none", ...clothesByBrand.map((item) => item.key)]}
                translateMap={clothesByBrand.reduce(
                  (acc, curr) => {
                    acc[curr.key] = curr.name;
                    return acc;
                  },
                  { none: "Тип одягу" }
                )}
              />
              <CustomSelect
                disabled={
                  clothesByBrand.length !== 0 && selectedCl !== "none"
                    ? clothesByBrand.filter((item) => item.key === selectedCl)[0]
                        ?.unique_size_systems.length === 0
                    : true
                }
                value={selectedSizeSystem}
                onChange={handleSizeSystemChange}
                options={
                  clothesByBrand.length !== 0 && selectedCl !== "none"
                    ? Object.keys(possibleSystems) || []
                    : ["none"]
                }
                translateMap={
                  clothesByBrand.length !== 0 && selectedCl !== "none"
                    ? Object.keys(possibleSystems).reduce(
                        (acc, key) => {
                          acc[key] = `${key}: ${possibleSystems[key]} система`;
                          return acc;
                        },
                        { none: "Система вимірювання" }
                      )
                    : { none: "Система вимірювання" }
                }
              />
            </div>
          </div>
          <div className="flex items-end mt-[60px] max-md:hidden">{personTypeElements()}</div>
          <div className="mt-[80px] xs:mt-[50px] md:hidden">
            <Slider
              onChange={handleCarouselChange}
              selectedItem={Object.keys(dataNames.gendersList).indexOf(selectedGender)}
              displayItems={1}
              loop={false}
            >
              {personTypeElements()}
            </Slider>
          </div>
          {showResultMenu && (
            <ModalResult
              onClickClose={() => setShowResultMenu(false)}
              gender={selectedGender}
              clothesType={clothesByBrand.filter((obj) => obj.key == selectedCl)[0]}
              resultSizeData={resultSizeData}
              selectedMetric={selectedMetric}
            />
          )}
        </div>
        <div className=" mt-3 mb-12">
          <Button disabled={!isCalcEnabled || showResultMenu == true} onClick={handleCalc}>
            Розрахувати
          </Button>
        </div>
      </div>
    </>
  );
}
