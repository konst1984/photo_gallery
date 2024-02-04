import { useEffect, useRef } from "react";

export const useKeydown = (
  key: string,
  callback: (event: KeyboardEvent) => void,
  state: boolean
) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!state) return;
    const handler = (event: KeyboardEvent) => {
      if ((event as KeyboardEvent).code === key) {
        callbackRef.current(event);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [key, state]);
};
