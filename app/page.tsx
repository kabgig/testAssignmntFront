'use client';

import { useEffect } from 'react';
import { useAppDispatch } from './store/hooks';
import { fetchNFTs } from './store/slices/nftSlice';
import Header from './components/Header/Header';
import NFTSlider from './components/NFTSlider/NFTSlider';
import Footer from './components/Footer/Footer';
import styles from './page.module.scss';

export default function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNFTs());
  }, [dispatch]);

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <NFTSlider />
      </main>
      <Footer />
    </div>
  );
}
