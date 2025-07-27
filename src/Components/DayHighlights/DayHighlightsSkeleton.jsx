import sunrise from "/src/assets/sunrise.png";
import sunset from "/src/assets/sunset.png";
import thermometerHigh from "/src/assets/thermometer-high.png";
import thermometerLow from "/src/assets/thermometer-low.png";
import UVLogo from "/src/assets/UV.png";
import visibility from "/src/assets/visibility.png";
import wet from "/src/assets/wet.png";
import wind from "/src/assets/wind.png";

function DayHighlightsSkeleton({ className = "", onAnimationEnd }) {
  return (
    <>
      <div
        onAnimationEnd={onAnimationEnd}
        className={`fade-in absolute z-10 inset-0 h-full right-0 w-full grid grid-rows-6 xs:grid-rows-3 xs:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 gap-5 sm:gap-3 min-h-0 ${className}`}>
        <div className="relative card-bg highlight flex justify-around">
          <div className="grid grid-rows-[1fr_2fr_1fr] justify-items-center gap-2">
            <div className="highlight-tittle ">Восход</div>
            <div className="self-center highlight-img ">
              <img className="w-full h-full" src={sunrise} alt="" />
            </div>
            <div className="skeleton w-full h-10 highlight-value overflow-hidden"></div>
          </div>
          <div className="grid grid-rows-[1fr_2fr_1fr] justify-items-center gap-2">
            <div className="highlight-tittle ">Закат</div>
            <div className="self-center highlight-img ">
              <img className="w-full h-full" src={sunset} alt="" />
            </div>
            <div className="highlight-value skeleton w-full h-10"></div>
          </div>
        </div>
        <div className="relative card-bg highlight grid grid-rows-[1fr_1fr_1fr_1fr] grid-cols-2 gap-y-3 sm:gap-y-0 justify-items-center">
          <div className="highlight-tittle col-span-2">Температура</div>

          <div className="highlight-img row-start-2 self-end">
            <img className="w-full h-full" src={thermometerLow} alt="" />
          </div>

          <div className="highlight-tittle self-end">Мин.</div>
          <div className="highlight-value text-center skeleton w-24 h-10"></div>
          <div className="relative highlight-img row-start-2 col-start-2 self-end">
            <img className="w-full h-full" src={thermometerHigh} alt="" />
          </div>

          <div className="highlight-tittle row-start-3 col-start-2 self-end">Маск.</div>
          <div className="highlight-value text-center row-start-4 col-start-2 skeleton w-24 h-10"></div>
        </div>
        <div className="card-bg highlight flex flex-col justify-between">
          <h3 className="highlight-tittle self-center">UV Индекс</h3>
          <div className="grid grid-cols-5">
            <div className="col-span-2 highlight-img">
              <img className="w-full h-full" src={UVLogo} alt="" />
            </div>
            <div className="skeleton w-full h-16 sm:h-12 highlight-value text-6xl sm:text-5xl self-center col-start-3 justify-self-center"></div>
          </div>

          <div className="relative w-full mb-4 rounded-xl">
            <div className="absolute top-1/2 transform -translate-y-1/2 right-0  h-[110%] w-full skeleton rounded-xl"></div>
            <div className="absolute -top-6 font-bold opacity-50 w-full grid grid-cols-[1fr_1fr_1fr_0.30fr]">
              <span>0</span>
              <span>4</span>
              <span>8</span>
              <span>12</span>
              <span></span>
            </div>
            <div className="w-[99.5%] h-10 sm:h-5 rounded-xl bg-linear-to-r from-amber-400 to-red-600">
              <span></span>
            </div>
          </div>
        </div>

        <div className="card-bg highlight grid grid-rows-[1fr_2fr_2fr] sm:grid-rows-3 justify-items-center gap-5 sm:gap-1">
          <h3 className="highlight-tittle text-center">Скорость ветра</h3>
          <div className="highlight-img ">
            <img className="w-full h-full" src={wind} alt="" />
          </div>
          <div className="text-3xl  skeleton w-28 h-10">
            <span className="highlight-value"></span>
          </div>
        </div>

        <div className="card-bg highlight grid grid-rows-[1fr_2fr_2fr] sm:grid-rows-3 justify-items-center gap-5 sm:gap-1">
          <h3 className="highlight-tittle text-center">Влажность</h3>
          <div className="highlight-img ">
            <img className="w-full h-full" src={wet} alt="" />
          </div>
          <div className="text-3xl  skeleton w-24 h-10">
            <span className="highlight-value"></span>
          </div>
        </div>

        <div className="card-bg highlight grid grid-rows-[1fr_2fr_2fr] sm:grid-rows-3 justify-items-center gap-5 sm:gap-1">
          <h3 className="highlight-tittle text-center">Видимость</h3>
          <div className="highlight-img">
            <img className="w-full h-full" src={visibility} alt="" />
          </div>
          <div className="text-3xl  skeleton w-24 h-10">
            <span className="highlight-value"></span>
          </div>
        </div>
      </div>
    </>
  );
}
export default DayHighlightsSkeleton;
