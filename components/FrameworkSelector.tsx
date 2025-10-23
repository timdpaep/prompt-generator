
import React from 'react';
import type { Framework } from '../types';

interface FrameworkSelectorProps {
  frameworks: Framework[];
  selectedId: string;
  onChange: (id: string) => void;
}

const FrameworkSelector: React.FC<FrameworkSelectorProps> = ({ frameworks, selectedId, onChange }) => {
  return (
    <div>
      <label htmlFor="framework-select" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Choose a Prompt Framework
      </label>
      <select
        id="framework-select"
        value={selectedId}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
      >
        <option value="" disabled>-- Select a framework --</option>
        {frameworks.map((framework) => (
          <option key={framework.id} value={framework.id}>
            {framework.name} - {framework.description}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FrameworkSelector;
