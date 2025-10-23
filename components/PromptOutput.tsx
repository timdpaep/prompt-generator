
import React, { useState, useEffect } from 'react';

interface PromptOutputProps {
  prompt: string;
}

const PromptOutput: React.FC<PromptOutputProps> = ({ prompt }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handleCopy = () => {
    if (prompt) {
      navigator.clipboard.writeText(prompt).then(() => {
        setCopied(true);
      });
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Generated Prompt</h2>
        {prompt && (
          <button
            onClick={handleCopy}
            className={`px-4 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800 ${
              copied
                ? 'bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200'
                : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200 dark:bg-indigo-900 dark:text-indigo-200 dark:hover:bg-indigo-800'
            }`}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        )}
      </div>
      <div className="flex-grow bg-gray-50 dark:bg-gray-900 rounded-md p-4 overflow-auto border border-gray-200 dark:border-gray-700 min-h-[300px]">
        {prompt ? (
            <pre className="whitespace-pre-wrap text-sm text-gray-800 dark:text-gray-200 font-sans">{prompt}</pre>
        ) : (
            <div className="flex items-center justify-center h-full">
                <p className="text-gray-500 dark:text-gray-400">Your generated prompt will appear here.</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default PromptOutput;
