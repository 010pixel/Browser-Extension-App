import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import ReactGA from 'react-ga4';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import Layout from '../src/Layout/Layout';

ReactGA.initialize((process as any).env.NEXT_PUBLIC_GOOGLE_ANALYTICS);

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
				<script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2100928988105413"
					crossOrigin="anonymous"
				/>
				<script type="text/javascript">
					var aax_size='728x90'; var aax_pubname = '010pixel-21'; var aax_src='302'; const s =
					document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src =
					"http://c.amazon-adsystem.com/aax2/assoc.js"; document.getElementsByTagName('head')[0].appendChild(s);
				</script>
			</Head>
			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</CacheProvider>
	);
}
