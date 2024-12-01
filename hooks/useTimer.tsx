"use client";
import React from "react";

export default function useTime({
  value = 3600,
  name = "discountTimer",
}: {
  value?: number;
  name?: string;
}) {
  // 3600 => 1h
  const timeLimit = value;
  const [timeLeft, setTimeLeft] = React.useState<number>(() => {
    const savedTime = localStorage.getItem(name);
    return savedTime ? parseInt(savedTime, 10) : timeLimit;
  });
  const [outputTime, setOutputTime] = React.useState({
    second: 0,
    minute: 0,
    hour: 0,
  });

  // timer functionality
  React.useEffect(() => {
    if (timeLeft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = prevTime - 1;
        localStorage.setItem(name, newTime.toString());
        return newTime;
      });
    }, 1000);

    setOutputTime({
      second: formatTime(timeLeft).seconds,
      minute: formatTime(timeLeft).minutes,
      hour: formatTime(timeLeft).hours,
    });

    return () => clearInterval(timerId);
  }, [timeLeft, name]);

  // retrieve the time to second and minute and hour
  function formatTime(seconds: number) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return {
      hours,
      minutes,
      seconds: remainingSeconds,
    };
  }

  return outputTime;
}
