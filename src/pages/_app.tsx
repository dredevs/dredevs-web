import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/global.css'; // Import global styles

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
