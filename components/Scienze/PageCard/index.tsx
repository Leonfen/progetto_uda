/* eslint-disable react/prop-types */
/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import clsx from 'clsx';
import styles from './styles/PageCard.module.scss';

export default function PageCard({
  src, title, alt, description, type,
}) {
  const containerType = type ? styles.container_narrow : styles.conntaier_wide;
  return (
    <>
      <div className={clsx(styles.container, containerType)}>
	      <article className={styles.card}>
          <div className={styles.card__media}>
            <img src={src} alt={alt} />
          </div>
          <div className={styles.card__content}>
            <h2>{title}</h2>
            <p>
				      {description}
            </p>
          </div>
	  </article>
      </div>

    </>
  );
}
