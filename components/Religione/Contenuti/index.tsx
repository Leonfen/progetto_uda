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

  // FIRSTSLIDE
  const religione1Title: string = "Che cos'è la pace?";
  const religione2Title: string = 'Come possiamo mantenere la pace?';
  const religione3Title: string = 'Come favorire la pace';
  const religione1Description: string = 'La pace è senz’altro uno degli obiettivi che accomuna le persone di ogni parte del mondo sin dai tempi più antichi, e spesso porta a chiedersi se sia realmente possibile un giorno raggiungere una convivenza pacifica tra i popoli.La pace è il contrario della guerra con una grossa differenza: per ottenere la pace occorre la buona volontà e l’impegno di tutti; per scatenare una guerra è sufficiente che sia uno solo a desiderarla.';
  const religione2Description: string = 'Affinché la pace possa esistere nel mondo è necessario un impegno di tutti. In pratica, se paragonassimo la pace ad un enorme puzzle, il lavoro di ogni individuo costituirebbe il piccolo tassello. La pace è una condizione viva della nostra società che ci aiuta ad andare avanti nel percorso di vita.';
  const religione3Description: string = "Per favorire questa condizione di pace c’è bisogno di un rispetto reciproco, dalla tolleranza verso il diverso e verso gli altri, e di una pacifica convivenza in una comunità, dove i valori principali devono essere l’altruismo, la cordialità, l’armonia e la fiducia, con un corretto comportamento verso gli altri, un'educazione basata sul rispetto e la tranquillità, con l'imparare a convivere con gli altri, educando alla comunicazione sociale e impiantando i pilastri di una società giusta e solidale.";

  return (<>
    <section className={clsx(styles.module, styles.parallax, styles.parallax_1)}>
      <animated.div className={styles.container} style={transfrom}>
        <h1>RISPETTAIMO LA PACE</h1>
      </animated.div>
    </section>
    <Carousel id={['Argomento_Religione_A_1', 'Argomento_Religione_A_2', 'Argomento_Religione_A_3']} title={[religione1Title, religione2Title, religione3Title]} description={[religione1Description, religione2Description, religione3Description]} link={false} buttonDescription='' argument='religione'/>
  </>
  );
}
