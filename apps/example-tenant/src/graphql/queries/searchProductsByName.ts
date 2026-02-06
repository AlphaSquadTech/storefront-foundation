import { gql } from "@apollo/client";

// GraphQL query to search products by name (used for slug fallback)
export const SEARCH_PRODUCTS_BY_NAME = gql`
  query SearchProductsByName($query: String!, $channel: String!) {
    products(first: 5, channel: $channel, filter: { search: $query }) {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }
`;

export type SearchProductsByNameData = {
  products: {
    edges: Array<{
      node: {
        id: string;
        name: string;
        slug: string;
      };
    }>;
  };
};

export type SearchProductsByNameVars = {
  query: string;
  channel: string;
};
