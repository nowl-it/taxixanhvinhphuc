import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  brandName: "Taxi Vĩnh Phúc - Phú Thọ",
  shortName: "Taxi Vĩnh Phúc 24/7",
  slogan: "Dịch Vụ Taxi & Xe Tiện Chuyến Trọn Gói Giá Rẻ - Đón Đúng Giờ, Phục Vụ Tận Tâm",
  hotline: "058 815 5551",
  hotlineRaw: "0588155551",
  zalo: "https://zalo.me/0588155551",
  email: "manhrem.hn13@gmail.com",
  workingHours: "Phục vụ 24/7 (Cả ngày lễ & Tết)",
  domain: "https://taxivinhphuc.com",
  operatingAreas: [
    "TP. Vĩnh Yên",
    "TP. Phúc Yên",
    "Huyện Bình Xuyên (KCN Bá Thiện 1 & 2, Bình Xuyên)",
    "Huyện Tam Đảo (Thị trấn Tam Đảo, Tây Thiên)",
    "Huyện Yên Lạc",
    "Huyện Vĩnh Tường",
    "Huyện Tam Dương",
    "Huyện Lập Thạch",
    "Huyện Sông Lô",
  ],
  holidayNotice: {
    enabled: false, // Bật (true) khi đến các dịp Lễ Tết, tắt (false) vào ngày thường
    badge: "Lễ Tết 2026",
    title: "Phục Vụ Xuyên Lễ Tết 2026",
    message: "Đội xe trực 100% quân số 24/7, cam kết KHÔNG tăng giá cước. Quý khách vui lòng đặt xe sớm để giữ xe đời mới nhất!",
    linkText: "Xem bảng giá Lễ Tết",
    linkHref: "/tin-tuc/thong-bao-phuc-vu-tet-nguyen-dan-2026",
  },
  // Cấu hình chống click tặc & chặn IP đối thủ
  security: {
    blockedIps: [
      // Dán các IP đối thủ hoặc IP click tặc phát hiện được vào đây (Ví dụ: "113.190.234.12")
    ],
    enableRateLimit: true,
    maxRequestsPerMinute: 60, // Tối đa 60 lượt tải trang / phút từ 1 IP
  },
};

export const navLinks = [
  { href: "/", label: "Trang Chủ" },
  { href: "/bang-gia", label: "Bảng Giá" },
  { href: "/tuyen-duong", label: "Tuyến Đường" },
  { href: "/dich-vu", label: "Dịch Vụ Xe" },
  { href: "/tin-tuc", label: "Cẩm Nang & Tin Tức" },
  { href: "/gioi-thieu", label: "Giới Thiệu" },
  { href: "/lien-he", label: "Liên Hệ" },
];
