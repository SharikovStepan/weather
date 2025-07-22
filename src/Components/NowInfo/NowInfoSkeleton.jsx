function NowInfoSkeleton(props) {
  return (
    <>
      {/* <div onAnimationEnd={props.onAnimationEnd} className={`absolute inset-0 max-h-full grid grid-cols-3 grid-rows-[2fr_2fr_1fr] p-3 lg:p-5 sm:flex sm:flex-col sm:gap-12 fade-in ${props.Classname}`}> */}
      {/* <h1 className="flex flex-col gap-0.5">
          <p className="skeleton w-20 h-8"></p>
          <p className="skeleton w-full h-10"></p>
        </h1>
        <div className="skeleton w-fit h-fit">
          <div className="skeleton h-32 w-32"></div>
        </div>
        <h2 className="skeleton w-full h-24"></h2>
        <div className="skeleton w-full h-9"></div> */}

      {/* <h1 className="text-xl flex flex-col gap-4">
            <p className="skeleton w-20 h-8"></p>
            <p className="skeleton w-full h-10 ">{}</p>
          </h1>
          <div className="skeleton w-32 h-36 sm:h-30  col-span-2 justify-self-center sm:self-center lg:self-start">{}</div>
          <h2 className=" skeleton w-full h-22 grid grid-cols-3 row-start-2 col-span-3 gap-x-10 sm:flex sm:flex-col sm:gap-10 lg:flex-row lg:self-start">
            <div className="flex self-center">
              <span className=""></span>
              <span className=""></span>
            </div>
            <div className="skeleton w-full h-full self-center text-xl col-span-2 justify-self-center xs:text-2xl">
					<div className="w-100 h-30"></div>
				</div>
          </h2>
          <h3 className="skeleton w-60 h-30 flex items-end gap-2 row-start-3 sm:flex-col sm:items-start lg:flex-row lg:items-center">
            <p className="">{}</p>
            <p className="">{}</p>
          </h3> */}
      {/* </div> */}

      <div onAnimationEnd={props.onAnimationEnd} className={`absolute inset-0 max-h-full grid grid-cols-3 grid-rows-[2fr_2fr_1fr] p-3 lg:p-5 sm:flex sm:flex-col sm:gap-12 fade-in ${props.className}`}>
        <h1 className="flex flex-col gap-4">
          <p className="skeleton w-full h-8 inline-block"></p>
          <p className="skeleton w-40 h-20 sm:h-12"></p>
        </h1>
        <div className="skeleton w-32 h-32 sm:h-28 col-span-2 justify-self-center sm:self-center lg:self-start"></div>
        <h2 className="grid grid-cols-3 row-start-2 w-full justify-center col-span-3 gap-x-10 sm:flex sm:flex-col sm:gap-10 lg:flex-row lg:self-start">
          <div className="flex self-center">
            <span className="skeleton w-32 h-32 sm:h-20 lg:w-25 lg:h-32"></span>
            <span className=""></span>
          </div>
          <div className="skeleton w-full h-32 sm:h-26 lg:w-full lg:h-32 self-center col-span-2 justify-self-center"></div>
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
