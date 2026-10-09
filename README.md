# Taxi Xanh Vĩnh Phúc (taxixanhvinhphuc.com)

Hệ thống website giới thiệu dịch vụ, báo giá và đặt xe trực tuyến cho **Tổng đài Taxi Xanh Vĩnh Phúc (0961 299 934)**.

---

## 🚀 Công Nghệ Sử Dụng
- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **UI & Styling:** Tailwind CSS v4, Modern Clean Responsive Design
- **Icons:** [lucide-react](https://lucide.dev/)
- **SEO & Performance:** JSON-LD Structured Data (LocalBusiness, TaxiService), Dynamic Sitemap & Robots, Web App Manifest
- **Platform:** Tối ưu hóa triển khai trên [Vercel](https://vercel.com/)

---

## 🛠️ Cài Đặt & Chạy Thử Nghiệm

```bash
# Cài đặt thư viện
pnpm install

# Khởi chạy server phát triển
pnpm run dev
```

Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt để kiểm tra giao diện.

---

## 📦 Build Sản Phẩm

```bash
# Kiểm tra TypeScript và tạo bản build tối ưu
pnpm run build

# Chạy bản build sản phẩm
pnpm run start
```

---

## 🌐 Hướng Dẫn Triển Khai Lên Vercel & Trỏ Tên Miền iNET

1. **Đẩy mã nguồn lên GitHub:**
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit for Taxi Xanh Vinh Phuc"
   git branch -M main
   git remote add origin <url-repo-github>
   git push -u origin main
   ```

2. **Triển khai trên Vercel:**
   - Truy cập [vercel.com](https://vercel.com/) -> Đăng nhập bằng tài khoản GitHub.
   - Chọn **Add New...** -> **Project** -> Chọn repository vừa tạo.
   - Nhấn **Deploy** (hệ thống tự động build trong ~1 phút).

3. **Gắn Tên Miền Chính Thức:**
   - Tại trang quản lý dự án trên Vercel: vào **Settings** -> **Domains**.
   - Thêm tên miền: `taxixanhvinhphuc.com` và `www.taxixanhvinhphuc.com`.
   - Đăng nhập iNET -> **Quản lý DNS**:
     - Thêm bản ghi **A**: Tên `@` $\rightarrow$ Giá trị `76.76.21.21`
     - Thêm bản ghi **CNAME**: Tên `www` $\rightarrow$ Giá trị `cname.vercel-dns.com`
