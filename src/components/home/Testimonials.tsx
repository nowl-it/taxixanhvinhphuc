import React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Anh Hoàng Tuấn",
      role: "Khách hàng tại TP. Vĩnh Yên",
      route: "Vĩnh Yên ⇄ Sân Bay Nội Bài",
      rating: 5,
      content:
        "Gia đình mình thường xuyên bay công tác vào TP.HCM. Đặt xe Taxi Xanh cực kỳ yên tâm, 4h sáng hẹn là 3h50 tài xế đã đỗ trước cửa nhà. Xe Vios mới tinh, bác tài chạy êm và hỗ trợ xách 3 vali to lên xe. Giá chỉ 280k trọn gói quá rẻ so với taxi thường.",
    },
    {
      name: "Chị Minh Thư",
      role: "Kỹ sư KCN Bá Thiện 2, Bình Xuyên",
      route: "KCN Bá Thiện ⇄ Hà Nội",
      rating: 5,
      content:
        "Công ty mình thường xuyên thuê xe đưa đón chuyên gia Hàn Quốc. Lái xe ăn mặc lịch sự, điềm đạm, xe Xpander 7 chỗ rộng rãi sạch sẽ. Đặc biệt có hợp đồng và xuất hóa đơn VAT điện tử nhanh chóng, rất chuẩn tác phong doanh nghiệp.",
    },
    {
      name: "Bác Nguyễn Văn Thắng",
      role: "Người dân Huyện Vĩnh Tường",
      route: "Vĩnh Tường ⇄ BV Bạch Mai Hà Nội",
      rating: 5,
      content:
        "Tôi đi khám định kỳ ở viện Bạch Mai, đi xe ghép tiện chuyến chỉ 150k/người. Tài xế đón tận đầu ngõ lúc 4h30 sáng, đưa thẳng vào cổng viện không phải bắt xe ôm. Lúc về gọi bác tài lại đón về tận nhà, phục vụ nhiệt tình như người nhà.",
    },
    {
      name: "Bạn Thuỳ Dung",
      role: "Du khách từ Hà Nội",
      route: "Hà Nội ⇄ Thị Trấn Tam Đảo",
      rating: 5,
      content:
        "Nhóm mình 5 bạn nữ đi nghỉ dưỡng Tam Đảo cuối tuần, thuê xe 7 chỗ khứ hồi. Đường đèo dốc sương mù nhưng anh tài xế lái rất đầm, không hề bị say xe tí nào. Chiều về còn ghé Tây Thiên tham quan giúp nhóm nữa. Rất hài lòng!",
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-white border-b border-slate-200">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>ĐÁNH GIÁ TỪ KHÁCH HÀNG THỰC TẾ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Khách Hàng Nói Gì Về Chúng Tôi?
          </h2>
          <p className="text-slate-600 text-xs sm:text-base">
            Sự hài lòng và an toàn của khách hàng chính là thước đo giá trị lớn nhất của Taxi Xanh Vĩnh Phúc.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200/80 rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-emerald-200 mb-2 group-hover:text-emerald-400 transition-colors" />

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                  &ldquo;{rev.content}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60">
                <div className="font-bold text-slate-900 text-sm">{rev.name}</div>
                <div className="text-[11px] text-slate-500">{rev.role}</div>
                <div className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1 mt-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{rev.route}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
