## Features

### 1. Product Listing

- Display a list of products with images, name, price, and short description.
- View product details, ratings, and stock quantity.
- Data fetched from the database (Sanity CMS).

### 2. Product Search & Filter

- Search products by name or category.
- Filter by price, type, and rating.
- UI updates dynamically based on search/filter results.

### 3. Shopping Cart

- Add/remove/update product quantity in the cart.
- Display total price and quantity.
- Cart managed by Zustand, saved to localStorage.

### 4. User Authentication

- Register, login, logout with Clerk.
- Route protection and access control.

### 5. Order Placement & History

- Place orders and save them to the database.
- View order history by user.

### 6. Admin Dashboard

- CRUD for products, orders, and users.
- Admin-only access and permissions.

### 7. Sales Statistics (Admin)

- Revenue, order, and best-selling product statistics.
- Display charts with recharts.

### 8. Responsive Design

- Optimized UI for desktop/mobile.
- Uses Tailwind CSS, Radix UI.

### 9. Wishlist

- Add/remove products to wishlist.
- Wishlist saved per user (logged in) or to localStorage (guest).
- Quickly view saved favorite products.

---

## Getting Started

1. **Clone the repo & install dependencies:**

   ```bash
   git clone <repo-url>
   cd ShopCart-mern-app
   npm install
   # or yarn/pnpm/bun install
   ```

2. **Configure environment variables:**
   Create a `.env.local` file in the root directory, for example:

   ```
   # .env.local
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
   CLERK_SECRET_KEY=...
   NEXT_PUBLIC_SANITY_PROJECT_ID=...
   NEXT_PUBLIC_SANITY_DATASET=...
   SANITY_API_TOKEN=...
   STRIPE_SECRET_KEY=...
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=...
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   # or yarn dev, pnpm dev, bun dev
   ```

4. **Visit:** [http://localhost:3000](http://localhost:3000)

---

## Libraries Used

| Library                      | Description / Use Case         |
| ---------------------------- | ------------------------------ |
| **Next.js**                  | React framework, SSR, routing  |
| **React**                    | UI library                     |
| **Sanity**                   | Headless CMS, product management |
| **Clerk**                    | User authentication            |
| **Radix UI**                 | UI components                  |
| **Tailwind CSS**             | CSS framework                  |
| **styled-components**        | CSS-in-JS                      |
| **zustand**                  | State management               |
| **zod**                      | Validation                     |
| **react-hook-form**          | Form & validation              |
| **recharts**                 | Statistics charts              |
| **dayjs, date-fns**          | Date/time handling             |
| **react-hot-toast, sonner**  | UI notifications               |
| **embla-carousel-react**     | Carousel/slider                |
| **cmdk**                     | Command palette                |
| **react-day-picker**         | Date picker                    |
| **vaul**                     | Bottom sheet UI                |
| **class-variance-authority** | ClassName management           |
| **clsx**                     | ClassName management           |
| **motion**                   | Animation                      |
| **input-otp**                | OTP input                      |
| **react-resizable-panels**   | Resizable panels               |
| **stripe**                   | Payment                        |
| **lucide-react**             | Icon set                       |
| **next-themes**              | Theme switching (dark/light)   |
| **next-sanity**              | Next.js + Sanity integration   |
| **tailwind-merge**           | Merge Tailwind classNames      |

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub](https://github.com/vercel/next.js)

## Deploy on Vercel

- [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
- [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying)

---