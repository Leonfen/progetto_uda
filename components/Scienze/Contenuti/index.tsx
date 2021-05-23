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
  const scienze1Title: string = 'SCIENZE';
  const scienze2Title: string = "Tutelare l'ambiente per tutelare noi stessi";
  const scienze3Title: string = 'Agenda 2030';
  const scienze1Description: string = 'Energia pulita è per tutti.';
  const scienze2Description: string = "Quest'anno, abbiamo avuto la possibilità di lavorare ad un progetto sul riciclo della plastica. Attraverso quest'ultimo abbiamo scoperto come il riciclo, apparentemente complicato, è il modo più semplice per garantirci un mondo migliore e permettere la continuità della sopravvivenza di tutte le specie sulla Terra.";
  const scienze3Description: string = "Tutti i punti fondamentali per raggiungere questo scopo sono racchiusi nell'agenda 2030 che come sappiamo, è un programma d’azione per le persone, il pianeta e la prosperità sottoscritto dai governi dei 193 Paesi membri dell’ONU. Grazie a queste linee guida ci è facile capire cosa bisogna fare per tutelare noi stessi e il nostro Pianeta. Per proteggere l'ambiente bastano dei piccoli gesti, apparentemente insignificanti, ma che se svolti da tutti, fanno la differenza. Azioni quotidiane contribuiscono a quel cambiamento necessario di cui il nostro Pianeta ha bisogno.";

  return (<>
    <section className={clsx(styles.module, styles.parallax, styles.parallax_1)}>
      <animated.div className={styles.container} style={transfrom}>
        <h1>SALVIAMO IL NOSTRO PIANETA</h1>
      </animated.div>
    </section>
    <Carousel id={['Argomento_Scienze_A_1', 'Argomento_Scienze_A_2', 'Argomento_Scienze_A_3']} title={[scienze1Title, scienze2Title, scienze3Title]} description={[scienze1Description, scienze2Description, scienze3Description]} link={false} buttonDescription='' argument='scienze'/>
  </>
  );
}
