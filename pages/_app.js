import '../styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return(
      <>
        <Head>
          <meta charSet="utf-8" />

          <link
              rel="apple-touch-icon"
              sizes="57x57"
              href="/assets/favicons/apple-icon-57x57.png"
          />
          <link
              rel="apple-touch-icon"
              sizes="60x60"
              href="/assets/favicons/apple-icon-60x60.png"
          />
          <link
              rel="apple-touch-icon"
              sizes="72x72"
              href="/assets/favicons/apple-icon-72x72.png"
          />
          <link
              rel="apple-touch-icon"
              sizes="76x76"
              href="/assets/favicons/apple-icon-76x76.png"
          />
          <link
              rel="apple-touch-icon"
              sizes="114x114"
              href="/assets/favicons/apple-icon-114x114.png"
          />
          <link
              rel="apple-touch-icon"
              sizes="120x120"
              href="/assets/favicons/apple-icon-120x120.png"
          />
          <link
              rel="apple-touch-icon"
              sizes="144x144"
              href="/assets/favicons/apple-icon-144x144.png"
          />
          <link
              rel="apple-touch-icon"
              sizes="152x152"
              href="/assets/favicons/apple-icon-152x152.png"
          />
          <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/assets/favicons/apple-icon-180x180.png"
          />
          <link rel="mask-icon" href="/assets/favicons/apple-icon-180x180.png" />
          <link
              rel="icon"
              type="image/png"
              sizes="192x192"
              href="/assets/favicons/android-icon-192x192.png"
          />
          <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/assets/favicons/favicon-32x32.png"
          />
          <link
              rel="icon"
              type="image/png"
              sizes="96x96"
              href="/assets/favicons/favicon-96x96.png"
          />
          <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/assets/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/assets/favicons/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Records Dashboard of Avataar" />

          <title>PetMe</title>
        </Head>
        <Component {...pageProps} />
      </>
  )
}

export default MyApp
