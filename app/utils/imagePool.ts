// Pool of NFT gradient image paths
const imagePool = [
  '/images/nft/gradient-1.svg',
  '/images/nft/gradient-2.svg',
  '/images/nft/gradient-3.svg',
  '/images/nft/gradient-4.svg',
  '/images/nft/gradient-5.svg',
  '/images/nft/gradient-6.svg',
];

/**
 * Get a random image from the pool
 */
export const getRandomImage = (): string => {
  const randomIndex = Math.floor(Math.random() * imagePool.length);
  return imagePool[randomIndex];
};

/**
 * Get multiple unique random images
 */
export const getRandomImages = (count: number): string[] => {
  const shuffled = [...imagePool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, imagePool.length));
};

export default imagePool;
