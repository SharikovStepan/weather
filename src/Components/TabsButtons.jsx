import Button from "./Button";

import { TABS } from "../cons";

function TabsButtons(props) {
  return (
    <>
      <div className={`flex flex-wrap justify-center sm:justify-start gap-5 sm:gap-2 md:gap-5 ${props.disabled ? "pointer-events-none" : ""}`}>
        {TABS.map((tab) => (
          <Button key={tab.id} className={props.button == tab.id ? "pressed" : ""} onClick={() => props.chooseTab(tab.id)}>
            {tab.text}
          </Button>
        ))}
      </div>
    </>
  );
}
export default TabsButtons;
