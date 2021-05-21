import React, { useEffect } from 'react';
import Storia from '../components/Storia_Filosofia/index';
/* eslint-disable semi */

export default function storia({ visitedPages, changeVisitedPages }) {
  useEffect(() => {
    const newDict = visitedPages;
    newDict.storia = true;
    changeVisitedPages(newDict);
  }, [])
  return <Storia />
}
