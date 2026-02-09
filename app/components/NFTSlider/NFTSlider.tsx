'use client';

import { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppSelector, useAppDispatch } from '@/app/store/hooks';
import { nextSlide, prevSlide } from '@/app/store/slices/nftSlice';
import NFTCard from '../NFTCard/NFTCard';
import { generateRandomBid, generateEndTime } from '@/app/utils/generators';
import { getRandomImage } from '@/app/utils/imagePool';
import styles from './NFTSlider.module.scss';

export default function NFTSlider() {
  const dispatch = useAppDispatch();
  const { nfts, loading, error, currentIndex } = useAppSelector((state) => state.nft);

  // Generate stable random data for each NFT (memoized by NFT id)
  const enrichedNFTs = useMemo(() => {
    return nfts.map((nft) => ({
      ...nft,
      image: getRandomImage(),
      bid: generateRandomBid(),
      endTime: generateEndTime(),
    }));
  }, [nfts]);

  const handlePrev = () => {
    dispatch(prevSlide());
  };

  const handleNext = () => {
    dispatch(nextSlide());
  };

  if (loading) {
    return (
      <section className={styles.slider}>
        <div className={styles.container}>
          <h2 className={styles.title}>Weekly - Top NFT</h2>
          <div className={styles.cardsWrapper}>
            <div className={styles.cards}>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={styles.skeletonCard}>
                  <div className={styles.skeletonImage}></div>
                  <div className={styles.skeletonContent}>
                    <div className={styles.skeletonTitle}></div>
                    <div className={styles.skeletonBid}></div>
                    <div className={styles.skeletonButton}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.slider}>
        <div className={styles.container}>
          <h2 className={styles.title}>Weekly - Top NFT</h2>
          <div className={styles.error}>
            <p>Failed to load NFTs: {error}</p>
            <p className={styles.errorHint}>Please try refreshing the page</p>
          </div>
        </div>
      </section>
    );
  }

  if (enrichedNFTs.length === 0) {
    return (
      <section className={styles.slider}>
        <div className={styles.container}>
          <h2 className={styles.title}>Weekly - Top NFT</h2>
          <p className={styles.empty}>No NFTs available</p>
        </div>
      </section>
    );
  }

  // Calculate visible cards range
  const visibleCount = 4; // Desktop default
  const visibleNFTs = enrichedNFTs.slice(currentIndex, currentIndex + visibleCount);

  return (
    <section className={styles.slider}>
      <div className={styles.container}>
        <h2 className={styles.title}>Weekly - Top NFT</h2>
        
        <div className={styles.cardsWrapper}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className={styles.cards}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              {visibleNFTs.map((nft) => (
                <NFTCard
                  key={nft.id}
                  name={nft.name}
                  image={nft.image}
                  bid={nft.bid}
                  endTime={nft.endTime}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className={styles.navigation}>
          <button
            className={styles.navButton}
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Previous"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button
            className={styles.navButton}
            onClick={handleNext}
            disabled={currentIndex >= enrichedNFTs.length - visibleCount}
            aria-label="Next"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
