import React from 'react';
import { useSpring, animated } from 'react-spring';
import clsx from 'clsx';
import styles from './styles/Crediti.module.scss';

export default function crediti() {
  // text animations
  const transformation2 = useSpring({
    config: { mass: 2, tension: 8, friction: 18 },
    loop: false,
    from: { opacity: 0, y: 1200 },
    to: { opacity: 1, y: 50 },
  });

  const transformation3 = useSpring({
    config: { mass: 2, tension: 8, friction: 18 },
    loop: false,
    from: { opacity: 0, y: 1300 },
    to: { opacity: 1, y: 150 },

  });

  const transformation4 = useSpring({
    config: { mass: 2, tension: 8, friction: 18 },
    loop: false,
    from: { opacity: 0, y: 1400 },
    to: { opacity: 1, y: 250 },
  });

  const transformation5 = useSpring({
    config: { mass: 2, tension: 8, friction: 18 },
    loop: false,
    from: { opacity: 0, y: 1500 },
    to: { opacity: 1, y: 350 },
  });

  const transformation6 = useSpring({
    config: { mass: 2, tension: 8, friction: 18 },
    loop: false,
    from: { opacity: 0, y: 1600 },
    to: { opacity: 1, y: 450 },

  });

  const transformation7 = useSpring({
    config: { mass: 2, tension: 8, friction: 18 },
    loop: false,
    from: { opacity: 0, y: 1700 },
    to: { opacity: 1, y: 550 },
  });

  const transformation8 = useSpring({
    config: { mass: 2, tension: 8, friction: 18 },
    loop: false,
    from: { opacity: 0, y: 1800 },
    to: { opacity: 1, y: 650 },
  });

  const transformation9 = useSpring({
    config: { mass: 2, tension: 8, friction: 18 },
    loop: false,
    from: { opacity: 0, y: 1900 },
    to: { opacity: 1, y: 750 },
  });

  const transformation10 = useSpring({
    config: { mass: 2, tension: 8, friction: 18 },
    loop: false,
    from: { opacity: 0, y: 2000 },
    to: { opacity: 1, y: 850 },
  });

  const transformation11 = useSpring({
    config: { mass: 2, tension: 8, friction: 18 },
    loop: false,
    from: { opacity: 0, y: 2100 },
    to: { opacity: 1, y: 950 },
  });

  return (
    <div className={styles.sfondo}>
      <h1 className={styles.title1}>GRAZIE PER AVER SEGUITO LA PRESENTAZIONE</h1>
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
            CREATRICI CONTENUTI:
          </h1>
          <h1 className={clsx(styles.title, styles.risposta1)}>
            FRANCESCA SENESE - DESIRÉE PANZARELLA
          </h1>
        </animated.div>
        <animated.div style={transformation4}>
          <h1 className={clsx(styles.title, styles.info1)}>
            RICERCATORI DI IMMAGINI:
          </h1>
          <h1 className={clsx(styles.title, styles.risposta1)}>
            FRANCESCA SENESE - MICHELE DE ROSE - DESIRÉE PANZARELLA
          </h1>
        </animated.div>
        <animated.div style={transformation5}>
          <h1 className={clsx(styles.title, styles.info1)}>
            CREATRICE LOGO:
          </h1>
          <h1 className={clsx(styles.title, styles.risposta1)}>
            DESIRÉE PANZARELLA
          </h1>
        </animated.div>
        <animated.div style={transformation6}>
          <h1 className={clsx(styles.title, styles.info1)}>
            IDEE PROGETTAZIONE:
          </h1>
          <h1 className={clsx(styles.title, styles.risposta1)}>
            FRANCESCA SENESE - DESIRÉE PANZARELLA - DE ROSE MICHELE
          </h1>
        </animated.div>
        <animated.div style={transformation7}>
          <h1 className={clsx(styles.title, styles.info1)}>
            VOCI FUORI CAMPO:
          </h1>
          <h1 className={clsx(styles.title, styles.risposta1)}>
            DE ROSE MICHELE - FRANCESCA SENESE - DESIRÉE PANZARELLA
          </h1>
        </animated.div>
        <animated.div style={transformation8}>
          <h1 className={clsx(styles.title, styles.info1)}>
            PARTECIPANTI:
          </h1>
          <h1 className={clsx(styles.title, styles.risposta1)}>
            DE ROSE MICHELE - FRANCESCA SENESE - DESIRÉE PANZARELLA
          </h1>
        </animated.div>
        <animated.div style={transformation9}>
          <h1 className={clsx(styles.title, styles.info1)}>
            LINGUAGGI USATI:
          </h1>
          <h1 className={clsx(styles.title, styles.risposta1)}>
            TYPESCRIPT - HTML5 - SCSS
          </h1>
        </animated.div>
        <animated.div style={transformation10}>
          <h1 className={clsx(styles.title, styles.info1)}>
            ENGINES:
          </h1>
          <h1 className={clsx(styles.title, styles.risposta1)}>
            NEXT.JS - NODE.JS - REACT
          </h1>
        </animated.div>
        <animated.div style={transformation11}>
          <h1 className={clsx(styles.title, styles.info1)}>
            STRUMENTI:
          </h1>
          <h1 className={clsx(styles.title, styles.risposta1)}>
            VSCODE - GITHUB
          </h1>
        </animated.div>
      </div>
    </div>);
}
