import React, { useEffect } from 'react';
import Religione from '../components/Religione/index';
/* eslint-disable semi */

export default function religione({ visitedPages, changeVisitedPages }) {
  useEffect(() => {
    const newDict = visitedPages;
    newDict.religione = true;
    changeVisitedPages(newDict);
  }, [])
  return <Religione />
}
