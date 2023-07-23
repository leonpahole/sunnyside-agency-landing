import { barlow, fraunces } from "@/fonts";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import dynamic from "next/dynamic";
import React from "react";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <div className={`font-sans ${barlow.variable} ${fraunces.variable}`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
