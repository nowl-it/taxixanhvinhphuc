"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/config";
import ZaloIcon from "@/components/ui/ZaloIcon";
import { copyToClipboard, sendToZalo } from "@/lib/zalo";
import { Phone, Send, CheckCircle2, Copy, Check, ShieldCheck } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const formatContactMessage = () => {
    return [
      `📩 YÊU CẦU TƯ VẤN - TAXI VĨNH PHÚC - PHÚ THỌ`,
      `• Khách hàng: ${name.trim() || "Khách hàng"}`,
      `• Số điện thoại: ${phone.trim()}`,
      message.trim() ? `• Nội dung cần hỗ trợ: ${message.trim()}` : `• Yêu cầu: Tư vấn báo giá lộ trình xe`,
    ].join("\n");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) {
      alert("Vui lòng nhập số điện thoại để tổng đài gọi lại!");
      return;
    }
    const text = formatContactMessage();
    sendToZalo(text);
    setSubmitted(true);
  };

  const handleCopyOnly = () => {
    const text = formatContactMessage();
    copyToClipboard(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 4000);
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
        <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in zoom-in-95">
          <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-lg font-black text-emerald-950">ĐÃ GHI NHẬN THÔNG TIN!</h3>
            <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto mt-1">
              Tổng đài viên đã nhận số điện thoại <strong>{phone}</strong>. Bạn hãy bấm gửi qua Zalo để nhân viên gửi ảnh xe và báo giá ngay nhé!
            </p>
          </div>

          {copied && (
            <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 text-xs flex items-center justify-center gap-2 animate-in fade-in">
              <Check className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Đã sao chép nội dung! Bạn chỉ cần dán (Paste) vào Zalo vừa mở để gửi ngay.</span>
            </div>
          )}

          <div className="space-y-2.5 pt-1">
            {/* Primary Action: Send to Zalo (Native link) */}
            <a
              href={siteConfig.zalo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCopyOnly}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition transform hover:-translate-y-0.5 cursor-pointer"
            >
              <ZaloIcon className="w-5 h-5 text-white" />
              <span>GỬI NỘI DUNG QUA ZALO TỔNG ĐÀI</span>
            </a>

            {/* Quick Copy Button */}
            <button
              type="button"
              onClick={handleCopyOnly}
              className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5 text-slate-600" />
              <span>{copied ? "Đã sao chép nội dung!" : "Sao chép lại nội dung tin nhắn"}</span>
            </button>

            <a
              href={`tel:${siteConfig.hotlineRaw}`}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition"
            >
              <Phone className="w-4 h-4 animate-phone-ring" />
              <span>HOẶC GỌI TRỰC TIẾP: {siteConfig.hotline}</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setName("");
                setPhone("");
                setMessage("");
              }}
              className="text-xs text-slate-500 hover:text-slate-800 font-medium pt-1 inline-block"
            >
              Gửi một yêu cầu khác
            </button>
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
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white text-slate-900 placeholder:text-slate-400 font-medium"
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
              className="w-full px-4 py-3 rounded-xl border border-emerald-400 ring-1 ring-emerald-500/20 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white text-slate-900 placeholder:text-slate-400 font-bold"
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
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white text-slate-900 placeholder:text-slate-400 font-medium"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition transform hover:-translate-y-0.5 cursor-pointer"
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
