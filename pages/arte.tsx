/* eslint-disable semi */
import React, { useEffect } from 'react';
import Arte from '../components/Arte/index';

export default function arte({ changeVisitedPages, visitedPages }) {
  useEffect(() => {
    const newDict = visitedPages;
    newDict.arte = true;
    changeVisitedPages(newDict);
  }, [])

  return <Arte />
}
