import React from "react";
import { siteConfig } from "@/data/config";
import { MapPin, Calculator, Car, Smile, Phone } from "lucide-react";

export default function StepGuide() {
  const steps = [
    {
      step: "01",
      icon: MapPin,
      title: "Chọn Lộ Trình & Thời Gian",
      desc: "Nhập điểm đón, điểm đến và thời gian đi trên website hoặc gọi trực tiếp Hotline 0961 299 934.",
    },
    {
      step: "02",
      icon: Calculator,
      title: "Nhận Báo Giá Trọn Gói",
      desc: "Tổng đài tư vấn loại xe phù hợp và báo giá cước trọn gói cam kết không phát sinh bất kỳ khoản phí nào.",
    },
    {
      step: "03",
      icon: Car,
      title: "Tài Xế Đón Đúng Giờ",
      desc: "Lái xe liên hệ trước 10 phút, có mặt đúng giờ tại địa chỉ nhà riêng hoặc cổng cơ quan của bạn.",
    },
    {
      step: "04",
      icon: Smile,
      title: "Trải Nghiệm & Thanh Toán",
      desc: "Tận hưởng chuyến đi an toàn, êm ái. Thanh toán tiền mặt hoặc chuyển khoản sau khi kết thúc hành trình.",
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-emerald-50/60 border-b border-emerald-100">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2.5 sm:space-y-3">
          <span className="text-[11px] sm:text-xs font-bold text-emerald-800 bg-emerald-200/60 px-3 py-1 rounded-full uppercase tracking-wider">
            QUY TRÌNH ĐƠN GIẢN
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            4 Bước Đặt Xe Nhanh Chóng
          </h2>
          <p className="text-slate-600 text-xs sm:text-base">
            Chỉ mất chưa đầy 1 phút để hoàn tất đặt xe và nhận tài xế ngay gần bạn nhất.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-emerald-100 shadow-sm relative group hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/30 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-xl sm:text-2xl font-black text-emerald-200/80 group-hover:text-emerald-600 transition-colors">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1.5 sm:mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Quick Hotline Call Prompt */}
        <div className="mt-8 sm:mt-10 text-center">
          <p className="text-xs text-slate-600 mb-2">Bạn đang cần xe gấp trong vòng 5 - 10 phút tới?</p>
          <a
            href={`tel:${siteConfig.hotlineRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl sm:rounded-2xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm shadow-lg shadow-red-600/30 transition transform hover:-translate-y-0.5 whitespace-nowrap"
          >
            <Phone className="w-4 h-4 animate-phone-ring" />
            <span>Gọi Điều Phối Viên Ngay: {siteConfig.hotline}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
