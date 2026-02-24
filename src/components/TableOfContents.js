"use client";

import { useEffect, useState } from "react";

export default function TableOfContents({ headings }) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const elements = headings.map((h) =>
      document.getElementById(h.id)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      }
    );

    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  return (
    <div
      data-testid="table-of-contents"
      className="w-48 border-l pl-4"
    >
      <p className="font-semibold mb-2">On this page</p>

      <ul className="flex flex-col gap-2">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            data-testid={`toc-link-${heading.id}`}
            data-active={activeId === heading.id}
            className={
              activeId === heading.id
                ? "text-blue-500 font-semibold"
                : ""
            }
          >
            {heading.text}
          </a>
        ))}
      </ul>
    </div>
  );
}
