'use client';

import { useEffect, useState } from 'react';
import { formatTimeRemaining, getTimeRemaining } from '@/app/utils/generators';
import styles from './Timer.module.scss';

interface TimerProps {
  endTime: Date;
}

export default function Timer({ endTime }: TimerProps) {
  const [timeString, setTimeString] = useState(formatTimeRemaining(endTime));

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = getTimeRemaining(endTime);
      
      if (remaining <= 0) {
        setTimeString('Ended');
        clearInterval(interval);
      } else {
        setTimeString(formatTimeRemaining(endTime));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  return (
    <div className={styles.timer}>
      {timeString}
    </div>
  );
}
