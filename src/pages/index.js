import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Router from 'next/router';
import Login from 'components/Login';
import cookies from 'next-cookies';

function Home() {
  return (
    <div>
      <Head>
        <title>Simplest login</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="App">
        <Login />
      </div>
    </div>
  );
}

export default Home;
