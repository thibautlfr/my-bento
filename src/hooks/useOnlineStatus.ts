import { useState, useEffect } from 'react';

export type OnlineStatus = 'online' | 'away' | 'offline';

function getParisHour(): number {
  const parisTime = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Paris',
    hour: 'numeric',
    hour12: false,
  }).format(new Date());
  return parseInt(parisTime, 10);
}

function getStatusFromHour(hour: number): OnlineStatus {
  if (hour >= 8 && hour < 20) return 'online';
  if (hour >= 20 && hour < 24) return 'away';
  return 'offline';
}

export function useOnlineStatus(): OnlineStatus {
  const [status, setStatus] = useState<OnlineStatus>(() =>
    getStatusFromHour(getParisHour())
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStatus(getStatusFromHour(getParisHour()));
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return status;
}
