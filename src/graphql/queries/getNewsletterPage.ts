import { gql } from "@apollo/client";
import createApolloServerClient from "../server-client";

export const GET_NEWSLETTER_PAGE = gql`
  query Newsletter($first: Int = 1) {
    pages(first: $first, filter: { slugs: "newsletter-signup" }) {
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
`;

export type NewsletterMetadata = {
  key: string;
  value: string;
};

export type NewsletterPageNode = {
  id: string;
  title: string;
  content: string | null;
  metadata: NewsletterMetadata[];
};

export type NewsletterPageEdge = {
  node: NewsletterPageNode;
};

export type NewsletterPageResponse = {
  pages: {
    edges: NewsletterPageEdge[];
  };
};

export type NewsletterPageData = {
  id: string;
  title: string;
  content: string | null;
  description: string | null;
  emailTo: string | null;
  emailCc: string | null;
  emailBcc: string | null;
  emailSubject: string | null;
  successMessage: string | null;
};

export function parseNewsletterPageMetadata(
  node: NewsletterPageNode
): NewsletterPageData {
  const metadata = node.metadata.reduce((acc, item) => {
    acc[item.key] = item.value;
    return acc;
  }, {} as Record<string, string>);

  return {
    id: node.id,
    title: node.title,
    content: node.content,
    description: metadata.description || null,
    emailTo: metadata.email_to || null,
    emailCc: metadata.email_cc || null,
    emailBcc: metadata.email_bcc || null,
    emailSubject: metadata.email_subject || null,
    successMessage: metadata.success_message || null,
  };
}

export async function fetchNewsletterPage(): Promise<NewsletterPageData | null> {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    console.warn("API URL not configured, skipping newsletter page fetch");
    return null;
  }

  try {
    const client = createApolloServerClient();
    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("Newsletter page fetch timeout")), 5000)
    );

    const queryPromise = client.query<NewsletterPageResponse>({
      query: GET_NEWSLETTER_PAGE,
      variables: { first: 1 },
      fetchPolicy: "network-only",
      errorPolicy: "ignore",
    });

    const result = await Promise.race([queryPromise, timeoutPromise]);
    const edges = result?.data?.pages?.edges;

    if (edges && edges.length > 0) {
      return parseNewsletterPageMetadata(edges[0].node);
    }

    return null;
  } catch (err) {
    console.warn(
      "Failed to fetch newsletter page:",
      err instanceof Error ? err.message : "Unknown error"
    );
    return null;
  }
}
