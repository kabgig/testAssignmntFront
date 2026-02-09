'use client';

import { motion } from 'framer-motion';
import Timer from '../Timer/Timer';
import styles from './NFTCard.module.scss';

interface NFTCardProps {
  name: string;
  image: string;
  bid: number;
  endTime: Date;
}

export default function NFTCard({ name, image, bid, endTime }: NFTCardProps) {
  return (
    <motion.div
      className={styles.card}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className={styles.imageWrapper}>
        <img src={image} alt={name} className={styles.image} />
        <Timer endTime={endTime} />
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        
        <div className={styles.bidInfo}>
          <span className={styles.bidLabel}>Current bid</span>
          <div className={styles.bidAmount}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0L7.5 1.5L4 8L7.5 10L8 11.5L8.5 10L12 8L8.5 1.5L8 0Z" fill="currentColor"/>
              <path d="M8 11.5L7.5 13L4 9L7.5 10.5L8 11.5Z" fill="currentColor" opacity="0.6"/>
              <path d="M8 11.5L8.5 13L12 9L8.5 10.5L8 11.5Z" fill="currentColor" opacity="0.8"/>
            </svg>
            <span>{bid} ETH</span>
          </div>
        </div>
        
        <button className={styles.button}>PLACE BID</button>
      </div>
    </motion.div>
  );
}
