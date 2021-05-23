import React from 'react';
import { useSpring, animated } from 'react-spring';
import clsx from 'clsx';
import styles from './styles/Crediti.module.scss';

export default function crediti() {
  // text animations
  const transformation2 = useSpring({
    config: { mass: 2, tension: 8, friction: 18 },
    loop: false,
    from: { opacity: 0, y: 850 },
    to: { opacity: 1, y: -900 },
  });

  const transformation3 = useSpring({
    config: { mass: 2, tension: 8, friction: 18 },
    loop: false,
    from: { opacity: 0, y: 950 },
    to: { opacity: 1, y: -800 },

  });

  const transformation4 = useSpring({
    config: { mass: 2, tension: 8, friction: 18 },
    loop: false,
    from: { opacity: 0, y: 1050 },
    to: { opacity: 1, y: -700 },
  });

  const transformation5 = useSpring({
    config: { mass: 2, tension: 8, friction: 18 },
    loop: false,
    from: { opacity: 0, y: 1150 },
    to: { opacity: 1, y: -600 },
  });

  const transformation6 = useSpring({

    config: { mass: 2, tension: 8, friction: 18 },
    loop: false,
    from: { opacity: 0, y: 1250 },
    to: { opacity: 1, y: -500 },

  });

  const transformation7 = useSpring({

    config: { mass: 2, tension: 8, friction: 18 },
    loop: false,
    from: { opacity: 0, y: 1350 },
    to: { opacity: 1, y: -400 },
  });

  const transformation8 = useSpring({
    config: { mass: 2, tension: 8, friction: 18 },
    loop: false,
    from: { opacity: 0, y: 1450 },
    to: { opacity: 1, y: -300 },
  });
  // photos animation
  const photo1 = useSpring({
    delay: 3600,
    config: { mass: 2, tension: 6, friction: 18 },
    loop: { reverse: false },
    from: { y: 1450 },
    to: { y: 0 },
  });

  const photo2 = useSpring({
    delay: 3800,
    config: { mass: 2, tension: 6, friction: 18 },
    loop: { reverse: false },
    from: { x: 300, y: 1450 },
    to: { y: -300 },
  });

  const photo3 = useSpring({
    delay: 3800,
    config: { mass: 2, tension: 6, friction: 18 },
    loop: { reverse: false },
    from: { x: 600, y: 1450 },
    to: { y: -600 },
  });

  const photo4 = useSpring({
    delay: 3800,
    config: { mass: 2, tension: 6, friction: 18 },
    loop: { reverse: false },
    from: { x: 900, y: 1450 },
    to: { y: -900 },
  });

  const photo5 = useSpring({
    delay: 3800,
    config: { mass: 2, tension: 6, friction: 18 },
    loop: { reverse: false },
    from: { x: 1200, y: 1450 },
    to: { y: -1200 },
  });

  const photo6 = useSpring({
    delay: 3600,
    config: { mass: 2, tension: 6, friction: 18 },
    loop: { reverse: false },
    from: { x: 0, y: 1450 },
    to: { x: 0, y: -1200 },
  });

  const photo7 = useSpring({
    delay: 3600,
    config: { mass: 2, tension: 6, friction: 18 },
    loop: { reverse: false },
    from: { x: 300, y: 1450 },
    to: { x: 300, y: -1500 },
  });

  const photo8 = useSpring({
    delay: 3600,
    config: { mass: 2, tension: 6, friction: 18 },
    loop: { reverse: false },
    from: { x: 600, y: 1450 },
    to: { x: 600, y: -1800 },
  });

  const photo9 = useSpring({
    delay: 3600,
    config: { mass: 2, tension: 6, friction: 18 },
    loop: { reverse: false },
    from: { x: 900, y: 1450 },
    to: { x: 900, y: -2100 },
  });

  const photo10 = useSpring({
    delay: 3600,
    config: { mass: 2, tension: 6, friction: 18 },
    loop: { reverse: false },
    from: { x: 1200, y: 1450 },
    to: { x: 1200, y: -2400 },
  });

  const photo11 = useSpring({
    delay: 3600,
    config: { mass: 2, tension: 6, friction: 18 },
    loop: { reverse: false },
    from: { x: 300, y: 1450 },
    to: { x: 300, y: -2400 },
  });

  const photo12 = useSpring({
    delay: 3600,
    config: { mass: 2, tension: 6, friction: 18 },
    loop: { reverse: false },
    from: { x: 900, y: 1450 },
    to: { x: 900, y: -2700 },
  });

  return (
    <div className={styles.sfondo}>
      <h1 className={styles.title}>GRAZIE PER AVER SEGUITO LA PRESENTAZIONE</h1>
      <div className={styles.background}>
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
        <animated.div className={clsx(styles.photo, styles.photo1)} style={photo1} />
        <animated.div className={clsx(styles.photo, styles.photo2)} style={photo2} />
        <animated.div className={clsx(styles.photo, styles.photo3)} style={photo3} />
        <animated.div className={clsx(styles.photo, styles.photo4)} style={photo4} />
        <animated.div className={clsx(styles.photo, styles.photo5)} style={photo5} />
        <animated.div className={clsx(styles.photo, styles.photo6)} style={photo6} />
        <animated.div className={clsx(styles.photo, styles.photo7)} style={photo7} />
        <animated.div className={clsx(styles.photo, styles.photo8)} style={photo8} />
        <animated.div className={clsx(styles.photo, styles.photo9)} style={photo9} />
        <animated.div className={clsx(styles.photo, styles.photo10)} style={photo10} />
        <animated.div className={clsx(styles.photo, styles.photo11)} style={photo11} />
        <animated.div className={clsx(styles.photo, styles.photo12)} style={photo12} />
      </div>
    </div>);
}
