import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  brandName: "Taxi Xanh Vĩnh Phúc",
  shortName: "Taxi Vĩnh Phúc 24/7",
  slogan: "Dịch Vụ Taxi & Xe Tiện Chuyến Trọn Gói Giá Rẻ - Đón Đúng Giờ, Phục Vụ Tận Tâm",
  hotline: "0961 299 934",
  hotlineRaw: "0961299934",
  zalo: "https://zalo.me/0961299934",
  email: "tongdaitaxixanhvinhphuc@gmail.com",
  workingHours: "Phục vụ 24/7 (Cả ngày lễ & Tết)",
  domain: "https://taxixanhvinhphuc.com",
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
