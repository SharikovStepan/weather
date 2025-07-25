import { useState } from "react";
import HorizontalScroll from "../HorizontalScroll";
import HoursSkeleton from "./HoursSkeleton";
import { getCurrentWeekdayAndTime } from "../../utils";
import HourSVG from "./HourSVG";

function Hours({ loadingStage, weatherData, dayNum }) {
  const conditions = weatherData?.allConditions;
  const dayHours = weatherData.forecast?.[dayNum]["hour"];

  const hoursArr = [];
  //   const hoursArrs = [];

  const { weekday, time } = weatherData ? getCurrentWeekdayAndTime(weatherData?.tzId, weatherData?.locationCode) : { weekDay: "", time: "" };
  const currentHour = dayNum == 0 ? parseInt(time.split(":")[0], 10) : 0;

  dayHours?.slice(currentHour).forEach((hour, index) => {
    const hourObj = {};
    const [date, time] = hour.time.split(" ");
    hourObj.hourString = time;
    hourObj.temp = parseInt(hour.temp_c);
    hourObj.conditionIcon = hour.condition.icon;
    hoursArr.push(hourObj);
    if (index == dayHours.slice(currentHour).length - 1 && dayHours.slice(currentHour).length < 24) {
      const nextDayHours = weatherData.forecast?.[dayNum + 1]["hour"];
      nextDayHours?.slice(0, 24 - dayHours.slice(currentHour).length).forEach((hour) => {
        const nextDayHourObj = {};
        const [date, time] = hour.time.split(" ");
        nextDayHourObj.hourString = time;
        nextDayHourObj.temp = parseInt(hour.temp_c);
        nextDayHourObj.conditionIcon = hour.condition.icon;
        hoursArr.push(nextDayHourObj);
      });
    }
  });

  return (
    <>
      <div className="p-2 relative h-auto overflow-hidden card-bg">
        <h3>Часы</h3>

        {loadingStage != "complete" && <HoursSkeleton className={loadingStage == "fading" ? "fade-out-loading" : ""}></HoursSkeleton>}
        <HorizontalScroll>
          <div className="grid grid-rows-[auto_1fr]">
            {hoursArr?.length == 0 ? (
              <div className="grid w-full" style={{ height: `${60}px` }}></div>
            ) : (
              <div className="grid ml-13" style={{ width: `calc(100*${hoursArr.length - 1}px)` }}>
                {<HourSVG currentArr={hoursArr} start={currentHour}/>}
              </div>
            )}
            <div className="grid" style={{ gridTemplateColumns: `repeat(${hoursArr.length}, 100px)` }}>
              {hoursArr?.length == 0 ? (
                <div className="flex flex-col items-center text-sm">
                  <div>
                    <h3>--°C</h3>
                  </div>
                  <div className="w-10 h-10 sm:h-12 sm:w-12">
                    <img src={null} alt="" />
                  </div>

                  <div className="text-xs">
                    <h4>--:--</h4>
                  </div>
                </div>
              ) : (
                hoursArr.map((hourData, index) => {
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
                })
              )}
            </div>
          </div>
        </HorizontalScroll>
      </div>
    </>
  );
}
export default Hours;
