/*
 * @Author: lsy155497 LiuSY155497@yimidida.com
 * @Date: 2022-09-30 10:09:20
 * @LastEditors: lsy155497 LiuSY155497@yimidida.com
 * @LastEditTime: 2022-11-09 10:39:15
 * @FilePath: /next/my-app/pages/_app.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import "../styles/globals.css";
import "./global.scss";
import type { AppProps, AppContext } from "next/app";
import { Layout, ILayoutProps } from "@/components/layout";
import App from "next/app";
import Head from "next/head";
import axios from "axios";
import { LOCALDOMAIN } from "@/utils";
import { ThemeContextProvider } from "@/stores/theme";

export interface IComponentProps {
  isMobile?: boolean;
  isSupportWebp?: boolean;
}

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
