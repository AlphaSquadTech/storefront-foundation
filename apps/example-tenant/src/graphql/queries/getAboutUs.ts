import { gql } from "@apollo/client"

export const GET_ABOUT_US_PAGE = gql`
  query AboutUs($first: Int = 1) {
    pages(first: $first, filter: { slugs: "about-us-section" }) {
      edges {
        node {
          id
          title
          content
          metadata {
            key
            value
          }
        }
      }
    }
  }
`

export type EditorJsBlock = {
  id?: string
  type?: string
  data?: { text?: string; level?: number } | null
}

export type AboutUsPage = {
  id: string
  title?: string | null
  content?: string | null
  metadata?: Array<{ key?: string | null; value?: string | null } | null> | null
}

export type AboutUsResponse = {
  pages?: {
    edges?: Array<{ node?: AboutUsPage | null } | null>
  }
}
