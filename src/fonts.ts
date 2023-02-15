import { Barlow, Fraunces } from "@next/font/google";

export const barlow = Barlow({
  weight: ["600"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});
