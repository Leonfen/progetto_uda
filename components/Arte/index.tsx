import React from 'react';
import clsx from 'clsx';
import { useSpring, animated } from 'react-spring';
import PageForest from './PageForest/index';
import styles from './styles/Arte.module.scss';
import PageCard from './PageCard/index';
import Contenuti from './Contenuti/index';
import PageLogo from './PageLogo/index';

export default function Arte() {
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
    <h1 className={styles.title}>L&apos;ARTE NELLA NOSTRA SOCIETA&apos;</h1>
    <div className={styles.gifsContainer}>
      <animated.div className={clsx(styles.gifContainer, styles.container1)} style={transfrom1}>
        <PageCard description='Il manifesto della comunicazione non ostile' title='ARTE' src='https://paroleostili.it/wp-content/uploads/2018/01/manifesto_1200x628.png' alt='wella' type={true} />
      </animated.div>
      <animated.div className={clsx(styles.gifContainer, styles.container2)} style={transfrom2}>
        <PageForest description="Le parole sono lo strumento più potente che abbiamo" title="Prima di parlare si prega di anzionare il cervello" />
      </animated.div>
      <animated.div className={clsx(styles.gifContainer, styles.container3)} style={transfrom3}>
        <PageLogo description='Mi prendo tutto il tempo necessario a esprimere al meglio quel che penso' title="Le parole danno forma al pensiero" type={true} />
      </animated.div>
    </div>
    <Contenuti />
  </>;
}
