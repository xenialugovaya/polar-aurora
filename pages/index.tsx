import type { NextPage } from "next";
import Image from "next/image";
import Link from 'next/link';
import Masonry from '@mui/lab/Masonry';
import BusinessIcon from '@mui/icons-material/Business';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import PersonIcon from '@mui/icons-material/Person';

import { MainLayout } from "../layouts/MainLayout";
import styles from "../styles/Home.module.scss";
import mainImage from "../public/main.jpeg";
import mainImage1 from "../public/main1.jpeg";

import { getAllPosts } from "./api/post";
import { Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tab, Tabs } from "@mui/material";
import { NodeGQL } from "../common/types";
import { Post } from "./api/types";

interface HomeProps {
  posts: NodeGQL<Post>[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  // const categoriesIds = [18, 88, 86, 37, 63];
  // const getPostCategories = (post): Category[] => post.node.categories.nodes;
  // const getPostCategoriesIds = (post): number[] => getPostCategories(post).map(node => node.databaseId);

  // const featuredPosts = posts.edges.filter(post => getPostCategoriesIds(post).some(catId => categoriesIds.includes(catId)));

  console.log("posts", posts);
  return (
    <MainLayout title="Туры в Карелию">
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Image src={mainImage} alt="Туры в Карелию" style={{ borderRadius: 10 }} />
        </Grid>
        <Grid item xs={4}>
          <div>
            <div className={styles.slogan}>
              <h1>
                Ваши
                <br /> незабываемые <br />
                моменты в Карелии
                <hr />
                {/* <Image src={mainImage1} alt="Туры в Карелию" style={{ borderRadius: 10 }} /> */}
                <List>
                  <ListItem disablePadding>
                    <Link href="/corporate">
                      <ListItemButton>
                        <ListItemIcon>
                          <BusinessIcon />
                        </ListItemIcon>
                        <ListItemText primary="Корпоративные туры" />
                      </ListItemButton>
                    </Link>
                  </ListItem>
                  <ListItem disablePadding>
                    <Link href="/#">
                      <ListItemButton>
                        <ListItemIcon>
                          <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary="Индивидуальные туры" />
                      </ListItemButton>
                    </Link>
                  </ListItem>
                  <ListItem disablePadding>
                    <Link href="/yachty">
                      <ListItemButton>
                        <ListItemIcon>
                          <DirectionsBoatIcon />
                        </ListItemIcon>
                        <ListItemText primary="Аренда катеров и яхт" />
                      </ListItemButton>
                    </Link>
                  </ListItem>
                </List>
              </h1>
            </div>
          </div>
        </Grid>
      </Grid>
      <h2 className={styles.subheader}>
        Популярные туры
        <hr />
      </h2>
      <Masonry columns={3} spacing={2}>
        {posts.slice(0, 10).map((item, index) => (
          <Link
            href={{
              pathname: '/[slug]',
              query: { slug: item.node.slug },
            }}
            key={index}
          >
            <div key={index}>
              <img
                src={item.node.tour.img1?.sourceUrl}
                // srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                alt={item.node.title}
                loading="lazy"
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: 'block',
                  width: '100%',
                  cursor: 'pointer',
                }}
              />
            </div>
          </Link>
        ))}
      </Masonry>
    </MainLayout>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: { posts },
  };
}
