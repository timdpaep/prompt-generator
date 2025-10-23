import React from 'react';
import type { Framework } from '../types';

interface PromptFormProps {
  framework: Framework;
  formData: Record<string, string>;
  onFormChange: (fieldId: string, value: string) => void;
  onGenerate: () => void;
  onShowExample: () => void;
}

const PromptForm: React.FC<PromptFormProps> = ({ framework, formData, onFormChange, onGenerate, onShowExample }) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{framework.name}</h2>
        {framework.example && (
          <button
            onClick={onShowExample}
            className="px-3 py-1 text-sm font-medium rounded-md bg-indigo-100 text-indigo-700 hover:bg-indigo-200 dark:bg-indigo-900 dark:text-indigo-200 dark:hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
          >
            Show Example
          </button>
        )}
      </div>
       
      {framework.fields.map(field => (
        <div key={field.id}>
          <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {field.label}
          </label>
          <textarea
            id={field.id}
            rows={4}
            value={formData[field.id] || ''}
            onChange={(e) => onFormChange(field.id, e.target.value)}
            placeholder={field.placeholder}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm sm:text-sm text-gray-900 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
          />
        </div>
      ))}
      <button
        onClick={onGenerate}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
      >
        Generate Prompt
      </button>
    </div>
  );
};

export default PromptForm;