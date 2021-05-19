import React from 'react';
import clsx from 'clsx';
import { Spring, useSpring, animated } from 'react-spring';
import styles from './styles/Storia_Filosofia.module.scss';
import PageCard from './PageCard/index';
import Contenuti from './Contenuti/index';

export default function Storia() {
  const transfrom1 = useSpring({
    loop: { reverse: false },
    from: { x: -1000 },
    to: { x: 0 },
  });

  const transfrom2 = useSpring({
    loop: { reverse: false },
    from: { y: -1000 },
    to: { y: 0 },
  });

  const transfrom3 = useSpring({
    loop: { reverse: false },
    from: { x: +3000 },
    to: { x: 0 },
  });
  return <>
    <Spring
      loop
      from={{ opacity: 0, color: 'red' }}
      to={[
        { opacity: 1, color: '#ffaaee' },
        { opacity: 0, color: 'rgb(14,26,19)' },
      ]}>
      {(transformation) => (
        <div className={styles.title}>
          <animated.div style={transformation}>
            <h1>LA SUPER STORIA</h1>
          </animated.div>
        </div>
      )}
    </Spring>
    <div className={styles.gifsContainer}>
      <animated.div className={clsx(styles.gifContainer, styles.container1)} style={transfrom1}>
        <PageCard description='wella sdads' title='SALVIAMO IL NOSTRO PIANETA' src='https://media.giphy.com/media/fAhQtuLYJwByWeutjy/giphy.gif' alt='wella' type={true} />
      </animated.div>
      <animated.div className={clsx(styles.gifContainer, styles.container2)} style={transfrom2}>
        <PageCard description='wella sdads' title='SALVIAMO IL NOSTRO PIANETA' src='https://media.giphy.com/media/fAhQtuLYJwByWeutjy/giphy.gif' alt='wella' type={true} />
      </animated.div>
      <animated.div className={clsx(styles.gifContainer, styles.container3)} style={transfrom3}>
        <PageCard description='Lorem' title="L'INQUINAMENTO E' UNA COSA BRUTTA" src='https://media.giphy.com/media/icVQcSFS5m1RJU4Ux2/giphy.gif' alt='wella' type={false} />
      </animated.div>
    </div>
    <Contenuti />
  </>;
}
