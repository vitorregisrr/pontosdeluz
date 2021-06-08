import { AppProps } from 'next/app'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import GlobalStyles from 'styles/global'
import { FontsLoader } from '../components/External/Fonts'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pontos de Luz • Regeneração planetária ao redor do mundo</title>
        <link rel="shortcut icon" href="/img/light-orb.png" />
        <link rel="apple-touch-icon" href="/img/light-orb.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
        <script
          type="text/javascript"
          src="https://maps.google.com/maps/api/js?key=AIzaSyDAAbOGMKsKG-fQAqxRG_psTp2GJsHlsPo&sensor=false&libraries=places"
          defer
        ></script>
        <meta
          name="google-site-verification"
          content="HYb0LBHuY2FMcpYcET1w6V0LjpKdnkDiLHg0CBhNHfQ"
        />
        <FontsLoader />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <NextNprogress
        color="#f5e042"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
    </>
  )
}

export default App
