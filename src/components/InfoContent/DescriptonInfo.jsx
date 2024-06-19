import React from "react";

export function DescriptionInfo() {
  return (
    <div className="w-full flex justify-between relative my-8">
      <div className="max-w-[530px] text-center mt-[180px] sm:mt-[200px]">
        <h2 className="text-sm-h sm:text-md-h lg:text-lg-h w-9/12 md:w-full text-mainblue">
          Про Наш Продукт
        </h2>
        <p className="py-5 text-sm-p sm:text-md-p lg:text-lg-p">
          Розміри одягу можуть бути заплутані. Різні бренди використовують
          унікальні виміри, а також різні шкали та одиниці виміру. Тому ми
          створили цей продукт, щоб допомогти вам розібратися у цьому. Ми
          зібрали таблиці розмірів та вимірювання від ваших улюблених брендів,
          все в одному місці.Наш продукт постійно розвивається. Ми постійно
          додаємо більше брендів до нашої бази даних розмірів, більше продуктів
          та більше модних та прилягаючих порад.
        </p>
      </div>
      <div className="max-w-[320px] sm:max-w-none sm:w-[320px] md:w-[450px] absolute right-0">
        <img
          className="mx-auto"
          src={`${import.meta.env.BASE_URL}assets/images/roulette.png`}
          alt=""
        />
      </div>
    </div>
  );
}
