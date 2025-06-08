import { defineConfig } from "vite";
// This function wraps your configuration object and provides better
// TypeScript support and editor autocompletion, even if you're writing plain JS.
import react from "@vitejs/plugin-react";
// Import the official React plugin for Vite.
// This is a function that, when called, returns a plugin object
// that enables Vite to handle React features like JSX, Fast Refresh, etc.
export default defineConfig({
  // Export the Vite configuration as the default export using ES module syntax.
  // This is the modern, recommended way to provide config in Vite.
  // The config file can be vite.config.js (JavaScript) or vite.config.ts (TypeScript).
  // The plugins array is where you add Vite plugins.
  // Here, we call the react() function to get the React plugin object.
  // Why call react()? Because react is a function that returns the actual plugin object.
  // If you just wrote react (without parentheses), Vite would receive the function itself,
  // not the plugin, and it would not work as expected.
  // This pattern also lets you pass options to the plugin if needed.
  plugins: [
    react(), // Enables JSX/TSX support, Fast Refresh, and React-specific optimizations.
  ],

  // You can add more Vite config options here as your project grows,
  // such as build options, environment variable handling, aliases, etc.
  // For example, to use environment variables in your config, you can
  // import loadEnv from 'vite' and use it as shown in the docs [6].
});

/*
  === Explanation ===

  - Vite automatically looks for a config file named vite.config.js in your project root [1][2].
  - Using defineConfig is recommended for better tooling and TypeScript support [1][2].
  - The React plugin MUST be called as a function (react()) because it returns the plugin object Vite needs.
  - This setup is required for React projects so Vite can process JSX, enable Fast Refresh, and optimize your build.
  - Plugins are the standard way to extend Vite's capabilities (e.g., for React, Vue, Svelte, etc.).
  - This config file is only needed for development and build—it's not included in your production bundle.
*/
