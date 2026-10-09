"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/config";
import ZaloIcon from "@/components/ui/ZaloIcon";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ShieldCheck, Car } from "lucide-react";

export default function LienHePage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) {
      alert("Vui lòng nhập số điện thoại để tổng đài gọi lại!");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span>KẾT NỐI 24/7 VỚI CHÚNG TÔI</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Liên Hệ Tổng Đài Taxi Xanh Vĩnh Phúc
          </h1>
          <p className="text-slate-600 text-sm sm:text-base">
            Tổng đài điều hành và đội xe hoạt động liên tục 24/7 kể cả ban đêm, ngày nghỉ lễ và Tết Nguyên Đán.
          </p>
        </div>

        {/* Contact Cards & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-xl font-black text-slate-900 border-b border-slate-100 pb-4">
                Thông Tin Tổng Đài & Điều Phối
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900">Khu vực đón trả:</strong>
                    <span className="text-slate-600 text-xs leading-relaxed">Đón tận nơi tại toàn bộ các huyện & thành phố tỉnh Vĩnh Phúc</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 animate-phone-ring" />
                  </div>
                  <div>
                    <strong className="block text-slate-900">Hotline Đặt Xe 24/7:</strong>
                    <a
                      href={`tel:${siteConfig.hotlineRaw}`}
                      className="text-base font-black text-red-600 hover:underline"
                    >
                      {siteConfig.hotline}
                    </a>
                    <span className="text-xs text-slate-500 block">Bấm để gọi ngay lập tức</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <ZaloIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900">Zalo Đặt Xe & Gửi Vị Trí:</strong>
                    <a
                      href={siteConfig.zalo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-blue-600 hover:underline block"
                    >
                      0961 299 934 (Chat Zalo)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900">Email Hợp Đồng & Hóa Đơn:</strong>
                    <span className="text-xs text-slate-600">{siteConfig.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900">Thời Gian Hoạt Động:</strong>
                    <span className="text-xs text-slate-600">{siteConfig.workingHours}</span>
                  </div>
                </div>
              </div>

              {/* Direct Quick Call Button */}
              <div className="pt-2">
                <a
                  href={`tel:${siteConfig.hotlineRaw}`}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 text-white font-black text-base text-center flex items-center justify-center gap-2 shadow-xl shadow-red-600/30 transition transform hover:-translate-y-0.5"
                >
                  <Phone className="w-5 h-5 animate-phone-ring" />
                  <span>GỌI TÀI XẾ NGAY: {siteConfig.hotline}</span>
                </a>
              </div>
            </div>

            {/* Operating Areas Box */}
            <div className="bg-emerald-900 text-white rounded-3xl p-6 space-y-3 shadow-lg">
              <h3 className="font-bold text-base flex items-center gap-2">
                <Car className="w-5 h-5 text-emerald-400" />
                Đội Xe Thường Trực Tại Các Huyện:
              </h3>
              <p className="text-xs text-emerald-200">
                Chỉ cần bạn ở bất kỳ khu vực nào sau đây, xe sẽ tới đón sau 10 - 15 phút:
              </p>
              <div className="flex flex-wrap gap-2 pt-1 text-xs">
                {siteConfig.operatingAreas.map((area, i) => (
                  <span key={i} className="bg-emerald-800/80 px-2.5 py-1 rounded-lg border border-emerald-700/50">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Callback Request Form & Map */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Gửi Yêu Cầu Tư Vấn & Gọi Lại
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Nhập thông tin bên dưới, nhân viên điều hành sẽ gọi lại cho bạn sau 2 phút!
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in zoom-in-95">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-black text-emerald-950">GỬI YÊU CẦU THÀNH CÔNG!</h3>
                  <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                    Tổng đài viên Taxi Xanh Vĩnh Phúc sẽ gọi lại số điện thoại <strong>{phone}</strong> trong vòng 2 phút để hỗ trợ báo giá và điều xe.
                  </p>
                  <div className="pt-2">
                    <a
                      href={`tel:${siteConfig.hotlineRaw}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-white font-bold text-xs"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Cần gấp? Gọi ngay: {siteConfig.hotline}</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Họ và tên của bạn:
                    </label>
                    <input
                      type="text"
                      placeholder="VD: Anh Nam, Chị Trang..."
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Số điện thoại nhận cuộc gọi <span className="text-red-500">*</span>:
                    </label>
                    <input
                      type="tel"
                      placeholder="VD: 0912 345 678 (Bắt buộc)"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-emerald-300 ring-1 ring-emerald-500/20 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-emerald-50/20 font-semibold"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nội dung cần hỗ trợ (Lộ trình đi, loại xe cần thuê, ngày giờ...):
                    </label>
                    <textarea
                      rows={3}
                      placeholder="VD: Cần thuê xe 7 chỗ đón từ Vĩnh Yên đi Sân bay Nội Bài lúc 5h sáng ngày mai..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition transform hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>GỬI YÊU CẦU GỌI LẠI (2 PHÚT)</span>
                  </button>

                  <p className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Thông tin của bạn được bảo mật tuyệt đối</span>
                  </p>
                </form>
              )}
            </div>

            {/* Embedded Map Representation */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-600" />
                Bản Đồ Khu Vực Vĩnh Phúc & Trục Kết Nối
              </h3>
              <div className="relative h-64 w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                <iframe
                  title="Bản đồ Vĩnh Phúc"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119047.88219921764!2d105.52044813580461!3d21.31113204963507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134fa969dc3cfcb%3A0xe7f9b882d9fe08b9!2zVHAuIFbEqW5oWcOqbiwgVsSpbmggUGjDumMsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
