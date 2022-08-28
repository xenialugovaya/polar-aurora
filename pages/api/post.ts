import type { NextApiRequest, NextApiResponse } from "next";

import { NodeGQL, Nodes } from "../../common/types";
import { Category, Post } from "./types";

const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query = "", { variables } = { variables: {} }) {
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(`${API_URL}/graphql`, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getAllPosts(): Promise<NodeGQL<Post>[]> {
  const data = await fetchAPI(`
  {
    posts(first: 10000) {
      edges {
        node {
          title
          slug
          content
          tour {
            img1 {
              sourceUrl
            }
          }
          categories {
            nodes {
              databaseId
              name
            }
          }
        }
      }
    }
  }
    `);
  return data?.posts?.edges;
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const data = await fetchAPI(`
  {
    posts(where: {name: "${slug}"}) {
      edges {
        node {
          title
          slug
          content
          tour {
            img1 {
              sourceUrl
            }
          }
          categories {
            nodes {
              databaseId
              name
            }
          }
        }
      }
    }
  }
    `);
  return data?.posts?.edges[0]?.node || null;
}

export async function getAllCategories(): Promise<Nodes<Category>[]> {
  const data = await fetchAPI(`
    {
      categories(first: 1000) {
        nodes {
          databaseId
          name
        }
      }
    }
    `);
  return data?.categories;
}
