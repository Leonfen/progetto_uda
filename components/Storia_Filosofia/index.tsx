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
            <h1>I DIRITTI E I DOVERI DEI CITTADINI</h1>
          </animated.div>
        </div>
      )}
    </Spring>
    <div className={styles.gifsContainer}>
      <animated.div className={clsx(styles.gifContainer, styles.container1)} style={transfrom1}>
        <PageCard description='La donna lavoratice ha gli stessi diritti e, a paritò di lavoro, le stesse retribuzioni che spettano al lavoratore' title='Articolo 37' src='https://media.giphy.com/media/3o85xmZgJWBFA9TRkY/giphy.gif' alt='wella' type={true} />
      </animated.div>
      <animated.div className={clsx(styles.gifContainer, styles.container2)} style={transfrom2}>
        <PageCard description='I diritti e doveri dei cittadini. Il lavoro come opportunità' title="Storia" src='https://www.civico93.it/wp-content/uploads/2019/12/costituzione-gazzetta.jpg' alt='wella' type={false} />
      </animated.div>
      <animated.div className={clsx(styles.gifContainer, styles.container3)} style={transfrom3}>
        <PageCard description='La Repubblica riconosce i diritti della famiglia come societò naturale fondata sul matrimonio.' title='Articolo 29' src='https://media.giphy.com/media/3ohc0R4wyF8dgsVEFW/giphy.gif' alt='wella' type={true} />
      </animated.div>
    </div>
    <Contenuti />
  </>;
}
