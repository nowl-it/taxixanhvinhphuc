# 🧭 HƯỚNG DẪN TRIỂN KHAI DÀNH CHO AI (MASTER PROMPT ROADMAP)

> **Dành cho Agent AI / Developer:** Đọc kỹ tài liệu này trước khi bắt đầu code. Tài liệu hướng dẫn bạn triển khai dự án website Taxi Vĩnh Phúc - Phú Thọ hoàn chỉnh theo mô hình Next.js App Router, lấy cảm hứng thiết kế từ **https://s8taxi.com/**.

---

## 🎯 1. Mục Tiêu Dự Án
Tạo một website Next.js chuẩn SEO, siêu nhanh, tối ưu chuyển đổi di động cho dịch vụ Taxi Vĩnh Phúc - Phú Thọ.  
**Hotline & Zalo:** `058 815 5551`  
Tham khảo toàn bộ dữ liệu giá và tuyến đường tại file [**`DANH_SACH_TUYEN_VA_GIA.md`**](./DANH_SACH_TUYEN_VA_GIA.md).

---

## 🏗️ 2. Cấu Trúc Thư Mục Source Code Khuyên Dùng

```
taxi-vinh-phuc/
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Global Layout chứa Navbar, Footer, FloatingCTA
│   │   ├── page.tsx              # Trang chủ đầy đủ (Clone phong cách s8taxi.com)
│   │   ├── bang-gia/page.tsx     # Trang Bảng giá tổng hợp
│   │   ├── dich-vu/page.tsx      # Danh sách dịch vụ xe 4, 7, 16 chỗ
│   │   ├── tuyen-duong/
│   │   │   ├── page.tsx          # Danh sách tuyến xe từ Vĩnh Phúc
│   │   │   └── [slug]/page.tsx   # Trang chi tiết từng tuyến trọng điểm
│   │   ├── tin-tuc/
│   │   │   ├── page.tsx          # Trang Blog cẩm nang
│   │   │   └── [slug]/page.tsx   # Trang chi tiết bài viết
│   │   ├── lien-he/page.tsx      # Trang Liên hệ & Bản đồ
│   │   ├── sitemap.ts            # Tự động sinh sitemap.xml chuẩn SEO
│   │   ├── robots.ts             # Tự động sinh robots.txt
│   │   └── globals.css           # Cấu hình Tailwind và hiệu ứng animation
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # Header menu + hotline 058 815 5551
│   │   │   ├── Footer.tsx        # Footer thông tin chi tiết
│   │   │   └── FloatingCTA.tsx   # Nút Gọi & Zalo rung lắc cố định (Mobile)
│   │   ├── home/
│   │   │   ├── HeroBanner.tsx    # Banner chào mừng + slogan
│   │   │   ├── BookingForm.tsx   # Form đặt xe nhanh
│   │   │   ├── PriceSection.tsx  # Bảng giá tuyến xe nổi bật
│   │   │   ├── CarFleet.tsx      # Đội xe 4, 7, 16 chỗ
│   │   │   ├── Commitments.tsx   # Ưu điểm & cam kết chất lượng
│   │   │   └── BlogSection.tsx   # Bài viết nổi bật
│   │   └── ui/
│   │       ├── Button.tsx
│   │       └── Card.tsx
│   ├── data/
│   │   ├── config.ts             # Thông tin chung: SĐT, tên thương hiệu, địa chỉ
│   │   ├── routes.ts             # Danh sách tuyến đường & giá (từ DANH_SACH_TUYEN_VA_GIA.md)
│   │   ├── cars.ts               # Danh sách xe (Vios, Xpander, Transit...)
│   │   └── posts.ts              # 6 bài viết SEO mẫu (từ PROMPTS_AI_CONTENT.md)
│   └── types/
│       └── index.ts              # Định nghĩa kiểu dữ liệu TypeScript
```

---

## 📋 3. Quy Trình Thực Hiện Từng Bước (Roadmap)

### Bước 1: Khởi tạo Data Models (`src/data/`)
1. Tạo `src/data/config.ts`:
   * `brandName`: "Taxi Vĩnh Phúc - Phú Thọ"
   * `hotline`: "058 815 5551"
   * `hotlineRaw`: "0588155551"
   * `zalo`: "https://zalo.me/0588155551"
   * `address`: "TP. Vĩnh Yên, Tỉnh Vĩnh Phúc"
2. Tạo `src/data/routes.ts`: Lưu trữ tất cả tuyến xe trong file `DANH_SACH_TUYEN_VA_GIA.md`.
3. Tạo `src/data/cars.ts`: Thông tin xe 4 chỗ, 7 chỗ, 16 chỗ.
4. Tạo `src/data/posts.ts`: 6 bài viết cẩm nang theo file `PROMPTS_AI_CONTENT.md`.

### Bước 2: Tạo Shared Components
1. **`FloatingCTA.tsx`**:
   * Ghim đáy màn hình (`fixed bottom-4 z-50`).
   * Bên trái: Nút Zalo tròn màu xanh biển (`bg-blue-600`), icon chat.
   * Bên phải: Nút Gọi Hotline màu đỏ (`bg-red-600`) có hiệu ứng sóng lan tỏa (`animate-ping`) và rung lắc (`animate-bounce`), bấm là gọi `tel:0588155551`.
2. **`Navbar.tsx`**:
   * Logo thương hiệu có icon xe hơi.
   * Danh sách links: Trang chủ, Bảng giá, Tuyến đường, Dịch vụ, Tin tức, Liên hệ.
   * Nút bấm góc phải: *"Hotline: 058 815 5551"*.
   * Menu Mobile dạng Drawer thu gọn.
3. **`Footer.tsx`**:
   * Đầy đủ thông tin pháp lý, các tuyến xe chính, liên kết Zalo/Hotline.

### Bước 3: Tạo Form Đặt Xe (`BookingForm.tsx`)
* Các trường:
  * Điểm đón (Text input, có gợi ý dropdown).
  * Điểm trả (Text input, có gợi ý dropdown).
  * Loại xe (Tabs chọn 4 chỗ / 7 chỗ / 16 chỗ).
  * Thời gian đi (Ngày & giờ).
  * Số điện thoại khách (Bắt buộc).
* Tự động tính cước tạm tính khi khách chọn các tuyến cố định (VD: Vĩnh Yên -> Nội Bài = 280k).
* Nút *"GỬI YÊU CẦU ĐẶT XE"* -> Hiển thị Modal/Toast cảm ơn và nút gọi tài xế ngay.

### Bước 4: Xây dựng Trang Chủ (`src/app/page.tsx`)
Lắp ráp các section theo thứ tự s8taxi.com:
1. `HeroBanner` + `BookingForm`
2. `PriceSection` (Bảng giá các tuyến Nội Bài, Hà Nội, Phú Thọ...)
3. `CarFleet` (Hình ảnh và mô tả xe 4 chỗ, 7 chỗ, 16 chỗ)
4. `Commitments` (4 cam kết: Xe mới, đúng giờ, trọn gói, tài xế bản địa)
5. `StepGuide` (4 bước đặt xe đơn giản)
6. `BlogSection` (3 bài viết mới nhất)
7. `CTA Section` (Kêu gọi gọi điện nhận giảm giá chuyến về)

### Bước 5: Xây dựng các trang con
* `/bang-gia`: Bảng so sánh chi tiết tất cả các tuyến.
* `/dich-vu`: Trang giới thiệu các loại xe.
* `/tuyen-duong`: Danh sách và trang chi tiết `/tuyen-duong/[slug]`.
* `/tin-tuc`: Danh sách bài viết và trang đọc bài `/tin-tuc/[slug]`.
* `/lien-he`: Bản đồ Google Maps nhúng hoặc bản đồ Vĩnh Phúc, thông tin liên hệ.

### Bước 6: Tối ưu SEO & Build Kiểm Tra
* Thiết lập Metadata tiêu đề: *"Taxi Vĩnh Phúc - Phú Thọ - Dịch Vụ Taxi, Xe Tiện Chuyến Trọn Gói Giá Rẻ 24/7"*.
* Thêm Schema `LocalBusiness` và `TaxiService` dạng JSON-LD vào `layout.tsx`.
* Chạy `npm run build` để đảm bảo không có bất kỳ lỗi cú pháp hoặc TypeScript nào.

---

> 💡 **Lưu ý quan trọng cho AI:** Mọi số điện thoại và đường dẫn liên hệ trên website đều phải trỏ chính xác về số Hotline **`058 815 5551`** và Zalo **`https://zalo.me/0588155551`**.
