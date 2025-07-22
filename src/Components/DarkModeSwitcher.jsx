import { useState } from "react";

function DarkModeSwitcher(props) {

  return (
    <>
      <div className="absolute top-4 right-7 sm:top-0 sm:right-0">
        <label className="inline-flex items-center cursor-pointer">
          <input
            onChange={props.onChange}
            type="checkbox"
            checked={props.isDark}
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 z-10 bg-prm-bg sm:bg-scn-bg peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-prm after:border-scn-bg after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-scn dark:peer-checked:bg-scn-dark"></div>
          <span className="hidden md:block ms-3 text-sm font-medium text-text-clr dark:text-text-clr-dark">Темная тема</span>
        </label>
      </div>
    </>
  );
}
export default DarkModeSwitcher;
