'use client';

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import client from "@/graphql/client";
import { useEffect, useState } from "react";

// Create a minimal SSR/placeholder client that won't make actual requests
const ssrClient = new ApolloClient({
  cache: new InMemoryCache(),
  ssrMode: true,
  // No link - queries will just return loading state
});

export default function ApolloWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  // Start with SSR client, switch to real client after mount
  // This ensures queries only run with the correct endpoint (client-side)
  const [apolloClient, setApolloClient] = useState(ssrClient);

  useEffect(() => {
    // After hydration, switch to the real client
    // This ensures NEXT_PUBLIC_API_URL is correctly resolved
    setApolloClient(client);
  }, []);

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
