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

export const COUNTRY_DICT_RU = {
	// Европа
	Germany: "Германия",
	France: "Франция",
	Italy: "Италия",
	Spain: "Испания",
	UK: "Великобритания",
	Portugal: "Португалия",
	Greece: "Греция",
	Austria: "Австрия",
	Switzerland: "Швейцария",
	Netherlands: "Нидерланды",
	Belgium: "Бельгия",
	Sweden: "Швеция",
	Norway: "Норвегия",
	Finland: "Финляндия",
	Denmark: "Дания",
	Poland: "Польша",
	Czechia: "Чехия",
	Hungary: "Венгрия",
	Romania: "Румыния",
	Ukraine: "Украина",
	
	// Северная Америка
	USA: "США",
	Canada: "Канада",
	Mexico: "Мексика",
	
	// Азия
	China: "Китай",
	Japan: "Япония",
	"South Korea": "Южная Корея",
	India: "Индия",
	Thailand: "Таиланд",
	Vietnam: "Вьетнам",
	Indonesia: "Индонезия",
	Malaysia: "Малайзия",
	Philippines: "Филиппины",
	"Saudi Arabia": "Саудовская Аравия",
	Turkey: "Турция",
	Israel: "Израиль",
	UAE: "ОАЭ",
	
	// СНГ
	Russia: "Россия",
	Belarus: "Беларусь",
	Kazakhstan: "Казахстан",
	Uzbekistan: "Узбекистан",
	Azerbaijan: "Азербайджан",
	Armenia: "Армения",
	
	// Океания
	Australia: "Австралия",
	"New Zealand": "Новая Зеландия",
	
	// Южная Америка
	Brazil: "Бразилия",
	Argentina: "Аргентина",
	Colombia: "Колумбия",
	Chile: "Чили",
	Peru: "Перу",
	"United States of America": "Соединенные Штаты Америки",
	
	// Африка
	"South Africa": "ЮАР",
	Egypt: "Египет",
	Nigeria: "Нигерия",
	Kenya: "Кения",
	Morocco: "Марокко",
	Algeria: "Алжир"
 };

export const TABS = [
  { id: "today", text: "Сейчас" },
  { id: "tomorrow", text: "Завтра" },
  { id: "week", text: "Неделя" },
];

export const CITIES = ["Moscow", "London", "beijing", "dubai", "Berlin", "New York", "Tokyo", "Saint Petersburg"];

export const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
export const IP_KEY = import.meta.env.VITE_IP_API_KEY;

export const WEEKDAYS = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
