// src/lib/ghost.js
// Set the Ghost CMS API URL and API Key, with fallback to local values if environment variables are not set
const GHOST_API_URL =
  process.env.GHOST_API_URL || "http://localhost:2368/ghost/api/v3/content";
const GHOST_API_KEY = process.env.GHOST_API_KEY || "583e0f21ca80a6bb3bebaa3950";

// Fetch all products from Ghost CMS
export async function getProducts() {
  // Send a request to the Ghost CMS API to fetch all posts with the specified API key
  const response = await fetch(
    `${GHOST_API_URL}/posts/?key=${GHOST_API_KEY}&limit=all`
  );

  // Parse the JSON response from the API
  const data = await response.json();

  // Log the full API response for debugging purposes
  //console.log("API Response:", data);

  // Return the posts array if it exists, or an empty array if no posts are found
  return data.posts || [];
}

// Fetch a specific product (post) by its slug
export async function getProductBySlug(slug) {
  // Send a request to fetch a post by its slug
  const response = await fetch(
    `${GHOST_API_URL}/posts/slug/${slug}/?key=${GHOST_API_KEY}`
  );

  // Parse the JSON response from the API
  const data = await response.json();

  // Check if the response contains posts and return the first post if available
  if (data.posts && data.posts.length > 0) {
    return data.posts[0];
  }

  // Return an empty object if no post is found for the given slug
  return {};
}
