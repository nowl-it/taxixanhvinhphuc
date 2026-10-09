"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/config";
import { Phone, Send, CheckCircle2, ShieldCheck } from "lucide-react";

export default function ContactForm() {
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
  );
}
