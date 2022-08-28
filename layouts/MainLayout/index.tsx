import Head from "next/head";
import type { FC } from "react";

import { Header } from "../../common/components";
import { Footer } from "../../common/components/Footer";

import styles from "./MainLayout.module.css";

interface MainLayoutProps {
  children?: React.ReactNode;
  title: string;
}

export const MainLayout: FC<MainLayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </>
  );
};
