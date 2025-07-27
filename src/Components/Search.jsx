import { useEffect, useState } from "react";

function Search({ language, onClick }) {
  const [inputValue, setInputValue] = useState("");
  const [cities, setCities] = useState("");

  useEffect(() => {
    const getCities = async () => {
      try {
        const response = await fetch(`/api/search?searchString=${inputValue.toLowerCase()}`);
        if (!response.ok) throw new Error();

        const cities = await response.json();

        setCities(cities);
      } catch (error) {
        console.error(error);
      }
    };

    const tmr = setTimeout(() => {
      if (inputValue.length > 2) {
        getCities();
      } else {
        setCities("");
      }
    }, 456);

    return () => clearTimeout(tmr);
  }, [inputValue, language]);

  const searching = (e) => {
    setInputValue(e.target.value);
  };

  const choosedCity = (e) => {
    setInputValue("");
    setCities("");
    onClick(e);
  };
  return (
    <>
      <div className="relative w-full sm:w-1/2 rounded-md dark:bg-scn-bg-dark bg-scn-bg flex items-center">
        <div className="p-1">
          <svg className="w-8 h-8 sm:w-5 sm:h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 50 50" width="50px" height="50px">
            <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" />
          </svg>
        </div>
        <input autoComplete="off" id="city" onChange={searching} value={inputValue} className="flex-1 input-border self-stretch" type="text" />

        <div
          className={`${
            cities.length > 0 ? "" : "hidden"
          } absolute bottom-0 trasform translate-y-[calc(100%+10px)] left-0 w-full p-2 rounded-md z-10 shadow-[0px_0px_10px] bg-scn-bg shadow-scn dark:bg-scn-bg-dark dark:shadow-scn-dark`}>
          {cities.length > 0 ? (
            <ul>
              {cities.map((city, index) => {
                return <li onClick={choosedCity} city={city.name} country={city.country} key={`citi_list_${index}`} className="input-list-item">{`${city.name}, ${city.country}`}</li>;
              })}
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
export default Search;
