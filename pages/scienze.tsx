import React, { useEffect } from 'react';
import Scienze from '../components/Scienze/index';

export default function scienze({ visitedPages, changeVisitedPages }) {
  useEffect(() => {
    const newDict = visitedPages;
    newDict.scienze = true;
    changeVisitedPages(newDict);
  }, []);
  return (
    <div>
      <Scienze />
    </div>
  );
}
