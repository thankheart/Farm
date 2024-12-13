// src/pages/index.js  Homepage
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

// Home component: Displays introductory content for Korean Farm and provides navigation to other pages
export default function Home() {
  return (
    <div className="main-background">
      {/* Container for main content */}
      <div className="container py-5">
        <div className="text-center text-container">
          {/* Main heading */}
          <h1 className="display-4 mb-4">Welcome to Korean Farm</h1>

          {/* Introductory text */}
          <p className="lead mb-4">
            Discover fresh, high-quality farm products directly from Korea. We
            bring nature’s best to your home. At Korean Farm, we pride ourselves
            on bringing nature's best straight to your home.
          </p>

          {/* Brand mission details */}
          <p className="mb-4">
            We work closely with local farmers in Korea to source the freshest
            fruits, vegetables, and organic products. From apples to oranges,
            our products are handpicked with care to ensure the highest quality.
            Whether you're looking for healthy ingredients for your meals or
            organic produce for a sustainable lifestyle, Korean Farm has you
            covered.
          </p>

          <p className="mb-4">
            Our farm-to-table approach guarantees that you are getting the most
            nutritious, flavorful products while supporting local farming
            communities. Join us on our mission to provide fresh food to
            families everywhere, while promoting sustainable farming practices
            and supporting local economies.
          </p>

          {/* Navigation links for About Us and Events */}
          <div className="d-flex justify-content-center mb-4">
            <Link href="/about" className="btn btn-info btn-lg px-5 py-3 mx-3">
              About Us
            </Link>
            <Link href="/event" className="btn btn-info btn-lg px-5 py-3 mx-3">
              Upcoming Events
            </Link>
          </div>

          {/* Navigation link for Products */}
          <div className="d-flex justify-content-center mb-4">
            <Link href="/products" className="btn btn-success btn-lg px-5 py-3">
              Explore Our Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
