// src/pages/rsvp.js
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    participants: 1,
    productChoice: "corn", // Default choice: corn
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
    // Handle form submission, such as sending data to an API or backend
    alert(
      `Thank you for your RSVP! You have chosen to pick ${
        formData.productChoice === "corn" ? "Korean Corn" : "Korean Garlic"
      }.`
    );
    setFormData({
      name: "",
      email: "",
      participants: 1,
      productChoice: "corn", // Reset to default choice after submission
      message: "",
    }); // Reset form after submission
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 mb-4">
          RSVP for Pick Your Own Korean Corn & Garlic
        </h1>
        <p className="lead mb-4">
          Please fill out the form below to reserve your spot for our "Pick Your
          Own" event at Korean Farm. We can't wait to see you there!
        </p>
      </div>

      {/* RSVP Form */}
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

            {/* Number of Participants Field */}
            <div className="mb-4">
              <label htmlFor="participants" className="form-label">
                Number of Participants
              </label>
              <input
                type="number"
                className="form-control"
                id="participants"
                name="participants"
                value={formData.participants}
                onChange={handleChange}
                min="1"
                required
              />
            </div>

            {/* Dropdown Menu for Product Choice */}
            <div className="mb-4">
              <label htmlFor="productChoice" className="form-label">
                Pick Your Product
              </label>
              <select
                className="form-control"
                id="productChoice"
                name="productChoice"
                value={formData.productChoice}
                onChange={handleChange}
                required
              >
                <option value="corn">Korean Corn</option>
                <option value="garlic">Korean Garlic</option>
              </select>
            </div>

            {/* Message Field */}
            <div className="mb-4">
              <label htmlFor="message" className="form-label">
                Additional Message (Optional)
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
              />
            </div>

            {/* Submit Button */}
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-primary btn-lg px-5 py-3"
              >
                RSVP Now
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Back to Event Page Button */}
      <div className="d-flex justify-content-center">
        <a href="/event" className="btn btn-secondary btn-lg px-5 py-3">
          Back to Event Details
        </a>
      </div>
    </div>
  );
}
