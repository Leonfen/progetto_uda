/* eslint-disable react/prop-types */
/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import clsx from 'clsx';
import styles from './styles/PageForest.module.scss';
import Forest from './Forest/index';

export default function PageForest({
  title, description,
}) {
  return (
    <>
      <div className={clsx(styles.container)}>
	      <article className={styles.card}>
          <div className={styles.card__media}>
            <Forest />
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
