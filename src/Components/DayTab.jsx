import DayHighlights from "./DayHighlights/DayHighlights.jsx";
import Hours from "./Hours/Hours.jsx";

function TodayTab({ className = "", weatherData, loadingStage, dayNum }) {
  return (
    <>
      <div className={`h-fit sm:h-full ${className}`}>
        <div className="h-full flex flex-col sm:grid sm:grid-rows-[auto_1fr] lg:grid-rows-[auto_3fr] gap-5 sm:gap-y-3">
          <Hours loadingStage={loadingStage} weatherData={weatherData} dayNum={dayNum}></Hours>
          <DayHighlights loadingStage={loadingStage} dayNum={dayNum} weatherData={weatherData}></DayHighlights>
        </div>
      </div>
    </>
  );
}
export default TodayTab;
