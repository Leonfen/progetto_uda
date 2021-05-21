import React from 'react';
import { useSpring, animated } from 'react-spring';
import clsx from 'clsx';
import styles from './styles/Crediti.module.scss';

export default function crediti() {
  const transformation1 = useSpring({
    config: { mass: 1, tension: 4, friction: 18 },
    loop: { reverse: false },
    from: { opacity: 0, y: 750 },
    to: { opacity: 1, y: 0 },
  });

  const transformation2 = useSpring({
    delay: 500,
    config: { mass: 1, tension: 4, friction: 18 },
    loop: { reverse: false },
    from: { opacity: 0, y: 850 },
    to: { opacity: 1, y: 100 },
  });

  const transformation3 = useSpring({
    delay: 1000,
    config: { mass: 1, tension: 4, friction: 18 },
    loop: { reverse: false },
    from: { opacity: 0, y: 950 },
    to: { opacity: 1, y: 200 },
  });

  const transformation4 = useSpring({
    delay: 1500,
    config: { mass: 1, tension: 4, friction: 18 },
    loop: { reverse: false },
    from: { opacity: 0, y: 1050 },
    to: { opacity: 1, y: 300 },
  });

  const transformation5 = useSpring({
    delay: 1500,
    config: { mass: 1, tension: 4, friction: 18 },
    loop: { reverse: false },
    from: { opacity: 0, y: 1150 },
    to: { opacity: 1, y: 400 },
  });

  const transformation6 = useSpring({
    delay: 1500,

    config: { mass: 1, tension: 4, friction: 18 },
    loop: { reverse: false },
    from: { opacity: 0, y: 1250 },
    to: { opacity: 1, y: 500 },
  });

  const transformation7 = useSpring({
    delay: 1500,

    config: { mass: 1, tension: 4, friction: 18 },
    loop: { reverse: false },
    from: { opacity: 0, y: 1350 },
    to: { opacity: 1, y: 600 },
  });

  const transformation8 = useSpring({
    delay: 1500,

    config: { mass: 1, tension: 4, friction: 18 },
    loop: { reverse: false },
    from: { opacity: 0, y: 1450 },
    to: { opacity: 1, y: 700 },
  });
  return (
    <div className={styles.sfondo}>
      <h1 className={styles.title}>GRAZIE PER AVER SEGUITO LA PRESENTAZIONE</h1>
      <div className={styles.background}>
        <animated.div style={transformation1}>
          <h1 className={clsx(styles.title, styles.info1)}>
            PRODUTTORE ESECUTIVO:
          </h1>
          <h1 className={clsx(styles.title, styles.risposta1)}>
            DE ROSE MICHELE
          </h1>
        </animated.div>
        <animated.div style={transformation2}>
          <h1 className={clsx(styles.title, styles.info1)}>
            PRODUTTORE ESECUTIVO:
          </h1>
          <h1 className={clsx(styles.title, styles.risposta1)}>
            DE ROSE MICHELE
          </h1>
        </animated.div>
        <animated.div style={transformation3}>
          <h1 className={clsx(styles.title, styles.info1)}>
            PRODUTTORE ESECUTIVO:
          </h1>
          <h1 className={clsx(styles.title, styles.risposta1)}>
            DE ROSE MICHELE
          </h1>
        </animated.div>
        <animated.div style={transformation4}>
          <h1 className={clsx(styles.title, styles.info1)}>
            PRODUTTORE ESECUTIVO:
          </h1>
          <h1 className={clsx(styles.title, styles.risposta1)}>
            DE ROSE MICHELE
          </h1>
        </animated.div>
        <animated.div style={transformation5}>
          <h1 className={clsx(styles.title, styles.info1)}>
            PRODUTTORE ESECUTIVO:
          </h1>
          <h1 className={clsx(styles.title, styles.risposta1)}>
            DE ROSE MICHELE
          </h1>
        </animated.div>
        <animated.div style={transformation6}>
          <h1 className={clsx(styles.title, styles.info1)}>
            PRODUTTORE ESECUTIVO:
          </h1>
          <h1 className={clsx(styles.title, styles.risposta1)}>
            DE ROSE MICHELE
          </h1>
        </animated.div>
        <animated.div style={transformation7}>
          <h1 className={clsx(styles.title, styles.info1)}>
            PRODUTTORE ESECUTIVO:
          </h1>
          <h1 className={clsx(styles.title, styles.risposta1)}>
            DE ROSE MICHELE
          </h1>
        </animated.div>
        <animated.div style={transformation8}>
          <h1 className={clsx(styles.title, styles.info1)}>
            PRODUTTORE ESECUTIVO:
          </h1>
          <h1 className={clsx(styles.title, styles.risposta1)}>
            DE ROSE MICHELE
          </h1>
        </animated.div>
      </div>
    </div>);
}
