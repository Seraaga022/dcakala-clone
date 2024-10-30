"use client";
import React from "react";

export default function useTimer(value?: number, name?: string) {
  // 3600 => 1h
  const discountLimit = value ? value : 1 * 3600;
  const [discountTimeLeft, setDiscountTimeLeft] = React.useState<number>(() => {
    const savedTime = localStorage.getItem(name || "discountTimeLeft");
    return savedTime ? parseInt(savedTime, 10) : discountLimit;
  });
  const [remainingDiscountTime, setRemainingDiscountTime] = React.useState({
    second: 0,
    minute: 0,
    hour: 0,
  });

  // timer functionality
  React.useEffect(() => {
    if (discountTimeLeft <= 0) return;

    const timerId = setInterval(() => {
      setDiscountTimeLeft((prevTime) => {
        const newTime = prevTime - 1;
        localStorage.setItem("discountTimeLeft", newTime.toString());
        return newTime;
      });
    }, 1000);
    setRemainingDiscountTime({
      second: formatTime(discountTimeLeft).seconds,
      minute: formatTime(discountTimeLeft).minutes,
      hour: formatTime(discountTimeLeft).hours,
    });

    return () => clearInterval(timerId);
  }, [discountTimeLeft]);

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

  return remainingDiscountTime;
}
