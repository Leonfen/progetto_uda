/* eslint-disable semi */
import React, { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.scss';
import Head from 'next/head';
import Navbar from '../components/Navbar/index';

function MyApp({ Component, pageProps }:AppProps) {
  const [visitedPages, setVisitedPages] = useState({
    arte: false,
    scienze: false,
    storia: false,
    religione: false,
  });

  return <>
    <Head>
      <title>Il mondo che vorrei</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar visitedPages={visitedPages}/>
    <Component {...pageProps} visitedPages={visitedPages} changeVisitedPages={setVisitedPages} />
  </>
}

export default MyApp;
