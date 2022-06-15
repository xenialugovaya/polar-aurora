import type { NextPage } from "next";
import Image from "next/image";

import { MainLayout } from "../layouts/MainLayout";
import styles from "../styles/Home.module.scss";
import { CircleGradient } from "../common/components";
import mainImage from "../public/main.jpeg";
import { getAllPosts, getAllCategories } from "./api/post";

const Home: NextPage = ({ posts, categories }) => {
  console.log("posts", posts);
  console.log("categories", categories);

  return (
    <MainLayout title="Туры в Карелию">
      <div className={styles.header}>
        <div className={styles.image}>
          <Image src={mainImage} alt="Туры в Карелию" />
        </div>
        <div className={styles.slogan}>
          <h1>
            Ваши
            <br /> незабываемые <br />
            моменты в Карелии
          </h1>
          <CircleGradient className={styles.circle} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = await getAllPosts();
  const categories = await getAllCategories();

  return {
    props: { posts, categories },
  };
}
