import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import ReactGA from 'react-ga4';

ReactGA.initialize((process as any).env.NEXT_PUBLIC_GOOGLE_ANALYTICS);

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Component {...pageProps} />
  </>;
}
