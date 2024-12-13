// src/pages/products/slug.js
// Import the function getProductBySlug from the ghost library to fetch product data by slug
import { getProductBySlug } from "../../lib/ghost";

// Define the getStaticPaths function to generate paths for each product at build time
export async function getStaticPaths() {
  // Fetch all products (assumes getProducts function fetches an array of products)
  const products = await getProducts();

  // Map each product to create an object with params, where params contain the slug for each product
  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }));

  // Return the paths array and set fallback to false, indicating only these paths should be generated
  return { paths, fallback: false };
}

// Define the getStaticProps function to fetch specific product data based on the slug parameter
export async function getStaticProps({ params }) {
  // Use the slug from params to fetch the specific product's data
  const product = await getProductBySlug(params.slug);

  // Return the product data as props to be used by the component
  return { props: { product } };
}

// Define the main Product component, which receives a product prop
export default function Product({ product }) {
  if (!product) {
    return <p>Product not found</p>;
  }

  // Split the product title by hyphens to extract specific details
  const titleParts = product.title.split("-");

  // Extract the category (e.g., "vegetable") and product name (e.g., "Carrot") from the title
  const category = titleParts[0];
  const productName = titleParts[2];

  // Render the product details
  return (
    <div>
      {/* Display the product's full title */}
      <h1>{product.title}</h1>

      {/* Display the extracted category */}
      <p>
        <strong>Category:</strong> {category}
      </p>

      <p>
        <strong>Product Name:</strong> {productName}
      </p>

      <p>{product.description}</p>
    </div>
  );
}
