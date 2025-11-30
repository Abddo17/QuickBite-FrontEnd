# QuickBite 🍔

A modern, full-featured food delivery web application built with React and Vite. QuickBite offers a seamless experience for browsing, ordering, and enjoying delicious meals with support for various dietary preferences and lifestyles.


## 📸 QuickBite Overview
<p align="center">
  <img src="https://res.cloudinary.com/deg3ethat/image/upload/v1764511477/50b81b89-63ad-455f-aad1-5070630fa48f.png" width="80%" />
</p>
<p align="center">
  <img src="https://res.cloudinary.com/deg3ethat/image/upload/v1764511813/31602cd8-b9be-4731-ae72-b77b76741c24.png" width="45%" />
  <img src="https://res.cloudinary.com/deg3ethat/image/upload/v1764511635/b4d3827b-c8e8-4b2b-bdb6-2fe0603cdae7.png" width="45%" />
</p>

🌐 **Live Demo**: [https://quick-bite-front-end-obae.vercel.app](https://quick-bite-front-end-obae.vercel.app)

## ✨ Features

### 🛍️ Shopping Experience

- **Product Catalog**: Browse through a wide variety of food items with category filtering
- **Product Details**: Detailed view of each product with images, descriptions, and nutritional information
- **Search Functionality**: Quick search to find your favorite meals
- **Featured Products**: Discover trending and popular food items

### 🛒 E-Commerce Features

- **Shopping Cart**: Add items to cart and manage quantities
- **Favorites/Wishlist**: Save your favorite products for quick access
- **Secure Checkout**: Integrated Stripe payment processing
- **Order Management**: Track and view your order history
- **Order Confirmation**: Receive confirmation after successful orders

### 👤 User Management

- **User Authentication**: Secure login and registration system
- **User Profile**: Manage personal information and preferences
- **Protected Routes**: Secure access to user-specific features
- **Guest Routes**: Automatic redirect for authenticated users

### 👨‍💼 Admin Features

- **Admin Dashboard**: Comprehensive admin panel for managing products, orders, and users
- **Role-Based Access Control**: Secure admin-only routes

### 🎨 UI/UX

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations**: Enhanced user experience with GSAP animations
- **Modern UI**: Built with Tailwind CSS for a clean, modern interface
- **Smooth Scrolling**: Lenis smooth scroll implementation
- **Loading States**: Professional loading indicators and wireframe loaders

### 📱 Additional Features

- **Newsletter Subscription**: Stay updated with the latest offers
- **About Page**: Learn more about QuickBite
- **Contact Us**: Get in touch with customer support
- **404 Page**: User-friendly error page for broken links

## 🚀 Tech Stack

### Frontend

- **React 19**: Latest version of React for building user interfaces
- **Vite 6**: Next-generation frontend build tool
- **React Router DOM 7**: Client-side routing

### State Management

- **Redux Toolkit**: Efficient state management
- **React Redux**: React bindings for Redux

### Styling

- **Tailwind CSS 4**: Utility-first CSS framework
- **Custom Fonts**: Poppins, Montserrat, Outfit, Bebas Neue

### Payments

- **Stripe**: Secure payment processing
  - `@stripe/stripe-js`
  - `@stripe/react-stripe-js`

### API Communication

- **Axios**: HTTP client for API requests

### Animations & Interactions

- **GSAP**: Professional animation library
- **@studio-freight/lenis**: Smooth scrolling
- **Swiper**: Touch slider component
- **React Window**: Virtualized lists for performance

### UI Components

- **Lucide React**: Beautiful icon library
- **React Icons**: Comprehensive icon collection
- **Lodash**: Utility functions

### Development Tools

- **ESLint**: Code linting and quality assurance
- **TypeScript Types**: Type definitions for React

## 📁 Project Structure

```
FrontEnd/
├── public/                 # Static assets
│   └── favicon.png        # Site favicon
├── src/
│   ├── API/              # API configuration
│   │   ├── axios.js      # Axios instance setup
│   │   └── testapi.jsx
│   ├── assets/           # Images, fonts, and static files
│   │   └── images/       # Image assets
│   ├── components/       # Reusable React components
│   │   ├── AdminDashboard.jsx
│   │   ├── Cart.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Login.jsx
│   │   ├── NavBar.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── ...
│   ├── features/         # Redux slices
│   │   ├── authSlice.jsx
│   │   ├── cartSlice.jsx
│   │   ├── productsSlice.jsx
│   │   └── ...
│   ├── Layouts/          # Layout components
│   │   └── Layout.jsx
│   ├── Pages/            # Page components
│   │   ├── HomePage.jsx
│   │   ├── Cart.jsx
│   │   ├── ProductDetails.jsx
│   │   └── ...
│   ├── Routes/           # Route configuration
│   │   └── Route.jsx
│   ├── selectors/        # Redux selectors
│   ├── store/            # Redux store configuration
│   ├── constants/        # Application constants
│   ├── App.jsx           # Main App component
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── vercel.json           # Vercel deployment config
└── README.md             # Project documentation
```

## 🛠️ Installation & Setup

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** package manager

### Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd FrontEnd
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**

   - Create a `.env` file in the root directory
   - Add your environment variables (API endpoints, Stripe keys, etc.)

   ```env
   VITE_API_URL=your-api-url
   VITE_STRIPE_PUBLIC_KEY=your-stripe-public-key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000`

## 📜 Available Scripts

- `npm run dev` - Start the development server on port 3000
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🌐 Deployment

This project is deployed on **Vercel**. The deployment configuration is handled by `vercel.json`.

## 🎯 Key Features in Detail

### State Management

The application uses Redux Toolkit for centralized state management with separate slices for:

- Authentication
- Shopping cart
- Products
- Categories
- Orders
- Favorites
- Comments
- Users

### Routing

React Router DOM handles client-side routing with:

- Public routes (Home, Store, About, Contact)
- Protected routes (Cart, Profile, Favorites, Checkout)
- Guest routes (Login, Register)
- Admin routes (Admin Dashboard)

### Payment Integration

Stripe is integrated for secure payment processing during checkout.

### Responsive Design

The application is fully responsive with breakpoints optimized for:

- Mobile devices
- Tablets
- Desktops

## 🔐 Security Features

- Protected routes for authenticated users
- Role-based access control for admin features
- Secure API communication with Axios

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is private and proprietary.

## 👥 Author

- **Abdelilah** - [GitHub](https://github.com/Abddo17)

## 📧 Support

For support, please contact us through the [Contact Us](https://quick-bite-front-end-obae.vercel.app/contact-us) page on the website.

---

Made with ❤️
Star this repo if you find it helpful! ⭐
