import { Html, Main, Head, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head></Head>
      <body>
        <Main></Main>
        <NextScript></NextScript>
        <Script id="theme-script" strategy="beforeInteractive">
          {`const item = localStorage.getItem('theme') || 'light';
          localStorage.setItem('theme', item);
          document.getElementsByTagName('html')[0].dataset.theme = item;`}
        </Script>
      </body>
    </Html>
  );
}
