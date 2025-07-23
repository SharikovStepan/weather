function HoursSkeleton({className=''}) {
  return (
    <>
      <div className={`absolute opacity-50 skeleton w-full h-41 sm:h-36 grid grid-rows-[auto_1fr] ${className}`}>
        <div className="">
          <div className=""></div>
        </div>
        <div className=""></div>
      </div>
    </>
  );
}
export default HoursSkeleton;
