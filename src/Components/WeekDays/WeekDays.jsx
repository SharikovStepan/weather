import { useState } from "react";
import WeekDaysSkeleton from "./WeekDaysSkeleton";

import { getCurrentDateAndTime } from "../../utils";

function WeekDays(props) {
  const [weekDay, setWeekDay] = useState(0);

  const weatherData = props.weatherData?.forecast;
  const weekDaysArr = [];

  weatherData?.forEach((dayWeather, index) => {
    const weekDayObj = {};
    const { weekday, date } = getCurrentDateAndTime(props.tzId, props.locationCode, "short", dayWeather.date);

    weekDayObj.date = date;
    weekDayObj.weekDay = weekday;
    weekDayObj.temp = parseInt(dayWeather.day.avgtemp_c);
    weekDayObj.conditionIcon = dayWeather.day.condition.icon;
    weekDaysArr.push(weekDayObj);

    if (index == weatherData.length - 1) {
      Array.from({ length: 7 - weatherData.length }).forEach((pseudoDay) => {
        const weekDayObj = {};
        weekDayObj.date = "--.--";
        weekDayObj.weekDay = "-";
        weekDayObj.temp = "--";
        weekDayObj.conditionIcon = null;
        weekDaysArr.push(weekDayObj);
      });
    }
  });

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

          {weekDaysArr.length != 0 ? (
            weekDaysArr.map((day, index) => {
              return (
                <div
                  onClick={selectWeekDay}
                  key={`weekDay_${index}`}
                  value={index}
                  className={`${index == weekDay ? "pressed" : ""} ${
                    index > weatherData.length - 1 ? "disabled-weekday" : ""
                  } cursor-pointer flex flex-col items-center rounded-md w-15 gap-3 lg:w-20 card-bg hover:bg-prm active:bg-scn dark:hover:bg-prm-dark dark:active:bg-scn-dark`}>
                  <div>
                    <h3>{day.temp}°C</h3>
                  </div>
                  <div className="w-12 h-12 sm:h-14 lg:h-16 sm:w-auto">
                    <img className="w-full h-full" src={day.conditionIcon} alt="" />
                  </div>

                  <div className="flex flex-col justify-center items-center">
                    <h4>{day.date}</h4>
                    <h4>{day.weekDay}</h4>
                  </div>
                </div>
              );
            })
          ) : (
            <div className={`cursor-pointer flex flex-col items-center rounded-md w-15 gap-3 lg:w-20 card-bg hover:bg-prm active:bg-scn dark:hover:bg-prm-dark dark:active:bg-scn-dark`}>
              <div>
                <h3>--°C</h3>
              </div>
              <div className="w-12 h-12 sm:h-14 lg:h-16 sm:w-auto">
                <img className="w-full h-full" src={null} alt="" />
              </div>

              <div className="flex flex-col justify-center items-center">
                <h4>----</h4>
                <h4>---</h4>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default WeekDays;
