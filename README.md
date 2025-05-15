## Features

### 1. Product Listing

- Hiển thị danh sách sản phẩm với hình ảnh, tên, giá, mô tả ngắn.
- Xem chi tiết sản phẩm, đánh giá, số lượng còn lại.
- Dữ liệu lấy từ database (Sanity CMS).

### 2. Product Search & Filter

- Tìm kiếm sản phẩm theo tên, danh mục.
- Lọc theo giá, loại, đánh giá.
- UI cập nhật động theo kết quả tìm kiếm/lọc.

### 3. Shopping Cart

- Thêm/xóa/cập nhật số lượng sản phẩm trong giỏ.
- Hiển thị tổng tiền, số lượng.
- Quản lý giỏ hàng bằng Zustand, lưu localStorage.

### 4. User Authentication

- Đăng ký, đăng nhập, đăng xuất với Clerk.
- Bảo vệ route, kiểm tra quyền truy cập.

### 5. Order Placement & History

- Đặt hàng, lưu đơn vào database.
- Xem lịch sử đơn hàng theo user.

### 6. Admin Dashboard

- CRUD sản phẩm, đơn hàng, người dùng.
- Chỉ admin truy cập, phân quyền.

### 7. Sales Statistics (Admin)

- Thống kê doanh thu, đơn hàng, sản phẩm bán chạy.
- Hiển thị biểu đồ với recharts.

### 8. Responsive Design

- Giao diện tối ưu cho desktop/mobile.
- Sử dụng Tailwind CSS, Radix UI.

---

## Getting Started

1. **Clone repo & cài dependencies:**
   ```bash
   git clone <repo-url>
   cd ShopCart-mern-app
   npm install
   # hoặc yarn/pnpm/bun install
   ```

2. **Cấu hình biến môi trường:**
   Tạo file `.env.local` ở thư mục gốc, ví dụ:
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

3. **Chạy development server:**
   ```bash
   npm run dev
   # hoặc yarn dev, pnpm dev, bun dev
   ```

4. **Truy cập:** [http://localhost:3000](http://localhost:3000)

---

## Libraries Used

| Library                       | Description / Use Case                |
|-------------------------------|---------------------------------------|
| **Next.js**                   | React framework, SSR, routing         |
| **React**                     | UI library                            |
| **Sanity**                    | Headless CMS, quản lý sản phẩm        |
| **Clerk**                     | Xác thực người dùng                   |
| **Radix UI**                  | UI components                         |
| **Tailwind CSS**              | CSS framework                         |
| **styled-components**         | CSS-in-JS                             |
| **zustand**                   | State management                      |
| **zod**                       | Validation                            |
| **react-hook-form**           | Form & validation                     |
| **recharts**                  | Biểu đồ thống kê                      |
| **dayjs, date-fns**           | Xử lý ngày tháng                      |
| **react-hot-toast, sonner**   | Thông báo UI                          |
| **embla-carousel-react**      | Carousel/slider                       |
| **cmdk**                      | Command palette                       |
| **react-day-picker**          | Date picker                           |
| **vaul**                      | Bottom sheet UI                       |
| **class-variance-authority**  | Quản lý className                     |
| **clsx**                      | Quản lý className                     |
| **motion**                    | Animation                             |
| **input-otp**                 | Nhập mã OTP                           |
| **react-resizable-panels**    | Kéo thả panel                         |
| **stripe**                    | Thanh toán                            |
| **lucide-react**              | Icon set                              |
| **next-themes**               | Đổi theme (dark/light)                |
| **next-sanity**               | Next.js + Sanity integration          |
| **tailwind-merge**            | Merge className Tailwind              |

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub](https://github.com/vercel/next.js)

## Deploy on Vercel

- [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
- [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying)

---
