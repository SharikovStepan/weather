import WeekDays from "./WeekDays/WeekDays";
import DayHighlights from "./DayHighlights/DayHighlights";
import { useEffect, useState } from "react";

function WeekTab({ className = "", loadingStage, weatherData }) {
  const [weekDay, setWeekDay] = useState(0);

  const choosedWeekDay = (weekDay) => {
    setWeekDay(weekDay);
  };

  return (
    <>
      <div className={`h-fit sm:h-full ${className}`}>
        <div className="h-full flex flex-col sm:grid sm:grid-rows-[auto_1fr] lg:grid-rows-[auto_3fr] gap-5 sm:gap-y-4">
          <WeekDays weatherData={weatherData} loadingStage={loadingStage} onWeekDayChoose={choosedWeekDay}></WeekDays>
          <DayHighlights weatherData={weatherData} dayNum={weekDay} loadingStage={loadingStage}></DayHighlights>
        </div>
      </div>
    </>
  );
}
export default WeekTab;
