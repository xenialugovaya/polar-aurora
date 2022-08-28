import type { GetServerSideProps, NextPage } from "next";

import { MainLayout } from "../layouts/MainLayout";
import { getPostBySlug } from "./api/post";
import { Post } from "./api/types";

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
            <img src={img1.sourceUrl} width={400} />
            {content}
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