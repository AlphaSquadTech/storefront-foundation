import { GET_FEATURED_PRODUCTS } from "@/graphql/queries/getFeaturedProducts";
import createApolloServerClient from "@/graphql/server-client";
import { Product } from "@/graphql/types/product";
import FeaturedProductSectionClient from "./featuredProductSectionClient";

type Props = {
  count?: number;
  collection?: string;
};

export const FeaturedProductSection = async ({
  count = 10,
  collection,
}: Props) => {
  let f_products: Product[] = [];

  try {
    const client = createApolloServerClient();

    const { data } = await client.query({
      query: GET_FEATURED_PRODUCTS,
      variables: {
        slug: collection,
        first: count,
      },
      fetchPolicy: "cache-first",
      errorPolicy: "all", // Continue even with network errors
    });

    f_products =
      data?.collection?.products?.edges?.map(
        (e: { node: Product }) => e.node
      ) ?? [];
  } catch (error) {
    console.error(
      `[ProductGrid] Error fetching products for FEATURED PRODUCTS:`,
      error
    );
    // f_products remains empty array, will show empty state
  }

  return !f_products?.length ? null : (
    <section className=" py-12 px-4 md:px-6 md:py-16 lg:px-0 bg-[#333333]">
      <div className="lg:container lg:mx-auto space-y-10">
        <p className="text-2xl text-white md:text-3xl lg:text-4xl uppercase font-primary -tracking-[0.12px] text-center italic">
          FEATURED <span className="text-[var(--color-primary)]">PRODUCTS</span>
        </p>

        <FeaturedProductSectionClient f_products={f_products} />
      </div>
    </section>
  );
};
