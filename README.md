# Taxi Vĩnh Phúc - Phú Thọ

Website giới thiệu dịch vụ, báo giá và đặt xe trực tuyến cho **Tổng đài Taxi Vĩnh Phúc - Phú Thọ**.

- **Hotline / Zalo 24/7:** `058 815 5551`
- **Tên miền:** [taxivinhphuc.com](https://taxivinhphuc.com)

> Liên hệ chỉ qua Hotline & Zalo (đã gỡ email khỏi toàn bộ website).

---

## 🚀 Công nghệ

| Thành phần | Công nghệ |
|-----------|-----------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| Ngôn ngữ | TypeScript |
| Styling | Tailwind CSS v4 (theme slate + taxi-amber, responsive) |
| Icons | [lucide-react](https://lucide.dev/) |
| SEO | JSON-LD (LocalBusiness/TaxiService/FAQ), dynamic sitemap & robots, Web App Manifest |
| Chất lượng code | ESLint (eslint-config-next) |
| Nền tảng triển khai | Vercel (tối ưu) |

---

## 🛠️ Cài đặt & chạy local

Yêu cầu: **Node.js ≥ 20** và **pnpm** (project dùng `pnpm-lock.yaml`).

```bash
pnpm install   # cài dependencies
pnpm dev       # chạy dev server -> http://localhost:3000
```

## 📦 Scripts

| Lệnh | Mô tả |
|------|-------|
| `pnpm dev` | Dev server (Turbopack) |
| `pnpm build` | Build production (kèm kiểm tra TypeScript) |
| `pnpm start` | Chạy bản build production |
| `pnpm lint` | Kiểm tra ESLint |
| `pnpm lint:fix` | ESLint + tự sửa lỗi |
| `pnpm typecheck` | Kiểm tra TypeScript `tsc --noEmit` |

---

## 📁 Cấu trúc thư mục

```
.
├── docs/               # Tài liệu vận hành & hướng dẫn (tiếng Việt)
├── public/             # Tinh (static assets): images, svg, favicon
├── src/
│   ├── app/            # Next.js App Router (mỗi route một thư mục)
│   ├── components/     # Component chia theo muc dich: home, layout, booking, contact, ui
│   ├── data/           # Du lieu noi dung: config, routes, cars, posts
│   ├── lib/            # Tien ich (zalo, clipboard...)
│   └── types/          # Dinh nghia TypeScript
├── next.config.ts      # Cau hinh Next.js
├── eslint.config.mjs   # Cau hinh ESLint
└── package.json
```

---

## 🌐 Triển khai lên Vercel & trỏ tên miền iNET

1. **Push mã nguồn lên GitHub:**
   ```bash
   git push origin main
   ```
2. **Deploy trên Vercel:**
   - [vercel.com](https://vercel.com/) → đăng nhập GitHub → **Add New Project** → chọn repo → **Deploy** (tự build ~1 phút).
3. **Gắn tên miền chính thức** (`Settings` → `Domains`), thêm `taxivinhphuc.com` và `www.taxivinhphuc.com`.
   - Tại iNET → **Quản lý DNS**:
     - Bản ghi **A**: `@` → `76.76.21.21`
     - Bản ghi **CNAME**: `www` → `cname.vercel-dns.com`

---

## 🔒 Bảo mật & chống click ảo

- Middleware `src/proxy.ts`: chặn IP theo blacklist + rate-limit (mặc định 60 request/phút).
- Cấu hình trong `src/data/config.ts` (`security.blockedIps`, `enableRateLimit`, `maxRequestsPerMinute`).
- Xem thêm: [`docs/HUONG_DAN_CHONG_CLICK_TAC_GOOGLE_ADS.md`](docs/HUONG_DAN_CHONG_CLICK_TAC_GOOGLE_ADS.md)

---

## 📚 Tài liệu (`docs/`)

| Tài liệu | Nội dung |
|----------|----------|
| `YEU_CAU_CHI_TIET.md` | Yêu cầu chức năng chi tiết |
| `HUONG_DAN_TRIEN_KHAI_CHO_AI.md` | Hướng dẫn triển khai cho AI/dev |
| `DANH_SACH_TUYEN_VA_GIA.md` | Danh sách tuyến đường & bảng giá |
| `PROMPTS_AI_CONTENT.md` | Prompt tạo nội dung bài viết |
| `HUONG_DAN_QUAN_TRI_BAI_VIET_VA_LE_TET.md` | Quản trị bài viết & thông báo lễ Tết |
| `HUONG_DAN_CHONG_CLICK_TAC_GOOGLE_ADS.md` | Chống click ảo Google Ads |
