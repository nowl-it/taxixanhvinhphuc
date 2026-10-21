# HƯỚNG DẪN QUẢN TRỊ BÀI VIẾT & THÔNG BÁO LỄ TẾT
### Website: Taxi Xanh Vĩnh Phúc - Phú Thọ (taxixanhvinhphuc.com)

> **Dành cho chủ xe & quản trị viên:** Hướng dẫn này giúp bạn tự chỉnh sửa nội dung bài viết, cập nhật giá cước hoặc bật thông báo phục vụ các dịp Lễ Tết (Tết Nguyên Đán, 30/4 - 1/5, 2/9, Giỗ Tổ...) **ngay trên trình duyệt điện thoại hoặc máy tính** mà không cần biết lập trình. Mọi thay đổi sau khi lưu sẽ được hệ thống Vercel tự động cập nhật lên website trong vòng **60 giây**.

---

## 1. Cách Bật / Tắt Banner Thông Báo Lễ Tết (Cực Dễ)

Khi sắp đến các dịp nghỉ lễ (Tết Nguyên Đán, 30/4, 2/9...), bạn có thể bật thanh thông báo đỏ - vàng lễ hội ở đầu website để khách hàng biết xe vẫn chạy 24/7 và an tâm đặt cọc.

### Các bước thực hiện:
1. Đăng nhập vào GitHub $\rightarrow$ Mở kho lưu trữ website.
2. Tìm đến file: `src/data/config.ts`
3. Bấm vào biểu tượng **cây bút chì ✏️ (Edit this file)** ở góc phải.
4. Tìm đoạn code `holidayNotice`:

```typescript
  holidayNotice: {
    enabled: true, // Đổi thành false để TẮT khi hết lễ, đổi thành true để BẬT
    badge: "Lễ Tết 2026", // Huy hiệu nổi bật
    title: "Phục Vụ Xuyên Lễ Tết 2026", // Tiêu đề ngắn
    message: "Đội xe trực 100% quân số 24/7, cam kết KHÔNG tăng giá cước. Quý khách vui lòng đặt xe sớm để giữ xe đời mới nhất!",
    linkText: "Xem bảng giá Lễ Tết", // Nút bấm
    linkHref: "/tin-tuc/thong-bao-phuc-vu-tet-nguyen-dan-2026", // Link dẫn tới bài viết chi tiết
  },
```

5. Cuộn xuống dưới cùng $\rightarrow$ Bấm nút xanh **Commit changes...** $\rightarrow$ Bấm **Commit changes**.
6. **Xong!** Đợi 1 phút là website tự động cập nhật banner lễ hội.

---

## 2. Cách Sửa Bài Viết Có Sẵn (Giá Cước, Số Điện Thoại, Lịch Trình)

1. Mở file: `src/data/posts.ts`
2. Bấm biểu tượng **cây bút chì ✏️ (Edit this file)**.
3. Nhấn tổ hợp phím `Ctrl + F` (hoặc tìm kiếm trên điện thoại) từ khóa bạn muốn sửa (Ví dụ: `thong-bao-phuc-vu-tet` hoặc `bảng giá`).
4. Sửa lại các thông tin mong muốn:
   - `title`: Tiêu đề bài viết
   - `date`: Ngày đăng (Định dạng: `DD/MM/YYYY`)
   - `content`: Nội dung bài viết (Viết chữ bình thường, dùng dấu `*` để gạch đầu dòng, `**chữ in đậm**`).
5. Bấm **Commit changes**.

---

## 3. Cách Thêm Bài Viết Lễ Tết Mới (Template Chuẩn Copy - Paste)

Để đăng một bài viết mới (Ví dụ: Khuyến mãi Lễ 30/4 - 1/5 hoặc Lễ 2/9):
1. Mở file `src/data/posts.ts` $\rightarrow$ Bấm cây bút chì ✏️.
2. Tìm dòng: `export const blogPosts: BlogPost[] = [`
3. Copy toàn bộ đoạn mẫu (Template) dưới đây và dán ngay phía sau dấu `[`:

```typescript
  {
    slug: "thong-bao-lich-xe-le-30-4-1-5", // Đường dẫn link (viết thường, không dấu, nối bằng gạch ngang)
    title: "Thông Báo Lịch Xe & Khuyến Mãi Dịp Nghỉ Lễ 30/4 - 1/5 [0961 299 934]", // Tiêu đề bài (luôn thêm số điện thoại vào cuối)
    excerpt: "Taxi Xanh Vĩnh Phúc - Phú Thọ phục vụ xuyên suốt kỳ nghỉ lễ 30/4 - 1/5 với hơn 200 xe đời mới, đưa đón du lịch Tam Đảo, Tây Thiên, sân bay Nội Bài giá rẻ không phụ phí.",
    category: "Thông Báo & Lễ Tết",
    author: "Tổng Đài Taxi Xanh Vĩnh Phúc - Phú Thọ",
    date: "25/04/2026",
    readTime: "4 phút đọc",
    featuredImage: "/images/hero-banner.jpg",
    isPinned: true, // true = Ghim lên đầu trang
    isHoliday: true, // true = Hiện huy hiệu màu Lễ Tết
    badgeText: "Nghỉ Lễ 30/4",
    keywords: ["taxi 30/4 vĩnh phúc", "thuê xe du lịch tam đảo 30/4", "taxi nội bài lễ 30/4"],
    content: `
## 1. Kế Hoạch Phục Vụ Kỳ Nghỉ Lễ 30/4 - 1/5

Chào đón kỳ nghỉ lễ kéo dài, Taxi Xanh Vĩnh Phúc - Phú Thọ sẵn sàng phục vụ quý khách:
* Phục vụ 24/7 đưa đón sân bay Nội Bài, xe đi du lịch Tam Đảo, Tây Thiên, Đại Lải.
* Toàn bộ xe 4 chỗ, 7 chỗ, 16 chỗ đời mới 2023 - 2025 điều hòa mát lạnh.

---

## 2. Bảng Giá Cước Khuyến Mãi

| Lộ Trình | Xe 4 Chỗ | Xe 7 Chỗ | Ghi Chú |
|---|:---:|:---:|---|
| **Vĩnh Phúc ⇄ Sân Bay Nội Bài** | **180K – 280K** | **250K – 380K** | Trọn gói vé sân bay |
| **Vĩnh Phúc ⇄ Tam Đảo** | **350K – 400K** | **450K – 500K** | Đón tận homestay |

---

## 3. Liên Hệ Đặt Xe

Gọi ngay Hotline 24/7: **0961 299 934** (Hoặc kết bạn Zalo **0961 299 934**).
`,
  },
```

4. Bấm **Commit changes** $\rightarrow$ Hệ thống tự sinh trang bài viết mới và tự đưa vào Google Sitemap!

---

## 4. Những Quy Tắc Cần Nhớ Để Không Bị Lỗi

* **Cặp dấu nháy:** Giá trị chữ phải nằm giữa 2 dấu nháy kép `"..."` hoặc dấu backtick `` `...` ``.
* **Dấu phẩy ngăn cách:** Mỗi trường phải có dấu phẩy `,` ở cuối dòng.
* **Slug không dấu:** Mục `slug` chỉ dùng chữ thường không dấu và dấu gạch ngang `-`, không có khoảng trắng (Ví dụ: `thong-bao-tet-2026`).
* **Kiểm tra tự động:** Vercel có hệ thống kiểm tra lỗi tự động. Nếu bạn gõ thiếu dấu phẩy, hệ thống sẽ báo đỏ và không cập nhật đè lên bản web đang chạy tốt, nên bạn hoàn toàn yên tâm không sợ làm hỏng website.
