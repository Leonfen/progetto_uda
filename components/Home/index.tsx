/* eslint-disable no-param-reassign */
import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useSpring, animated } from 'react-spring';
import styles from './styles/Home.module.scss';

export default function Home() {
  const transfrom = useSpring({
    loop: { reverse: false },
    from: { x: -1000 },
    to: { x: 0 },
  });
  return (<>
    <section className={clsx(styles.module, styles.parallax, styles.parallax_1)}>
      <animated.div className={styles.container} style={transfrom}>
        <h1>QUESTO</h1>
      </animated.div>
    </section>
    <section className={clsx(styles.module, styles.content)}>
      <div className={styles.allContainer}>
        <div className={styles.container}>
          <h2>SCIENZE</h2>
          <p>Un modo nuovo per scoprire come il mondo possa evolversi senza danneggiare l&apos;ambiente.</p>
        </div>
        <div className={styles.nextPage}>
          <Link href="/scienze"><button className={styles.buttonNextPage}>asdasd</button></Link>
        </div>
      </div>
    </section>

    <section className={clsx(styles.module, styles.parallax, styles.parallax_2)}>
      <animated.div className={styles.container} style={transfrom}>
        <h1>E</h1>
      </animated.div>
    </section>

    <section className={clsx(styles.module, styles.content)}>
      <div className={styles.allContainer}>
        <div className={styles.container}>
          <h2>STORIA</h2>
          <p>Scoprire come i diritti possano creare un mondo migliore.</p>
        </div>
        <div className={styles.nextPage}>
          <Link href="/storia"><button className={styles.buttonNextPage}>asdasd</button></Link>
        </div>
      </div>
    </section>

    <section className={clsx(styles.module, styles.parallax, styles.parallax_3)}>
      <animated.div className={styles.container} style={transfrom}>
        <h1>IL</h1>
      </animated.div>
    </section>

    <section className={clsx(styles.module, styles.content)}>
      <div className={styles.allContainer}>
        <div className={styles.container}>
          <h2>RELIGIONE</h2>
          <p>La pace porterà sempre alla soluzione più difficile, ma anche a quella più bella.</p>
        </div>
        <div className={styles.nextPage}>
          <Link href="/religione"><button className={styles.buttonNextPage}>asdasd</button></Link>
        </div>
      </div>
    </section>

    <section className={clsx(styles.module, styles.parallax, styles.parallax_4)}>
      <animated.div className={styles.container} style={transfrom}>
        <h1>NOSTRO</h1>
      </animated.div>
    </section>

    <section className={clsx(styles.module, styles.content)}>
      <div className={styles.allContainer}>
        <div className={styles.container}>
          <h2>ARTE</h2>
          <p>La bellezza può suscitare nell&apos;animo umano qualcosa di mai visto prima.</p>
        </div>
        <div className={styles.nextPage}>
          <Link href="/arte"><button className={styles.buttonNextPage}>asdasd</button></Link>
        </div>
      </div>
    </section>

    <section className={clsx(styles.module, styles.parallax, styles.parallax_5)}>
      <animated.div className={styles.container} style={transfrom}>
        <h1>MONDO</h1>
      </animated.div>
    </section>
  </>
  );
}
