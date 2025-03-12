import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <header>App.tsx_header</header>
  <Component {...pageProps} />
  </>
  )
}
