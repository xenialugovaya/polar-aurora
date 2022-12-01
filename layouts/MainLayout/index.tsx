import Head from "next/head";
import { FC, useEffect, useState } from "react";

import { Header, Menu, Footer } from "../../common/components";
import { MAIN_MENU } from "../../common/constants";

import styles from "./MainLayout.module.css";

interface MainLayoutProps {
  children?: React.ReactNode;
  title: string;
}

export const MainLayout: FC<MainLayoutProps> = ({ children, title }) => {
  const [currentPageSlug, setCurrentPageSlug] = useState('');

  useEffect(() => {
    if (window) {
      setCurrentPageSlug(window.location.pathname)
    }
  }, [])

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Menu currentPageSlug={currentPageSlug} menu={MAIN_MENU} />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </>
  );
};
