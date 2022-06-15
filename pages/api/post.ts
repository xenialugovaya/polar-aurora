import type { NextApiRequest, NextApiResponse } from "next";

const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query = "", { variables } = {}) {
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

export async function getAllPosts() {
  const data = await fetchAPI(`
  {
    posts(first: 10000) {
      edges {
        node {
          title
          slug
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
  return data?.posts;
}

export async function getAllCategories() {
  const data = await fetchAPI(`
    {
      categories(first: 1000) {
        nodes {
          name
        }
      }
    }
    `);
  return data?.categories;
}
