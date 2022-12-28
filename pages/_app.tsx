import "../styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import { Montserrat } from "@next/font/google";
export const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
