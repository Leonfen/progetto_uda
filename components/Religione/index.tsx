import React from 'react';
import clsx from 'clsx';
import styles from './styles/Religione.module.scss';
import PageCard from './PageCard/index';
import Contenuti from './Contenuti/index';

export default function Religione() {
  return <>
    <h1 className={styles.title}>L&apos;ARTE NELLA NOSTRA SOCIETA&apos;</h1>
    <div className={styles.gifsContainer}>
      <div className={clsx(styles.gifContainer, styles.container1)}>
        <PageCard description='wella sdads' title='SALVIAMO IL NOSTRO PIANETA' src='https://media.giphy.com/media/fAhQtuLYJwByWeutjy/giphy.gif' alt='wella' type={true} />
      </div>
      <div className={clsx(styles.gifContainer, styles.container2)}>
        <PageCard description='wella sdads' title='SALVIAMO IL NOSTRO PIANETA' src='https://media.giphy.com/media/fAhQtuLYJwByWeutjy/giphy.gif' alt='wella' type={false} />
      </div>
      <div className={clsx(styles.gifContainer, styles.container3)}>
        <PageCard description='Lorem' title="L'INQUINAMENTO E' UNA COSA BRUTTA" src='https://media.giphy.com/media/icVQcSFS5m1RJU4Ux2/giphy.gif' alt='wella' type={true} />
      </div>
    </div>
    <Contenuti />
  </>;
}
