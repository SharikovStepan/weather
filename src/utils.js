export const getCurrentDateAndTime = (timezone, language, weekDayLenght, specificDate) => {
  const date = specificDate ? new Date(specificDate) : new Date();

  const weekday = new Intl.DateTimeFormat(language, {
    weekday: weekDayLenght,
    timeZone: timezone,
  });
  const time = new Intl.DateTimeFormat(language, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: timezone,
  });
  const dayMonth = new Intl.DateTimeFormat(language, {
    day: "2-digit",
    month: "2-digit",
    timeZone: timezone,
  });

  return {
    weekday: weekday.format(date),
    time: time.format(date),
    date: dayMonth.format(date).replace(/\//g, "."), // заменяет / на . для формата DD.MM
  };
};
