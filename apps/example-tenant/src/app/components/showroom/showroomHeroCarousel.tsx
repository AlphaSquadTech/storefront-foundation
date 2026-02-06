import {
  GET_PAGE_METADATA_BY_SLUG,
  PageMetadataResponse,
} from "@/graphql/queries/getHeroMetadata";
import createApolloServerClient from "@/graphql/server-client";
import { HeroClientRenderer } from "./heroClientRenderer";

type MetadataItem = {
  key: string;
  value: string | null;
};

export async function ShowroomHeroCarousel() {
  let heroData = {
    title: "",
    description: "",
    bgSrc: "/images/heroSection-fallback.webp",
  };

  try {
    const client = createApolloServerClient();

    const { data } = await client.query<PageMetadataResponse>({
      query: GET_PAGE_METADATA_BY_SLUG,
      variables: { slug: "hero-section" },
      fetchPolicy: "cache-first",
      errorPolicy: "all",
    });

    const meta = (data?.page?.metadata ?? []) as MetadataItem[];
    const getVal = (key: string): string | null => {
      const value = meta.find((m) => m.key === key)?.value;
      // Return null if value is null, undefined, empty string, or only whitespace
      return value?.trim() || null;
    };

    heroData = {
      title: getVal("heading") || heroData.title,
      description: getVal("paragraph") || heroData.description,
      bgSrc: getVal("background-image-url") || heroData.bgSrc,
    };
  } catch {
    // Silently fail - use default hero data
  }

  return <HeroClientRenderer {...heroData} />;
}
