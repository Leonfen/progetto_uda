/* eslint-disable no-param-reassign */
import React from 'react';
import clsx from 'clsx';
import { useSpring, animated } from 'react-spring';
import Carousel from 'components/Carousel';
import styles from './styles/Contenuti.module.scss';

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
    <Carousel id={['Argomento_Scienze_A_1', 'Argomento_Scienze_A_2', 'Argomento_Scienze_A_3']} title={['Primo argomento scienze, prima slide', 'Primo argomento scienze, seconda slide', 'Primo argomento scienze, terza slide']} description={['Questa è la prima slide del primo argomento', 'Questa è la seconda slide del primo argomento', 'Questa è la terza slide del primo argomento']} link={false} buttonDescription='' argument='scienze'/>
    <section className={clsx(styles.module, styles.parallax, styles.parallax_2)}>
      <animated.div className={styles.container} style={transfrom}>
        <h1>RICICLIAMO INSIEME LA PLASTICA</h1>
      </animated.div>
    </section>
    <Carousel id={['Argomento_Scienze_B_1', 'Argomento_Scienze_B_2', 'Argomento_Scienze_B_3']} title={['Secondo argomento scienze, prima slide', 'Secondo argomento scienze, seconda slide', 'Secondo argomento scienze, terza slide']} description={['Questa è la prima slide del secondo argomento', 'Questa è la seconda slide del secondo argomento', 'Questa è la terza slide del secondo argomento']} link={false} buttonDescription='' argument='scienze'/>
    <section className={clsx(styles.module, styles.parallax, styles.parallax_3)}>
      <animated.div className={styles.container} style={transfrom}>
        <h1>L&apos;INQUINAMENTO E&apos; UNA COSA BRUTTA</h1>
      </animated.div>
    </section>
    <Carousel id={['Argomento_Scienze_C_1', 'Argomento_Scienze_C_2', 'Argomento_Scienze_C_3']} title={['Terzo argomento scienze, prima slide', 'Terzo argomento scienze, seconda slide', 'Terzo argomento scienze, terza slide']} description={['Questa è la prima slide del terzo argomento', 'Questa è la seconda slide del terzo argomento', 'Questa è la terza slide del terzo argomento']} link={false} buttonDescription='' argument='scienze'/>
  </>
  );
}
