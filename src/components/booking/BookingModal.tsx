"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/config";
import { BookingRequest } from "@/types";
import ZaloIcon from "@/components/ui/ZaloIcon";
import { copyToClipboard } from "@/lib/zalo";
import { CheckCircle2, Phone, X, Clock, ShieldCheck, Car, Check, Copy } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingData: BookingRequest | null;
  estimatedPrice?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  bookingData,
  estimatedPrice,
}: BookingModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !bookingData) return null;

  // Format booking information into a clean message for Zalo
  const formatZaloMessage = () => {
    return [
      `🚖 YÊU CẦU ĐẶT XE - TAXI VĨNH PHÚC - PHÚ THỌ`,
      `• Khách hàng (SĐT): ${bookingData.phone}`,
      `• Điểm đón: ${bookingData.pickup}`,
      `• Điểm đến: ${bookingData.dropoff}`,
      `• Loại xe: Xe ${bookingData.carType} Chỗ ${bookingData.isRoundTrip ? "(Khứ hồi 2 chiều)" : "(Một chiều)"}`,
      `• Thời gian đón: ${bookingData.time} ngày ${bookingData.date}`,
      estimatedPrice ? `• Giá tạm tính: ${estimatedPrice}` : null,
      bookingData.note ? `• Ghi chú: ${bookingData.note}` : null,
    ]
      .filter(Boolean)
      .join("\n");
  };

  const handleCopyOnly = () => {
    copyToClipboard(formatZaloMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-200 my-auto max-h-[92vh] flex flex-col">
        {/* Top Header */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 p-4 sm:p-6 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 text-slate-100 hover:text-white hover:bg-slate-700/50 rounded-full transition cursor-pointer"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shrink-0">
              <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-slate-200" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black">ĐẶT XE THÀNH CÔNG!</h3>
              <p className="text-[11px] sm:text-xs text-slate-100">Thông tin chuyến đi đã sẵn sàng</p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 space-y-3.5 sm:space-y-4 overflow-y-auto">
          <div className="flex items-center gap-2.5 sm:gap-3 bg-slate-50 border border-slate-200 text-slate-800 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 shrink-0 animate-pulse" />
            <span>
              Tổng đài viên đang tiếp nhận số <strong>{bookingData.phone}</strong>. Vui lòng bấm gửi qua Zalo bên dưới để nhận tài xế nhanh nhất!
            </span>
          </div>

          {/* Booking Summary Card */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 text-xs sm:text-sm space-y-2">
            <div className="flex justify-between items-center py-1 border-b border-slate-200">
              <span className="text-slate-500">Số điện thoại:</span>
              <span className="font-bold text-slate-900">{bookingData.phone}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-slate-200">
              <span className="text-slate-500">Điểm đón:</span>
              <span className="font-bold text-slate-800 text-right">{bookingData.pickup}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-slate-200">
              <span className="text-slate-500">Điểm đến:</span>
              <span className="font-bold text-slate-800 text-right">{bookingData.dropoff}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-slate-200">
              <span className="text-slate-500">Loại xe:</span>
              <span className="font-bold text-slate-700 flex items-center gap-1">
                <Car className="w-4 h-4" />
                Xe {bookingData.carType} Chỗ {bookingData.isRoundTrip && "(Khứ hồi)"}
              </span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-slate-200">
              <span className="text-slate-500">Thời gian đón:</span>
              <span className="font-semibold text-slate-800">
                {bookingData.time} - {bookingData.date}
              </span>
            </div>
            {estimatedPrice && (
              <div className="flex justify-between items-center pt-1 text-slate-700 font-bold">
                <span>Cước tạm tính:</span>
                <span className="text-base sm:text-lg text-red-600 font-black">{estimatedPrice}</span>
              </div>
            )}
          </div>

          {copied && (
            <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 text-xs flex items-center gap-2 animate-in fade-in">
              <Check className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Đã sao chép lộ trình! Hãy dán (Paste) vào khung chat Zalo vừa mở để gửi ngay cho tổng đài.</span>
            </div>
          )}

          {/* Quick Actions */}
          <div className="space-y-2.5 pt-1">
            {/* Primary Action: Send to Zalo (Native link - never blocked by popup blocker) */}
            <a
              href={siteConfig.zalo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCopyOnly}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black text-center flex items-center justify-center gap-2.5 shadow-lg shadow-blue-500/25 transition transform hover:-translate-y-0.5 text-sm sm:text-base cursor-pointer"
            >
              <ZaloIcon className="w-5 h-5 text-white" />
              <span>GỬI ĐƠN QUA ZALO NGAY ({siteConfig.hotline})</span>
            </a>

            {/* Quick Copy Button */}
            <button
              type="button"
              onClick={handleCopyOnly}
              className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5 text-slate-600" />
              <span>{copied ? "Đã sao chép lộ trình!" : "Sao chép lại nội dung cuốc xe"}</span>
            </button>

            {/* Secondary Action: Call directly */}
            <a
              href={`tel:${siteConfig.hotlineRaw}`}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 text-white font-extrabold text-center flex items-center justify-center gap-2 shadow-md transition text-xs sm:text-sm"
            >
              <Phone className="w-4 h-4 animate-phone-ring" />
              <span>HOẶC GỌI TRỰC TIẾP TÀI XẾ: {siteConfig.hotline}</span>
            </a>

            <div className="flex items-center justify-between pt-1">
              <span className="text-[11px] text-slate-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-600" />
                Bảo mật thông tin 100%
              </span>
              <button
                type="button"
                onClick={onClose}
                className="text-xs text-slate-500 hover:text-slate-800 font-semibold"
              >
                Đóng cửa sổ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
