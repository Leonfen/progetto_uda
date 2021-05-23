/* eslint-disable no-param-reassign */
import React from 'react';
import clsx from 'clsx';
import {
  useSpring, animated,
} from 'react-spring';
import styles from './styles/Home.module.scss';
import Carousel from '../Carousel/index';

export default function Home() {
  const transfrom = useSpring({
    loop: { reverse: false },
    from: { x: -1000 },
    to: { x: 0 },
  });

  // ARTE
  const arte1Title: string = 'ARTE';
  const arte2Title: string = 'Le parole danno forma al pensiero.';
  const arte3Title: string = 'Siamo quello che mangiamo';
  const arte1Description: string = 'Il Manifesto della comunicazione non ostile.';
  const arte2Description: string = 'Mi prendo tutto il tempo necessario a esprimere al meglio quel che penso.';
  const arte3Description: string = 'Le parole sono lo strumento più potente che abbiamo.';

  // STORIA
  const storia1Title: string = 'STORIA';
  const storia2Title: string = 'Art. 29.';
  const storia3Title: string = 'Art. 37';
  const storia1Description: string = 'I diritti e doveri dei cittadini. Il lavoro come opportunità.';
  const storia2Description: string = 'La Repubblica riconosce i diritti della famiglia come società naturale fondata sul matrimonio.';
  const storia3Description: string = 'La donna lavoratrice ha gli stessi diritti e, a parità di lavoro, le stesse retribuzioni che spettano al lavoratore.';

  // RELIGIONE
  const religione1Title: string = 'il Manifesto della comunicazione non ostile.';
  const religione2Title: string = 'il Manifesto della comunicazione non ostile.';
  const religione3Title: string = 'il Manifesto della comunicazione non ostile.';
  const religione1Description: string = 'il Manifesto della comunicazione non ostile.';
  const religione2Description: string = 'il Manifesto della comunicazione non ostile.';
  const religione3Description: string = 'il Manifesto della comunicazione non ostile.';

  // SCIENZE
  const scienze1Title: string = 'SCIENZE';
  const scienze2Title: string = "Tutelare l'ambiente per tutelare noi stessi";
  const scienze3Title: string = 'Agenda 2030';
  const scienze1Description: string = 'Energia pulita è per tutti.';
  const scienze2Description: string = 'Il riciclo, apparentemente complicato, è il modo più semplice per garantirci un mondo migliore.';
  const scienze3Description: string = "L'agenda 2030 è un programma d’azione per le persone, il pianeta e la sua prosperità";

  return (<>
    <section className={clsx(styles.module, styles.parallax, styles.parallax_1)}>
      <animated.div className={styles.container} style={transfrom}>
        <h1>QUESTO</h1>
      </animated.div>
    </section>
    <Carousel id={['scienze1', 'scienze2', 'scienze3']} title={[scienze1Title, scienze2Title, scienze3Title]} description={[scienze1Description, scienze2Description, scienze3Description]} link={'scienze'} buttonDescription={'andiamo a scienze'} argument='scienze'/>
    <section className={clsx(styles.module, styles.parallax, styles.parallax_2)}>
      <animated.div className={styles.container} style={transfrom}>
        <h1>è</h1>
      </animated.div>
    </section>
    <Carousel id={['storia1', 'storia2', 'storia3']} title={[storia1Title, storia2Title, storia3Title]} description={[storia1Description, storia2Description, storia3Description]} link={'storia'} buttonDescription={'andiamo a storia'} argument='storia'/>
    <section className={clsx(styles.module, styles.parallax, styles.parallax_3)}>
      <animated.div className={styles.container} style={transfrom}>
        <h1>IL</h1>
      </animated.div>
    </section>
    <Carousel id={['religione1', 'religione2', 'religione3']} title={[religione1Title, religione2Title, religione3Title]} description={[religione1Description, religione2Description, religione3Description]} link={'religione'} buttonDescription={'andiamo a religione'} argument='religione'/>
    <section className={clsx(styles.module, styles.parallax, styles.parallax_4)}>
      <animated.div className={styles.container} style={transfrom}>
        <h1>NOSTRO</h1>
      </animated.div>
    </section>
    <Carousel id={['arte1', 'arte2', 'arte3']} title={[arte1Title, arte2Title, arte3Title]} description={[arte1Description, arte2Description, arte3Description]} link={'arte'} buttonDescription={'andiamo a arte'} argument='arte'/>
    <section className={clsx(styles.module, styles.parallax, styles.parallax_5)}>
      <animated.div className={styles.container} style={transfrom}>
        <h1>MONDO</h1>
      </animated.div>
    </section>
  </>
  );
}
