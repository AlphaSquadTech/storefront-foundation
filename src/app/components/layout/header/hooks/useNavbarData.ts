import { useMemo } from "react";

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

interface UseNavbarDataOptions {
  initialCategories?: CategoryNode[];
  initialMenuItems?: MenuItem[];
}

/**
 * Hook for managing navbar data.
 * When initial data is provided from server-side rendering, it uses that data directly
 * without any client-side fetching, ensuring SEO-friendly server-rendered navigation.
 */
export const useNavbarData = ({
  initialCategories = [],
  initialMenuItems = [],
}: UseNavbarDataOptions = {}) => {
  // Use server-provided data directly - no client-side fetching needed
  // This ensures navigation is rendered server-side for SEO
  const transformedCategories = useMemo(() => {
    return initialCategories.map((category) => ({
      ...category,
      children: category.children || [],
    }));
  }, [initialCategories]);

  return {
    categories: transformedCategories,
    menuItems: initialMenuItems,
    hasData: initialCategories.length > 0 || initialMenuItems.length > 0,
  };
};