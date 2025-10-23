import React, { useState, useEffect, useCallback } from 'react';
import { FRAMEWORKS } from './constants/frameworks';
import type { Framework } from './types';
import ThemeToggle from './components/ThemeToggle';
import FrameworkSelector from './components/FrameworkSelector';
import PromptForm from './components/PromptForm';
import PromptOutput from './components/PromptOutput';
import ExampleModal from './components/ExampleModal';

type FormData = Record<string, string>;

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [selectedFrameworkId, setSelectedFrameworkId] = useState<string>('');
  const [formData, setFormData] = useState<FormData>({});
  const [generatedPrompt, setGeneratedPrompt] = useState<string>('');
  const [exampleFramework, setExampleFramework] = useState<Framework | null>(null);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleFrameworkChange = (id: string) => {
    setSelectedFrameworkId(id);
    setFormData({});
    setGeneratedPrompt('');
  };

  const handleFormChange = (fieldId: string, value: string) => {
    setFormData(prev => ({ ...prev, [fieldId]: value }));
  };
  
  const selectedFramework = FRAMEWORKS.find(f => f.id === selectedFrameworkId);

  const handleGenerate = useCallback(() => {
    if (!selectedFramework) return;

    const prompt = selectedFramework.fields
      .map(field => {
        const value = formData[field.id] || '';
        if (value.trim()) {
          return `## ${field.label.toUpperCase()}\n${value}`;
        }
        return '';
      })
      .filter(Boolean)
      .join('\n\n');
    
    setGeneratedPrompt(prompt);
  }, [selectedFramework, formData]);

  const handleShowExample = () => {
    if (selectedFramework) {
      setExampleFramework(selectedFramework);
    }
  };

  const handleCloseModal = () => {
    setExampleFramework(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans p-4 sm:p-6 md:p-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">Prompt Framework Generator</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Craft powerful, structured prompts with ease.</p>
          </div>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </header>

        <main>
          <div className="mb-6">
            <FrameworkSelector 
              frameworks={FRAMEWORKS}
              selectedId={selectedFrameworkId}
              onChange={handleFrameworkChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              {selectedFramework ? (
                <PromptForm 
                  framework={selectedFramework}
                  formData={formData}
                  onFormChange={handleFormChange}
                  onGenerate={handleGenerate}
                  onShowExample={handleShowExample}
                />
              ) : (
                <div className="flex items-center justify-center h-full min-h-[300px]">
                  <p className="text-gray-500 dark:text-gray-400 text-lg">Select a framework to begin.</p>
                </div>
              )}
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
               <PromptOutput prompt={generatedPrompt} />
            </div>
          </div>
        </main>
      </div>
      <ExampleModal framework={exampleFramework} onClose={handleCloseModal} />
    </div>
  );
};

export default App;