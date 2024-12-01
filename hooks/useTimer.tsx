"use client";
import React from "react";
import Cookies from "universal-cookie";

export default function useTime({
  value,
  name,
}: {
  value: number;
  name: string;
}) {
  // 3600 => 1h
  const timeLimit = value;
  const cookies = new Cookies(null, { path: "/" });

  const [timeLeft, setTimeLeft] = React.useState<number>(() => {
    const savedTime = cookies.get(name) || 0;
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
        cookies.set(name, newTime.toString(), { path: "/" });
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
