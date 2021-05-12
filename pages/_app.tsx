import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.scss';
import Head from 'next/head';
import Navbar from '../components/Navbar/index';

function MyApp({ Component, pageProps }:AppProps) {
  return (<>
    <Head>
      <title>Il mondo che vorrei</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <Component {...pageProps} />;
  </>);
}

export default MyApp;
