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

  // FIRSTSLIDE
  const arte1Title: string = 'ARTE';
  const arte2Title: string = 'Le parole danno forma al pensiero.';
  const arte3Title: string = 'Prima di parlare si prega di azionare il cervello';
  const arte1Description: string = 'Tra tutti i 10 punti raccolti nel Manifesto della comunicazione non ostile, abbiamo scelto il punto 3.  Spesso e volentieri ci ritrovimo a discutere, parlare e confrontarci con altre persone anche per ore, senza renderci conto che in quel preciso istante stiamo dando forma al nostro pensiero.';
  const arte2Description: string = 'Tuttavia è importante saper scegliere le parole giuste e quelle più adeguate a descrivere ciò che pensiamo, senza creare fraintendimenti. Per fare ciò, e ottenere il miglior risultato possibile, è necessario prendersi del tempo per riflettere sulle parole e i concetti da esporre.';
  const arte3Description: string = 'Nonostante le parole a volte possono sembrarci superflue, se scelte correttamente e nel momento giusto, sono lo strumento più potente che abbiamo per dare maggiore valore alle nostre idee. Non a caso un vecchio detto popolare cita :"Prima di parlare si prega di azionare il cervello".';

  return (<>
    <section className={clsx(styles.module, styles.parallax, styles.parallax_1)}>
      <animated.div className={styles.container} style={transfrom}>
        <h1>DIAMO IL GIUSTO PESO ALLE PAROLE</h1>
      </animated.div>
    </section>
    <Carousel id={['Argomento_Arte_A_1', 'Argomento_Arte_A_2', 'Argomento_Arte_A_3']} title={[arte1Title, arte2Title, arte3Title]} description={[arte1Description, arte2Description, arte3Description]} link={false} buttonDescription='' argument='arte'/>
  </>
  );
}
