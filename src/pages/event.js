// src/pages/event.js
import "bootstrap/dist/css/bootstrap.min.css";

export default function Event() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 mb-4">Pick Your Own Korean Corn & Garlic</h1>
        <p className="lead mb-4">
          Join us at Korean Farm for a unique, hands-on farming experience! Our
          "Pick Your Own" event allows you to pick fresh Korean corn and garlic
          directly from our fields. It’s a fun and educational activity for the
          whole family, and a great way to connect with nature and support local
          farming.
        </p>
      </div>

      {/* Event Details Card */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h2 className="card-title mb-4">Event Details</h2>
          <p className="card-text mb-4">
            The event will take place at Korean Farm, where you'll get the
            chance to harvest your own Korean corn and garlic. It's a great way
            to experience farm life, learn about sustainable farming practices,
            and enjoy the beauty of nature.
          </p>
        </div>
      </div>

      {/* Event Features: Korean Corn and Garlic */}
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <img
              src="/images/corn.jpg"
              alt="Korean Corn"
              className="card-img-top"
            />
            <div className="card-body">
              <h3 className="card-title">Korean Corn</h3>
              <p className="card-text">
                Our Korean corn is known for its sweet, crisp kernels and
                vibrant yellow color. During the event, you will have the
                opportunity to pick your own fresh corn, perfect for grilling,
                boiling, or adding to your favorite dishes.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm">
            <img
              src="/images/garlic.jpg"
              alt="Korean Garlic"
              className="card-img-top"
            />
            <div className="card-body">
              <h3 className="card-title">Korean Garlic</h3>
              <p className="card-text">
                Korean garlic is famed for its robust flavor and health
                benefits. Picking garlic straight from the ground is a
                satisfying experience, and you'll be able to take home bulbs
                that are perfect for cooking or planting for next season.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RSVP Section */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body text-center">
          <h3 className="card-title mb-3">How to Participate</h3>
          <p className="card-text mb-4">
            To join the "Pick Your Own" event, simply RSVP by clicking the
            button below. Spots are limited, so be sure to reserve your spot
            early to guarantee your participation. The event is family-friendly,
            and we encourage everyone to get involved.
          </p>
          <div className="d-flex justify-content-center">
            <a href="/rsvp" className="btn btn-primary btn-lg px-5 py-3">
              RSVP Now
            </a>
          </div>
        </div>
      </div>

      {/* Event Schedule List */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h2 className="card-title mb-4">Event Schedule</h2>
          <p className="card-text mb-4">
            The "Pick Your Own" event will be held on the following dates:
          </p>
          <ul className="list-group">
            <li className="list-group-item">
              Saturday, May 5th, 2024 - 9:00 AM to 12:00 PM
            </li>
            <li className="list-group-item">
              Sunday, May 6th, 2024 - 9:00 AM to 12:00 PM
            </li>
            <li className="list-group-item">
              Saturday, May 12th, 2024 - 9:00 AM to 12:00 PM
            </li>
            <li className="list-group-item">
              Sunday, May 13th, 2024 - 9:00 AM to 12:00 PM
            </li>
          </ul>
        </div>
      </div>

      {/* What to Bring Section */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h3 className="card-title mb-4">What to Bring</h3>
          <p className="card-text mb-4">
            Please wear comfortable clothes and closed-toe shoes, as you'll be
            walking through the farm fields. We also recommend bringing
            sunscreen, a hat, and a water bottle to stay hydrated during the
            event.
          </p>
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
