import fs from "fs";
import path from "path";
import Markdown from "react-markdown";
import TableOfContents from "@/components/TableOfContents";
import CodeBlock from "@/components/CodeBlock";
import FeedbackWidget from "@/components/FeedbackWidget";

export const revalidate = 60;

export default async function DocPage({ params }) {
  const resolvedParams = await params;
  const { locale, version, slug } = resolvedParams;

  const filePath = path.join(
    process.cwd(),
    "_docs",
    version,
    locale,
    `${slug}.md`
  );

  if (!fs.existsSync(filePath)) {
    return <div data-testid="doc-content">Content not found</div>;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");

  // Extract headings
  const headings = fileContent
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const text = line.replace("## ", "").trim();
      const id = text.toLowerCase().replace(/\s+/g, "-");
      return { text, id };
    });

  return (
    <div className="flex gap-8">

      {/* Main Content */}
      <div data-testid="doc-content" className="flex-1">
        <Markdown
          components={{
            h2: ({ children }) => {
              const text = children[0];
              const id = text.toLowerCase().replace(/\s+/g, "-");
              return <h2 id={id}>{children}</h2>;
            },

            code({ inline, className, children }) {
              const codeText = String(children).replace(/\n$/, "");

              if (inline) {
                return <code>{children}</code>;
              }

              return (
                <CodeBlock
                  codeText={codeText}
                  className={className}
                />
              );
            },
          }}
        >
          {fileContent}
        </Markdown>
      </div>

      <div className="flex flex-col gap-8">
        <TableOfContents headings={headings} />
        <FeedbackWidget />
      </div>

    </div>
  );
}