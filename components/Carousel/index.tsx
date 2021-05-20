import { useSpringCarousel } from 'react-spring-carousel-js';
import clsx from 'clsx';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './styles/Carousel.module.scss';

export default function Carousel({
  id, title, description, link, buttonDescription, argument,
}) {
  const [argomento, setArgomento] = useState([]);
  if (argument === 'scienze') setArgomento([styles.scienze1, styles.scienze2, styles.scienze3]);
  const carousel = useSpringCarousel({
    items: [
      {
        id: id[0],
        renderItem:
        <section className={clsx(styles.module, styles.content, argomento[0]) }>
          <div className={styles.allContainer}>
            <div className={styles.container}>
              <h2>{title[0]}</h2>
              <p>{description[0]}</p>
            </div>
            <div className={styles.nextPage}>
              <Link href={`/${link}`} ><button className={styles.buttonNextPage}>{buttonDescription}</button></Link>
            </div>
          </div>
        </section>,
      },
      {
        id: id[1],
        renderItem:
        <section className={clsx(styles.module, styles.content, argomento[1])}>
          <div className={styles.allContainer}>
            <div className={styles.container}>
              <h2>{title[1]}</h2>
              <p>{description[1]}</p>
            </div>
          </div>
        </section>,
      },
      {
        id: id[2],
        renderItem:
        <section className={clsx(styles.module, styles.content, argomento[2])}>
          <div className={styles.allContainer}>
            <div className={styles.container}>
              <h2>{title[2]}</h2>
              <p>{description[2]}</p>
            </div>
          </div>
        </section>,
      },
    ],
  });
  return carousel.carouselFragment;
}
