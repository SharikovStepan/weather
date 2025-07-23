import WeekDays from "./WeekDays/WeekDays";
import DayHighlights from "./DayHighlights/DayHighlights";
import { useEffect, useState } from "react";

function WeekTab({ className = "", loadingStage, weatherData }) {
  const [weekDay, setWeekDay] = useState(0);
  const [isLoading, setIsLoading] = useState(loadingStage);
  const tabStage = {};
  const weekDaysArr = [
    { hourString: "00:00", temp: 20, conditionIcon: "//cdn.weatherapi.com/weather/64x64/day/113.png" },
    { hourString: "00:00", temp: 24, conditionIcon: "//cdn.weatherapi.com/weather/64x64/night/116.png" },
    { hourString: "00:00", temp: 24, conditionIcon: "//cdn.weatherapi.com/weather/64x64/night/113.png" },
    { hourString: "00:00", temp: 24, conditionIcon: "//cdn.weatherapi.com/weather/64x64/night/113.png" },
    { hourString: "00:00", temp: 11, conditionIcon: "//cdn.weatherapi.com/weather/64x64/night/113.png" },
    { hourString: "00:00", temp: 24, conditionIcon: "//cdn.weatherapi.com/weather/64x64/night/113.png" },
    { hourString: "00:00", temp: 24, conditionIcon: "//cdn.weatherapi.com/weather/64x64/night/113.png" },
  ];

  console.log("WeekTab weatherData", weatherData);

  useEffect(() => {
    setIsLoading(loadingStage);
  }, [loadingStage]);

  const choosedWeekDay = (weekDay) => {
    setWeekDay(weekDay);
    setIsLoading("loading");
    setTimeout(() => {
      setIsLoading("fading");
    }, 350);
  };

  const func = () => {
    if (isLoading != "complete") {
      setIsLoading("complete");
    }
  };

  return (
    <>
      <div className={`h-fit sm:h-full ${className}`}>
        <div className="h-full flex flex-col sm:grid sm:grid-rows-[auto_1fr] lg:grid-rows-[auto_3fr] gap-5 sm:gap-y-4">
          <WeekDays loadingStage={loadingStage} onWeekDayChoose={choosedWeekDay}></WeekDays>
          <DayHighlights onAnimationEnd={func} weatherData={weatherData} dayNum={weekDay} loadingStage={isLoading}></DayHighlights>
        </div>
      </div>
    </>
  );
}
export default WeekTab;
