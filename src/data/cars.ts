import { CarFleetItem } from "@/types";

export const carFleet: CarFleetItem[] = [
  {
    id: "xe-4-cho",
    name: "Xe 4 Chỗ Tiết Kiệm (Sedan)",
    slug: "xe-4-cho",
    category: "4-cho",
    seats: 4,
    models: ["Toyota Vios 2023-2025", "Hyundai Accent 2024", "Honda City 2024"],
    tagline: "Êm Ái, Tiết Kiệm, Linh Hoạt Trên Mọi Tuyến Đường",
    description:
      "Dòng xe sedan 4 chỗ đời mới được khách hàng ưa chuộng nhất nhờ sự linh hoạt trong phố và khả năng vận hành êm ái trên đường trường. Xe luôn được dọn dẹp vệ sinh sạch sẽ, không mùi khói thuốc hay say xe, điều hòa hai chiều mát sâu.",
    luggage: "2 vali cỡ vừa (size 24) + 2 balo hành lý xách tay",
    features: [
      "Đời xe mới 2022 - 2025 bảo dưỡng chính hãng",
      "Điều hòa mát sâu, xe không mùi hôi khó chịu",
      "Cổng sạc điện thoại Type-C / Lightning và Wifi trên xe",
      "Khoang hành lý rộng rãi phù hợp cá nhân, cặp đôi, gia đình nhỏ",
    ],
    suitableFor: [
      "Đi sân bay Nội Bài 1 - 3 người kèm hành lý",
      "Đi khám chữa bệnh tại các bệnh viện Hà Nội",
      "Đi công tác nhanh giữa Vĩnh Phúc - Việt Trì - Hà Nội",
      "Cá nhân hoặc gia đình nhỏ đi về quê, thăm thân",
    ],
    basePricePerKm: "Từ 9.000đ / km (Đường dài)",
    image: "/images/xe-4-cho.jpg",
    pricingTable: [
      { distance: "Dưới 30km (Nội tỉnh)", price: "12.000đ / km", roundTripDiscount: "Giảm 60% chiều về" },
      { distance: "Từ 31km – 100km", price: "10.500đ / km", roundTripDiscount: "Giảm 60% - 70% chiều về" },
      { distance: "Trên 100km (Đường dài liên tỉnh)", price: "9.000đ – 9.500đ / km", roundTripDiscount: "Giảm 70% chiều về" },
    ],
  },
  {
    id: "xe-7-cho",
    name: "Xe 7 Chỗ Đa Dụng (MPV / SUV)",
    slug: "xe-7-cho",
    category: "7-cho",
    seats: 7,
    models: ["Mitsubishi Xpander 2023-2025", "Toyota Fortuner", "Toyota Innova Cross", "Kia Carnival"],
    tagline: "Rộng Rãi, Gầm Cao Êm Ái, Chứa Nhiều Hành Lý",
    description:
      "Lựa chọn lý tưởng cho các gia đình đông người, nhóm bạn du lịch Tam Đảo - Tây Thiên hoặc chuyến công tác kèm nhiều hành lý cồng kềnh. Khoang hành khách rộng rãi với 3 hàng ghế bọc da êm ái, gầm cao vượt địa hình đèo dốc cực tốt.",
    luggage: "4 - 5 vali lớn (size 28) hoặc đồ golf, xe đẩy em bé khi gập hàng ghế thứ 3",
    features: [
      "3 hàng ghế rộng rãi với cửa gió điều hòa riêng từng vị trí",
      "Gầm cao đầm chắc, leo dốc Tam Đảo êm ái, hạn chế say xe",
      "Kính dán film cách nhiệt cao cấp chống nắng chống nóng tối đa",
      "Cốp xe cực rộng khi đi nhóm 4 - 5 người",
    ],
    suitableFor: [
      "Gia đình 4 - 6 người đi sân bay Nội Bài kèm nhiều vali",
      "Du lịch nghỉ dưỡng Tam Đảo, Tây Thiên, hồ Đại Lải",
      "Đưa đón chuyên gia KCN Bá Thiện, Bình Xuyên, Khai Quang",
      "Về quê ăn Tết, đám cưới, lễ hội đầu năm",
    ],
    basePricePerKm: "Từ 11.000đ / km (Đường dài)",
    image: "/images/xe-7-cho.jpg",
    pricingTable: [
      { distance: "Dưới 30km (Nội tỉnh)", price: "14.000đ / km", roundTripDiscount: "Giảm 60% chiều về" },
      { distance: "Từ 31km – 100km", price: "12.500đ / km", roundTripDiscount: "Giảm 60% - 70% chiều về" },
      { distance: "Trên 100km (Đường dài liên tỉnh)", price: "11.000đ – 11.500đ / km", roundTripDiscount: "Giảm 70% chiều về" },
    ],
  },
  {
    id: "xe-16-cho",
    name: "Xe 16 Chỗ Du Lịch & Hợp Đồng (Van)",
    slug: "xe-16-cho",
    category: "16-cho",
    seats: 16,
    models: ["Ford Transit đời mới", "Hyundai Solati Limousine"],
    tagline: "Đưa Đón Đoàn Đông, Chuyến Đi Du Lịch & Hội Nghị Hoàn Hảo",
    description:
      "Chuyên phục vụ các đoàn du lịch, hội nghị doanh nghiệp, đám cưới hoặc hợp đồng đưa đón học sinh, cán bộ công nhân viên các KCN Vĩnh Phúc. Ghế ngả cao cấp bọc da êm ái, trần cao thoáng đãng, hệ thống âm thanh giải trí sống động.",
    luggage: "Khoang chứa hành lý lớn cho 10 - 15 vali cỡ trung",
    features: [
      "Không gian trần xe cao thoáng, đi lại thuận tiện bên trong",
      "Hệ thống điều hòa cửa gió độc lập từng hàng ghế mát rượi",
      "Ghế ngả góc rộng tạo cảm giác thoải mái trên các chuyến đi xa",
      "Lái xe giàu kinh nghiệm lái xe đoàn, lái an toàn, từ tốn",
    ],
    suitableFor: [
      "Đoàn khách 8 - 15 người đi du lịch Tam Đảo, Hạ Long, Sa Pa, Ninh Bình",
      "Hợp đồng đưa đón chuyên gia, công nhân viên hàng ngày tại các KCN",
      "Phục vụ đám cưới, hỏi, lễ tân họ hàng hai họ",
      "Đưa đón đại biểu, đối tác dự hội nghị, hội thảo",
    ],
    basePricePerKm: "Từ 14.000đ / km (Đường dài)",
    image: "/images/xe-16-cho.jpg",
    pricingTable: [
      { distance: "Dưới 30km (Nội tỉnh)", price: "18.000đ / km", roundTripDiscount: "Giảm 50% chiều về" },
      { distance: "Từ 31km – 100km", price: "16.000đ / km", roundTripDiscount: "Giảm 50% chiều về" },
      { distance: "Trên 100km (Đường dài)", price: "14.000đ – 15.000đ / km", roundTripDiscount: "Giảm 50% chiều về" },
    ],
  },
];
