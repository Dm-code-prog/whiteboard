import { State } from "../state/state";

export const debug = () => {
  const UIdebugList = document.querySelector("#debug-list");
  if (!UIdebugList) {
    throw new Error("debug-list is undefined");
  }

  while (UIdebugList.firstChild) {
    UIdebugList.removeChild(UIdebugList.firstChild);
  }

  for (const [key, value] of Object.entries(State)) {
    const debugProp = document.createElement("li");
    debugProp.innerText = `${key}: ${value}`;
    UIdebugList.append(debugProp);
  }
};

