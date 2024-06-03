import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../components/buttons/BtnSuccess";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="fixed right-2 top-2 flex flex-col gap-3 z-30">
      <Button onClick={() => changeLanguage("en")}>English</Button>
      <Button onClick={() => changeLanguage("ua")}>Українська</Button>
    </div>
  );
};

export default LanguageSwitcher;
