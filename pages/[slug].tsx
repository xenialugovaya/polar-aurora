import { Grid, Paper } from "@mui/material";
import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";

import { MainLayout } from "../layouts/MainLayout";
import { getPostBySlug } from "../lib/api";
import { Post } from "../lib/types";
import styles from "../styles/Tour.module.scss";

interface TourProps {
    post: Post;
}

const Tour: NextPage<TourProps> = ({ post }) => {
    if (!post) {
        return null;
    }
    const { title, content, tour: { img1 } } = post;

    return (
        <MainLayout title={title}>
            <Grid container spacing={4} style={{ padding: '40px' }}>
                <Grid item style={{ position: 'relative', height: '400px' }} xs={8}>
                    <Image objectFit="cover" style={{ objectFit: 'contain' }} src={img1.sourceUrl} layout="fill" alt={title} />
                </Grid>
            </Grid>
            <Paper className={styles.description} sx={{ padding: '30px', fontSize: '18px', lineHeight: '25px' }}>
                {content?.replace(/(<([^>]+)>)/ig, '')?.replace(/(&([^>]+);)/ig, '')}
            </Paper>
        </MainLayout>
    )
}

export default Tour;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const post = await getPostBySlug(params?.slug as string);

    return {
        props: { post },
    }
}