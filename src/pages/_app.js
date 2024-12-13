// src/pages/_app.js
// Import global CSS styles to apply them throughout the application
import "../styles/globals.css";

// Import the main Layout component, which wraps around every page
import Layout from "../components/Layout";

// Define the custom MyApp component, which is the root component for all pages
export default function MyApp({ Component, pageProps }) {
  return (
    // Wrap every page with the Layout component to ensure consistent layout across the site
    <Layout>
      {/* Render the specific page component with its properties */}
      <Component {...pageProps} />
    </Layout>
  );
}
