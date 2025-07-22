import React, { useRef, useState, useEffect } from "react";

const HorizontalScroll = ({ children }) => {
  const containerRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [showArrows, setShowArrows] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Определяем touch-устройство при монтировании
  useEffect(() => {
    const checkTouchDevice = () => {
      // Современный способ проверки
      const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(isTouch);

      // Проверяем переполнение контента
      if (containerRef.current) {
        setShowArrows(!isTouch && containerRef.current.scrollWidth > containerRef.current.clientWidth);
      }
    };

    checkTouchDevice();
    window.addEventListener("resize", checkTouchDevice);

    return () => window.removeEventListener("resize", checkTouchDevice);
  }, []);

  // Обработчики для десктопного перетаскивания
  const startDrag = (e) => {
    if (isTouchDevice) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const duringDrag = (e) => {
    if (!isDragging || isTouchDevice || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 0.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const endDrag = () => setIsDragging(false);

  // Навигация стрелками
  const scroll = (direction) => {
    if (!containerRef.current) return;
    const scrollAmount = containerRef.current.clientWidth * 0.8;
    containerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Стрелки только для non-touch устройств */}
      {showArrows && (
        <>
          <button
            onClick={() => scroll("left")}
            className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 translate-x-1 z-10  w-6 h-12 bg-prm hover:bg-scn dark:bg-prm dark:hover:bg-scn rounded-md shadow-md"
            aria-label="Scroll left">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1 z-10 w-6 h-12  bg-prm hover:bg-scn dark:bg-prm dark:hover:bg-scn rounded-md shadow-md"
            aria-label="Scroll right">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      <div
        ref={containerRef}
        onMouseDown={startDrag}
        onMouseMove={duringDrag}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        className={`
         overflow-x-auto
          ${isTouchDevice ? "" : "cursor-grab active:cursor-grabbing select-none"}
        `}
        style={
          !isTouchDevice
            ? {
                // Гарантированное скрытие скроллбара для всех браузеров
                scrollbarWidth: "none", // Firefox
                msOverflowStyle: "none", // IE/Edge
                "&::WebkitScrollbar": {
                  // Chrome/Safari
                  display: "none",
                  width: 0,
                  height: 0,
                  background: "transparent",
                },
              }
            : {}
        }>
        {children}
      </div>
    </>
  );
};

export default HorizontalScroll;
