import { barlow, fraunces } from "@/fonts";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
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
