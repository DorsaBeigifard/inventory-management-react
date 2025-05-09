import React, { useState, useEffect } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // This effect will run when the darkMode state changes
  useEffect(() => {
    console.log("Dark mode state:", darkMode); // Log dark mode state
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 text-black dark:text-white">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-semibold text-primary-500 dark:text-primary-700">
          Hello, World!
        </h1>
        <p className="text-secondary-500 dark:text-secondary-300">
          This is a simple example of light and dark mode with Tailwind CSS.
        </p>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mt-6 p-2 bg-primary-500 dark:bg-primary-700 text-white rounded"
        >
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>

        <div className="bg-success text-white p-3 mt-6 rounded">
          Success Message!
        </div>
        <div className="bg-warning text-white p-3 mt-3 rounded">
          Warning Message!
        </div>
        <div className="bg-error text-white p-3 mt-3 rounded">
          Error Message!
        </div>
      </div>
    </div>
  );
};

export default App;
