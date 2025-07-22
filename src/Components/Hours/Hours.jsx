import { useState } from "react";
import HorizontalScroll from "../HorizontalScroll";
import HoursSkeleton from "./HoursSkeleton";
function Hours(props) {
  const [condition, setCondition] = useState(props.conditionData);
  const [weather, setWeather] = useState(props.weatherData);

  const hoursArr = [
    { hourString: "00:00", temp: 20, conditionIcon: "//cdn.weatherapi.com/weather/64x64/day/113.png" },
    { hourString: "00:00", temp: 24, conditionIcon: "//cdn.weatherapi.com/weather/64x64/night/116.png" },
    { hourString: "00:00", temp: 24, conditionIcon: "//cdn.weatherapi.com/weather/64x64/night/113.png" },
    { hourString: "00:00", temp: 24, conditionIcon: "//cdn.weatherapi.com/weather/64x64/night/113.png" },
    { hourString: "00:00", temp: 11, conditionIcon: "//cdn.weatherapi.com/weather/64x64/night/113.png" },
    { hourString: "00:00", temp: 24, conditionIcon: "//cdn.weatherapi.com/weather/64x64/night/113.png" },
    { hourString: "00:00", temp: 24, conditionIcon: "//cdn.weatherapi.com/weather/64x64/night/113.png" },
    { hourString: "00:00", temp: 17, conditionIcon: "//cdn.weatherapi.com/weather/64x64/night/113.png" },
    { hourString: "00:00", temp: 24, conditionIcon: "//cdn.weatherapi.com/weather/64x64/night/113.png" },
    { hourString: "00:00", temp: 28, conditionIcon: "//cdn.weatherapi.com/weather/64x64/night/113.png" },
    { hourString: "00:00", temp: 24, conditionIcon: "//cdn.weatherapi.com/weather/64x64/night/113.png" },
    { hourString: "00:00", temp: 24, conditionIcon: "//cdn.weatherapi.com/weather/64x64/night/113.png" },
    { hourString: "00:00", temp: 20, conditionIcon: "//cdn.weatherapi.com/weather/64x64/night/113.png" },
    { hourString: "00:00", temp: 24, conditionIcon: "//cdn.weatherapi.com/weather/64x64/night/113.png" },
    { hourString: "00:00", temp: 24, conditionIcon: "//cdn.weatherapi.com/weather/64x64/night/113.png" },
    { hourString: "00:00", temp: 11, conditionIcon: "//cdn.weatherapi.com/weather/64x64/night/113.png" },
    { hourString: "00:00", temp: 24, conditionIcon: "//cdn.weatherapi.com/weather/64x64/night/113.png" },
    { hourString: "00:00", temp: 22, conditionIcon: "//cdn.weatherapi.com/weather/64x64/night/113.png" },
    { hourString: "00:00", temp: 24, conditionIcon: "//cdn.weatherapi.com/weather/64x64/night/113.png" },
    { hourString: "00:00", temp: 24, conditionIcon: "//cdn.weatherapi.com/weather/64x64/night/113.png" },
    { hourString: "00:00", temp: 16, conditionIcon: "//cdn.weatherapi.com/weather/64x64/night/113.png" },
    { hourString: "00:00", temp: 24, conditionIcon: "//cdn.weatherapi.com/weather/64x64/night/113.png" },
    { hourString: "00:00", temp: 24, conditionIcon: "//cdn.weatherapi.com/weather/64x64/night/113.png" },
    { hourString: "00:00", temp: 24, conditionIcon: "//cdn.weatherapi.com/weather/64x64/night/113.png" },
  ];

  const tempsData = hoursArr.map((hourData) => hourData.temp);

  const height = window.innerWidth < 510 ? 60 : 60;
  const width = 100 * (hoursArr.length - 1);

  const minTemp = Math.min(...tempsData);
  const maxTemp = Math.max(...tempsData);
  const range = maxTemp - minTemp || 1; // избегаем деления на 0

  const scaleY = (tmp) => {
    return height - 5 - ((tmp - minTemp) / range) * (height - 10);
  };

  const points = tempsData
    .map((temp, i) => {
      const x = (i / 23) * width;
      const y = scaleY(temp);
      return `${x},${y}`;
    })
    .join(" ");

  const circles = tempsData.map((temp, i) => {
    const x = (i / 23) * width;
    const y = scaleY(temp);
    return <circle key={`point-${i}`} cx={x} cy={y} r={2.5} fill="#027fb0" />;
  });

  return (
    <>
      <div className="p-2 relative h-auto overflow-hidden card-bg">
        <h3>Часы</h3>

        {props.loadingStage != "complete" && <HoursSkeleton className={props.loadingStage == "fading" ? "fade-out-loading" : ""}></HoursSkeleton>}
        <HorizontalScroll>
          <div className="grid grid-rows-[auto_1fr]">
            <div className="grid ml-13" style={{ width: `calc(100*${hoursArr.length - 1}px)` }}>
              <svg className="overflow-visible" width={width} height={height}>
                <polyline points={points} fill="none" stroke="#0d6fa8" strokeWidth={2} />
                {circles}
              </svg>
            </div>
            <div className="grid" style={{ gridTemplateColumns: `repeat(${hoursArr.length}, 100px)` }}>
              {hoursArr.map((hourData, index) => {
                return (
                  <div key={`Hour_${index}`} className="flex flex-col items-center text-sm">
                    <div>
                      <h3>{hourData.temp}°C</h3>
                    </div>
                    <div className="w-10 h-10 sm:h-12 sm:w-12">
                      <img src={hourData.conditionIcon} alt="" />
                    </div>

                    <div className="text-xs">
                      <h4>{hourData.hourString}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </HorizontalScroll>
      </div>
    </>
  );
}
export default Hours;
