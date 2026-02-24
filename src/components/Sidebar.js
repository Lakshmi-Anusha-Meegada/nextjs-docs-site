"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function Sidebar() {
  const { locale, version } = useParams();

  const pages = [
    { slug: "introduction", label: "Introduction" },
    { slug: "getting-started", label: "Getting Started" },
  ];

  return (
    <aside
      data-testid="sidebar"
      className="w-64 border-r p-4"
    >
      <p className="font-semibold mb-2">Navigation</p>

      <div className="flex flex-col gap-2">
        {pages.map((page) => (
          <Link
            key={page.slug}
            href={`/${locale}/docs/${version}/${page.slug}`}
            data-testid={`sidebar-nav-link-${page.slug}`}
          >
            {page.label}
          </Link>
        ))}
      </div>
    </aside>
  );
}
