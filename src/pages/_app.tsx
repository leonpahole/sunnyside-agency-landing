import { barlow, fraunces } from "@/fonts";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`font-sans ${barlow.variable} ${fraunces.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
