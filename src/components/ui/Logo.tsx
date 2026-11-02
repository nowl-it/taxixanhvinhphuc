import React from "react";
import TaxiCarIcon from "./TaxiCarIcon";

interface LogoProps {
  className?: string;
  isCompact?: boolean;
}

export default function Logo({ className = "", isCompact = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 sm:gap-3 select-none min-w-0 ${className}`}>
      {/* Modern Brand Emblem converted from vector image */}
      <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-md shadow-emerald-700/20 shrink-0 p-1">
        <TaxiCarIcon
          className="w-full h-auto drop-shadow-sm"
          primaryColor="#FFFFFF"
          secondaryColor="#022c22"
        />
      </div>

      {!isCompact && (
        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-1 sm:gap-1.5 leading-none">
            <span className="text-base sm:text-xl md:text-2xl xl:text-xl 2xl:text-2xl font-black tracking-tight text-slate-900 whitespace-nowrap">
              TAXI
            </span>
            <span className="text-base sm:text-xl md:text-2xl xl:text-xl 2xl:text-2xl font-black tracking-tight text-emerald-600 whitespace-nowrap">
              VĨNH PHÚC<span className="hidden md:inline"> - PHÚ THỌ</span>
            </span>
          </div>
          <span className="text-[9px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-0.5 sm:mt-1 truncate max-w-[170px] sm:max-w-none">
            Tổng Đài Đặt Xe 24/7 • Uy Tín
          </span>
        </div>
      )}
    </div>
  );
}

