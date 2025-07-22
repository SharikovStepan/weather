import { useEffect, useState } from "react";
import "./App.css";
import NowInfo from "./Components/NowInfo/NowInfo";
import NowInfoSkeleton from "./Components/NowInfo/NowInfoSkeleton";
import DarkModeSwitcher from "./Components/DarkModeSwitcher";
import TabsButtons from "./Components/TabsButtons";
import DayTab from "./Components/DayTab";
import WeekTab from "./Components/WeekTab";
import { CITIES, API_KEY } from "./cons";

const randowIndex = Math.floor(Math.random() * CITIES.length);

function App() {
  const [isDark, setIsDark] = useState(localStorage.getItem("darkMode") === "true" || document.documentElement.classList.contains("dark") || false);

  const [loadingStage, setLoadingStage] = useState("loading");

  const [tabStage, setTabStage] = useState({
    currentTab: localStorage.getItem("currentTab") || "today",
    next: null,
    stage: "idle",
  });

  const [currentLanguage, setCurrentLanguage] = useState("ru");
  const [currentWeather, setCurrentWeather] = useState({});

  const fetchGet = async (URL) => {
    try {
      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error(`Ошибка response: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.error("Ошибка запроса:", err.message);
    }
  };

  const getWeather = async () => {
    const URL_FORECAST = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${CITIES[randowIndex]}&days=7&aqi=no&alerts=no`;
    const URL_CONDITIONS = "https://www.weatherapi.com/docs/conditions.json";

    try {
      const startTime = Date.now();
      const [weatherData, conditions] = await Promise.all([fetchGet(URL_FORECAST), fetchGet(URL_CONDITIONS)]);
      console.log("conditions", conditions);
      console.log("weatherData", weatherData);

      const { current, location } = weatherData;
      const { condition, is_day: isDay, temp_c } = current;
      const { name, tz_id: tzId } = location;

      const currentCondition = conditions.find((cond) => cond.code == condition.code);

      const currentLanguageCondition = currentCondition.languages.find((language) => language.lang_iso == currentLanguage);

      const conditionText = isDay ? currentLanguageCondition["day_text"] : currentLanguageCondition["night_text"];

      const elapsedTime = Date.now() - startTime;
      const remainingDelay = Math.max(500 - elapsedTime, 0);
      await new Promise((resolve) => setTimeout(resolve, remainingDelay));

      setCurrentWeather({
        iconSrc: condition.icon,
        locationName: name,
        locationCode: currentLanguageCondition["lang_iso"],
        temp: Math.floor(temp_c),
        tzId,
        conditionText,
      });
      setLoadingStage("fading");
    } catch (error) {
      console.error("Ошибка при получении погоды:", error);
    }
  };

  const darkSwitch = () => {
    localStorage.setItem("darkMode", !isDark);
    setIsDark((prev) => !prev);
    document.documentElement.classList.add("theme-transition");
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    getWeather();
  }, []);

  const switchTab = (tab) => {
    if (tabStage.stage == "idle") {
      setTabStage({
        currentTab: tabStage.currentTab,
        nextTab: tab,
        stage: "fade-out",
      });
      localStorage.setItem("currentTab", tab);
    }
  };

  //   useEffect(() => {
  //     console.log("tabStage", tabStage);
  //   }, [tabStage]);

  const tabFadding = () => {
    if (tabStage.stage == "fade-out") {
      setTabStage({
        currentTab: tabStage.nextTab,
        nextTab: tabStage.nextTab,
        stage: "fade-in",
      });
    } else if (tabStage.stage == "fade-in") {
      setTabStage({
        currentTab: tabStage.nextTab,
        nextTab: null,
        stage: "idle",
      });
    }
  };

  const renderTab = (tabId) => {
    switch (tabId) {
      case "today":
        return <DayTab loadingStage={loadingStage} />;
      case "tomorrow":
        return <DayTab loadingStage={loadingStage} />;
      case "week":
        console.log("renderingWEEK", loadingStage);
        return <WeekTab loadingStage={loadingStage} />;
      default:
        return <div>Неизвестно</div>;
    }
  };

  //   const
  return (
    <>
      <div className={`flex flex-col sm:grid sm:grid-cols-[1fr_2fr] sm:justify-center gap-5 sm:gap-3 px-5 mt-2 min-h-[calc(100vh-1rem)]`}>
        <div className="relative min-h-[40vh] sm:h-full sm:min-w-0 card-bg overflow-hidden ">
          {loadingStage != "complete" && <NowInfoSkeleton onAnimationEnd={() => setLoadingStage("complete")} className={loadingStage == "fading" ? "fade-out-loading" : ""} />}
          {currentWeather.locationName && (
            <NowInfo
              className={loadingStage == "fading" ? "fade-in-loading" : "opacity-100"}
              locationCode={currentWeather.locationCode}
              locationName={currentWeather.locationName}
              tzId={currentWeather.tzId}
              temp={currentWeather.temp}
              condition={currentWeather.conditionText}
              imageSrc={currentWeather.iconSrc}></NowInfo>
          )}
        </div>
        <div className="sm:relative flex flex-col gap-5 sm:gap-3">

          <div className=" sm:relative">
            <div className="w-full h-full sm:w-1/2 rounded-md bg-scn-bg-dark flex items-center">
              <div className="p-1">
                <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 50 50" width="50px" height="50px">
                  <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" />
                </svg>
              </div>
              <input id='city' className="flex-1 h-full focus:border focus:border-black bg-transparent" type="text" />
            </div>
            <DarkModeSwitcher isDark={isDark} onChange={darkSwitch} />
          </div>
          <TabsButtons button={tabStage.stage == "idle" ? tabStage.currentTab : tabStage.nextTab} disabled={tabStage.stage != "idle"} chooseTab={switchTab} />

          <div className="relative h-full">
            {
              <div onAnimationEnd={tabFadding} className={`absolute inset-0 h-full ${tabStage.stage == "fade-out" ? "fade-out-tab" : tabStage.stage == "fade-in" ? "fade-in-tab" : ""}`}>
                {renderTab(tabStage.currentTab)}
              </div>
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
