import "./App.css";
import { useEffect, useState } from "react";
import NowInfo from "./Components/NowInfo/NowInfo";
import Search from "./Components/Search";
import NowInfoSkeleton from "./Components/NowInfo/NowInfoSkeleton";
import DarkModeSwitcher from "./Components/DarkModeSwitcher";
import TabsButtons from "./Components/TabsButtons";
import DayTab from "./Components/DayTab";
import WeekTab from "./Components/WeekTab";
import { COUNTRY_DICT_RU, CITY_DICT_RU } from "./cons";

// const randowIndex = Math.floor(Math.random() * CITIES.length);

function App() {
  const [currentLocation, setCurrentLocation] = useState(null);

  const [isDark, setIsDark] = useState(localStorage.getItem("darkMode") === "true" || document.documentElement.classList.contains("dark") || false);
  const [loadingStage, setLoadingStage] = useState("loading");
  const [tabStage, setTabStage] = useState({
    currentTab: localStorage.getItem("currentTab") || "today",
    next: null,
    stage: "idle",
  });

  const [currentLanguage, setCurrentLanguage] = useState("ru");

  const [currentWeather, setCurrentWeather] = useState({});

  const darkSwitch = () => {
    localStorage.setItem("darkMode", !isDark);
    setIsDark((prev) => !prev);
    document.documentElement.classList.add("theme-transition");
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const getIpLocation = async () => {
      try {
        const ipResponse = await fetch("https://api.ipify.org?format=json");

        if (!ipResponse.ok) {
          throw new Error(`Ошибка ipWeather: ${ipResponse.status}`);
        }

        const ip = await ipResponse.json().ip;
        //   console.log('ip');
        const response = await fetch(`${import.meta.env.VITE_API_URL || ""}/api/ipWeather?ip=${ip}`);

        if (!response.ok) {
          throw new Error(`Ошибка ipWeather: ${response.status}`);
        }
        const locationData = await response.json();

        const location = {
          city: currentLanguage == "ru" && CITY_DICT_RU[locationData.city] ? CITY_DICT_RU[locationData.city] : locationData.city,
          country: currentLanguage == "ru" && COUNTRY_DICT_RU[locationData.country_name] ? COUNTRY_DICT_RU[locationData.country_name] : locationData.country_name,
        };

        setCurrentLocation(location);
      } catch (err) {
        console.error("Ошибка в getIpLocation:", err.message);
        setCurrentLocation({ city: "Москва", country: "Russia" });
      }
    };
    getIpLocation();
  }, []);

  useEffect(() => {
    if (!currentLocation) return;
    const getWeather = async () => {
      try {
        const startTime = Date.now();

        const response = await fetch(
          `${import.meta.env.VITE_API_URL || ""}/api/weather?city=${currentLocation.city}&country=${currentLocation.country}${currentLanguage ? `&lang=${currentLanguage}` : ""}`
        );

        if (!response.ok) {
          throw new Error(`Ошибка api/Weather: ${response.status}`);
        }

        const weatherData = await response.json();

        const { current, location, forecast } = weatherData;
        const { condition, temp_c, vis_km: visibility, wind_kph: windSpeed, uv, humidity } = current;
        const { country, name, tz_id: tzId } = location;

        const elapsedTime = Date.now() - startTime;
        const remainingDelay = Math.max(500 - elapsedTime, 0);
        await new Promise((resolve) => setTimeout(resolve, remainingDelay));

        setCurrentWeather({
          iconSrc: condition.icon,
          locationName: name,
          locationCountry: country,
          temp: Math.floor(temp_c),
          visibility,
          windSpeed,
          humidity,
          uv,
          tzId,
          conditionText: condition.text,
          forecast: forecast.forecastday,
        });
        setLoadingStage("fading");
      } catch (error) {
        console.error("Ошибка при получении погоды:", error);
      }
    };

    setLoadingStage("loading");
    getWeather();
  }, [currentLocation]);

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
        return <DayTab loadingStage={loadingStage} weatherData={currentWeather} dayNum={0} />;
      case "tomorrow":
        return <DayTab loadingStage={loadingStage} weatherData={currentWeather} dayNum={1} />;
      case "week":
        return <WeekTab loadingStage={loadingStage} weatherData={currentWeather} tzId={currentWeather.tzId} locationCode={currentLanguage} />;
      default:
        return <div>Неизвестно</div>;
    }
  };

  const getCity = (e) => {
    setLoadingStage("loading");
    setCurrentLocation({ city: e.target.getAttribute("city"), country: e.target.getAttribute("country") });
  };

  return (
    <>
      <div className={`flex flex-col sm:grid sm:grid-cols-[1fr_2fr] sm:justify-center gap-5 sm:gap-3 px-5 mt-2 min-h-[calc(100vh-1rem)]`}>
        <div className="relative min-h-[40vh] sm:h-full sm:min-w-0 card-bg overflow-hidden ">
          {loadingStage != "complete" && <NowInfoSkeleton onAnimationEnd={() => setLoadingStage("complete")} className={loadingStage == "fading" ? "fade-out-loading" : ""} />}
          {currentWeather.locationName && loadingStage != "loading" && (
            <NowInfo
              className={loadingStage == "fading" ? "fade-in-loading" : "opacity-100"}
              locationCode={currentLanguage}
              locationName={currentWeather.locationName}
              locationCountry={currentWeather.locationCountry}
              tzId={currentWeather.tzId}
              temp={currentWeather.temp}
              condition={currentWeather.conditionText}
              imageSrc={currentWeather.iconSrc}></NowInfo>
          )}
        </div>
        <div className="sm:relative flex flex-col gap-5 sm:gap-3">
          <div className="sm:relative">
            <Search language={currentLanguage} onClick={getCity} />
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
