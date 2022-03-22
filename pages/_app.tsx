import {AppProps} from "next/app";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  // Component
  return <div>
    <Component {...pageProps} />
  </div>
}