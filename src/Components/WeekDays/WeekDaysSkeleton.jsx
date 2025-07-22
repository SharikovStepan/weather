function WeekDaysSkeleton({className=''}) {

  return (
    <>
      <div className={`absolute opacity-50 w-fit flex justify-between gap-1 xs:w-full xs:gap-1 ${className}`}>
        {Array.from({ length: 7 }).map((_,index) => {
          return (
            <div key={index} className="flex skeleton h-30 sm:h-32 lg:h-34 flex-col items-center rounded-md w-15 gap-3 lg:w-20 card-bg">
              <div className="">
                <h3></h3>
              </div>
              <div className=""></div>
              <div>
                <h4></h4>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default WeekDaysSkeleton;
