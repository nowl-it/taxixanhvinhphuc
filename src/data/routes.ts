import { RoutePrice, RouteDetail } from "@/types";

// 1. Tuyến Sân Bay Nội Bài
export const noiBaiRoutes: RoutePrice[] = [
  {
    from: "TP. Phúc Yên",
    to: "Sân Bay Nội Bài",
    distance: "15 - 20 km",
    price4Seats: "180.000đ – 220.000đ",
    price7Seats: "250.000đ – 300.000đ",
    price16Seats: "450.000đ",
    note: "Đón tận nơi các phường Trưng Nhị, Tiền Châu, Hùng Vương, Phúc Thắng...",
    isPopular: true,
  },
  {
    from: "KCN Bình Xuyên / Bá Thiện",
    to: "Sân Bay Nội Bài",
    distance: "22 - 28 km",
    price4Seats: "250.000đ – 280.000đ",
    price7Seats: "320.000đ – 380.000đ",
    price16Seats: "550.000đ",
    note: "Đón tại cổng KCN Bình Xuyên 1, 2, Bá Thiện 1, 2, Hương Canh...",
    isPopular: true,
  },
  {
    from: "TP. Vĩnh Yên",
    to: "Sân Bay Nội Bài",
    distance: "30 - 35 km",
    price4Seats: "280.000đ – 320.000đ",
    price7Seats: "380.000đ – 450.000đ",
    price16Seats: "650.000đ",
    note: "Tất cả các phường Tích Sơn, Liên Bảo, Khai Quang, Định Trung, Ngô Quyền...",
    isPopular: true,
  },
  {
    from: "Yên Lạc / Vĩnh Tường",
    to: "Sân Bay Nội Bài",
    distance: "35 - 42 km",
    price4Seats: "330.000đ – 380.000đ",
    price7Seats: "450.000đ – 500.000đ",
    price16Seats: "750.000đ",
    note: "Đón tận thôn, xóm các xã Tề Lỗ, Đồng Văn, Vĩnh Sơn, Nghĩa Hưng, Thổ Tang...",
    isPopular: true,
  },
  {
    from: "Tam Dương / Lập Thạch",
    to: "Sân Bay Nội Bài",
    distance: "40 - 50 km",
    price4Seats: "380.000đ – 450.000đ",
    price7Seats: "500.000đ – 600.000đ",
    price16Seats: "850.000đ",
    note: "Hợp Thịnh, Hợp Hòa, Hoa Sơn, Xuân Lôi, Sơn Đông...",
  },
  {
    from: "Khu Du Lịch Tam Đảo",
    to: "Sân Bay Nội Bài",
    distance: "~50 km (đèo)",
    price4Seats: "480.000đ – 550.000đ",
    price7Seats: "650.000đ – 750.000đ",
    price16Seats: "1.100.000đ",
    note: "Đón trả tận homestay, khách sạn trên thị trấn Tam Đảo, lái xe kinh nghiệm leo dốc",
    isPopular: true,
  },
];

// 2. Tuyến Hà Nội & Bệnh Viện
export const haNoiRoutes: RoutePrice[] = [
  {
    from: "Vĩnh Yên / Phúc Yên",
    to: "Hà Nội (Đi ghép / Tiện chuyến)",
    distance: "35 - 55 km",
    price4Seats: "150.000đ – 180.000đ / người",
    price7Seats: "150.000đ – 180.000đ / người",
    note: "Đón trả linh hoạt các bệnh viện, trường đại học, bến xe Mỹ Đình",
    isPopular: true,
  },
  {
    from: "TP. Phúc Yên",
    to: "Trung Tâm Hà Nội (Bao trọn xe)",
    distance: "35 - 40 km",
    price4Seats: "350.000đ – 400.000đ",
    price7Seats: "450.000đ – 500.000đ",
    note: "Đưa đón tận nơi Cầu Giấy, Ba Đình, Hoàn Kiếm, Đống Đa...",
  },
  {
    from: "TP. Vĩnh Yên",
    to: "Trung Tâm Hà Nội (Bao trọn xe)",
    distance: "50 - 55 km",
    price4Seats: "450.000đ – 500.000đ",
    price7Seats: "550.000đ – 650.000đ",
    note: "Đón trả tận cổng BV Bạch Mai, Việt Đức, K Tân Triều, BV 108, Nhi TW...",
    isPopular: true,
  },
  {
    from: "Yên Lạc / Vĩnh Tường",
    to: "Hà Nội (Bao trọn xe)",
    distance: "55 - 65 km",
    price4Seats: "480.000đ – 550.000đ",
    price7Seats: "600.000đ – 700.000đ",
    note: "Đón tận nhà theo khung giờ hẹn trước, không lo trễ hẹn khám",
  },
  {
    from: "Lập Thạch / Sông Lô",
    to: "Hà Nội (Bao trọn xe)",
    distance: "70 - 85 km",
    price4Seats: "550.000đ – 650.000đ",
    price7Seats: "700.000đ – 800.000đ",
    note: "Chạy cao tốc Nội Bài - Lào Cai nhanh chóng, êm ái",
  },
];

// 3. Tuyến Giáp Ranh: Vĩnh Phúc ⇄ Phú Thọ
export const phuThoRoutes: RoutePrice[] = [
  {
    from: "TP. Vĩnh Yên",
    to: "TP. Việt Trì (Qua cầu Hạc Trì / Việt Trì)",
    distance: "20 - 25 km",
    price4Seats: "250.000đ – 300.000đ",
    price7Seats: "350.000đ – 400.000đ",
    note: "Chỉ 25 phút di chuyển, đón tận nhà trả tận điểm",
    isPopular: true,
  },
  {
    from: "Vĩnh Tường / Yên Lạc",
    to: "TP. Việt Trì",
    distance: "15 - 20 km",
    price4Seats: "200.000đ – 250.000đ",
    price7Seats: "300.000đ – 350.000đ",
    note: "Rất gần qua cầu Vĩnh Phú hoặc cầu Hạc Trì",
  },
  {
    from: "Vĩnh Phúc (Vĩnh Yên / Phúc Yên)",
    to: "Khu Di Tích Đền Hùng",
    distance: "30 - 35 km",
    price4Seats: "350.000đ – 400.000đ",
    price7Seats: "450.000đ – 500.000đ",
    note: "Phục vụ lễ hội Đền Hùng, chờ khách dâng hương giá rẻ",
    isPopular: true,
  },
  {
    from: "Vĩnh Phúc",
    to: "Phù Ninh / Lâm Thao / Thanh Thủy",
    distance: "35 - 45 km",
    price4Seats: "400.000đ – 500.000đ",
    price7Seats: "550.000đ – 650.000đ",
    note: "Đi suối khoáng nóng Thanh Thủy, các cụm KCN Phú Thọ",
  },
];

// 4. Tuyến Du Lịch Tam Đảo & Tây Thiên
export const tamDaoRoutes: RoutePrice[] = [
  {
    from: "Hà Nội / Sân Bay Nội Bài",
    to: "Thị Trấn Tam Đảo",
    distance: "75 - 85 km",
    price4Seats: "650.000đ – 750.000đ",
    price7Seats: "850.000đ – 950.000đ",
    price16Seats: "1.400.000đ",
    note: "Đón trả tận homestay, resort (Venus, Tam Đảo Hideaway, Cầu Mây...)",
    isPopular: true,
  },
  {
    from: "TP. Vĩnh Yên",
    to: "Thị Trấn Tam Đảo",
    distance: "~25 km (đường đèo)",
    price4Seats: "350.000đ – 400.000đ",
    price7Seats: "450.000đ – 500.000đ",
    price16Seats: "750.000đ",
    note: "Tài xế bản địa quen đường cua đèo dốc sương mù, an toàn tuyệt đối",
    isPopular: true,
  },
  {
    from: "Vĩnh Yên / Phúc Yên / Hà Nội",
    to: "Danh Thắng Tây Thiên (Đại Đình)",
    distance: "25 - 65 km",
    price4Seats: "300.000đ – 350.000đ",
    price7Seats: "400.000đ – 500.000đ",
    price16Seats: "800.000đ",
    note: "Đón trả tận chân cáp treo Tây Thiên, đền Thỏng",
    isPopular: true,
  },
];

// 5. Bảng Giá Theo Kilomet Đi Tỉnh Đường Dài
export const kmRates = [
  {
    carType: "Xe 4 Chỗ (Vios, Accent, City)",
    under30km: "12.000đ / km",
    from31to100km: "10.500đ / km",
    over100km: "9.000đ – 9.500đ / km",
    roundTripDiscount: "Giảm 60% – 70% cước chiều về",
  },
  {
    carType: "Xe 7 Chỗ (Xpander, Fortuner, Innova)",
    under30km: "14.000đ / km",
    from31to100km: "12.500đ / km",
    over100km: "11.000đ – 11.500đ / km",
    roundTripDiscount: "Giảm 60% – 70% cước chiều về",
  },
  {
    carType: "Xe 16 Chỗ (Ford Transit, Solati)",
    under30km: "18.000đ / km",
    from31to100km: "16.000đ / km",
    over100km: "14.000đ – 15.000đ / km",
    roundTripDiscount: "Giảm 50% cước chiều về",
  },
];

// 6. Bảng Giá Thuê Xe Hợp Đồng KCN
export const kcnContracts = [
  {
    name: "Thuê xe 4 chỗ theo ngày (8 tiếng / 100km)",
    price: "1.000.000đ – 1.200.000đ / ngày",
    overKm: "8.000đ / km",
    overHour: "70.000đ / giờ",
    desc: "Đưa đón chuyên gia, quản lý tại KCN Khai Quang, Bình Xuyên 1-2, Bá Thiện 1-2, Thăng Long",
  },
  {
    name: "Thuê xe 7 chỗ theo ngày (8 tiếng / 100km)",
    price: "1.300.000đ – 1.500.000đ / ngày",
    overKm: "10.000đ / km",
    overHour: "90.000đ / giờ",
    desc: "Đưa đón đoàn chuyên gia Hàn Quốc, Nhật Bản, lãnh đạo doanh nghiệp FDI",
  },
  {
    name: "Hợp đồng tháng cố định (Đưa đón chuyên gia)",
    price: "Thương lượng theo lộ trình",
    overKm: "Ưu đãi riêng",
    overHour: "Theo thỏa thuận",
    desc: "Có xuất hóa đơn VAT đầy đủ, xe chuyên biệt kèm tài xế giao tiếp chuẩn mực",
  },
];

// Tuyến đường chi tiết cho trang /tuyen-duong/[slug]
export const routeDetailsList: RouteDetail[] = [
  {
    slug: "vinh-phuc-noi-bai",
    title: "Taxi Vĩnh Phúc Đi Sân Bay Nội Bài Trọn Gói Giá Rẻ",
    subtitle: "Tuyến vàng sân bay đón tận nơi 24/7 - Cam kết đúng giờ bay, không lo trễ chuyến",
    category: "noi-bai",
    distance: "15 - 50 km (Tùy khu vực)",
    duration: "25 - 50 phút",
    description:
      "Dịch vụ taxi Vĩnh Phúc đi Sân Bay Nội Bài và đón từ Nội Bài về các huyện thuộc Vĩnh Phúc hoạt động liên tục 24/24. Tài xế bản địa thông thuộc mọi cung đường tắt, hỗ trợ bê vác hành lý, theo dõi giờ hạ cánh chuyến bay để đón khách không phát sinh phí chờ.",
    prices: [
      { carType: "Xe 4 Chỗ (Vios/Accent)", oneWay: "Từ 180.000đ - 320.000đ", roundTrip: "Giảm 40% chiều về", notes: "Phúc Yên chỉ từ 180k, Vĩnh Yên chỉ từ 280k" },
      { carType: "Xe 7 Chỗ (Xpander/Fortuner)", oneWay: "Từ 250.000đ - 450.000đ", roundTrip: "Giảm 40% chiều về", notes: "Thoải mái cho 5-7 người kèm 4-6 vali lớn" },
      { carType: "Xe 16 Chỗ (Transit/Solati)", oneWay: "Từ 450.000đ - 850.000đ", roundTrip: "Giảm 30% chiều về", notes: "Phù hợp đoàn đi công tác, du lịch theo tour" },
    ],
    pickupPoints: [
      "TP. Vĩnh Yên (Khai Quang, Tích Sơn, Liên Bảo, Định Trung...)",
      "TP. Phúc Yên (Hùng Vương, Tiền Châu, Phúc Thắng, Nam Viêm...)",
      "Huyện Bình Xuyên (Hương Canh, Đạo Đức, KCN Bá Thiện...)",
      "Huyện Yên Lạc, Vĩnh Tường, Tam Dương, Lập Thạch",
      "Khu du lịch Tam Đảo, Tây Thiên",
    ],
    dropoffPoints: [
      "Sảnh T1 Sân Bay Nội Bài (Chuyến bay Quốc Nội)",
      "Sảnh T2 Sân Bay Nội Bài (Chuyến bay Quốc Tế)",
      "Các khách sạn, nhà hàng khu vực Sóc Sơn - Nội Bài",
    ],
    highlights: [
      "Miễn phí 60 phút chờ đầu tiên khi máy bay trễ chuyến (delay)",
      "Tài xế chủ động cầm biển đón tại sảnh ga đến theo yêu cầu",
      "Giá trọn gói, bao gồm vé vào sân bay cơ bản",
      "Hệ thống xe sạch sẽ, thơm tho, điều hòa mát rượi 100%",
    ],
    faqs: [
      {
        question: "Từ Vĩnh Yên đi Nội Bài mất bao lâu?",
        answer: "Thời gian di chuyển từ trung tâm Vĩnh Yên đến sảnh sân bay Nội Bài khoảng 35 - 45 phút qua tuyến Quốc lộ 2A hoặc đường gom cao tốc.",
      },
      {
        question: "Chuyến bay đêm lúc 1-2h sáng có xe đón không?",
        answer: "Tổng đài hoạt động 24/7. Quý khách chỉ cần báo trước giờ hạ cánh hoặc giờ đón, tài xế luôn túc trực đúng giờ.",
      },
      {
        question: "Có phải trả thêm tiền vé vào sân bay không?",
        answer: "Báo giá trọn gói đã bao gồm vé cổng sân bay, quý khách không phải trả thêm bất kỳ phụ phí ẩn nào.",
      },
    ],
  },
  {
    slug: "vinh-phuc-ha-noi",
    title: "Xe Tiện Chuyến & Taxi Vĩnh Phúc Đi Hà Nội - Các Bệnh Viện Lớn",
    subtitle: "Đưa đón tận cửa các bệnh viện Bạch Mai, Việt Đức, K Tân Triều, 108... Đúng giờ hẹn khám",
    category: "ha-noi",
    distance: "35 - 75 km",
    duration: "45 - 75 phút",
    description:
      "Tuyến Vĩnh Phúc - Hà Nội chuyên phục vụ khách hàng đi khám chữa bệnh sáng sớm, công tác, đi sân bay hoặc về quê. Chúng tôi cung cấp cả hình thức Đi Ghép Tiện Chuyến tiết kiệm (chỉ từ 150k/người) và Bao Trọn Xe riêng tư, thoải mái.",
    prices: [
      { carType: "Xe Đi Ghép (Tiện Chuyến)", oneWay: "150.000đ – 180.000đ / người", roundTrip: "300.000đ / người khứ hồi", notes: "Đón trả tận nơi tại các bệnh viện trung tâm" },
      { carType: "Xe 4 Chỗ Trọn Gói", oneWay: "350.000đ – 500.000đ", roundTrip: "Giảm 60% chiều về", notes: "Đón tại nhà, trả tận phòng khám/khách sạn" },
      { carType: "Xe 7 Chỗ Trọn Gói", oneWay: "450.000đ – 650.000đ", roundTrip: "Giảm 60% chiều về", notes: "Gia đình có người già, trẻ nhỏ hoặc người bệnh" },
    ],
    pickupPoints: ["Vĩnh Yên", "Phúc Yên", "Bình Xuyên", "Yên Lạc", "Vĩnh Tường", "Tam Dương", "Lập Thạch"],
    dropoffPoints: [
      "Bệnh viện Bạch Mai, Việt Đức, Tim Hà Nội, Tai Mũi Họng TW",
      "Bệnh viện K Tân Triều, K Quán Sứ, K Tam Hiệp",
      "Bệnh viện Nhi TW, Phụ Sản TW, Phụ Sản Hà Nội",
      "Bệnh viện Trung Ương Quân Đội 108, Hữu Nghị Việt Xô",
      "Bến xe Mỹ Đình, Giáp Bát, Nước Ngầm, các trường Đại học",
    ],
    highlights: [
      "Chuyến xe khởi hành từ 4h00 - 5h00 sáng để kịp số khám đầu",
      "Lái xe cẩn thận, điềm đạm, êm ái, đặc biệt chăm sóc người bệnh và người già",
      "Hỗ trợ chờ đón chiều về với giá cước giảm sâu tới 70%",
      "Không bắt khách dọc đường khi đã nhận chuyến bao xe",
    ],
    faqs: [
      {
        question: "Tôi muốn đi khám bệnh ở viện Bạch Mai lúc 5h sáng có xe đón không?",
        answer: "Có. Tuyến khám bệnh xuất phát từ 4h sáng mỗi ngày, đón tận nhà quý khách tại Vĩnh Phúc và trả ngay cổng khoa khám bệnh.",
      },
      {
        question: "Đi ghép có phải chờ lâu không?",
        answer: "Chúng tôi ghép tối đa 2-3 điểm đón cùng trục đường và thông báo trước giờ đón chính xác để quý khách không phải chờ đợi.",
      },
    ],
  },
  {
    slug: "vinh-phuc-phu-tho",
    title: "Taxi Vĩnh Phúc Đi Việt Trì - Phú Thọ & Đền Hùng",
    subtitle: "Kết nối 2 tỉnh láng giềng nhanh chóng qua cầu Hạc Trì, cầu Vĩnh Phú - Có mặt sau 10 phút",
    category: "phu-tho",
    distance: "15 - 45 km",
    duration: "20 - 45 phút",
    description:
      "Tuyến taxi liên tỉnh Vĩnh Phúc - Phú Thọ là lựa chọn hàng đầu cho công tác, thăm thân, đi lễ Đền Hùng và di chuyển giữa TP Vĩnh Yên và TP Việt Trì. Nhờ hạ tầng giao thông đồng bộ (Cầu Vĩnh Phú, Cầu Hạc Trì), thời gian di chuyển chỉ từ 20 đến 30 phút.",
    prices: [
      { carType: "Xe 4 Chỗ (Vios/City)", oneWay: "200.000đ – 300.000đ", roundTrip: "Giảm 50% chiều về", notes: "Vĩnh Yên / Vĩnh Tường sang TP Việt Trì" },
      { carType: "Xe 7 Chỗ (Xpander/Innova)", oneWay: "300.000đ – 400.000đ", roundTrip: "Giảm 50% chiều về", notes: "Rộng rãi cho gia đình hoặc nhóm bạn bè" },
      { carType: "Tuyến Lễ Đền Hùng", oneWay: "350.000đ – 450.000đ", roundTrip: "Bao chờ 3-4 tiếng trọn gói 600k", notes: "Phục vụ dâng hương lễ hội" },
    ],
    pickupPoints: ["Vĩnh Yên", "Vĩnh Tường", "Yên Lạc", "Lập Thạch (qua cầu Sông Lô)", "Tam Dương"],
    dropoffPoints: [
      "TP. Việt Trì (Nông Trang, Tiên Cát, Dữu Lâu, Bến Gót...)",
      "Khu di tích lịch sử Đền Hùng (Hy Cương)",
      "Huyện Lâm Thao, Phù Ninh, Thanh Thủy, Cẩm Khê",
    ],
    highlights: [
      "Đội xe túc trực 2 đầu cầu Vĩnh Phú và cầu Hạc Trì, gọi là có xe ngay sau 10 phút",
      "Giá cước siêu tiết kiệm, tính trọn gói không lo đồng hồ nhảy km",
      "Tài xế vui vẻ, nhiệt tình, am hiểu văn hóa và ẩm thực Phú Thọ",
    ],
    faqs: [
      {
        question: "Đi từ Vĩnh Yên sang TP Việt Trì giá bao nhiêu?",
        answer: "Giá xe 4 chỗ dao động từ 250.000đ - 300.000đ tùy điểm đón cụ thể, đã bao gồm phí cầu đường.",
      },
    ],
  },
  {
    slug: "vinh-phuc-tam-dao",
    title: "Taxi Lên Thị Trấn Tam Đảo - Đón Tận Homestay, Khách Sạn",
    subtitle: "Lái xe kinh nghiệm vượt đèo dốc sương mù - An toàn, êm ái, ngắm cảnh trọn vẹn",
    category: "tam-dao",
    distance: "25 - 80 km",
    duration: "40 - 90 phút",
    description:
      "Thị trấn Tam Đảo nằm ở độ cao hơn 900m với cung đường đèo dài 13km dốc quanh co và thường xuyên có sương mù. Dịch vụ Taxi Xanh Vĩnh Phúc sở hữu đội ngũ tài xế bản địa dày dặn kinh nghiệm lái đèo, xe số tự động đời mới có hỗ trợ khởi hành ngang dốc, mang lại chuyến đi êm ái và tuyệt đối an toàn.",
    prices: [
      { carType: "Vĩnh Yên ⇄ Tam Đảo (4 Chỗ)", oneWay: "350.000đ – 400.000đ", roundTrip: "600.000đ – 700.000đ (trong ngày)", notes: "Đón tại nhà, trả tận khách sạn" },
      { carType: "Vĩnh Yên ⇄ Tam Đảo (7 Chỗ)", oneWay: "450.000đ – 500.000đ", roundTrip: "750.000đ – 850.000đ (trong ngày)", notes: "Chở nhiều vali, đồ nướng BBQ dã ngoại" },
      { carType: "Hà Nội / Nội Bài ⇄ Tam Đảo", oneWay: "650.000đ – 850.000đ", roundTrip: "1.100.000đ – 1.400.000đ", notes: "Bao trọn xe đón sảnh sân bay hoặc nội thành Hà Nội" },
    ],
    pickupPoints: ["TP. Vĩnh Yên", "Sân bay Nội Bài", "Hà Nội", "Phúc Yên", "Ga Vĩnh Yên"],
    dropoffPoints: ["Quảng trường Tam Đảo", "Khách sạn Venus", "Cầu Mây Tam Đảo", "Các Homestay đường dốc"],
    highlights: [
      "100% tài xế quen thuộc từng khúc cua đèo dốc Tam Đảo",
      "Xe máy khỏe, bảo dưỡng phanh và lốp định kỳ nghiêm ngặt",
      "Hỗ trợ chở khách đi dạo các điểm check-in: Quán Gió, Cầu Mây, Nhà Thờ Đá",
    ],
    faqs: [
      {
        question: "Đường lên Tam Đảo xe 4 chỗ có leo dốc khỏe không?",
        answer: "Toàn bộ xe của chúng tôi là dòng xe đời mới 2022-2025, động cơ khỏe và bảo trì chuẩn hãng, đảm bảo leo dốc mượt mà không say xe.",
      },
    ],
  },
  {
    slug: "vinh-phuc-tay-thien",
    title: "Taxi Đi Danh Thắng Tây Thiên - Chiêm Bái Lễ Phật Cầu Bình An",
    subtitle: "Đón trả tận chân cáp treo Tây Thiên, đền Thỏng, Thiền Viện Trúc Lâm",
    category: "tam-dao",
    distance: "25 - 65 km",
    duration: "30 - 75 phút",
    description:
      "Tây Thiên là quần thể danh thắng tâm linh nổi tiếng tại Vĩnh Phúc. Taxi Xanh Vĩnh Phúc nhận đưa đón các đoàn phật tử, du khách từ khắp các tỉnh thành và Vĩnh Yên lên Tây Thiên với giá cước ưu đãi, phục vụ tận tâm.",
    prices: [
      { carType: "Vĩnh Yên ⇄ Tây Thiên (4 Chỗ)", oneWay: "300.000đ – 350.000đ", roundTrip: "550.000đ (chờ 3-4 tiếng)", notes: "Đón trả tận bãi xe cáp treo" },
      { carType: "Vĩnh Yên ⇄ Tây Thiên (7 Chỗ)", oneWay: "400.000đ – 500.000đ", roundTrip: "700.000đ (chờ tham quan)", notes: "Thích hợp cho gia đình đi lễ" },
      { carType: "Hà Nội ⇄ Tây Thiên (Trọn gói)", oneWay: "600.000đ – 750.000đ", roundTrip: "1.000.000đ – 1.200.000đ", notes: "Đón tận nhà Hà Nội, phục vụ cả ngày" },
    ],
    pickupPoints: ["Vĩnh Yên", "Phúc Yên", "Nội Bài", "Hà Nội"],
    dropoffPoints: ["Đền Thỏng", "Khu ga cáp treo Tây Thiên", "Thiền Viện Trúc Lâm Tây Thiên", "Đại Bảo Tháp Mandala"],
    highlights: ["Không tính phí chờ phát sinh khi khách đi cáp treo lên đền Thượng", "Tài xế hỗ trợ gửi đồ, tư vấn cung đường tham quan hợp lý"],
    faqs: [
      {
        question: "Tài xế có chờ được khi đoàn lên đền Thượng không?",
        answer: "Có, quý khách đặt gói khứ hồi trong ngày tài xế sẽ chờ sẵn tại bãi đỗ xe để đón quý khách trở về đúng giờ.",
      },
    ],
  },
  {
    slug: "vinh-phuc-kcn",
    title: "Xe Hợp Đồng Đưa Đón Doanh Nghiệp & Chuyên Gia KCN Vĩnh Phúc",
    subtitle: "Dịch vụ xe sang, đúng giờ chuẩn từng phút, hóa đơn VAT đầy đủ cho doanh nghiệp FDI",
    category: "kcn",
    distance: "Linh hoạt",
    duration: "Theo yêu cầu",
    description:
      "Vĩnh Phúc là thủ phủ công nghiệp với hàng loạt KCN lớn như Khai Quang, Bình Xuyên 1 & 2, Bá Thiện 1 & 2, Thăng Long Vĩnh Phúc. Chúng tôi cung cấp giải pháp vận tải doanh nghiệp chuyên nghiệp: đưa đón chuyên gia nước ngoài từ Hà Nội/Nội Bài về nhà máy và ngược lại.",
    prices: [
      { carType: "Xe 4 Chỗ Theo Ngày (8h/100km)", oneWay: "1.000.000đ – 1.200.000đ / ngày", roundTrip: "Theo thỏa thuận", notes: "Vios, Accent, City đời mới sạch sẽ" },
      { carType: "Xe 7 Chỗ Theo Ngày (8h/100km)", oneWay: "1.300.000đ – 1.500.000đ / ngày", roundTrip: "Theo thỏa thuận", notes: "Xpander, Fortuner, Carnival cao cấp" },
      { carType: "Hợp Đồng Tháng Cố Định", oneWay: "Báo giá linh hoạt theo lịch", roundTrip: "Chiết khấu cao", notes: "Thanh toán công nợ cuối tháng, xuất hóa đơn VAT" },
    ],
    pickupPoints: ["KCN Khai Quang", "KCN Bình Xuyên", "KCN Bá Thiện 1 & 2", "KCN Thăng Long Vĩnh Phúc", "KCN Tam Dương"],
    dropoffPoints: ["Sân bay Nội Bài", "Các khách sạn Hà Nội", "Căn hộ chuyên gia tại Tây Hồ, Cầu Giấy", "Các nhà máy đối tác"],
    highlights: [
      "Hợp đồng pháp nhân minh bạch, xuất hóa đơn VAT điện tử nhanh chóng",
      "Lái xe tác phong lịch sự, trang phục chỉnh tề, giữ bí mật lộ trình",
      "Nội thất xe luôn được khử khuẩn, nước uống và wifi đầy đủ",
    ],
    faqs: [
      {
        question: "Doanh nghiệp có thể thanh toán chuyển khoản và nhận hóa đơn VAT không?",
        answer: "Chắc chắn có. Chúng tôi cung cấp hợp đồng vận chuyển nguyên chuyến hoặc theo tháng, xuất hóa đơn GTGT đầy đủ theo quy định.",
      },
    ],
  },
];
