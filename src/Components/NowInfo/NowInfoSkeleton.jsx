function NowInfoSkeleton(props) {
  return (
    <>
      <div onAnimationEnd={props.onAnimationEnd} className={`absolute inset-0 z-10 max-h-full grid grid-cols-3 grid-rows-[2fr_2fr_1fr] p-3 lg:p-5 sm:flex sm:flex-col sm:gap-12 ${props.className}`}>
        <h1 className="flex flex-col gap-4">
          <p className="skeleton w-full h-8 inline-block"></p>
          <p className="skeleton w-full h-20 sm:h-10 lg:h-12 overflow-visible"></p>
			 <p className="skeleton w-full h-20 hidden sm:block sm:h-8"></p>
          {/* <h2 className="text-lg xs:text-2xl sm:text-xl md:text-2xl">{props.locationCountry}</h2> */}
        </h1>
        <div className="skeleton w-32 h-32 sm:h-28 col-span-2 justify-self-center sm:self-center lg:self-start"></div>
        <h2 className="grid grid-cols-3 row-start-2 w-full justify-center col-span-3 gap-x-10 sm:flex sm:flex-col sm:gap-10 lg:flex-row lg:self-start">
          <div className="flex self-center">
            <span className="skeleton w-32 h-32 sm:h-20 lg:w-25 lg:h-32"></span>
            <span className=""></span>
          </div>
          <div className="skeleton w-full h-32 sm:h-26 lg:w-full lg:h-32 self-center col-span-2 justify-self-center overflow-visible"></div>
        </h2>
        <h3 className="flex overflow-visible items-end gap-0 row-start-3 col-span-2 sm:flex-col sm:items-start lg:flex-row lg:items-center">
          <p className="skeleton w-full h-8 sm:-mt-10 sm:h-24"></p>
          <p className="lg:justify-self-end"></p>
        </h3>
      </div>
    </>
  );
}
export default NowInfoSkeleton;
