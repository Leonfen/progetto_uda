/* eslint-disable no-param-reassign */
import React from 'react';
import styles from './styles/Home.module.scss';

export default function Home({ children }) {
  return (<>
    <div className={styles.videoWrapper}>
      <h1 className={styles.title}>IL MONDO UTOPICO</h1>
      <img alt="" className={styles.backImage} src="https://media.giphy.com/media/fAhQtuLYJwByWeutjy/giphy.gif"></img>
    </div>
  </>
  );
}
