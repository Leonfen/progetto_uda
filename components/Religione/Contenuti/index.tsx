/* eslint-disable no-param-reassign */
import React from 'react';
import clsx from 'clsx';
import { useSpring, animated } from 'react-spring';
import styles from './styles/Contenuti.module.scss';
import Carousel from '../../Carousel/index';

export default function Home() {
  const transfrom = useSpring({
    loop: { reverse: false },
    from: { x: -1000 },
    to: { x: 0 },
  });
  return (<>
    <section className={clsx(styles.module, styles.parallax, styles.parallax_1)}>
      <animated.div className={styles.container} style={transfrom}>
        <h1>SALVIAMO IL NOSTRO PIANETA</h1>
      </animated.div>
    </section>
    <Carousel id={['Argomento_Religione_A_1', 'Argomento_Religione_A_2', 'Argomento_Religione_A_3']} title={['Primo argomento religione, prima slide', 'Primo argomento religione, seconda slide', 'Primo argomento religione, terza slide']} description={['Questa è la prima slide del primo argomento', 'Questa è la seconda slide del primo argomento', 'Questa è la terza slide del primo argomento']} link={false} buttonDescription='' argument='religione'/>
    <section className={clsx(styles.module, styles.parallax, styles.parallax_2)}>
      <animated.div className={styles.container} style={transfrom}>
        <h1>RICICLIAMO INSIEME LA PLASTICA</h1>
      </animated.div>
    </section>
    <Carousel id={['Argomento_Religione_B_1', 'Argomento_Religione_B_2', 'Argomento_Religione_B_3']} title={['Secondo argomento religione, prima slide', 'Secondo argomento religione, seconda slide', 'Secondo argomento religione, terza slide']} description={['Questa è la prima slide del secondo argomento', 'Questa è la seconda slide del secondo argomento', 'Questa è la terza slide del secondo argomento']} link={false} buttonDescription='' argument='religione'/>
    <section className={clsx(styles.module, styles.parallax, styles.parallax_3)}>
      <animated.div className={styles.container} style={transfrom}>
        <h1>L&apos;INQUINAMENTO E&apos; UNA COSA BRUTTA</h1>
      </animated.div>
    </section>
    <Carousel id={['Argomento_Religione_C_1', 'Argomento_Religione_C_2', 'Argomento_Religione_C_3']} title={['Terzo argomento religione, prima slide', 'Terzo argomento religione, seconda slide', 'Terzo argomento religione, terza slide']} description={['Questa è la prima slide del terzo argomento', 'Questa è la seconda slide del terzo argomento', 'Questa è la terza slide del terzo argomento']} link={false} buttonDescription='' argument='religione'/>
  </>
  );
}
