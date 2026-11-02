# 🚖 TAXI VĨNH PHÚC - PHÚ THỌ - WEBSITE DỊCH VỤ ĐẶT XE CHUYÊN NGHIỆP

> **Dự án:** Website giới thiệu dịch vụ taxi, xe tiện chuyến, xe ghép, xe gia đình tỉnh Vĩnh Phúc.  
> **Mẫu tham khảo:** [https://s8taxi.com/](https://s8taxi.com/)  
> **Khách hàng:** Taxi Vĩnh Phúc - Phú Thọ / Taxi Vĩnh Phúc - Phú Thọ  
> **Hotline / Zalo:** `0829 387 338`  
> **Ngân sách:** 6.000.000 VNĐ (Trọn gói)  
> **Môi trường Deploy:** Vercel (Free tier 0đ/tháng) + Tên miền mua ngoài (VD: `taxivinhphuc.com`)  

---

## 📌 1. Danh Sách Tài Liệu Hướng Dẫn Kèm Theo

Thư mục này đã được chuẩn bị đầy đủ các tài liệu đặc tả để AI hoặc lập trình viên có thể code ngay:

| Tên File | Mục Đích |
|---|---|
| [**`YEU_CAU_CHI_TIET.md`**](./YEU_CAU_CHI_TIET.md) | Đặc tả cấu trúc website, chức năng từng trang, các component UI/UX clone từ s8taxi.com |
| [**`DANH_SACH_TUYEN_VA_GIA.md`**](./DANH_SACH_TUYEN_VA_GIA.md) | Dữ liệu các tuyến xe chiến lược xuất phát từ Vĩnh Phúc (Nội Bài, Hà Nội, Phú Thọ...) và bảng giá chi tiết |
| [**`PROMPTS_AI_CONTENT.md`**](./PROMPTS_AI_CONTENT.md) | Bộ prompt mẫu để AI tạo ảnh xe và viết bài SEO blog tự động |
| [**`HUONG_DAN_TRIEN_KHAI_CHO_AI.md`**](./HUONG_DAN_TRIEN_KHAI_CHO_AI.md) | Quy trình code từng bước (Step-by-step roadmap) dành cho AI thực hiện |

---

## 🛠️ 2. Tech Stack Đề Xuất
* **Framework:** Next.js (App Router, React 19 / 18, TypeScript)
* **Styling:** Tailwind CSS (hoặc CSS Modules)
* **Icons:** Lucide React hoặc React Icons
* **Form & Notification:** Form đặt xe gửi data về Telegram Bot Webhook / Email API / Google Sheets
* **SEO:** Server-Side Rendering (SSR), Metadata API, JSON-LD Schema (LocalBusiness, TaxiService)
* **Deployment:** Vercel (Auto SSL, Global CDN)

---

## 🚀 3. Hướng Dẫn Bắt Đầu Nhanh (Dành cho AI / Dev)

### Khởi tạo project Next.js trong folder này:
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --yes
npm install lucide-react
npm run dev
```

### Chạy và kiểm tra:
* Mở trình duyệt truy cập: `http://localhost:3000`
