import { getCurrentDateAndTime } from "../../utils";

function NowInfo(props) {
  const imageSrc = props.imageSrc.replace("64x64", "128x128");

  const { weekday, time } = getCurrentDateAndTime(props.tzId, props.locationCode, "long");

  return (
    <>
      <div className={`absolute inset-0 max-h-full grid grid-cols-3 grid-rows-[2fr_2fr_1fr] p-3 lg:p-5 sm:flex sm:flex-col sm:gap-12 fade-in ${props.className}`}>
        <div className="text-xl flex flex-col gap-4">
          <p className="inline-block">Сейчас в</p>
          <h2 className="text-3xl xs:text-5xl sm:text-4xl md:text-5xl">{props.locationName}</h2>
          <h2 className="text-lg xs:text-2xl sm:text-xl md:text-2xl">{props.locationCountry}</h2>
        </div>
        <div className="w-fit h-fit col-span-2 justify-self-center sm:self-center lg:self-start">{imageSrc && <img className="w-full h-full" src={imageSrc} alt="" />}</div>
        <h2 className="text-2xl grid grid-cols-3 row-start-2 justify-center col-span-3 gap-x-10 sm:flex sm:flex-col sm:gap-10 lg:flex-row lg:self-start">
          <div className="flex self-center">
            <span className="text-6xl xs:text-7xl">{props.temp}</span>
            <span className="">°C</span>
          </div>
          <div className="self-center text-xl col-span-2 justify-self-center xs:text-2xl">{props.condition}</div>
        </h2>
        <h3 className="flex items-end gap-2 row-start-3 sm:flex-col sm:items-start lg:flex-row lg:items-center">
          <p className="text-2xl xs:text-2xl font-medium sm:font-normal lg:font-medium">{`${weekday},`}</p>
          <p className="text-xl xs:text-2xl lg:justify-self-end">{time}</p>
        </h3>
      </div>
    </>
  );
}
export default NowInfo;
