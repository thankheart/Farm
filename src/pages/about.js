// src/pages/about.js
import "bootstrap/dist/css/bootstrap.min.css";

export default function About() {
  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h1 className="display-4 mb-4">About Korean Farm</h1>
        <p className="lead mb-4">
          At Korean Farm, we believe in sustainable farming, fresh produce, and
          caring for our animals in a way that promotes their well-being. We are
          proud to offer a variety of high-quality Korean vegetables, free-range
          eggs, and much more, directly from our farm to your table.
        </p>
      </div>

      <div className="row">
        {/* Our Farm Card */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title mb-3">Our Farm</h3>
              <p className="card-text">
                We are a family-owned farm based in Korea, dedicated to growing
                a variety of traditional and unique Korean vegetables. From
                leafy greens to root vegetables, our crops are grown using
                organic practices that respect the environment and enhance the
                natural flavor and nutrition of each vegetable.
              </p>
            </div>
          </div>
        </div>

        {/* Free-Range Chickens Card */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title mb-3">Free-Range Chickens</h3>
              <p className="card-text">
                Our chickens are raised in a free-range environment, where they
                can roam freely, forage, and live naturally. This allows them to
                produce high-quality eggs that are rich in flavor and packed
                with nutrients. We believe in ethical farming practices that
                prioritize animal welfare, ensuring that our eggs are not only
                delicious but also produced with care and respect.
              </p>
            </div>
          </div>
        </div>

        {/* Black Goats Card */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title mb-3">Black Goats</h3>
              <p className="card-text">
                In addition to our vegetables and eggs, we also raise black
                goats. Known for their hardiness and rich meat, our black goats
                are raised in a natural environment, allowing them to graze on
                lush pastures. Our goats provide high-quality meat that is lean,
                tender, and full of flavor, making them a great choice for any
                meal.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sustainability and Community Section */}
      <div className="card mb-4">
        <div className="card-body">
          <h3 className="card-title mb-3">Sustainability and Community</h3>
          <p className="card-text">
            At Korean Farm, we are committed to sustainability. We strive to
            reduce our environmental impact by using eco-friendly farming
            practices, minimizing waste, and promoting biodiversity. Our farm
            supports local communities by providing fresh, healthy products and
            working closely with other small-scale farmers in the region.
          </p>
        </div>
      </div>

      {/* Location Section */}
      <div className="card mb-4">
        <div className="card-body">
          <h3 className="card-title mb-3">Our Location</h3>
          <p className="card-text">
            Korean Farm is located at 220 Duxbury Rd, Hagersville, ON N0A 1H0,
            Canada. It's a peaceful and beautiful spot where we grow our produce
            and raise our animals with care. Feel free to visit or reach out to
            us!
          </p>
          <div className="map-container">
            {/* Embedded Google Map for the address */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.6121258985865!2d-79.9820003!3d42.9549039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882cf16f2059997d%3A0x3a7f7049f5600b89!2s220%20Duxbury%20Rd%2C%20Hagersville%2C%20ON%20N0A%201H0!5e0!3m2!1sen!2sca!4v1700500650570!5m2!1sen!2sca"
              width="100%"
              height="300"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
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

      {/* Button to go back to home */}
      <div className="d-flex justify-content-center">
        <a href="/" className="btn btn-secondary btn-lg px-5 py-3">
          Back to Home
        </a>
      </div>
    </div>
  );
}
