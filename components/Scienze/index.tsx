import React from 'react';
import Forest from './Forest/index';
import styles from './styles/Scienze.module.scss';

export default function Scienze() {
  return (<>
    <h1 className={styles.title}>L&apos;ENERGIA RINNOVABILE</h1>
    <div>
      <Forest />
    </div>
  </>
  );
}
