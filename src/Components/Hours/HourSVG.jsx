function HourSVG({ currentArr, start }) {
  const tempsData = currentArr.map((hourData) => hourData.temp);
  const svgHeight = window.innerWidth < 510 ? 60 : 60;

  const svgWidth = 100 * (currentArr.length - 1);

  const scaleY = (currentTemp) => {
    const minTemp = Math.min(...tempsData);
    const maxTemp = Math.max(...tempsData);
    const range = maxTemp - minTemp || 1; // избегаем деления на 0
    return svgHeight - 5 - ((currentTemp - minTemp) / range) * (svgHeight - 10);
  };

  const points = tempsData
    .map((temp, i) => {
      const x = (i / 23) * svgWidth;
      const y = scaleY(temp);

      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg className="overflow-visible" width={svgWidth} height={svgHeight}>
      <polyline points={points} fill="none" stroke="#0d6fa8" strokeWidth="2" />
      {tempsData.map((temp, i) => {
        const x = (i / 23) * svgWidth;
        const y = scaleY(temp);
        return <circle key={`point-${i}`} cx={x} cy={y} r={2.5} fill={24 - i > start ? `#027fb0` : `#b0022d`} />;
      })}
    </svg>
  );
}
export default HourSVG;
