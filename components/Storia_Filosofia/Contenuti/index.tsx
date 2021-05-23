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
  const storia1Title: string = 'STORIA';
  const storia2Title: string = 'Art. 29';
  const storia3Title: string = 'Art. 37';
  const storia1Description: string = 'I diritti e doveri dei cittadini. Il lavoro come opportunità';
  const storia2Description: string = 'La Repubblica riconosce i diritti della famiglia come società naturale fondata sul matrimonio.';
  const storia3Description: string = 'La donna lavoratrice ha gli stessi diritti e, a parità di lavoro, le stesse retribuzioni che spettano al lavoratore.';

  // SECONDSLIDE
  const storia4Title: string = 'Art. 29';
  const storia5Title: string = "Cos'è l'articolo 29?";
  const storia6Title: string = 'Cosa significa famiglia?';
  const storia4Description: string = "La Repubblica riconosce i diritti della famiglia come società naturale fondata sul matrimonio. Il matrimonio è ordinato sull'eguaglianza morale e giuridica dei coniugi, con i limiti stabiliti dalla legge a garanzia dell'unità familiare.";
  const storia5Description: string = "Considerando che la nostra Costituzione è stata scritta nel 1947, ed è entrata in vigore nel 48, possiamo immaginare come alcuni dei suoi articoli siano limitati e oramai superati. Analizziamo insieme l'articolo 29 della nostra Costituzione. Secondo questo articolo, una famiglia per essere riconosciuta come tale dev'essere basata su un matrimonio. Attualmente, secondo la legge, e il nostro punto di vista personale, quest'affermazione non è errata ma inesatta.";
  const storia6Description: string = "La famiglia per essere considerata tale, non dev'essere necessariamente basata sulla firma di un contratto, ma dev'essere formata da un numero di persone che oltre ad amarsi si sostengono e si rispettano reciprocamente. Facciamo un esempio; attualmente sono tante le coppie che decidono di non sposarsi, ma decidono comunque di vivere insieme, condividere i propri spazi, la propria quotidianità e magari allargare il proprio nucleo con dei figli. Queste coppie, vengono riconosciute dalla legge italiana come 'coppie di fatto', in quanto anche se non sono effettivamente legati in matrimonio, sono a tutti gli effetti una famiglia.";

  // THIRDSLIDE
  const storia7Title: string = 'Art. 37';
  const storia8Title: string = 'La repubblica e il lavoro';
  const storia9Title: string = "Cos'è il lavoro?";
  const storia7Description: string = `La donna lavoratrice ha gli stessi diritti e, a parità di lavoro, le stesse retribuzioni che spettano al lavoratore. Le condizioni di lavoro devono consentire l'adempimento della sua essenziale funzione familiare e assicurare alla madre e al bambino una speciale adeguata protezione.
  La legge stabilisce il limite minimo di età per il lavoro salariato.`;
  const storia8Description: string = `La Repubblica tutela il lavoro dei minori con speciali norme e garantisce ad essi, a parità di lavoro, il diritto alla parità di retribuzione.

  Leggendo l'articolo 37 della Costituzione, se in un primo momento ci è sembrato giusto, subito dopo ci siamo chiesti come mai è stato necessario sottolineare l'uguaglianza tra i sessi. Purtroppo, la storia ci ha insegnato come le disuguaglianze sono sempre state presenti e ancora oggi persistono.`;
  const storia9Description: string = 'Il lavoro, da sempre necessario per garantire la dignità umana, è un diritto ma anche un dovere di ogni essere umano indipendentemente dal sesso, dalla razza, dalla lingua e dalla religione a cui appartiene. Detto ciò, c\'è veramente bisogno di un articolo che sottolinea l\'uguaglianza della donna in confronto a quella dell\'uomo? Non sarebbe necessario parlare semplicemente di genere umano? Secondo il nostro modesto parere, l\'articolo 37 invece di contribuire al rispetto e ai diritti delle donne, appare come un ulteriore ostacolo sul percorso verso il raggiungimento dell\'uguaglianza. Fin quando la legge stessa continuerà a sottolineare la differenza di genere, l\'uomo avrà sempre più difficoltà a riconoscere il genere umano come unico e non diviso in uomo e donna.';

  return (<>
    <section className={clsx(styles.module, styles.parallax, styles.parallax_1)}>
      <animated.div className={styles.container} style={transfrom}>
        <h1>STORIA</h1>
      </animated.div>
    </section>
    <Carousel id={['Argomento_Storia_A_1', 'Argomento_Storia_A_2', 'Argomento_Storia_A_3']} title={[storia1Title, storia2Title, storia3Title]} description={[storia1Description, storia2Description, storia3Description]} link={false} buttonDescription='' argument='storia'/>
    <section className={clsx(styles.module, styles.parallax, styles.parallax_2)}>
      <animated.div className={styles.container} style={transfrom}>
        <h1>ARTICOLO 29</h1>
      </animated.div>
    </section>
    <Carousel id={['Argomento_Storia_B_1', 'Argomento_Storia_B_2', 'Argomento_Storia_B_3']} title={[storia4Title, storia5Title, storia6Title]} description={[storia4Description, storia5Description, storia6Description]} link={false} buttonDescription='' argument='storia'/>
    <section className={clsx(styles.module, styles.parallax, styles.parallax_3)}>
      <animated.div className={styles.container} style={transfrom}>
        <h1>ARTICOLO 37</h1>
      </animated.div>
    </section>
    <Carousel id={['Argomento_Storia_C_1', 'Argomento_Storia_C_2', 'Argomento_Storia_C_3']} title={[storia7Title, storia8Title, storia9Title]} description={[storia7Description, storia8Description, storia9Description]} link={false} buttonDescription='' argument='storia'/>
  </>
  );
}
