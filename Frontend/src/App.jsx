import React from 'react';
import Home from './pages/Home';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">TDC Task Manager</h1>
          <ThemeToggle />
        </div>
        <Home />
      </div>
    </div>
  );
}

export default App;