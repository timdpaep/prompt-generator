import React from 'react';
import type { Framework } from '../types';

interface ExampleModalProps {
  framework: Framework | null;
  onClose: () => void;
}

const ExampleModal: React.FC<ExampleModalProps> = ({ framework, onClose }) => {
  if (!framework || !framework.example) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="example-modal-title"
    >
      <div 
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()} // Prevent closing modal when clicking inside
      >
        <header className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h2 id="example-modal-title" className="text-xl font-semibold text-gray-800 dark:text-white">
            Example for {framework.name}
          </h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>
        <main className="p-6 overflow-y-auto">
          <pre className="whitespace-pre-wrap text-sm text-gray-800 dark:text-gray-200 font-sans bg-gray-50 dark:bg-gray-900 p-4 rounded-md">
            {framework.example}
          </pre>
        </main>
        <footer className="p-4 border-t border-gray-200 dark:border-gray-700 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
          >
            Close
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ExampleModal;