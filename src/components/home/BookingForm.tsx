"use client";

import React, { useState, useId } from "react";
import { BookingRequest } from "@/types";
import BookingModal from "@/components/booking/BookingModal";
import { sendToZalo } from "@/lib/zalo";
import { MapPin, Navigation, Calendar, Clock, Phone, Car, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

interface BookingFormProps {
  initialPickup?: string;
  initialDropoff?: string;
  initialCarType?: "4" | "7" | "16";
}

export default function BookingForm({
  initialPickup = "",
  initialDropoff = "",
  initialCarType = "4",
}: BookingFormProps) {
  const pickupId = useId();
  const dropoffId = useId();
  const dateId = useId();
  const timeId = useId();
  const phoneId = useId();
  const noteId = useId();

  const [pickup, setPickup] = useState(initialPickup);
  const [dropoff, setDropoff] = useState(initialDropoff);
  const [carType, setCarType] = useState<"4" | "7" | "16">(initialCarType);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [isRoundTrip, setIsRoundTrip] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState<BookingRequest | null>(null);

  // Quick suggestions
  const pickupSuggestions = ["TP. Vĩnh Yên", "TP. Phúc Yên", "KCN Bá Thiện", "Hương Canh", "Yên Lạc", "Vĩnh Tường", "Tam Đảo"];
  const dropoffSuggestions = ["Sân Bay Nội Bài", "Hà Nội (BV Bạch Mai)", "Hà Nội (Mỹ Đình)", "TP. Việt Trì", "Thị Trấn Tam Đảo", "Đền Hùng"];

  // Intelligent Price Estimator
  const getEstimatedPrice = () => {
    const p = pickup.toLowerCase();
    const d = dropoff.toLowerCase();

    // Noi Bai Airport
    if (d.includes("nội bài") || d.includes("sân bay") || p.includes("nội bài")) {
      if (p.includes("phúc yên") || d.includes("phúc yên")) {
        return carType === "4" ? "180.000đ – 220.000đ" : carType === "7" ? "250.000đ – 300.000đ" : "450.000đ";
      }
      if (p.includes("bình xuyên") || p.includes("bá thiện") || p.includes("hương canh")) {
        return carType === "4" ? "250.000đ – 280.000đ" : carType === "7" ? "320.000đ – 380.000đ" : "550.000đ";
      }
      if (p.includes("tam đảo")) {
        return carType === "4" ? "480.000đ – 550.000đ" : carType === "7" ? "650.000đ – 750.000đ" : "1.100.000đ";
      }
      if (p.includes("yên lạc") || p.includes("vĩnh tường")) {
        return carType === "4" ? "330.000đ – 380.000đ" : carType === "7" ? "450.000đ – 500.000đ" : "750.000đ";
      }
      // default Vinh Yen to Noi Bai
      return carType === "4" ? "280.000đ – 320.000đ" : carType === "7" ? "380.000đ – 450.000đ" : "650.000đ";
    }

    // Hanoi routes
    if (d.includes("hà nội") || d.includes("bạch mai") || d.includes("việt đức") || d.includes("mỹ đình") || d.includes("viện k")) {
      if (p.includes("phúc yên")) {
        return carType === "4" ? "350.000đ – 400.000đ" : "450.000đ – 500.000đ";
      }
      if (p.includes("yên lạc") || p.includes("vĩnh tường")) {
        return carType === "4" ? "480.000đ – 550.000đ" : "600.000đ – 700.000đ";
      }
      return carType === "4" ? "450.000đ – 500.000đ" : "550.000đ – 650.000đ";
    }

    // Viet Tri / Phu Tho
    if (d.includes("việt trì") || d.includes("phú thọ") || d.includes("đền hùng")) {
      if (d.includes("đền hùng")) {
        return carType === "4" ? "350.000đ – 400.000đ" : "450.000đ – 500.000đ";
      }
      return carType === "4" ? "250.000đ – 300.000đ" : "350.000đ – 400.000đ";
    }

    // Tam Dao
    if (d.includes("tam đảo") || p.includes("tam đảo")) {
      return carType === "4" ? "350.000đ – 400.000đ" : "450.000đ – 500.000đ";
    }

    // Default distance formula
    if (pickup && dropoff) {
      return carType === "4" ? "Chỉ từ 9.000đ / km (Trọn gói)" : carType === "7" ? "Chỉ từ 11.000đ / km" : "Chỉ từ 14.000đ / km";
    }

    return null;
  };

  const estimatedPrice = getEstimatedPrice();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) {
      alert("Vui lòng nhập số điện thoại để tài xế gọi xác nhận đón!");
      return;
    }

    const now = new Date();
    const fallbackDate = date || now.toISOString().split("T")[0];
    const fallbackTime = time || `${String((now.getHours() + 1) % 24).padStart(2, "0")}:00`;

    const payload: BookingRequest = {
      pickup: pickup || "Điểm hẹn tại Vĩnh Phúc",
      dropoff: dropoff || "Theo yêu cầu",
      carType,
      date: fallbackDate,
      time: fallbackTime,
      phone,
      note,
      isRoundTrip,
    };

    const messageLines = [
      `🚖 YÊU CẦU ĐẶT XE - TAXI XANH VĨNH PHÚC - PHÚ THỌ`,
      `• Khách hàng (SĐT): ${phone.trim()}`,
      `• Điểm đón: ${payload.pickup}`,
      `• Điểm đến: ${payload.dropoff}`,
      `• Loại xe: Xe ${carType} Chỗ ${isRoundTrip ? "(Khứ hồi 2 chiều)" : "(Một chiều)"}`,
      `• Thời gian đón: ${fallbackTime} ngày ${fallbackDate}`,
      estimatedPrice ? `• Giá tạm tính: ${estimatedPrice}` : null,
      note.trim() ? `• Ghi chú: ${note.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    sendToZalo(messageLines);
    setSubmittedData(payload);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-900/10 border border-slate-200/80 p-4 sm:p-7 relative overflow-hidden">
        {/* Header indicator */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 sm:pb-5 border-b border-slate-100 gap-2">
          <div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-emerald-600 font-extrabold text-[10px] sm:text-xs uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>ĐẶT XE SIÊU TỐC - CÓ MẶT SAU 10 PHÚT</span>
            </div>
            <h2 className="text-lg sm:text-2xl font-black text-slate-900">
              Đặt Xe Trực Tuyến Nhanh
            </h2>
          </div>

          {/* Trip mode toggle */}
          <div className="inline-flex p-1 bg-slate-100 rounded-xl self-start sm:self-auto text-xs font-semibold">
            <button
              type="button"
              onClick={() => setIsRoundTrip(false)}
              className={`px-3 py-1.5 rounded-lg transition ${
                !isRoundTrip ? "bg-white text-emerald-700 shadow-sm font-bold" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Một chiều
            </button>
            <button
              type="button"
              onClick={() => setIsRoundTrip(true)}
              className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1 ${
                isRoundTrip ? "bg-emerald-600 text-white shadow-sm font-bold" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>Khứ hồi</span>
              <span className="bg-amber-400 text-slate-950 text-[10px] px-1 py-0.2 rounded font-extrabold">-50%</span>
            </button>
          </div>
        </div>

        {/* Car Selection Tabs */}
        <div className="pt-3 sm:pt-4 pb-3 sm:pb-4">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
            1. Chọn Loại Xe:
          </label>
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={() => setCarType("4")}
              className={`p-2 sm:p-3 rounded-xl sm:rounded-2xl border text-center transition flex flex-col items-center justify-center gap-1 min-w-0 ${
                carType === "4"
                  ? "border-emerald-600 bg-emerald-50 text-emerald-900 shadow-sm ring-2 ring-emerald-500/20"
                  : "border-slate-200 hover:border-slate-300 text-slate-700"
              }`}
            >
              <Car className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 ${carType === "4" ? "text-emerald-600" : "text-slate-500"}`} />
              <span className="font-black text-xs sm:text-sm whitespace-nowrap">Xe 4 Chỗ</span>
              <span className="text-[10px] text-slate-500 hidden sm:inline">Vios, Accent</span>
            </button>

            <button
              type="button"
              onClick={() => setCarType("7")}
              className={`p-2 sm:p-3 rounded-xl sm:rounded-2xl border text-center transition flex flex-col items-center justify-center gap-1 min-w-0 ${
                carType === "7"
                  ? "border-emerald-600 bg-emerald-50 text-emerald-900 shadow-sm ring-2 ring-emerald-500/20"
                  : "border-slate-200 hover:border-slate-300 text-slate-700"
              }`}
            >
              <Car className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 ${carType === "7" ? "text-emerald-600" : "text-slate-500"}`} />
              <span className="font-black text-xs sm:text-sm whitespace-nowrap">Xe 7 Chỗ</span>
              <span className="text-[10px] text-slate-500 hidden sm:inline">Xpander, Fortuner</span>
            </button>

            <button
              type="button"
              onClick={() => setCarType("16")}
              className={`p-2 sm:p-3 rounded-xl sm:rounded-2xl border text-center transition flex flex-col items-center justify-center gap-1 min-w-0 ${
                carType === "16"
                  ? "border-emerald-600 bg-emerald-50 text-emerald-900 shadow-sm ring-2 ring-emerald-500/20"
                  : "border-slate-200 hover:border-slate-300 text-slate-700"
              }`}
            >
              <Car className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 ${carType === "16" ? "text-emerald-600" : "text-slate-500"}`} />
              <span className="font-black text-xs sm:text-sm whitespace-nowrap">Xe 16 Chỗ</span>
              <span className="text-[10px] text-slate-500 hidden sm:inline">Ford Transit</span>
            </button>
          </div>
        </div>

        {/* Booking Form inputs */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Pickup location */}
          <div>
            <label htmlFor={pickupId} className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              Điểm đón (Nơi bạn muốn đón):
            </label>
            <div className="relative">
              <input
                id={pickupId}
                type="text"
                placeholder="VD: TP. Vĩnh Yên, KCN Bá Thiện, Khách sạn..."
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm bg-white text-slate-900 placeholder:text-slate-400 font-medium"
                required
              />
            </div>
            {/* Quick chips */}
            <div className="flex flex-wrap gap-1.5 mt-1.5">
              {pickupSuggestions.map((item, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => setPickup(item)}
                  className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 hover:bg-emerald-100 hover:text-emerald-800 text-slate-600 transition"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Dropoff location */}
          <div>
            <label htmlFor={dropoffId} className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
              <Navigation className="w-3.5 h-3.5 text-red-500" />
              Điểm đến (Nơi bạn muốn tới):
            </label>
            <div className="relative">
              <input
                id={dropoffId}
                type="text"
                placeholder="VD: Sân Bay Nội Bài, BV Bạch Mai Hà Nội, Việt Trì..."
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm bg-white text-slate-900 placeholder:text-slate-400 font-medium"
                required
              />
            </div>
            {/* Quick chips */}
            <div className="flex flex-wrap gap-1.5 mt-1.5">
              {dropoffSuggestions.map((item, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => setDropoff(item)}
                  className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 hover:bg-emerald-100 hover:text-emerald-800 text-slate-600 transition"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="min-w-0">
              <label htmlFor={dateId} className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>Ngày đón:</span>
              </label>
              <input
                id={dateId}
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full min-w-0 max-w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm bg-white text-slate-900 font-medium box-border"
                required
              />
            </div>
            <div className="min-w-0">
              <label htmlFor={timeId} className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>Giờ đón:</span>
              </label>
              <input
                id={timeId}
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full min-w-0 max-w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm bg-white text-slate-900 font-medium box-border"
                required
              />
            </div>
          </div>

          {/* Customer Phone (Mandatory) */}
          <div>
            <label htmlFor={phoneId} className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              Số điện thoại của bạn <span className="text-red-500">*</span>:
            </label>
            <input
              id={phoneId}
              type="tel"
              placeholder="VD: 0912 345 678 (Tài xế sẽ gọi lại)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-emerald-400 ring-1 ring-emerald-500/20 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm bg-white text-slate-900 placeholder:text-slate-400 font-bold"
              required
            />
          </div>

          {/* Note / Specific request */}
          <div>
            <label htmlFor={noteId} className="block text-xs font-bold text-slate-600 mb-1">
              Ghi chú thêm (Mã hiệu chuyến bay, số người, vali...):
            </label>
            <input
              id={noteId}
              type="text"
              placeholder="VD: Có 2 vali lớn, đón sảnh T1 Nội Bài..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-500 font-medium"
            />
          </div>

          {/* Estimated price callout if calculated */}
          {estimatedPrice && (
            <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 animate-in fade-in">
              <div>
                <span className="text-[11px] sm:text-xs text-slate-600 block">Cước phí ước tính ({carType} chỗ):</span>
                <span className="text-base sm:text-lg font-black text-red-600">{estimatedPrice}</span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold text-emerald-800 bg-white px-2.5 py-1 rounded-full shadow-sm border border-emerald-100 shrink-0 self-start sm:self-auto">
                Trọn gói bao gồm vé
              </span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black text-sm sm:text-base shadow-xl shadow-emerald-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
          >
            <span>GỬI YÊU CẦU ĐẶT XE NGAY</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <p className="text-center text-[10px] sm:text-[11px] text-slate-500 flex items-center justify-center gap-1.5 pt-0.5 sm:pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Tài xế bản địa sẽ liên hệ lại sau 2 phút - Miễn phí hủy chuyến</span>
          </p>
        </form>
      </div>

      {/* Confirmation Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        bookingData={submittedData}
        estimatedPrice={estimatedPrice || undefined}
      />
    </>
  );
}
