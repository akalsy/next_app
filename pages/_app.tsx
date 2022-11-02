import "../styles/globals.css";
import "./global.scss";
import type { AppProps, AppContext } from "next/app";
import { Layout, ILayoutProps } from "@/components/layout";
import App from "next/app";
import Head from "next/head";
import axios from "axios";
import { LOCALDOMAIN } from "@/utils";
import { ThemeContextProvider } from "@/stores/theme";

const MyApp = (data: AppProps & ILayoutProps) => {
  const { Component, pageProps, navbarData, footerData } = data;
  return (
    <div>
      <Head>
        <title>SSR官网demo</title>
        <meta name="description" content="ssr demo"></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <ThemeContextProvider>
        <Layout navbarData={navbarData} footerData={footerData}>
          <Component {...pageProps}></Component>
        </Layout>
      </ThemeContextProvider>
    </div>
  );
};

MyApp.getInitialProps = async (context: AppContext) => {
  const pageProps = await App.getInitialProps(context);
  const { data = {} } = await axios.get(`${LOCALDOMAIN}/api/layout`);

  return {
    ...pageProps,
    ...data,
  };
};
export default MyApp;
