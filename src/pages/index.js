import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>NISLOG</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="author" content="NISLAB" />
        <meta name="description" content="www KUSA HAERU NISLOG www" />
        <meta name="theme-color" content="#2563EB" />
        <meta property="og:url" content="https://log.nislab.io/" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:image" content="/ogp/ogp.png" />
        <meta property="og:title" content="NISLAB" />
        <meta property="og:description" content="www KUSA HAERU NISLOG www" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <main>
          <h1 className="title">NISLOG</h1>
        </main>

        <footer>
          <p className="text-center text-gray-500">
            <small>&copy; 2021 NISLAB.</small>
          </p>
        </footer>
      </div>
    </>
  );
}
