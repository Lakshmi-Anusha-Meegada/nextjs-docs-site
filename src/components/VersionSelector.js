"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function VersionSelector() {
  const { locale, version, slug } = useParams();

  const versions = ["v1", "v2", "v3"];

  return (
    <div className="relative">
      <select
        data-testid="version-selector"
        className="border px-2 py-1"
        value={version}
        onChange={(e) => {
          const currentLocale = locale || "en";
          const currentSlug = slug || "introduction";

          window.location.href = `/${currentLocale}/docs/${e.target.value}/${currentSlug}`;
        }}
      >
        {versions.map((v) => (
          <option
            key={v}
            value={v}
            data-testid={`version-option-${v}`}
          >
            {v.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
