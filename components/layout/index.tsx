import { FC } from "react";
import { IFooterProps, Footer } from "../footer";
import { INavBarProps, NavBar } from "../navbar";
import styles from "./styles.module.scss";


export interface ILayoutProps {
  navbarData: INavBarProps;
  footerData: IFooterProps;
}

export const Layout: FC<ILayoutProps & { children: JSX.Element }> = ({
  navbarData,
  footerData,
  children,
}) => {
  return (
    <div className={styles.layout}>
      <div className={styles.starsec}></div>
      <NavBar {...navbarData}></NavBar>
      <main className={styles.main}>{children}</main>
      <Footer {...footerData}></Footer>
    </div>
  );
};
