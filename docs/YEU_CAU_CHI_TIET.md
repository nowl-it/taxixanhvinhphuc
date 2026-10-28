# 📋 ĐẶC TẢ YÊU CẦU CHI TIẾT (SPECIFICATION)

> **Mục tiêu:** Xây dựng website dịch vụ Taxi Điện Vĩnh Phúc - Phú Thọ chuyên nghiệp, sao chép cấu trúc và trải nghiệm người dùng từ website mẫu **[https://s8taxi.com/](https://s8taxi.com/)**, tối ưu hóa cho tỷ lệ chuyển đổi cuộc gọi và đặt xe trên điện thoại di động.

---

## 1. 🎨 Nhận Diện & Thiết Kế
* **Tên thương hiệu:** Taxi Điện Vĩnh Phúc - Phú Thọ (hoặc Tổng Đài Taxi Vĩnh Phúc)
* **Hotline tư vấn 24/7:** `0961 299 934` (Bấm là gọi: `tel:0961299934`)
* **Zalo đặt xe:** `0961 299 934` (Link chat: `https://zalo.me/0961299934`)
* **Màu sắc chủ đạo:** 
  * Xanh lục bảo / Xanh lá công nghệ (Emerald/Green: `#059669`, `#10B981`) tượng trưng cho "Taxi Điện", xe mới sạch sẽ, thân thiện môi trường.
  * Màu phụ trợ: Vàng ánh kim (`#F59E0B`) tạo điểm nhấn cho nút bấm/giảm giá, Trắng và Xám nhạt cho nền sạch sẽ.
* **Tối ưu Mobile First:** 90% khách hàng đặt taxi vào bằng điện thoại, vì vậy trải nghiệm trên mobile phải cực kỳ mượt mà, tải nhanh < 1.5s.

---

## 2. 🗂️ Cấu Trúc Các Trang (Sitemap)

```
├── / (Trang chủ - Landing Page đầy đủ khối)
├── /bang-gia (Trang Bảng giá chi tiết các tuyến đường)
├── /dich-vu (Danh sách dịch vụ: Xe 4 chỗ, 7 chỗ, 16 chỗ, xe tiện chuyến)
│   ├── /dich-vu/xe-4-cho
│   ├── /dich-vu/xe-7-cho
│   └── /dich-vu/xe-16-cho
├── /tuyen-duong (Danh sách các tuyến xe xuất phát từ Vĩnh Phúc)
│   ├── /tuyen-duong/vinh-phuc-noi-bai (Tuyến vàng Sân bay)
│   ├── /tuyen-duong/vinh-phuc-ha-noi (Tuyến khám bệnh & công tác)
│   ├── /tuyen-duong/vinh-phuc-phu-tho (Tuyến liên tỉnh giáp ranh)
│   └── /tuyen-duong/vinh-phuc-tam-dao (Tuyến du lịch)
├── /tin-tuc (Trang Blog / Cẩm nang du lịch / Kinh nghiệm đặt xe)
│   └── /tin-tuc/[slug] (Chi tiết bài viết chuẩn SEO)
├── /gioi-thieu (Giới thiệu đội xe, cam kết chất lượng)
└── /lien-he (Thông tin liên hệ, form gửi tin nhắn, bản đồ Vĩnh Phúc)
```

---

## 3. 🧩 Các Thành Phần (Components) Bắt Buộc

### 3.1. Header & Navigation
* **Logo:** Text/SVG "Taxi Điện Vĩnh Phúc - Phú Thọ" kèm icon xe ô tô hiện đại.
* **Menu:** Trang chủ | Bảng giá | Dịch vụ | Tuyến đường | Tin tức | Liên hệ.
* **Nút Hotline trên Header:** Nút màu nổi bật với icon điện thoại nhấp nháy, hiển thị rõ số `0961 299 934`.
* **Mobile Menu:** Drawer hoặc Hamburger mượt mà.

### 3.2. Nút Nổi Chuyển Đổi Cuộc Gọi (Floating Action Buttons - CỰC KỲ QUAN TRỌNG)
* Luôn ghim cố định ở 2 góc dưới màn hình trên cả Mobile và Desktop:
  * **Góc trái dưới:** Nút Zalo (Màu xanh dương, icon Zalo, bấm nhảy thẳng sang app Zalo chat với `0961 299 934`).
  * **Góc phải dưới:** Nút Gọi Hotline (Màu đỏ/xanh lá, hiệu ứng sóng lan tỏa rung lắc - pulse effect, bấm là gọi ngay `0961 299 934`).

### 3.3. Hero Banner & Form Đặt Xe Nhanh (Trang chủ)
* **Banner:** Hình ảnh xe hơi đời mới bóng đẹp, slogan: *"Dịch Vụ Taxi & Xe Tiện Chuyến Vĩnh Phúc - Đúng Giờ, Trọn Gói, Giá Rẻ Nhất"*.
* **Form Đặt Xe (Booking Form):**
  * Điểm đón (Text input hoặc gợi ý: Vĩnh Yên, Phúc Yên, Tam Đảo, KCN Bá Thiện...)
  * Điểm đến (Gợi ý: Sân bay Nội Bài, Hà Nội BV Bạch Mai, Việt Trì, Tam Đảo...)
  * Loại xe (Radio/Tabs: 4 chỗ, 7 chỗ, 16 chỗ)
  * Ngày & Giờ đón
  * Số điện thoại khách hàng (Bắt buộc)
  * Nút "ĐẶT XE NGAY" (Kèm dòng chữ: *Tài xế liên hệ lại sau 2 phút*).
  * *Xử lý khi submit:* Gửi thông báo về Telegram Bot Webhook hoặc Email, đồng thời hiện popup cảm ơn + nút gọi hotline ngay.

### 3.4. Khối Bảng Giá Tuyến Nổi Bật
* Hiển thị bảng dạng Card hoặc Table so sánh giá xe 4 chỗ và 7 chỗ các tuyến phổ biến (Vĩnh Phúc ⇄ Nội Bài, Vĩnh Phúc ⇄ Hà Nội, Vĩnh Phúc ⇄ Phú Thọ...).
* Mỗi dòng có nút *"Đặt tuyến này"* để tự điền vào form đặt xe.

### 3.5. Khối Đội Xe & Dịch Vụ
* Hiển thị ảnh thực tế và thông tin các dòng xe:
  * **Xe 4 chỗ:** Vios, Accent, City (Tiết kiệm, êm ái, xe gia đình).
  * **Xe 7 chỗ:** Xpander, Fortuner, Innova, Carnival (Rộng rãi, chở nhiều hành lý).
  * **Xe 16 chỗ:** Ford Transit, Hyundai Solati (Đoàn du lịch, công ty, lễ hội).

### 3.6. Khối Cam Kết & Ưu Điểm (Why Choose Us)
* 4 lợi thế cạnh tranh cốt lõi:
  1. **Giá trọn gói, không phụ phí:** Báo giá rõ ràng trước khi đi, không tính thêm phí phát sinh.
  2. **Xe mới 100%, sạch sẽ, không mùi:** Toàn bộ xe đời mới 2022 - 2025.
  3. **Tài xế bản địa lịch sự, đúng giờ:** Đón tận nơi, trả tận chốn, phục vụ tận tình.
  4. **Có mặt sau 10 - 15 phút:** Đội ngũ tài xế phủ khắp các huyện tại Vĩnh Phúc.

### 3.7. Khối Quy Trình Đặt Xe (4 Bước Đơn Giản)
1. Chọn lộ trình & thời gian đón
2. Nhận báo giá trọn gói cạnh tranh
3. Tài xế đón đúng giờ tại điểm hẹn
4. Thanh toán & đánh giá chuyến đi

### 3.8. Khối Tin Tức & Cẩm Nang Tuyến Đường
* Hiển thị 3 - 6 bài viết cẩm nang du lịch và kinh nghiệm đặt xe để phục vụ SEO Google.

### 3.9. Footer Chân Trang
* Thông tin đầy đủ: Tên nhà xe, Hotline 0961 299 934, Địa chỉ văn phòng tại Vĩnh Phúc, Email, Danh sách liên kết nhanh, Bản quyền website.
