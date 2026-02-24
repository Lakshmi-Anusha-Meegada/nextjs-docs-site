"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const locales = ["en", "es", "fr", "de"];

  return (
    <div data-testid="language-switcher" className="flex gap-2">
      {locales.map((locale) => {
        const newPath = pathname.replace(/^\/(en|es|fr|de)/, `/${locale}`);

        return (
          <Link key={locale} href={newPath}>
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
