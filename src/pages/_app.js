// import App from 'next/app'
import Head from "next/head";

// tailwindcss
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NISLOG</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="author" content="Kohei Hosono" />
        <meta name="description" content="NISLOG Heat Map" />
        {/* <meta name="theme-color" content="#2563EB" /> */}
        {/* <meta property="og:url" content="https://kogepan.me/" /> */}
        <meta property="og:locale" content="ja_JP" />
        {/* <meta property="og:image" content="https://kogepan.me/ogp/ogp.png" /> */}
        {/* <meta property="og:title" content="NISLOG" /> */}
        <meta property="og:description" content="NISLOG Heat Map" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* <link rel="icon" href="https://kogepan.me/icon/favicon.ico" /> */}
        {/* <link rel="apple-touch-icon" sizes="180x180" href="https://kogepan.me/ogp/favicon.png" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

// もし、アプリケーション内のすべてのページでブロックするデータを必要とする場合のみ、このメソッドのコメントを外してください。
// Automatic Static Optimizationを無効にし、アプリケーション内の各ページはサーバーサイドでレンダリングされます。
//
// MyApp.getInitialProps = async (appContext) => {
//   // ページの`getInitialProps`を呼び、`appProps.pageProps`を満たします。
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
