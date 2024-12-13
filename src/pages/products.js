// src/pages/products.js

// Import necessary modules and styles
import { getProducts } from "../lib/ghost"; // Function to fetch products from Ghost CMS
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react"; // React hooks for managing state and lifecycle

// Fetch product data at build time using getStaticProps
export async function getStaticProps() {
  const products = await getProducts(); // Fetch products data
  return { props: { products } }; // Pass products as props to the component
}

export default function Products({ products }) {
  // State variables for filtering and pagination
  const [selectedCategory, setSelectedCategory] = useState("all"); // Holds the selected category for filtering
  const [currentPage, setCurrentPage] = useState(1); // Tracks the current page for pagination
  const productsPerPage = 4; // Define number of products per page
  const [filteredProducts, setFilteredProducts] = useState(products); // Holds filtered product list based on category

  // Function to extract price from product description (excerpt)
  const extractPrice = (excerpt) => {
    const priceMatch = excerpt.match(/\$([0-9]+(?:\.[0-9]{2})?)/); // Regex to match price in the excerpt
    if (priceMatch) {
      const priceValue = parseFloat(priceMatch[1]); // Convert matched price to a float
      return isNaN(priceValue) ? null : priceValue; // Return price if valid, otherwise null
    }
    return null;
  };

  // Filter products by selected category whenever selectedCategory changes
  useEffect(() => {
    const newFilteredProducts = products.filter((product) => {
      // Show all products if "all" is selected
      if (selectedCategory === "all") return true;
      // Otherwise, filter based on category prefix in product title
      return product.title.split("-")[0] === selectedCategory;
    });
    setFilteredProducts(newFilteredProducts); // Update filtered products list
  }, [selectedCategory, products]);

  // Reset current page to 1 whenever category is changed
  useEffect(() => {
    setCurrentPage(1); // Reset page to 1 on category change
  }, [selectedCategory]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  ); // Determine products to display for current page

  // Handle category filter change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value); // Update selected category
  };

  // Handle page navigation
  const handlePageChange = (page) => {
    setCurrentPage(page); // Set the current page
  };

  // Add product to cart function
  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || []; // Retrieve cart from localStorage
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    ); // Check if product is already in cart

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1; // Increment quantity if already in cart
    } else {
      cart.push({ ...product, quantity: 1 }); // Add new product to cart
    }

    localStorage.setItem("cart", JSON.stringify(cart)); // Save updated cart to localStorage
    alert(`${product.title} has been added to the cart!`); // Notify user
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Our Products</h1>

      {/* Category Filter Dropdown */}
      <div className="row mb-4">
        <div className="col-md-4">
          <label htmlFor="categoryFilter">Category</label>
          <select
            id="categoryFilter"
            className="form-control"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="all">All Categories</option>
            <option value="vegetable">Vegetables</option>
            <option value="fruit">Fruits</option>
            <option value="others">Others</option>
          </select>
        </div>
      </div>

      {/* Product List Display */}
      <div className="product-list">
        {currentProducts.map((product) => {
          const productPrice = extractPrice(product.excerpt); // Get price from excerpt
          return (
            <div key={product.id} className="product-card">
              <img
                src={product.feature_image}
                alt={product.title}
                className="product-card-img"
              />
              <div className="product-card-body">
                <h5 className="product-card-title">{product.title}</h5>
                <p className="product-card-text">{product.excerpt}</p>
                <p className="price">
                  {productPrice !== null
                    ? `$${productPrice.toFixed(2)}`
                    : "Price not available"}
                </p>
                <button
                  className="btn btn-success"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-center mt-4">
        <ul className="pagination">
          {/* Previous button, disabled if on first page */}
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
          </li>

          {/* Page number buttons */}
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index + 1}
              className={`page-item ${
                currentPage === index + 1 ? "active" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}

          {/* Next button, disabled if on last page */}
          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
