import { Nodes } from "../../common/types";

export interface Post {
    id: string;
    title: string;
    content: string;
    slug: string;
    categories: Nodes<Category>;
    tour: PostACF;
}

export interface PostACF {
    img1: Image;
}

export interface Category {
    name: string;
    databaseId: number
};

export interface Image {
    sourceUrl: string;
}