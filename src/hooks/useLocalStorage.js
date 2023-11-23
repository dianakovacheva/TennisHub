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

    let serializedValue;
    if (typeof value === "function") {
      serializedValue = JSON.stringify(value(state));
    } else {
      serializedValue = JSON.stringify(value);
    }

    localStorage.setItem(key, serializedValue);
  };

  return [state, setLocalStorageState];
}
