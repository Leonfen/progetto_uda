import { useSpringCarousel } from 'react-spring-carousel-js';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './styles/Carousel.module.scss';

export default function Carousel({
  // eslint-disable-next-line no-unused-vars
  id, title, description, link, buttonDescription, argument,
}) {
  /*
  const [argomento, setArgomento] = useState([]);
  useEffect(() => {
    if (argument === 'scienze') setArgomento([styles.scienze1, styles.scienze2, styles.scienze3]);
    if (argument === 'storia') setArgomento([styles.storia1, styles.storia2, styles.storia3]);
    if (argument === 'arte') setArgomento([styles.arte1, styles.arte2, styles.arte3]);
    if (argument === 'religione') setArgomento([styles.religione1, styles.religione2, styles.religione3]);
  }, []);
  */
  const transform1 = useSpring({
    config: { mass: 2, tension: 40, friction: 18 },
    from: { x: 0, opacity: 1, rotateZ: '30deg' },
    to: async (next) => {
      await next({ opacity: 0, rotateZ: '360deg' });
      await next({ opacity: 1, rotateZ: '30deg' });
    },
    loop: true,
  });

  const transform2 = useSpring({
    config: { mass: 2, tension: 70, friction: 18 },
    from: { x: 0, opacity: 1, rotateZ: '60deg' },
    to: async (next) => {
      await next({ opacity: 0, rotateZ: '150deg' });
      await next({ opacity: 1, rotateZ: '60deg' });
    },
    loop: true,
  });

  const transform3 = useSpring({
    config: { mass: 2, tension: 100, friction: 18 },
    from: { x: 0, opacity: 1, rotateZ: '20deg' },
    to: async (next) => {
      await next({ opacity: 0, rotateZ: '190deg' });
      await next({ opacity: 1, rotateZ: '20deg' });
    },
    loop: true,
  });

  const transform4 = useSpring({
    config: { mass: 2, tension: 20, friction: 18 },
    from: { x: 0, opacity: 1, rotateZ: '10deg' },
    to: async (next) => {
      await next({ opacity: 0, rotateZ: '400deg' });
      await next({ opacity: 1, rotateZ: '10deg' });
    },
    loop: true,
  });

  const transform5 = useSpring({
    config: { mass: 2, tension: 200, friction: 18 },
    from: { x: 0, opacity: 1, rotateZ: '60deg' },
    to: async (next) => {
      await next({ opacity: 0, rotateZ: '360deg' });
      await next({ opacity: 1, rotateZ: '60deg' });
    },
    loop: true,
  });

  const carousel = useSpringCarousel({
    items: [
      {
        id: id[0],
        renderItem:
        <section className={clsx(styles.module, styles.content, styles.firstSlide)}>
          <animated.div style={transform1} className={clsx(styles.star, styles.first)} />
          <div className={styles.allContainer}>
            <animated.div style={transform2} className={clsx(styles.star, styles.second)} />
            <animated.div style={transform3} className={clsx(styles.star, styles.third)} />
            <animated.div style={transform4} className={clsx(styles.star, styles.fourth)} />
            <animated.div style={transform5} className={clsx(styles.star, styles.fifth)} />
            <animated.div className={clsx(styles.moon)} />
            <div className={styles.container}>
              <div className={styles.text}>
                <h2>{title[0]}</h2>
                <p>{description[0]}</p>
              </div>
            </div>
          </div>
        </section>,
      },
      {
        id: id[1],
        renderItem:
        <section className={clsx(styles.module, styles.content, styles.secondSlide)}>
          <animated.div style={transform1} className={clsx(styles.star, styles.first)} />
          <div className={styles.allContainer}>
            <animated.div style={transform2} className={clsx(styles.star, styles.second)} />
            <animated.div style={transform3} className={clsx(styles.star, styles.third)} />
            <animated.div style={transform4} className={clsx(styles.star, styles.fourth)} />
            <animated.div style={transform5} className={clsx(styles.star, styles.fifth)} />
            <animated.div className={clsx(styles.moon)} />
            <div className={styles.container}>
              <div className={styles.text}>
                <h2>{title[1]}</h2>
                <p>{description[1]}</p>
              </div>
            </div>
          </div>
        </section>,
      },
      {
        id: id[2],
        renderItem:
        <section className={clsx(styles.module, styles.content, styles.secondSlide)}>
          <animated.div style={transform1} className={clsx(styles.star, styles.first)} />
          <div className={styles.allContainer}>
            <animated.div style={transform2} className={clsx(styles.star, styles.second)} />
            <animated.div style={transform3} className={clsx(styles.star, styles.third)} />
            <animated.div style={transform4} className={clsx(styles.star, styles.fourth)} />
            <animated.div style={transform5} className={clsx(styles.star, styles.fifth)} />
            <animated.div className={clsx(styles.moon)} />
            <div className={styles.container}>
              <div className={styles.text}>
                <h2>{title[2]}</h2>
                <p>{description[2]}</p>
              </div>
              {link && <div className={styles.imageButton}>
                <div className={styles.nextPage}>
                  <Link href={`/${link}`} ><button className={clsx(styles.btn)}>{buttonDescription}</button></Link>
                </div>
              </div>}
            </div>
          </div>
        </section>,
      },
    ],
  });
  return carousel.carouselFragment;
}
