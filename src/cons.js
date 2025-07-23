export const CITY_DICT_RU = {
  // Европа
  London: "Лондон",
  Paris: "Париж",
  Berlin: "Берлин",
  Rome: "Рим",
  Madrid: "Мадрид",
  Vienna: "Вена",
  Prague: "Прага",
  Warsaw: "Варшава",
  Athens: "Афины",
  Lisbon: "Лиссабон",

  // США и Канада
  "New York": "Нью-Йорк",
  "Los Angeles": "Лос-Анджелес",
  Chicago: "Чикаго",
  "San Francisco": "Сан-Франциско",
  Toronto: "Торонто",
  Vancouver: "Ванкувер",

  // Азия
  Tokyo: "Токио",
  Beijing: "Пекин",
  Seoul: "Сеул",
  Bangkok: "Бангкок",
  Singapore: "Сингапур",
  Dubai: "Дубай",

  // Россия и СНГ
  Moscow: "Москва",
  "Saint Petersburg": "Санкт-Петербург",
  Kyiv: "Киев",
  Minsk: "Минск",
  Almaty: "Алматы",
  Tashkent: "Ташкент",

  // Другие
  Sydney: "Сидней",
  "Rio de Janeiro": "Рио-де-Жанейро",
  Cairo: "Каир",
  Istanbul: "Стамбул",
};

export const TABS = [
  { id: "today", text: "Сейчас" },
  { id: "tomorrow", text: "Завтра" },
  { id: "week", text: "Неделя" },
];

export const CITIES = ["Moscow", "London", "beijing", "dubai", "Berlin", "New York", "Tokyo", "Saint Petersburg"];

export const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
