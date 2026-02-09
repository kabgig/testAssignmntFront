/**
 * Generate a random bid amount between 0.5 and 10 ETH
 */
export const generateRandomBid = (): number => {
  const min = 0.5;
  const max = 10;
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
};

/**
 * Generate a random end time between 1 and 72 hours in the future
 */
export const generateEndTime = (): Date => {
  const minHours = 1;
  const maxHours = 72;
  const hoursToAdd = Math.random() * (maxHours - minHours) + minHours;
  const endTime = new Date();
  endTime.setTime(endTime.getTime() + hoursToAdd * 60 * 60 * 1000);
  return endTime;
};

/**
 * Format time remaining as "XXh XXm XXs"
 */
export const formatTimeRemaining = (endTime: Date): string => {
  const now = new Date();
  const diff = endTime.getTime() - now.getTime();

  if (diff <= 0) {
    return 'Ended';
  }

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return `${hours.toString().padStart(2, '0')}h ${minutes
    .toString()
    .padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
};

/**
 * Calculate time difference in milliseconds
 */
export const getTimeRemaining = (endTime: Date): number => {
  const now = new Date();
  return Math.max(0, endTime.getTime() - now.getTime());
};
