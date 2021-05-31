import React from 'react';
import clsx from 'clsx';
import { useSpring, Spring, animated } from 'react-spring';
import styles from './styles/Religione.module.scss';
import PageCard from './PageCard/index';
import Contenuti from './Contenuti/index';

export default function Religione() {
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
      from={{ opacity: 1, color: 'red' }}
      to={[
        { opacity: 1, color: '#ffaaee' },
        { opacity: 1, color: 'yellow' },
        { opacity: 1, color: 'lightblue' },
        { opacity: 1, color: 'purple' },
        { opacity: 1, color: 'green' },
        { opacity: 1, color: 'red' },
      ]}>
      {(transformation) => (
        <div className={styles.title}>
          <animated.div style={transformation}>
            <h1>LA PACE</h1>
          </animated.div>
        </div>
      )}
    </Spring>
    <div className={styles.gifsContainer}>
      <animated.div className={clsx(styles.gifContainer, styles.container1)} style={transfrom1}>
        <PageCard description='La pace è senz’altro uno degli obiettivi che accomuna le persone di ogni parte del mondo sin dai tempi più antichi' title="Che cos'è la pace?" src='https://media.giphy.com/media/YnNnmWg7WBKqkVolkX/giphy.gif' alt='wella' type={true} />
      </animated.div>
      <animated.div className={clsx(styles.gifContainer, styles.container2)} style={transfrom2}>
        <PageCard description='Affinché la pace possa esistere nel mondo è necessario un impegno di tutti.' title='Come possiamo mantenere la pace?' src='https://media.giphy.com/media/YR2gvdcNw2fgzgTN7W/giphy.gif' alt='wella' type={true} />
      </animated.div>
      <animated.div className={clsx(styles.gifContainer, styles.container3)} style={transfrom3}>
        <PageCard description='Per favorire questa condizione di pace c’è bisogno di un rispetto reciproco...' title="Come favorire la pace." src='https://media.giphy.com/media/xUOwFR5nCmlHCpuouY/giphy.gif' alt='wella' type={false} />
      </animated.div>
    </div>
    <Contenuti />
  </>;
}
