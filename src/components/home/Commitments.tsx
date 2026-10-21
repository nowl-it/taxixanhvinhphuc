import React from "react";
import { DollarSign, Sparkles, UserCheck, Clock3, ShieldCheck, HeartHandshake } from "lucide-react";

export default function Commitments() {
  const commitments = [
    {
      icon: DollarSign,
      title: "Giá Trọn Gói, Không Phụ Phí",
      desc: "Báo giá chính xác trước chuyến đi, đã bao gồm vé cầu đường cơ bản. Cam kết không đồng hồ nhảy khống, không thu thêm tiền ngoài thỏa thuận.",
      badge: "Minh Bạch 100%",
    },
    {
      icon: Sparkles,
      title: "Xe Mới 100%, Sạch Sẽ, Không Mùi",
      desc: "Toàn bộ dàn xe sản xuất từ năm 2022 - 2025. Xe cá nhân và gia đình được rửa dọn hút bụi hàng ngày, không mùi thuốc lá hay ẩm mốc.",
      badge: "Đời Mới 2022-2025",
    },
    {
      icon: UserCheck,
      title: "Tài Xế Bản Địa Lịch Sự, Đúng Giờ",
      desc: "100% tài xế quê hương Vĩnh Phúc thông thạo địa hình, điềm đạm, đón khách trước giờ hẹn 10 phút và hỗ trợ mang vác hành lý tận tình.",
      badge: "Lái Xe Chuyên Nghiệp",
    },
    {
      icon: Clock3,
      title: "Có Mặt Sau 10 - 15 Phút",
      desc: "Hệ thống hơn 200 xe liên kết phủ khắp TP Vĩnh Yên, Phúc Yên, Bình Xuyên, Yên Lạc, Vĩnh Tường, Lập Thạch... Chỉ cần gọi là xe tới.",
      badge: "Phục Vụ Siêu Tốc",
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-slate-900 text-white relative">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>TẠI SAO HÀNG NGHÌN KHÁCH HÀNG TIN CHỌN?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            4 Cam Kết Vàng Của Taxi Xanh Vĩnh Phúc - Phú Thọ
          </h2>
          <p className="text-slate-300 text-xs sm:text-base">
            Chúng tôi luôn đặt sự an toàn, trải nghiệm thoải mái và quyền lợi kinh tế của quý khách lên hàng đầu trong mỗi chuyến đi.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {commitments.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-slate-800 border border-slate-700/80 rounded-2xl sm:rounded-3xl p-4 sm:p-6 hover:border-emerald-500/50 transition-colors duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-emerald-400 bg-emerald-950 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-emerald-800">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2 group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-700/60 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Cam kết chuẩn chất lượng</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
