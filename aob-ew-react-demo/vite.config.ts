import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Allows using describe, it, expect etc. globally without explicit imports
    environment: 'jsdom', // or 'happy-dom' depending on your preference
    reporters: ['default', 'junit'], // 'default' for console output, 'junit' for XML
    outputFile: './junit.xml', // Specifies the path for the output XML file
    coverage: {
      enabled: true, // Optional: always run coverage with tests
      provider: 'v8', // or 'istanbul'
      reporter: ['text', 'cobertura'], // 'text' shows it in terminal, 'cobertura' generates XML
      // reportsDirectory: './coverage', // Optional: defaults to './coverage'
    },    
    //setupFiles: './src/tests/setup.ts', // Optional: Path to a test setup file
    //css: true, // Optional: Handles CSS imports during tests
  },
  define: {
    // Expose the package version to the application code
    // The value needs to be JSON.stringified
    "import.meta.env.VITE_APP_VERSION": JSON.stringify(
      process.env.npm_package_version,
    ),
  },  
})
