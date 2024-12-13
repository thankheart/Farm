# Korean Farm Website Documentation -------Name: Jung Hwa Hyun Date: 2024-11-18

## Project Overview

The **Korean Farm Website** is developed using **Next.js** for server-side rendering (SSR) and **Ghost CMS** as the headless content management system. This site aims to promote a Korean farm and its offerings, such as fresh produce, farm events, and an e-commerce section for users to place orders for farm products. The website focuses on a modern, nature-inspired design that emphasizes sustainability, user-friendly navigation, and modern web practices.

### Technologies Used

- **Next.js**: A React-based framework that supports server-side rendering (SSR), static site generation (SSG), and dynamic page routing.
- **Ghost CMS**: A headless CMS to manage dynamic content (e.g., products, events) that can be easily updated and scaled.
- **React**: JavaScript library used for building dynamic user interfaces.
- **Bootstrap**: CSS framework for responsive design and ensuring compatibility across all devices.
- **Markdown**: Content format for writing structured, easy-to-read text.
- **JSON**: Used for structuring data like products, events, and farm details.
- **Google Maps Embed API**: Embeds the farm’s location interactively on the "About Us" page.

## Project Pages

### Home Page (`/home/`)

The **Home page** provides a warm welcome to users and an overview of the farm's offerings. It includes:

- A brief description of the farm and its mission.
- Links to key pages like "Products," "About Our Farm," and "Events."
- An introductory section to encourage users to explore further.

### About Us Page (`/about/`)

This page shares the farm's mission, values, and location with visitors. It includes:

- **Our Mission**: Highlights the farm’s commitment to sustainable farming practices and promoting healthy living.
- **Our Values**: Describes the core principles such as sustainability, quality, and community.
- **Our Location**: Embeds a Google Map to help visitors easily locate the farm.

### Events Page (`/events/`)

This page provides information about seasonal farm events, such as vegetable-picking opportunities. It includes:

- **What You Can Pick**: A list of vegetables available for picking based on the season.
- **Plan Your Visit**: Information on farm hours, visitor guidelines, and RSVP Link.

### Products Page (`/products/`)

The **Products page** serves as the core of the farm's e-commerce functionality. It dynamically loads product information via **Ghost CMS** and includes:

- **Product Listings**: Displays each product with a name, image, description, and price.
- **Pagination**: Loads products in batches of 5 per page, making it easier for users to browse.
- **MyCart Link**: Each product links to the **MyCart** page, where users can manage their selections before checkout.

### MyCart Page (`/cart/`)

The **MyCart page** allows users to view and manage their selected products before completing the purchase. Features include:

- **Cart Summary**: Lists the items in the cart with their names, quantities, individual prices, and the total cost.
- **Update Quantity**: Users can modify the quantity of each product.
- **Remove Item**: Users can remove items from the cart.
- **Proceed to Checkout**: A button that leads users to the checkout page for finalizing the purchase.

### Contact Us Page (`/contact/`)

The **Contact page** enables users to reach out for inquiries. It includes:

- **Contact Form**: A form to capture the user’s name, email, country, and message.
- **Direct Contact Information**: Email and phone details for customers who prefer personal communication.

## Additional Features

- **Responsive Design**: The website is fully optimized with **Bootstrap** for seamless viewing across mobile, tablet, and desktop screens, enhancing accessibility and user experience.
- **Static Assets**: CSS styling is handled via **Bootstrap**, ensuring consistency across the website. Product images and other static assets are organized efficiently for easy content management.
- **SEO Optimization**: Next.js supports SEO best practices through automatic static optimization, and each page’s metadata is customizable to improve search engine rankings.

## Conclusion

The **Korean Farm Website** successfully combines **Next.js** with **Ghost CMS** to create a flexible and modern online platform for the farm. The website showcases products and events while maintaining a focus on sustainability, quality, and customer engagement. By leveraging **Bootstrap** for responsive design ,so the site offers a seamless and user-friendly experience for visitors looking to explore the farm's offerings.
