/* eslint-disable no-param-reassign */
import React from 'react';
import clsx from 'clsx';
import styles from './styles/Contenuti.module.scss';

export default function Home() {
  return (<>
    <section className={clsx(styles.module, styles.parallax, styles.parallax_1)}>
      <div className={styles.container}>
        <h1>SALVIAMO IL NOSTRO PIANETA</h1>
      </div>
    </section>
    <section className={clsx(styles.module, styles.content)}>
      <div className={styles.allContainer}>
        <div className={styles.container}>
          <h2>SCIENZE</h2>
          <p>Un modo nuovo per scoprire come il mondo possa evolversi senza danneggiare l&apos;ambiente.</p>
        </div>
      </div>
    </section>

    <section className={clsx(styles.module, styles.parallax, styles.parallax_2)}>
      <div className={styles.container}>
        <h1>RICICLIAMO INSIEME LA PLASTICA</h1>
      </div>
    </section>

    <section className={clsx(styles.module, styles.content)}>
      <div className={styles.allContainer}>
        <div className={styles.container}>
          <h2>STORIA</h2>
          <p>Scoprire come i diritti possano creare un mondo migliore.</p>
        </div>
      </div>
    </section>

    <section className={clsx(styles.module, styles.parallax, styles.parallax_3)}>
      <div className={styles.container}>
        <h1>L&apos;INQUINAMENTO E&apos; UNA COSA BRUTTA</h1>
      </div>
    </section>

    <section className={clsx(styles.module, styles.content)}>
      <div className={styles.allContainer}>
        <div className={styles.container}>
          <h2>RELIGIONE</h2>
          <p>La pace porterà sempre alla soluzione più difficile, ma anche a quella più bella.</p>
        </div>
      </div>
    </section>
  </>
  );
}
