import { useEffect } from "react";
import { useState } from "react";

let CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <p className="lead">This is the current time {time.toLocaleString()} </p>
  );
};

export default CurrentTime;
