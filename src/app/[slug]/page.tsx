import React from "react";
import { Metadata } from "next";
import ClientDynamicPage from "./ClientDynamicPage";

// Force dynamic rendering - don't try to statically generate these pages
export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = false;

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate dynamic metadata with canonical URL
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  return {
    title: "Dynamic Page",
    description: "Dynamic content page.",
    alternates: {
      canonical: `/${slug}`,
    },
  };
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  
  return <ClientDynamicPage slug={slug} />;
}

