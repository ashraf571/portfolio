import { useState, useEffect } from "react";

export const useTypewriter = (texts, speed = 150, pause = 2000) => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timeout = setTimeout(
      () => {
        if (forward) {
          if (subIndex < texts[index].length) {
            setDisplayText((prev) => prev + texts[index][subIndex]);
            setSubIndex((prev) => prev + 1);
          } else {
            setIsPaused(true);
            setTimeout(() => {
              setIsPaused(false);
              setForward(false);
            }, pause);
          }
        } else {
          if (subIndex > 0) {
            setDisplayText((prev) => prev.slice(0, -1));
            setSubIndex((prev) => prev - 1);
          } else {
            setForward(true);
            setIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      forward ? speed : speed / 2
    );

    return () => clearTimeout(timeout);
  }, [subIndex, forward, isPaused, texts, index, speed, pause]);

  return displayText;
};
