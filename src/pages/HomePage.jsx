import { useEffect, useState } from "react";
import { DescriptionInfo } from "../components/InfoContent/DescriptonInfo";
import { BrandsInfo } from "../components/InfoContent/BrandsInfo";
import { SwitchInfo } from "../components/InfoContent/SwitchInfo";
import { CalcSection } from "../components/Calculator/CalcSection";
import { fetchJson } from "../api";

export function HomePage() {
  const [brands, setBrands] = useState([]);
  const [isBrandsLoading, setIsBrandsLoading] = useState(false);

  useEffect(() => {
    setIsBrandsLoading(true);

    fetchJson("api/all-brands")
      .then((data) => {
        setBrands(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsBrandsLoading(false);
      });
  }, []);

  return (
    <>
      <section id="about-section">
        <div className="container mx-auto">
          <DescriptionInfo />
        </div>
      </section>
      <section id="brands-section">
        <div className="mx-auto flex flex-col items-center">
          <BrandsInfo brands={brands} isLoading={isBrandsLoading} />
        </div>
      </section>
      <section id="description-section">
        <div className="bg-white rounded-b-[40px] lg:rounded-b-[80px]">
          <div className="container mx-auto">
            <SwitchInfo />
          </div>
        </div>
      </section>
      <section id="calc-section">
        <div className="container mx-auto">
          <CalcSection />
        </div>
      </section>
    </>
  );
}
