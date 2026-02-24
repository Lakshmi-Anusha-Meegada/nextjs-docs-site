"use client";

export default function CodeBlock({ codeText, className }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(codeText);
  };

return (
  <div
    data-testid="code-block"
    className="relative bg-gray-100 dark:bg-gray-800
               border border-gray-300 dark:border-gray-700
               p-4 rounded-lg shadow-sm transition"
  >
    <button
      data-testid="copy-code-button"
      onClick={handleCopy}
      className="absolute top-2 right-2 text-xs px-3 py-1 rounded-md
                 bg-white dark:bg-gray-700
                 text-black dark:text-white
                 border border-gray-300 dark:border-gray-600
                 hover:bg-gray-200 dark:hover:bg-gray-600
                 transition"
    >
      Copy
    </button>

    <pre className="overflow-x-auto text-sm pr-16">
      <code className="text-black dark:text-green-400">
        {codeText}
      </code>
    </pre>
  </div>
);
}