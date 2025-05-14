## Features

### 1. Product Listing

- Hiển thị danh sách sản phẩm với hình ảnh, tên, giá, mô tả ngắn.
- Khi người dùng nhấn vào sản phẩm, sẽ chuyển đến trang chi tiết với mô tả đầy đủ, đánh giá, số lượng còn lại.
- Lấy dữ liệu sản phẩm từ database hoặc CMS, render danh sách và chi tiết sản phẩm.

### 2. Product Search & Filter

- Cho phép tìm kiếm sản phẩm theo tên hoặc danh mục.
- Lọc sản phẩm theo giá, loại, đánh giá.
- Sử dụng các query/filter trên dữ liệu sản phẩm, cập nhật UI theo kết quả tìm kiếm/lọc.

### 3. Shopping Cart

- Thêm sản phẩm vào giỏ hàng từ trang danh sách hoặc chi tiết sản phẩm.
- Cập nhật số lượng hoặc xóa sản phẩm khỏi giỏ.
- Hiển thị tổng tiền và số lượng sản phẩm trong giỏ.
- Quản lý giỏ hàng bằng state (localStorage/zustand), tính tổng tiền và số lượng động.

### 4. User Authentication

- Đăng ký tài khoản mới, đăng nhập, đăng xuất.
- Bảo vệ các trang yêu cầu đăng nhập như đặt hàng, xem lịch sử đơn hàng.
- Sử dụng Clerk để xác thực, lưu token, kiểm tra quyền truy cập các route.

### 5. Order Placement & History

- Đặt hàng từ giỏ hàng, lưu thông tin đơn hàng vào database.
- Người dùng có thể xem lại lịch sử các đơn hàng đã đặt.
- Khi đặt hàng, gửi dữ liệu lên server, lưu vào database, lấy lịch sử đơn hàng theo user.

### 6. Admin Dashboard

- Quản lý sản phẩm: thêm, sửa, xóa sản phẩm.
- Quản lý đơn hàng: xem, cập nhật trạng thái đơn hàng (đang xử lý, đã giao...).
- Quản lý người dùng: xem danh sách, phân quyền.
- Chỉ admin truy cập được, thao tác CRUD với sản phẩm, đơn hàng, người dùng.

### 7. Sales Statistics (Admin)

- Thống kê doanh thu, số lượng đơn hàng, sản phẩm bán chạy.
- Tổng hợp dữ liệu từ đơn hàng, hiển thị biểu đồ bằng recharts.

### 8. Responsive Design

- Giao diện tối ưu cho cả máy tính và thiết bị di động.
- Sử dụng Tailwind CSS, Radix UI và các component responsive.

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## Libraries Used

**Next.js** | React framework, SSR & routing |
**React** | UI library |
**Sanity** | Headless CMS |
**Clerk** | Xác thực người dùng |
**Radix UI** | UI components |
**Tailwind CSS** | CSS framework |
**styled-components** | CSS-in-JS |
**zustand** | State management |
**zod** | Validation |
**react-hook-form** | Form & validation |
**recharts** | Biểu đồ thống kê |
**dayjs** | Xử lý ngày tháng |
**date-fns** | Thao tác ngày tháng |
**react-hot-toast, sonner** | Thông báo UI |
**embla-carousel-react** | Carousel/slider |
**cmdk** | Command palette |
**react-day-picker** | Date picker |
**vaul** | Bottom sheet UI |
**class-variance-authority, clsx** | Quản lý className |
**motion** | Animation |
**input-otp** | Nhập mã OTP |
**react-resizable-panels** | Kéo thả panel |

---
