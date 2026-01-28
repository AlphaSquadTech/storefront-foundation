import { gql } from "@apollo/client";

export const PRODUCT_BY_ID = gql`
  query ProductById($id: ID!, $channel: String!) {
    product(id: $id, channel: $channel) {
      id
      name
      slug
    }
  }
`;

export interface ProductByIdData {
  product: {
    id: string;
    name: string;
    slug: string;
  } | null;
}

export interface ProductByIdVars {
  id: string;
  channel: string;
}
