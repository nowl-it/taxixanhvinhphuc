"use client";

import React from "react";
import { siteConfig } from "@/data/config";
import { BookingRequest } from "@/types";
import ZaloIcon from "@/components/ui/ZaloIcon";
import { CheckCircle2, Phone, X, Clock, ShieldCheck, Car } from "lucide-react";

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
  if (!isOpen || !bookingData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-200">
        {/* Top Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-4 sm:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 text-emerald-100 hover:text-white hover:bg-emerald-700/50 rounded-full transition"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shrink-0">
              <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-200" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black">ĐẶT XE THÀNH CÔNG!</h3>
              <p className="text-[11px] sm:text-xs text-emerald-100">Hệ thống đã chuyển yêu cầu đến điều phối viên</p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 space-y-3.5 sm:space-y-5">
          <div className="flex items-center gap-2.5 sm:gap-3 bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0 animate-pulse" />
            <span>
              Tài xế gần nhất sẽ liên hệ số <strong>{bookingData.phone}</strong> trong vòng <strong>2 phút</strong> để xác nhận đón.
            </span>
          </div>

          {/* Booking Summary Card */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-xs sm:text-sm space-y-2 sm:space-y-2.5">
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
              <span className="font-bold text-emerald-700 flex items-center gap-1">
                <Car className="w-4 h-4" />
                Xe {bookingData.carType} Chỗ
              </span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-slate-200">
              <span className="text-slate-500">Thời gian đón:</span>
              <span className="font-semibold text-slate-800">
                {bookingData.time} - {bookingData.date}
              </span>
            </div>
            {estimatedPrice && (
              <div className="flex justify-between items-center pt-2 text-emerald-700 font-bold">
                <span>Cước tạm tính:</span>
                <span className="text-base sm:text-lg text-red-600 font-black">{estimatedPrice}</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Cam kết giá trọn gói - Xe đời mới sạch sẽ - Không phụ phí ẩn</span>
          </div>

          {/* Quick Actions */}
          <div className="space-y-2 sm:space-y-2.5 pt-1">
            <a
              href={`tel:${siteConfig.hotlineRaw}`}
              className="w-full py-3 sm:py-3.5 px-3 sm:px-4 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 text-white font-extrabold text-center flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 transition text-xs sm:text-base whitespace-nowrap"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 animate-phone-ring" />
              <span>GỌI TÀI XẾ NGAY: {siteConfig.hotline}</span>
            </a>

            <a
              href={siteConfig.zalo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 font-bold text-center flex items-center justify-center gap-2 transition text-xs sm:text-sm whitespace-nowrap"
            >
              <ZaloIcon className="w-4 h-4" />
              <span>Gửi vị trí qua Zalo để đón nhanh</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-2 text-xs text-slate-500 hover:text-slate-700 font-semibold transition"
            >
              Đóng cửa sổ này
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
