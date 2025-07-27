import { useEffect, useState } from "react";
import DayHighlightsSkeleton from "./DayHighlightsSkeleton";

function DayHighlights({ loadingStage, onAnimationEnd, weatherData, dayNum }) {
  const dayForecast = weatherData.forecast?.[dayNum]["day"];
  const astro = weatherData.forecast?.[dayNum]["astro"];

  const convertTo24 = (time12h) => {
    if (time12h) {
      const [time, dayStr] = time12h.split(" ");
      let [hours, minutes] = time.split(":");
      if (dayStr === "PM" && hours !== "12") {
        hours = parseInt(hours, 10) + 12;
      } else if (dayStr === "AM" && hours === "12") {
        hours = "00";
      }
      return `${hours}:${minutes}`;
    }
  };

  let uvIndex = dayNum == 0 ? weatherData?.uv : dayForecast?.uv;
  const uvStroke = 100 - (uvIndex * 100) / 13;

  return (
    <>
      <div className="relative grid grid-rows-6 xs:grid-rows-3 xs:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 gap-5 sm:gap-3 min-h-0">
        {loadingStage != "complete" && <DayHighlightsSkeleton onAnimationEnd={onAnimationEnd} className={loadingStage == "fading" ? "fade-out-loading" : ""}></DayHighlightsSkeleton>}

        <div className="relative card-bg highlight flex justify-around">
          <div className="grid grid-rows-[1fr_2fr_1fr] justify-items-center gap-2">
            <div className="highlight-tittle">Восход</div>
            <div className="self-center highlight-img ">
              <img className="w-full h-full" src="/src/assets/sunrise.png" alt="" />
            </div>
            <div className="highlight-value">{convertTo24(astro?.sunrise)}</div>
          </div>
          <div className="grid grid-rows-[1fr_2fr_1fr] justify-items-center gap-2">
            <div className="highlight-tittle ">Закат</div>
            <div className="self-center highlight-img ">
              <img className="w-full h-full" src="/src/assets/sunset.png" alt="" />
            </div>
            <div className="highlight-value">{convertTo24(astro?.sunset)}</div>
          </div>
          {/* <div className="absolute top-2/3 left-1/2 transform -translate-1/2 border border-black rounded-full w-[75%] h-[75%]"></div> */}
        </div>
        <div className="relative card-bg highlight grid grid-rows-[1fr_1fr_1fr_1fr] grid-cols-2 gap-y-3 sm:gap-y-0 justify-items-center">
          <div className="highlight-tittle col-span-2">Температура</div>

          <div className="highlight-img row-start-2 self-end">
            <img className="w-full h-full" src="/src/assets/thermometer-low.png" alt="" />
          </div>

          <div className="highlight-tittle self-end">Мин.</div>
          <div className="highlight-value text-center">
            <span>{dayForecast ? parseInt(dayForecast?.mintemp_c) : "-"}</span>°C
          </div>
          <div className="relative highlight-img row-start-2 col-start-2 self-end">
            <img className="w-full h-full" src="/src/assets/thermometer-high.png" alt="" />
          </div>

          <div className="highlight-tittle row-start-3 col-start-2 self-end">Маск.</div>
          <div className="highlight-value text-center row-start-4 col-start-2">
            <span>{dayForecast ? parseInt(dayForecast?.maxtemp_c) : "-"}</span>°C
          </div>

          {/* <div className="absolute top-2/3 left-1/2 transform -translate-1/2 border border-black rounded-full w-[75%] h-[75%]"></div> */}
        </div>
        <div className="card-bg highlight flex flex-col justify-between">
          <h3 className="highlight-tittle self-center">UV Индекс</h3>
          <div className="grid grid-cols-5 col-span-2">
            <div className="col-span-2 highlight-img">
              <img className="w-full h-full" src="src/assets/uv.png" alt="" />
            </div>
            <div className="highlight-value text-6xl sm:text-5xl self-center col-start-3 justify-self-center">{uvIndex}</div>
          </div>

          <div className="relative w-full mb-4 bg-prm dark:bg-prm-dark rounded-xl">
            <div
              className={`${
                uvStroke >= 98 && uvStroke <= 99 ? `rounded-l-lg` : uvStroke > 99 && uvStroke < 100 ? `rounded-l-md` : uvStroke == 100 ? "rounded-l-xl":''
              } absolute top-1/2 transform -translate-y-1/2 right-0 h-[110%] rounded-r-xl transition-all bg-prm dark:bg-prm-dark`}
              style={{ width: `${uvStroke}%` }}></div>
            <div className="absolute -top-6 font-bold opacity-50 w-full grid grid-cols-[1fr_1fr_1fr_0.30fr]">
              <span>0</span>
              <span>4</span>
              <span>8</span>
              <span>12</span>
              <span></span>
            </div>
            <div className="w-[99.5%] h-10 sm:h-5 rounded-xl bg-linear-to-r from-amber-400 to-red-600">
              <span></span>
            </div>
          </div>
        </div>

        <div className="card-bg highlight grid grid-rows-[1fr_2fr_2fr] sm:grid-rows-3 justify-items-center gap-5 sm:gap-1">
          <h3 className="highlight-tittle text-center">Скорость ветра</h3>
          <div className="highlight-img ">
            <img className="w-full h-full" src="src/assets/wind.png" alt="" />
          </div>
          <div className="text-3xl">
            {dayNum > 0 ? "до " : ""}
            <span className="highlight-value">{dayNum == 0 ? weatherData?.windSpeed : dayForecast?.maxwind_kph}</span> Км/ч
          </div>
        </div>

        <div className="card-bg highlight grid grid-rows-[1fr_2fr_2fr] sm:grid-rows-3 justify-items-center gap-5 sm:gap-1">
          <h3 className="highlight-tittle text-center">Влажность</h3>
          <div className="highlight-img ">
            <img className="w-full h-full" src="src/assets/wet.png" alt="" />
          </div>
          <div className="text-3xl">
            {dayNum > 0 ? "≈ " : ""}
            <span className="highlight-value">{dayNum == 0 ? weatherData?.humidity : dayForecast?.avghumidity}</span> %
          </div>
        </div>

        <div className="card-bg highlight grid grid-rows-[1fr_2fr_2fr] sm:grid-rows-3 justify-items-center gap-5 sm:gap-1">
          <h3 className="highlight-tittle text-center">Видимость</h3>
          <div className="highlight-img">
            <img className="w-full h-full" src="src/assets/visibility.png" alt="" />
          </div>
          <div className="text-3xl">
            {dayNum > 0 ? "≈ " : ""}
            <span className="highlight-value">{dayNum == 0 ? weatherData?.visibility : dayForecast?.avgvis_km}</span> Км
          </div>
        </div>
      </div>
    </>
  );
}
export default DayHighlights;
