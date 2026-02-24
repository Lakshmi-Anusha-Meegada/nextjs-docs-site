import fs from "fs";
import path from "path";
import Search from "@/components/Search";
import "./globals.css";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Sidebar from "@/components/Sidebar";
import VersionSelector from "@/components/VersionSelector";
import ThemeToggle from "@/components/ThemeToggle";
import { ThemeProvider } from "next-themes";

export default function RootLayout({ children }) {
  const docsPath = path.join(process.cwd(), "_docs");
const versions = fs.readdirSync(docsPath);

let documents = [];

versions.forEach((version) => {
  const versionPath = path.join(docsPath, version);
  const locales = fs.readdirSync(versionPath);

  locales.forEach((locale) => {
    const localePath = path.join(versionPath, locale);
    const files = fs.readdirSync(localePath);

    files.forEach((file) => {
      const content = fs.readFileSync(
        path.join(localePath, file),
        "utf-8"
      );

      documents.push({
        version,
        locale,
        slug: file.replace(".md", ""),
        title: file.replace(".md", ""),
        content,
      });
    });
  });
});
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          
          <header className="border-b bg-white dark:bg-gray-900 
                   border-gray-200 dark:border-gray-700 
                   shadow-sm">
            <div className="flex justify-between w-full items-center">
              <h1 className="font-bold">Docs Site</h1>

              <div className="flex gap-4 items-center">
                <Search documents={documents} />
                <LanguageSwitcher />
                <VersionSelector />
                <ThemeToggle />
              </div>
            </div>
          </header>

          <div className="flex min-h-[calc(100vh-56px)]">
            <Sidebar />

            <main className="flex-1 p-6">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
