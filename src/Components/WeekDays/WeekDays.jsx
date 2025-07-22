import { useState } from "react";
import WeekDaysSkeleton from "./WeekDaysSkeleton";

function WeekDays(props) {
  const [weekDay, setWeekDay] = useState(0);

  const weekDaysArr = [
    { hourString: "00:00", temp: 20, conditionIcon: "//cdn.weatherapi.com/weather/64x64/day/113.png" },
    { hourString: "00:00", temp: 24, conditionIcon: "//cdn.weatherapi.com/weather/64x64/night/116.png" },
    { hourString: "00:00", temp: 24, conditionIcon: "//cdn.weatherapi.com/weather/64x64/night/113.png" },
    { hourString: "00:00", temp: 24, conditionIcon: "//cdn.weatherapi.com/weather/64x64/night/113.png" },
    { hourString: "00:00", temp: 11, conditionIcon: "//cdn.weatherapi.com/weather/64x64/night/113.png" },
    { hourString: "00:00", temp: 24, conditionIcon: "//cdn.weatherapi.com/weather/64x64/night/113.png" },
    { hourString: "00:00", temp: 24, conditionIcon: "//cdn.weatherapi.com/weather/64x64/night/113.png" },
  ];
  const selectWeekDay = (e) => {
    setWeekDay(e.currentTarget.getAttribute("value"));
    props.onWeekDayChoose(e.currentTarget.getAttribute("value"));
  };

  return (
    <>
      <div className="p-2 relative h-auto overflow-x-auto  flex flex-col gap-2">
        <h3>Дни недели</h3>

        <div className="relative w-fit flex justify-between gap-1 xs:w-full xs:gap-1">
          {props.loadingStage != "complete" && <WeekDaysSkeleton className={props.loadingStage == "fading" ? "fade-out-loading" : ""}></WeekDaysSkeleton>}
          {weekDaysArr.map((day, index) => {
            return (
              <div
                onClick={selectWeekDay}
                key={`weekDay_${index}`}
                value={index}
                className={`${
                  index == weekDay ? "pressed" : ""
                } cursor-pointer flex flex-col items-center rounded-md w-15 gap-3 lg:w-20 card-bg hover:bg-prm active:bg-scn dark:hover:bg-prm-dark dark:active:bg-scn-dark`}>
                <div>
                  <h3>{day.temp}°C</h3>
                </div>
                <div className="w-12 h-12 sm:h-14 lg:h-16 sm:w-auto">
                  <img src={day.conditionIcon} alt="" />
                </div>

                <div>
                  <h4>{day.hourString}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default WeekDays;
