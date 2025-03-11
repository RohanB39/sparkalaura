import { useState, useEffect } from "react";

const useAnimatedNumber = (target, duration = 1000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(target / (duration / 16)); // Increment per frame (~60 FPS)

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
};

export default useAnimatedNumber;
