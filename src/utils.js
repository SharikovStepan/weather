export const getCurrentWeekdayAndTime = (timezone, language) => {
	 const date = new Date();

	 const weekday = new Intl.DateTimeFormat(language, {
		weekday: "long",
		timeZone: timezone,
	 });
	 const time = new Intl.DateTimeFormat(language, {
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
		timeZone: timezone,
	 });

	 return {
		weekday: weekday.format(date),
		time: time.format(date),
	 };
  };