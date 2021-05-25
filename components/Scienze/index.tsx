import React from 'react';
import clsx from 'clsx';
import { Spring, useSpring, animated } from 'react-spring';
import styles from './styles/Scienze.module.scss';
import PageCard from './PageCard/index';
import Contenuti from './Contenuti/index';

export default function Scienze() {
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
            <h1>L&apos;ENERGIA RINNOVABILE</h1>
          </animated.div>
        </div>
      )}
    </Spring>
    <div className={styles.gifsContainer}>
      <animated.div className={clsx(styles.gifContainer, styles.container1)} style={transfrom1}>
        <PageCard description='Energia pulita è per tutti' title='Scienze' src='https://media.giphy.com/media/fAtfsVm6zGsZodSR17/giphy.gif' alt='wella' type={true} />
      </animated.div>
      <animated.div className={clsx(styles.gifContainer, styles.container2)} style={transfrom2}>
        <PageCard description='Il riciclo, apparentemento complicato, è il modo più semplice per garantirci un mondo migliore' title="Tutelare l'ambiente per tutelare noi stessi" src='https://media.giphy.com/media/26gsmQ7ABO9RaASFq/giphy.gif' alt='wella' type={true} />
      </animated.div>
      <animated.div className={clsx(styles.gifContainer, styles.container3)} style={transfrom3}>
        <PageCard description="L'agenda 2030 è un programma per le persone, il pianeta e la sua prosperità" title="Agenda 2030" src='https://media.giphy.com/media/jpJadPatvBX08S5XZn/giphy.gif' alt='wella' type={false} />
      </animated.div>
    </div>
    <Contenuti />
  </>;
}
