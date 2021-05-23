/* eslint-disable react/prop-types */
/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import clsx from 'clsx';
import { useSpring, animated } from 'react-spring';
import styles from './styles/PageLogo.module.scss';

export default function PageCard({
  title, description, type,
}) {
  const containerType = type ? styles.container_narrow : styles.conntaier_wide;
  const transformation1 = useSpring({
    config: { mass: 1, tension: 10, friction: 18 },
    from: { opacity: 0.2, x: 400, color: 'black' },
    to: { opacity: 1, x: 0, color: 'black' },
  });

  const transformation2 = useSpring({
    config: { mass: 1, tension: 10, friction: 18 },
    from: { opacity: 0.2, x: -400, color: 'black' },
    to: { opacity: 1, x: 0, color: 'black' },
  });
  return (
    <>
      <div className={clsx(styles.container, containerType)}>
	      <article className={styles.card}>
          <div className={styles.card__media}>
            <div className={styles.photo} />
            <animated.div style={transformation1} className={styles.text1}>&quot;Non è la materia che genera il pensiero...</animated.div>
            <animated.div style={transformation2} className={styles.text2}>...è il pensiero che genera la materia&quot;</animated.div>
          </div>
          <div className={styles.card__content}>
            <h2>{title}</h2>
            <p>
				      {description}
            </p>
          </div>
	  </article>
      </div>

    </>
  );
}
