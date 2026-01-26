import { shopApi, type GraphQLCategory } from "@/lib/api/shop";
import { fetchMenuBySlug } from "@/graphql/queries/getMenuBySlug";

export type CategoryNode = {
  id: string;
  name: string;
  slug?: string;
  children?: CategoryNode[];
};

export type MenuItem = {
  id: string;
  name: string;
  url: string;
  level: number;
  metadata?: Array<{
    key: string;
    value: string;
  }>;
  children?: MenuItem[];
};

export type NavbarData = {
  categories: CategoryNode[];
  menuItems: MenuItem[];
};

/**
 * Builds a hierarchical category tree from a flat list of GraphQL categories
 */
const buildCategoryHierarchy = (
  categories: GraphQLCategory[],
  parentId: string | null = null
): CategoryNode[] => {
  return categories
    .filter((cat) => {
      if (parentId === null) {
        return !cat.parent; // Root categories
      }
      return cat.parent?.id === parentId;
    })
    .map((category) => ({
      id: category.id,
      name: category.name,
      slug: category.slug,
      children: buildCategoryHierarchy(categories, category.id),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
};

/**
 * Fetches categories from the GraphQL API (server-side)
 */
async function fetchCategories(): Promise<CategoryNode[]> {
  try {
    const channel = "default-channel";
    const categoriesResponse = await shopApi.getGraphQLCategories({ channel });
    const categoryNodes = categoriesResponse.categories.edges.map(
      (edge) => edge.node
    );
    return buildCategoryHierarchy(categoryNodes);
  } catch (error) {
    console.error("Failed to fetch categories from GraphQL API:", error);
    return [];
  }
}

/**
 * Fetches menu items from the GraphQL API (server-side)
 */
async function fetchMenuItems(): Promise<MenuItem[]> {
  try {
    const menuData = await fetchMenuBySlug("navbar");
    if (
      menuData &&
      typeof menuData === "object" &&
      "items" in menuData &&
      Array.isArray(menuData.items)
    ) {
      return menuData.items as MenuItem[];
    }
    return [];
  } catch (error) {
    console.error("Failed to fetch menu items:", error);
    return [];
  }
}

/**
 * Fetches all navbar data (categories and menu items) server-side.
 * This function is designed to be called from server components to enable
 * server-side rendering of navigation for SEO purposes.
 */
export async function fetchNavbarData(): Promise<NavbarData> {
  const [categoriesResult, menuResult] = await Promise.allSettled([
    fetchCategories(),
    fetchMenuItems(),
  ]);

  const categories =
    categoriesResult.status === "fulfilled" ? categoriesResult.value : [];
  const menuItems =
    menuResult.status === "fulfilled" ? menuResult.value : [];

  return {
    categories,
    menuItems,
  };
}
