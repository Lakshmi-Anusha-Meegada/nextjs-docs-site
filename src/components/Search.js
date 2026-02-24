"use client";

import { useState } from "react";
import Link from "next/link";

export default function Search({ documents }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (value) => {
    setQuery(value);

    if (!value.trim()) {
      setResults([]);
      return;
    }

    const filtered = documents.filter((doc) =>
      doc.content.toLowerCase().includes(value.toLowerCase())
    );

    setResults(filtered);
  };

  return (
    <div className="relative w-64">
      <input
        data-testid="search-input"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full border px-3 py-1 rounded"
      />

      {query && (
        <div
          data-testid="search-results"
          className="absolute bg-white dark:bg-gray-800 border mt-1 w-full max-h-60 overflow-y-auto z-50"
        >
          {results.length > 0 ? (
            results.map((result, index) => (
              <Link
                key={index}
                href={`/${result.locale}/docs/${result.version}/${result.slug}`}
                className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => {
                  setQuery("");
                  setResults([]);
                  setShowResults(false);
                }}
              >
                {result.title}
              </Link>
            ))
          ) : (
            <div
              data-testid="search-no-results"
              className="px-3 py-2 text-gray-500"
            >
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  );
}