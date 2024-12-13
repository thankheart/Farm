// src/pages/contact.js
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission (send email, save in a database, etc.)
    alert(`Thank you for contacting us, ${formData.name}!`);
    setFormData({
      name: "",
      email: "",
      message: "",
    }); // Reset form after submission
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 mb-4">Contact Us</h1>
        <h2 className="lead mb-4  fw-bold ">
          We'd love to hear from you! If you have any questions, suggestions, or
          feedback, please reach out to us using the form below.
        </h2>
      </div>

      {/* Contact Section */}
      <div className="card mb-4">
        <div className="card-body">
          <h3 className="card-title mb-3">Contact Us</h3>
          <p className="card-text">
            Have any questions? Want to learn more about our products? Feel free
            to get in touch with us. We're always happy to hear from you!
          </p>
          <ul className="list-unstyled">
            <li>
              <strong>Email:</strong> contact@koreanfarm.com
            </li>
            <li>
              <strong>Phone:</strong> +1 416-1234-5678
            </li>
            <li>
              <strong>Address:</strong> 220 Duxbury Rd, Hagersville, ON N0A 1H0
            </li>
          </ul>
        </div>
      </div>

      {/* Contact Form */}
      <div className="card shadow-sm mb-5">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Message Field */}
            <div className="mb-4">
              <label htmlFor="message" className="form-label">
                Your Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-info btn-lg px-5 py-3 mx-3"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Back to Home Button */}
      <div className="d-flex justify-content-center">
        <a href="/" className="btn btn-secondary btn-lg px-5 py-3">
          Back to Home
        </a>
      </div>
    </div>
  );
}
