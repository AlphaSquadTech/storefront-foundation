'use client';

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import DynamicPageRenderer from '../components/dynamicPage/DynamicPageRenderer';
import { DynamicPageData } from '@/graphql/queries/getDynamicPageBySlug';

interface ClientDynamicPageProps {
  slug: string;
}

export default function ClientDynamicPage({ slug }: ClientDynamicPageProps) {
  const [pageData, setPageData] = useState<DynamicPageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPageData() {
      let isNotFound = false;
      try {
        const response = await fetch(`/api/dynamic-page/${slug}`);

        if (!response.ok) {
          if (response.status === 404) {
            isNotFound = true;
          } else {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        } else {
          const data = await response.json();
          setPageData(data);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load page');
      } finally {
        setLoading(false);
        if (isNotFound) {
          notFound();
        }
      }
    }

    fetchPageData();
  }, [slug]);

  // Loading state handled by loading.tsx at route level

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error Loading Page</h1>
          <p className="text-gray-600">{error}</p>
        </div>
      </main>
    );
  }

  if (!loading && !pageData) {
    notFound();
    return null;
  }

  // Still loading - render nothing (loading.tsx handles this)
  if (loading || !pageData) {
    return null;
  }

  return (
    <main className="min-h-screen">
      <DynamicPageRenderer pageData={pageData} />
    </main>
  );
}