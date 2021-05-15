/* eslint-disable no-param-reassign */
import React from 'react';
import clsx from 'clsx';
import styles from './styles/Home.module.scss';

export default function Home() {
  return (<>
    <section className={clsx(styles.module, styles.parallax, styles.parallax_1)}>
      <div className={styles.container}>
        <h1>QUESTO</h1>
      </div>
    </section>
    <section className={clsx(styles.module, styles.content)}>
      <div className={styles.allContainer}>
        <div className={styles.container}>
          <h2>SCIENZE</h2>
          <p>Un modo nuovo per scoprire come il mondo possa evolversi senza danneggiare l&apos;ambiente.</p>
        </div>
        <div className={styles.nextPage}>
          <button className={styles.buttonNextPage}>asdasd</button>

        </div>
      </div>
    </section>

    <section className={clsx(styles.module, styles.parallax, styles.parallax_2)}>
      <div className={styles.container}>
        <h1>É</h1>
      </div>
    </section>

    <section className={clsx(styles.module, styles.content)}>
      <div className={styles.allContainer}>
        <div className={styles.container}>
          <h2>STORIA</h2>
          <p>Scoprire come i diritti possano creare un mondo migliore.</p>
        </div>
        <div className={styles.nextPage}>
          <button className={styles.buttonNextPage}>asdasd</button>

        </div>
      </div>
    </section>

    <section className={clsx(styles.module, styles.parallax, styles.parallax_3)}>
      <div className={styles.container}>
        <h1>IL</h1>
      </div>
    </section>

    <section className={clsx(styles.module, styles.content)}>
      <div className={styles.allContainer}>
        <div className={styles.container}>
          <h2>RELIGIONE</h2>
          <p>La pace porterà sempre alla soluzione più difficile, ma anche a quella più bella.</p>
        </div>
        <div className={styles.nextPage}>
          <button className={styles.buttonNextPage}>asdasd</button>

        </div>
      </div>
    </section>

    <section className={clsx(styles.module, styles.parallax, styles.parallax_4)}>
      <div className={styles.container}>
        <h1>NOSTRO</h1>
      </div>
    </section>

    <section className={clsx(styles.module, styles.content)}>
      <div className={styles.allContainer}>
        <div className={styles.container}>
          <h2>ARTE</h2>
          <p>La bellezza può suscitare nell&apos;animo umano qualcosa di mai visto prima.</p>
        </div>
        <div className={styles.nextPage}>
          <button className={styles.buttonNextPage}>asdasd</button>

        </div>
      </div>
    </section>

    <section className={clsx(styles.module, styles.parallax, styles.parallax_5)}>
      <div className={styles.container}>
        <h1>MONDO.</h1>
      </div>
    </section>
  </>
  );
}
