import { useState } from "react";

export default function useLocalStorage(key, defaultState) {
  const [state, setState] = useState(() => {
    const storedData = localStorage.getItem(key);

    if (storedData) {
      return JSON.parse(storedData);
    }

    return defaultState;
  });

  const setLocalStorageState = (value) => {
    setState(value);

    let stringifiedValue;
    if (typeof value === "function") {
      stringifiedValue = JSON.stringify(value(state));
    } else {
      stringifiedValue = JSON.stringify(value);
    }

    localStorage.setItem(key, stringifiedValue);
  };

  return [state, setLocalStorageState];
}
